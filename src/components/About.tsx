'use client';

import { motion } from 'framer-motion';
import { Heart, Coffee, Code2, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js & Express", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 },
    { name: "Mobile Development", level: 75 }
  ];

  const stats = [
    { icon: <Code2 size={30} />, number: "50+", label: "Projects Completed" },
    { icon: <Users size={30} />, number: "30+", label: "Happy Clients" },
    { icon: <Coffee size={30} />, number: "1000+", label: "Cups of Coffee" },
    { icon: <Heart size={30} />, number: "5", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#ff6b35]">ABOUT</span> Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating
            digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image Placeholder */}
            <div className="relative mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 mx-auto bg-gradient-to-br from-[#ff6b35] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="text-white text-8xl font-bold">RK</div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Coffee className="text-yellow-800" size={24} />
              </motion.div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm Ravi Khokle
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer and UI/UX Designer with over 5 years
                of experience creating digital solutions that make a real impact. My journey
                started with a curiosity about how websites work, and it has evolved into a
                deep passion for crafting beautiful, functional, and user-centered applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or enjoying a good cup of coffee while brainstorming
                the next big idea. I believe in the power of technology to solve real-world
                problems and create meaningful experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines technical expertise with creative design thinking,
                ensuring that every project not only works flawlessly but also delights users
                and drives business results.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-[#3b82f6] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] h-3 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#242424] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  >
                    <div className="text-[#3b82f6] mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#242424] rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-gray-400">
                I deployed my first website at age 16 and never looked back!
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#242424] rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🎮</div>
              <p className="text-gray-400">
                Gaming taught me problem-solving skills that I use in coding every day.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#242424] rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🌱</div>
              <p className="text-gray-400">
                I'm always learning new technologies and love sharing knowledge with others.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
