'use client';

import { motion } from 'framer-motion';

const categories = [
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Express'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Nginx', 'DigitalOcean'] },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-violet-400">TECH STACK</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Practical tools I use to deliver scalable, maintainable products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#151519] border border-[#2a2a30] rounded-2xl p-6 shadow-lg hover:border-violet-400/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <div className="text-sm text-gray-500">{category.items.length} tools</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#1d1d23] border border-[#2f2f39] text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
