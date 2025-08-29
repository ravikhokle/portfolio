import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import { getPlanById } from '@/lib/plans';

export const metadata: Metadata = {
  title: 'Checkout | Ravi Khokle',
  description: 'Review your selected plan and price before proceeding.',
  alternates: { canonical: '/checkout' },
  openGraph: { url: '/checkout', title: 'Checkout | Ravi Khokle' },
};

type SearchParams = { plan?: string };

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const planId = params?.plan ?? '';
  const plan = getPlanById(planId);
  const planName = plan?.name ?? 'Selected Plan';
  const priceNumber = plan?.price ?? 0;
  const isValidPrice = priceNumber > 0;
  const priceFormatted = isValidPrice
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(priceNumber)
    : '—';

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Checkout</h1>
        <p className="text-gray-400 mb-10">Confirm your selection and continue to contact to finalize the order.</p>

  <div className="bg-[#242424] border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{planName}</h2>
              <p className="text-gray-400 text-sm">One-time payment for website development.</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{priceFormatted}</div>
              {!isValidPrice && (
                <div className="text-xs text-red-400 mt-1">Missing or invalid price</div>
              )}
            </div>
          </div>
        </div>

  <CheckoutForm planName={planName} price={isValidPrice ? priceNumber : 0} planId={planId} />
      </section>
      <Footer />
    </main>
  );
}
