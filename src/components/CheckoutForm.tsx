"use client";

import { useState } from 'react';
import Link from 'next/link';

interface CheckoutFormProps {
  planName: string;
  price: number;
  planId?: string;
}

export default function CheckoutForm({ planName, price, planId }: CheckoutFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const priceDisplay = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: `Checkout: ${planName}`,
          budget: priceDisplay,
          planId,
          message: `Checkout intent submitted from website.\n\nPlan: ${planName}\nPrice: ${priceDisplay}\n\nNotes: ${notes || '—'}`,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus({ ok: true, msg: 'Submitted! I will contact you shortly.' });
      setName("");
      setEmail("");
      setNotes("");
    } catch (err) {
      console.error('Checkout submit failed', err);
      setStatus({ ok: false, msg: 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-[#242424] border border-gray-700 rounded-2xl p-6 sm:p-8">
      <h3 className="text-xl font-semibold mb-4">Your Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded-md bg-[#1f1f1f] border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-md bg-[#1f1f1f] border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-1">Notes (optional)</label>
        <textarea
          className="w-full min-h-[110px] rounded-md bg-[#1f1f1f] border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          placeholder="Any specific pages or features you need?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold"
        >
          {loading ? 'Processing…' : 'Proceed to Checkout'}
        </button>
        <Link
          href="/#plan"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#262626] hover:bg-[#333] text-white font-semibold border border-gray-700"
        >
          Back to Plans
        </Link>
      </div>
      {status && (
        <div className={`mt-4 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</div>
      )}
    </form>
  );
}
