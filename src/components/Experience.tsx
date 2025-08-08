'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Lead Software Engineer at Google",
      company: "Google",
      period: "Nov 2019 - Present",
      description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      logo: "🔍", // Using emoji as placeholder
      achievements: [
        "Led development of core search algorithm improvements",
        "Collaborated with cross-functional teams",
        "Optimized performance for millions of users",
        "Mentored junior developers"
      ]
    },
    {
      id: 2,
      title: "Junior Software Engineer at Apple",
      company: "Apple",
      period: "Jan 2016 - Dec 2017",
      description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      logo: "🍎", // Using emoji as placeholder
      achievements: [
        "Architected mission-critical software systems",
        "Designed scalable and efficient solutions",
        "Provided technical leadership",
        "Delivered high-quality software products"
      ]
    }
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#3b82f6]">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-600"></div>
              )}
              
              {/* Experience Card */}
              <div className="flex items-start space-x-6">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#242424] rounded-full flex items-center justify-center text-2xl border-2 border-gray-600">
                    {experience.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#242424] rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-[#3b82f6] font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
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
                          <span className="text-[#3b82f6] mr-2 mt-1.5">•</span>
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-[#3b82f6] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
