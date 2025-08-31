import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // PhonePe can send server-to-server callback here. For now, log and acknowledge.
  try {
    const body = await req.json().catch(() => null);
    console.log('PhonePe callback:', body);
  } catch {}
  return NextResponse.json({ ok: true });
}
