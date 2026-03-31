'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Backend Developer Intern",
      company: "Inovetex Solutions",
      location: "Remote, Pune",
      period: "Jan 2026 – Mar 2026",
      achievements: [
        "Built a reusable e-commerce backend with authentication, REST APIs, and MongoDB",
        "Developed scalable APIs using Node.js and Express",
        "Implemented JWT-based authentication and role-based access control",
        "Designed database schemas for multi-project usage",
      ],
      tech: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-violet-400">EXPERIENCE</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional experience building production-ready applications.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#151519] rounded-2xl p-8 border border-[#2a2a30] shadow-lg hover:border-violet-400/50 hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">
                    {experience.title}
                  </h3>
                  <p className="text-violet-300 font-medium text-sm">
                    {experience.company}
                    <span className="text-gray-500 font-normal"> · {experience.location}</span>
                  </p>
                </div>
                <div className="mt-2 sm:mt-1">
                  <span className="px-3 py-1 bg-[#222228] text-gray-300 rounded-full text-xs font-medium border border-[#2e2e36]">
                    {experience.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-baseline gap-2">
                    <span className="text-violet-400 text-[10px]">●</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-[#2a2a30]">
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-[#222228] text-gray-300 rounded-full text-xs font-medium border border-[#2e2e36]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

