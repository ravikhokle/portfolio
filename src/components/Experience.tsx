'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TOS – Totally Optimised Solutions",
      period: "Jan 2025 – Jun 2025",
      description:
        "Internship focused on building and shipping features across the MERN stack with a performance-first mindset.",
      logo: "🚀", // Placeholder
      achievements: [
        "Built REST APIs with Express and MongoDB/PostgreSQL",
        "Worked with databases for schema design and data access",
        "Improved performance through query tuning and caching",
        "Developed responsive UI components with React and Tailwind",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-violet-400">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 lg:space-y-14"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-violet-500/35"></div>
              )}
              
              {/* Experience Card */}
              <div className="flex items-start space-x-6">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#151519] rounded-full flex items-center justify-center text-2xl border-2 border-[#2d2d36]">
                    {experience.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#151519] rounded-2xl p-8 border border-[#2a2a30] hover:border-violet-400/40 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-violet-300 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="px-3 py-1 bg-[#222228] text-gray-300 rounded-full text-sm font-medium border border-[#2e2e36]">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-violet-400 mr-2 mt-1.5">•</span>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
