'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, Cloud, Repeat2, Globe2 } from 'lucide-react';

const skills = [
  { icon: <ShieldCheck size={22} />, label: 'REST API Development' },
  { icon: <Lock size={22} />, label: 'Authentication (JWT)' },
  { icon: <Database size={22} />, label: 'Database Design' },
  { icon: <Repeat2 size={22} />, label: 'CRUD Operations' },
  { icon: <Cloud size={22} />, label: 'Deployment (AWS EC2, Nginx, DigitalOcean Droplets)' },
  { icon: <Globe2 size={22} />, label: 'Responsive UI Development' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-violet-400">SKILLS</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Core capabilities I bring to engineering teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 18 }}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
