export const metadata = {
  title: 'Refund Policy | Ravi Khokle',
  description: 'Refund Policy for services purchased from Ravi Khokle.',
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: August 29, 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            I aim for transparency and satisfaction. This policy explains when refunds may be issued for services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full refund if work has not started after payment.</li>
              <li>Partial refund may be considered for cancelations during early project phases.</li>
              <li>No refund for completed milestones or delivered work already approved.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">How to Request</h2>
            <p>
              Email your request with your project reference and reason for refund to
              {' '}<a className="text-[#3b82f6] underline" href="mailto:contact@ravikhokle.site">contact@ravikhokle.site</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Processing</h2>
            <p>
              Approved refunds are processed to the original payment method within 7–10 business days.
            </p>
          </div>

          <p className="text-sm text-gray-500">This page provides general information and does not constitute legal advice.</p>
        </div>
  </section>
  <Footer />
    </main>
  );
}
