'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Code2 } from 'lucide-react';

const Plan = () => {
  return (
    <section id="plan" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#18181b] text-white mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get a custom, responsive local business website built on WordPress. Perfect for service-based businesses looking to grow online.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* WordPress Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#242424] rounded-2xl p-10 shadow-xl border border-gray-700 flex flex-col"
          >
            <div className="flex items-center mb-6">
              <ShoppingCart size={40} className="text-[#3b82f6] mr-4" />
              <span className="text-3xl font-bold text-white">₹10,000</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">WordPress Business Website</h3>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>✔️ Custom, responsive design</li>
              <li>✔️ Up to 5 pages (Home, About, Services, Contact, Gallery, etc.)</li>
              <li>✔️ Contact/Inquiry form</li>
              <li>✔️ Google Maps integration</li>
              <li>✔️ Social media & WhatsApp integration</li>
              <li>✔️ Basic SEO setup</li>
              <li>✔️ Fast, mobile-friendly, and secure</li>
              <li>✔️ 1 month free support</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-auto w-full px-8 py-4 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Buy Now
            </motion.button>
          </motion.div>

          {/* MERN/Next.js Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#242424] rounded-2xl p-10 shadow-xl border border-gray-700 flex flex-col"
          >
            <div className="flex items-center mb-6">
              <Code2 size={40} className="text-[#ff6b35] mr-4" />
              <span className="text-3xl font-bold text-white">₹15,000</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Custom Business Website (Next.js/MERN)</h3>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>✔️ Custom, responsive design</li>
              <li>✔️ Up to 5 pages (Home, About, Services, Contact, Gallery, etc.)</li>
              <li>✔️ Contact/Inquiry form</li>
              <li>✔️ Google Maps integration</li>
              <li>✔️ Social media & WhatsApp integration</li>
              <li>✔️ Basic SEO setup</li>
              <li>✔️ Fast, mobile-friendly, and secure</li>
              <li>✔️ 1 month free support</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-auto w-full px-8 py-4 bg-[#ff6b35] hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
        <div className="mt-8 text-gray-400 text-sm">
          <p><b>Note:</b> Please contact before placing the order to discuss your requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default Plan;
