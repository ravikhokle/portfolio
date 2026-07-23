"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sectionIds = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, mounted]);

  const scrollToWithOffset = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = document.getElementById("site-header")?.offsetHeight ?? 72;
    const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === "/" || pathname === "") {
      scrollToWithOffset(id);
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!mounted) return;
    const hash = window.location.hash.replace("#", "");
    if (hash && (pathname === "/" || pathname === "")) {
      requestAnimationFrame(() => scrollToWithOffset(hash));
    }
  }, [mounted, pathname, scrollToWithOffset]);

  useEffect(() => {
    if (!mounted || !isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, mounted]);

  if (!mounted) return null;

  return (
    <>
      <motion.header
        id="site-header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 safe-top ${
          isScrolled || isMobileMenuOpen ? "glass-nav shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Ravi Khokle - Home"
              className="font-semibold text-sm sm:text-base tracking-tight text-foreground hover:text-accent transition-colors truncate max-w-[55vw] sm:max-w-none"
            >
              Ravi Khokle
            </Link>

            <nav className="hidden md:flex items-center gap-1 rounded-full border border-card bg-card/60 backdrop-blur-md px-1.5 py-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-foreground/10 border border-card"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className={`md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border transition-all duration-200 ${
                isMobileMenuOpen
                  ? "border-accent bg-accent text-white shadow-lg shadow-accent/25"
                  : "border-card bg-card/80 text-foreground hover:border-accent/40"
              }`}
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute inset-x-0 bottom-0 top-14 safe-top flex flex-col bg-background border-t border-card shadow-2xl"
            >
              <div className="flex-1 overflow-y-auto px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <ul className="space-y-2">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={`/#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`flex items-center justify-between min-h-[52px] px-4 rounded-xl text-base font-medium transition-colors ${
                          activeSection === item.id
                            ? "bg-accent/10 text-accent border border-accent/30"
                            : "text-foreground border border-card bg-card/50 hover:bg-card hover:border-accent/20"
                        }`}
                      >
                        {item.name}
                        {activeSection === item.id && (
                          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
