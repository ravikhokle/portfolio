'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const CurrentStatus = () => {
  return (
    <section id="status" className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#151519] border border-[#2a2a30] rounded-2xl p-8 shadow-lg text-center animate-glow-pulse"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center">
              <Briefcase size={26} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Current Status</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Actively looking for Full Stack Developer (MERN) opportunities. Open to internships and entry-level roles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentStatus;
