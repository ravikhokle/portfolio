import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white transition-colors">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'Ravi Khokle - Full Stack Developer' },
};
