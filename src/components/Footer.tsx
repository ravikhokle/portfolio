'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Tech Stack & Skills', href: '/#stack-skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/ravikhokle",
      label: "LinkedIn"
    },
        {
      icon: <Github size={24} />,
      href: "https://github.com/ravikhokle",
      label: "GitHub"
    },
    {
          icon: <Mail size={24} />,
          href: "mailto:ravikhokle1@gmail.com",
          label: "Email"
    }
  ];

  // Using Link for cross-page anchors; smooth scroll handled on home by Header.

  return (
    <footer className="bg-[#0b0b0d] text-white border-t border-[#2a2a30]">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10">
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
              <Link href="/" className="hover:text-violet-300 transition-colors">Ravi Khokle</Link>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full Stack Developer (MERN) focused on scalable, performant web applications. Open to internships and entry-level roles.
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
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 bg-[#151519] border border-[#2a2a30] rounded-full flex items-center justify-center text-gray-400 hover:text-violet-300 hover:border-violet-400/60 transition-colors"
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
                      className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.div>
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
