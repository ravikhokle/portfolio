'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const SITE_URL = 'https://ravikhokle.site';
  const quickLinks = [
    { name: 'Home', href: `${SITE_URL}/#home` },
    { name: 'Projects', href: `${SITE_URL}/#projects` },
    { name: 'Experience', href: `${SITE_URL}/#experience` },
    { name: 'Services', href: `${SITE_URL}/#services` },
    { name: 'Contact', href: `${SITE_URL}/#contact` },
  ];

  const services = [
    'Full Stack Development',
    'WordPress Design',
    'Mobile Development',
    'E-Commerce Solutions',
    'Performance Optimization',
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/ravikhokle",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/ravikhokle",
      label: "LinkedIn"
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ravi__khokle/",
      label: "Instagram"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:contact@ravikhokle.site",
      label: "Email"
    }
  ];

  // Using Link for cross-page anchors; smooth scroll handled on home by Header.

  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-2xl text-white mb-4 inline-block"
              style={{ transformOrigin: 'center' }}
            >
              <Link href={`${SITE_URL}/`} className="hover:text-[#3b82f6] transition-colors">Ravi Khokle</Link>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full Stack Developer & UI/UX Designer creating digital experiences
              that make a difference. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-[#242424] hover:bg-[#3b82f6] border border-gray-700 hover:border-[#3b82f6] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal (replacing previous Services column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href={`${SITE_URL}/privacy-policy`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={`${SITE_URL}/terms-and-conditions`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href={`${SITE_URL}/refund-policy`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Refund Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services (added back in the same row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
