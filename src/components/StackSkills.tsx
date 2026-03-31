'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, Cloud, Repeat2, Globe2 } from 'lucide-react';

const categories = [
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Express'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Nginx', 'DigitalOcean'] },
];

const skills = [
  { icon: <ShieldCheck size={22} />, label: 'REST API Development' },
  { icon: <Lock size={22} />, label: 'Authentication (JWT)' },
  { icon: <Repeat2 size={22} />, label: 'CRUD Operations' },
  { icon: <Cloud size={22} />, label: 'Deployment (AWS EC2, Nginx, DigitalOcean Droplets)' },
  { icon: <Globe2 size={22} />, label: 'Responsive UI Development' },
];

const StackSkills = () => {
  return (
    <section id="stack-skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-violet-400">TECH STACK & SKILLS</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tech stack and skills I use to ship scalable, production-ready products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#151519] border border-[#2a2a30] rounded-2xl p-5 shadow-lg hover:border-violet-400/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center space-x-4 bg-[#151519] border border-[#2a2a30] rounded-xl p-5 hover:border-violet-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 text-violet-300 flex items-center justify-center">
                  {skill.icon}
                </div>
                <div className="text-lg text-gray-100 font-medium">{skill.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StackSkills;
