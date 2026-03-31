import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CurrentStatus from '@/components/CurrentStatus';
import StackSkills from '@/components/StackSkills';

const siteUrl = 'https://ravikhokle.dev';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white transition-colors">
      <Header />
      <Hero />
      <StackSkills />
      <Projects />
      <Experience />
      <CurrentStatus />
      <Contact />
      <Footer />
    </main>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: `${siteUrl}/` },
  openGraph: { url: `${siteUrl}/`, title: 'Ravi Khokle - Full Stack Developer' },
};
