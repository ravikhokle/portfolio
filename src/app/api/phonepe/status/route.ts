import { NextRequest, NextResponse } from 'next/server';

function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

async function getAuthToken() {
  const clientId = reqEnv('PHONEPE_CLIENT_ID');
  const clientSecret = reqEnv('PHONEPE_CLIENT_SECRET');
  const clientVersion = process.env.PHONEPE_CLIENT_VERSION || '1';
  const checkoutBase = reqEnv('PHONEPE_CHECKOUT_BASE_URL');

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

export async function GET(req: NextRequest) {
  try {
    const checkoutBase = reqEnv('PHONEPE_CHECKOUT_BASE_URL');
    const orderId = req.nextUrl.searchParams.get('mtid');
    if (!orderId) return NextResponse.json({ error: 'Missing mtid' }, { status: 400 });

    const token = await getAuthToken();
    const url = `${checkoutBase}/checkout/v2/order/${orderId}/status`;

    const res = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `O-Bearer ${token}` },
      cache: 'no-store',
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json({ error: data?.message || data?.error || 'Status check failed', details: data }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err: any) {
    console.error('PhonePe status error:', err);
    return NextResponse.json({ error: err?.message || 'Internal error' }, { status: 500 });
  }
}
