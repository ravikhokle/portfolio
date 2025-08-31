import { NextRequest, NextResponse } from 'next/server';
// Standard Checkout (OAuth) flow
// We obtain a bearer token, then create an order via /checkout/v2/pay

// Helper to require envs with clear errors
function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

async function getAuthToken() {
  // Per docs: Sandbox token URL is under pg-sandbox, Production under identity-manager
  const clientId = reqEnv('PHONEPE_CLIENT_ID');
  const clientSecret = reqEnv('PHONEPE_CLIENT_SECRET');
  const clientVersion = process.env.PHONEPE_CLIENT_VERSION || '1';
  const checkoutBase = reqEnv('PHONEPE_CHECKOUT_BASE_URL');

  // Decide the correct auth base deterministically to avoid mapping errors
  let authUrl: string;
  if (/pg-sandbox/.test(checkoutBase)) {
    authUrl = `${checkoutBase.replace(/\/$/, '')}/v1/oauth/token`;
  } else {
    const authBase = (process.env.PHONEPE_AUTH_BASE_URL || 'https://api.phonepe.com/apis/identity-manager').replace(/\/$/, '');
    authUrl = `${authBase}/v1/oauth/token`;
  }

  const form = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    client_version: String(clientVersion),
    grant_type: 'client_credentials',
  });

  const res = await fetch(authUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  const token = data?.access_token || data?.accessToken || data?.token;
  if (!res.ok || !token) {
    throw new Error(`Auth failed: ${data?.message || res.statusText || res.status}`);
  }
  return token as string;
}

export async function POST(req: NextRequest) {
  try {
  const { amount, name, email, phone, planId, planName } = await req.json();
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const checkoutBase = reqEnv('PHONEPE_CHECKOUT_BASE_URL');

    const amountPaise = Math.round(amount * 100);
    const merchantOrderId = `ORD_${Date.now()}_${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

    const origin = req.nextUrl.origin;
  const redirectUrl = `${origin}/checkout/verify?mtid=${merchantOrderId}`;

  const token = await getAuthToken();

    type PaymentPayload = {
      merchantOrderId: string;
      amount: number;
      metaInfo?: {
        udf1?: string;
        udf2?: string;
        udf3?: string;
        udf4?: string;
        udf5?: string;
      };
      paymentFlow: {
        type: 'PG_CHECKOUT';
        merchantUrls: { redirectUrl: string };
      };
      expireAfter?: number;
    };

    const payload: PaymentPayload = {
      merchantOrderId,
      amount: amountPaise,
      // optional: expireAfter: 600,
      metaInfo: {
        udf1: name,
        udf2: email,
        udf3: phone,
        udf4: planId,
        udf5: planName,
      },
      paymentFlow: {
        type: 'PG_CHECKOUT',
        merchantUrls: {
          redirectUrl,
        },
      },
    };

    const phonepeRes = await fetch(`${checkoutBase}/checkout/v2/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Docs: Use O-Bearer for Standard Checkout APIs
        Authorization: `O-Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

  const data = await phonepeRes.json().catch(() => ({}));

    if (!phonepeRes.ok) {
      return NextResponse.json({ error: data?.message || data?.error || 'PhonePe initiation failed', details: data }, { status: 500 });
    }

  const redirect = data?.redirectUrl || data?.payload?.payPageUrl || data?.data?.instrumentResponse?.redirectInfo?.url || data?.url;
    if (!redirect) {
      return NextResponse.json({ error: 'Redirect URL missing', details: data }, { status: 500 });
    }

    return NextResponse.json({ redirectUrl, phonepeRedirectUrl: redirect, merchantTransactionId: merchantOrderId });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('PhonePe initiate error:', err);
    return NextResponse.json({ error: message || 'Internal error' }, { status: 500 });
  }
}
