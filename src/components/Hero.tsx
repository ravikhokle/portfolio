'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const raviImage = '/Images/me/ravikhokle.png';

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-88px)] flex-col items-center justify-center overflow-hidden bg-[#0b0b0d] pt-24 pb-16 text-white md:pt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center overflow-hidden py-12">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full relative">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-300/40 shadow-[0_0_40px_rgba(139,92,246,0.16)]">
                  <Image src={raviImage} alt="Ravi Khokle" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-violet-400 font-medium text-base sm:text-lg mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold text-white mb-3"
            >
              Ravi Khokle
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-100 mb-5"
            >
              Full Stack Developer (MERN)
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              I build scalable full-stack web applications using React, Node.js, and modern databases. Focused on clean architecture, performance optimization, and real-world problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-violet-500/20"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </motion.button>


              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://linkedin.com/in/ravikhokle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-[#2a2a30] bg-[#151519] px-4 py-2 text-gray-300 hover:text-violet-300 hover:border-violet-400/50 transition-colors"
                >
                  <Linkedin size={22} />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com/ravikhokle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-[#2a2a30] bg-[#151519] px-4 py-2 text-gray-300 hover:text-violet-300 hover:border-violet-400/50 transition-colors"
                >
                  <Github size={22} />
                  <span className="text-sm font-semibold">GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
