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

  const pathname = usePathname();

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // If we are on the homepage, smooth-scroll instead of navigating
    if (pathname === '/' || pathname === '') {
      e.preventDefault();
      const element = document.querySelector(`#${id}`);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else {
      // Let Link navigate to the home hash route
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl sm:text-2xl text-white"
          >
            Ravi Khokle
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const href = item.id === 'home' ? '/' : `/#${item.id}`;
              const samePageHref = item.id === 'home' ? '#home' : `#${item.id}`;
              return (
                <motion.div key={item.name} whileHover={{ y: -2 }}>
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base"
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
            className="md:hidden p-2 rounded-full bg-[#242424] text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden bg-[#242424] rounded-lg shadow-lg mt-2 mx-2"
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => {
              const href = item.id === 'home' ? '/' : `/#${item.id}`;
              return (
                <Link
                  key={item.name}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors text-base font-medium"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
