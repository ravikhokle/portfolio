'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [isMobileMenuOpen, mounted]);

  const pathname = usePathname();
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Tech Stack & Skills', id: 'stack-skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToWithOffset = (id: string) => {
    const el = document.querySelector<HTMLElement>(`#${id}`);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl?.offsetHeight ?? 72; // default ~64-72px
    const extraGap = 8; // px extra visual gap
    const top = el.getBoundingClientRect().top + window.scrollY - headerH - extraGap;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Always prevent default to keep SPA behavior and support local dev
    e.preventDefault();
    const section = id === 'home' ? 'home' : id;
    if (pathname === '/' || pathname === '') {
      scrollToWithOffset(section);
    } else {
      // Navigate within current origin to preserve environment (dev/prod)
      window.location.href = `/#${section}`;
    }
    setIsMobileMenuOpen(false);
  };

  // When landing on a hash (e.g., navigating from another page), adjust for header offset
  useEffect(() => {
    if (!mounted) return;
    const hash = window.location.hash;
    if (hash && (pathname === '/' || pathname === '')) {
      const id = hash.replace('#', '');
      // Allow layout to settle
      requestAnimationFrame(() => scrollToWithOffset(id));
    }
  }, [mounted, pathname]);

  if (!mounted) return null;

  return (
    <motion.header
      id="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b0d]/90 backdrop-blur-xl border-b border-[#2a2a30]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} className="font-bold text-xl sm:text-2xl tracking-tight text-white">
            <Link href="/" aria-label="Ravi Khokle - Home" className="hover:text-violet-400 transition-colors">Ravi Khokle</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 rounded-full border border-[#2a2a30] bg-[#121216]/80 px-3 py-2">
            {navItems.map((item) => {
              const href = item.id === 'home' ? '/#home' : `/#${item.id}`;
              return (
                <motion.div key={item.name} whileHover={{ y: -1 }}>
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#1b1b21] hover:text-violet-300 transition-colors"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#17171c] text-gray-300 hover:bg-[#22222a] hover:text-violet-300 transition-colors border border-[#2a2a30]"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-[1px] md:hidden z-[55]"
          />
        )}

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
          className="md:hidden fixed top-[64px] left-0 right-0 z-[60] mx-2"
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        >
          <div className="overflow-hidden bg-[#121216] rounded-2xl shadow-lg border border-[#2a2a30]">
            <div className="py-2">
              {navItems.map((item) => {
                const href = item.id === 'home' ? '/#home' : `/#${item.id}`;
                return (
                  <Link
                    key={item.name}
                    href={href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="block w-full text-left px-6 py-3 text-gray-300 hover:text-violet-300 hover:bg-[#1c1c23] transition-colors text-base font-medium"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
