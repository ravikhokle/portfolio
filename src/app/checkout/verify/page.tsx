"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VerifyPage() {
  const [state, setState] = useState<{ status: 'checking'|'success'|'failed'; message?: string }>({ status: 'checking' });
  const [mtid, setMtid] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const m = url.searchParams.get('mtid');
    setMtid(m);
    if (!m) {
      setState({ status: 'failed', message: 'Missing transaction ID' });
      return;
    }
    let cancelled = false;
    const poll = async () => {
      for (let i = 0; i < 10; i++) {
        const res = await fetch(`/api/phonepe/status?mtid=${m}`, { cache: 'no-store' });
  const data = await res.json();
  const state = data?.payload?.state || data?.data?.state || data?.state;
  if (state === 'COMPLETED' || state === 'SUCCESS') {
          if (!cancelled) setState({ status: 'success' });
          return;
        }
  if (state === 'FAILED' || state === 'ERROR') {
          if (!cancelled) setState({ status: 'failed', message: 'Payment failed' });
          return;
        }
        await new Promise(r => setTimeout(r, 2000));
      }
      if (!cancelled) setState({ status: 'failed', message: 'Timed out verifying payment' });
    };
    poll();
    return () => { cancelled = true; };
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Payment Verification</h1>
        {state.status === 'checking' && (
          <p className="text-gray-400">Checking payment status…</p>
        )}
        {state.status === 'success' && (
          <div className="rounded-xl border border-green-800 bg-green-900/20 p-6">
            <p className="text-green-400 font-semibold mb-2">Payment successful!</p>
            {mtid && <p className="text-sm text-gray-400">Transaction: {mtid}</p>}
            <Link href="/" className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-blue-700">Back to Home</Link>
          </div>
        )}
        {state.status === 'failed' && (
          <div className="rounded-xl border border-red-800 bg-red-900/20 p-6">
            <p className="text-red-400 font-semibold mb-2">Payment could not be verified.</p>
            <p className="text-sm text-gray-400">{state.message}</p>
            <div className="mt-4 flex gap-3">
              <Link href="/checkout" className="px-4 py-2 rounded-lg bg-[#262626] border border-gray-700 hover:bg-[#333]">Try Again</Link>
              <Link href="/" className="px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-blue-700">Home</Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
