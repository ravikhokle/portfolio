import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = 'https://ravikhokle.dev';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ravi Khokle',
  description: 'Privacy Policy for the portfolio and services website of Ravi Khokle.',
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: { url: `${siteUrl}/privacy-policy`, title: 'Privacy Policy | Ravi Khokle' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: August 29, 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy explains how I collect, use, and safeguard your information when you visit this website
            and engage with my services. By using this website, you agree to the practices described below.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Information I Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details you submit via forms (name, email, message)</li>
              <li>Basic analytics data (device, pages viewed, approximate location)</li>
              <li>Project details you voluntarily share to discuss work</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">How Your Data Is Used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve website performance and content</li>
              <li>To communicate important updates related to your project</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies & Analytics</h2>
            <p>
              This website may use cookies and analytics tools to understand usage patterns and improve the experience.
              You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Sharing</h2>
            <p>
              I do not sell your personal data. Information may be shared with trusted third-party services strictly to
              deliver requested features (e.g., form handling, hosting) or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Security</h2>
            <p>
              Reasonable measures are in place to protect your data. However, no method of transmission over the
              internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information by contacting me.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For privacy-related questions, contact me at <a className="text-[#3b82f6] underline" href="mailto:ravikhokle1@gmail.com">ravikhokle1@gmail.com</a>.
            </p>
          </div>

          <p className="text-sm text-gray-500">This page provides general information and does not constitute legal advice.</p>
        </div>
  </section>
  <Footer />
    </main>
  );
}
