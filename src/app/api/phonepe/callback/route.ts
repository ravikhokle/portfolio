import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import nodemailer from 'nodemailer';

type PaymentState = 'COMPLETED' | 'FAILED' | 'SUCCESS' | 'ERROR' | 'PENDING' | string;
interface WebhookPayloadMeta { udf1?: string; udf2?: string; udf3?: string; udf4?: string; udf5?: string }
interface WebhookPaymentDetail {
  paymentMode?: string;
  transactionId?: string;
  timestamp?: number;
  amount?: number;
  state?: string;
  errorCode?: string;
  detailedErrorCode?: string;
}
interface WebhookBody {
  event?: string;
  payload?: {
    orderId?: string;
    merchantId?: string;
    merchantOrderId?: string;
    state?: PaymentState;
    amount?: number; // paise
    expireAt?: number;
    metaInfo?: WebhookPayloadMeta;
    paymentDetails?: WebhookPaymentDetail[];
  };
}

function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

function verifyAuthorizationHeader(headerValue: string | null): boolean {
  const user = process.env.PHONEPE_WEBHOOK_USER;
  const pass = process.env.PHONEPE_WEBHOOK_PASS;
  if (!user || !pass) {
    // If not configured, reject to avoid accepting spoofed callbacks in prod
    return false;
  }
  if (!headerValue) return false;
  const expectedHash = createHash('sha256').update(`${user}:${pass}`).digest('hex');
  // Header can be just the hex or prefixed with 'SHA256 '
  const provided = headerValue.startsWith('SHA256 ')
    ? headerValue.slice('SHA256 '.length).trim()
    : headerValue.trim();
  return provided === expectedHash;
}

async function sendEmailsFromWebhook(body: WebhookBody) {
  // Setup transporter using same envs as contact form
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return; // silently skip if email not configured

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: { user, pass },
  });

  const payload = body.payload || {};
  const amountPaise = payload.amount || 0;
  const amount = amountPaise / 100;
  const state = (payload.state || '').toUpperCase();
  const orderId = payload.merchantOrderId || payload.orderId || '';
  const payerEmail = payload.metaInfo?.udf2; // we store customer email in udf2

  const statusText = state === 'COMPLETED' || state === 'SUCCESS' ? 'Payment Successful' : state === 'FAILED' || state === 'ERROR' ? 'Payment Failed' : `Payment ${state}`;
  const amountFmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount);

  const merchantMail = {
    from: user,
    to: user,
    subject: `[PhonePe] ${statusText} · ${amountFmt} · ${orderId}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
        <h2 style="color:#16a34a;margin:0 0 8px">${statusText}</h2>
        <p style="margin:0 0 12px">Order: <b>${orderId}</b></p>
        <p style="margin:0 0 12px">Amount: <b>${amountFmt}</b></p>
        <p style="margin:0 0 12px">Event: ${body.event || ''}</p>
        <p style="margin:0 0 12px">Customer: ${payload.metaInfo?.udf1 || ''} (${payerEmail || 'n/a'})</p>
      </div>
    `,
  };

  const mails = [transporter.sendMail(merchantMail)];
  if (payerEmail) {
    const customerMail = {
      from: user,
      to: payerEmail,
      subject: state === 'COMPLETED' || state === 'SUCCESS' ? 'Payment received – thank you!' : 'Payment update',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
          <h2 style="margin:0 0 12px">${statusText}</h2>
          <p>Order <b>${orderId}</b></p>
          <p>Amount <b>${amountFmt}</b></p>
          <p>Thank you${state === 'COMPLETED' || state === 'SUCCESS' ? ' for your payment.' : '. You can retry if it failed.'}</p>
        </div>
      `,
    };
    mails.push(transporter.sendMail(customerMail));
  }
  await Promise.allSettled(mails);
}

export async function POST(req: NextRequest) {
  try {
    const authorized = verifyAuthorizationHeader(req.headers.get('authorization'));
    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = (await req.json().catch(() => ({}))) as WebhookBody;
    // Minimal validation and processing
    const state: PaymentState = (body?.payload?.state || '').toUpperCase();

    // Fire-and-forget emails (do not block the 200 ack)
    sendEmailsFromWebhook(body).catch((e) => console.error('Webhook email error:', e));

    // Acknowledge quickly
    return NextResponse.json({ ok: true, state }, { status: 200 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('PhonePe webhook error:', err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
