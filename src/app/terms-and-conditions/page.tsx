export const metadata = {
  title: 'Terms & Conditions | Ravi Khokle',
  description: 'Terms and Conditions for using the website and services of Ravi Khokle.',
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-400 mb-8">Last updated: August 29, 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do
            not agree with any part, please discontinue use of the site.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Use of Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use the site lawfully and respectfully.</li>
              <li>You must not attempt to disrupt or compromise the site’s security.</li>
              <li>Content is provided for information and service promotion purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Engagement & Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project scope, timelines, and pricing will be agreed in writing.</li>
              <li>Client is responsible for providing timely content and feedback.</li>
              <li>Third-party services (hosting, domains, plugins) may have separate terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Intellectual Property</h2>
            <p>
              Unless otherwise noted, this website’s content, design, and code are the intellectual property of the owner.
              Client project assets delivered upon completion are subject to agreed terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              No liability is assumed for any indirect, incidental, or consequential damages arising from the use of this
              website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>
            <p>
              These Terms may be updated periodically. Continued use of the site indicates acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For questions about these Terms, email <a className="text-[#3b82f6] underline" href="mailto:contact@ravikhokle.site">contact@ravikhokle.site</a>.
            </p>
          </div>

          <p className="text-sm text-gray-500">This page provides general information and does not constitute legal advice.</p>
        </div>
  </section>
  <Footer />
    </main>
  );
}
