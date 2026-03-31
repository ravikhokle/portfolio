'use client';

import { motion } from 'framer-motion';

const categories = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'Nginx', 'DigitalOcean'] },
];

const coreSkills = [
  'REST API Development',
  'JWT Authentication & Authorization',
  'CRUD Operations & MVC Architecture',
  'Deployment & Server Management',
  'Responsive UI Development',
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-[#2a2a30] bg-[#151519] p-6 shadow-lg"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
            <p className="text-sm text-gray-400">Hands-on capabilities for production systems</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl border border-[#2f2f39] bg-[#1b1b21] px-3 py-2 text-gray-200"
              >
                <span className="text-violet-300">•</span>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
