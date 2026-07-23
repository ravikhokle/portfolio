"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="font-semibold text-lg text-foreground hover:text-accent transition-colors">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-accent font-medium mt-1">{siteConfig.title}</p>
            <p className="text-sm text-muted mt-3 max-w-md leading-relaxed">
              Building scalable, secure, and production-ready web applications.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-card bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-card bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="section-divider mt-10 mb-6" />
        <p className="text-xs text-muted text-center">
          © {year} {siteConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
