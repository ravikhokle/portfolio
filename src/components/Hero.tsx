'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

interface Skill {
  name: string;
  image: string;
  category: string;
}

const Hero = () => {
  const skills: Skill[] = [
    { name: 'React', image: '/Images/skills/react.png', category: 'Frontend' },
    { name: 'Next.js', image: '/Images/skills/nextjs.png', category: 'Frontend' },
    { name: 'JavaScript', image: '/Images/skills/javascript.png', category: 'Language' },
    { name: 'TypeScript', image: '/Images/skills/typescript.png', category: 'Language' },
    { name: 'HTML', image: '/Images/skills/html.png', category: 'Frontend' },
    { name: 'CSS', image: '/Images/skills/css.png', category: 'Frontend' },
    { name: 'Tailwind CSS', image: '/Images/skills/tailwind.png', category: 'Frontend' },
    { name: 'Bootstrap', image: '/Images/skills/bootstrap.png', category: 'Frontend' },
    { name: 'Node.js', image: '/Images/skills/node.png', category: 'Backend' },
    { name: 'Express.js', image: '/Images/skills/express.png', category: 'Backend' },
    { name: 'MongoDB', image: '/Images/skills/mongodb.png', category: 'Database' },
    { name: 'PostgreSQL', image: '/Images/skills/PostgreSQL.png', category: 'Database' },
    { name: 'MySQL', image: '/Images/skills/MySQL.png', category: 'Database' },
    { name: 'Docker', image: '/Images/skills/Docker.png', category: 'DevOps' },
    { name: 'AWS EC2', image: '/Images/skills/AWSEC2.png', category: 'Cloud' },
    { name: 'Git', image: '/Images/skills/Git.png', category: 'Tools' },
    { name: 'GitHub', image: '/Images/skills/GitHub.png', category: 'Tools' },
    { name: 'Linux', image: '/Images/skills/Linux.png', category: 'OS' },
    { name: 'Nginx', image: '/Images/skills/Nginx.png', category: 'Server' },
    { name: 'Heroku', image: '/Images/skills/Heroku.png', category: 'Cloud' },
    { name: 'WordPress', image: '/Images/skills/Wordpress.png', category: 'CMS' },
  ];

  const raviImage = '/Images/me/ravikhokle.png';

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#1a1a1a] text-white">

      <div className="w-full flex flex-col items-center justify-center flex-1 py-8 sm:py-10 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 mt-16"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full relative">
              {/* Simple 3D Effect - No Shadows */}
              <div className="absolute inset-0 rounded-full "></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src={raviImage}
                  alt="Ravi Khokle" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#ff6b35] font-medium text-base sm:text-lg mb-3 sm:mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 px-2"
          >
            Ravi Khokle
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-6 sm:mb-8 px-2"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'React Developer',
                2000,
                'Node.js Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            I will create your website with a responsive design for all devices, whether you are looking for a portfolio, your brand website, an E-Commerce website, or AI integration on your website. I can build full-stack websites and make them live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </motion.button>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://linkedin.com/in/ravikhokle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/ravikhokle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Integrated Skills Section - Full Width */}  
        </motion.div>
        </div>

        {/* Skills Section - Full Viewport Width */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="relative w-full overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center text-sm tracking-widest font-medium text-gray-500 mb-4"
          >
            TECHNOLOGIES I WORK WITH
          </motion.h2>

            {/* Fade Edges for better UX */}
            <div className="relative w-full overflow-hidden py-6">
              {/* Left Fade */}
              <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent z-10 pointer-events-none" />
              {/* Right Fade */}
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent z-10 pointer-events-none" />
            
              {/* Scrolling Skill Icons */}
              <motion.div
                animate={{ x: [0, -1800] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }}
                className="flex w-max space-x-10"
              >
                {[...skills, ...skills].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="group flex-shrink-0"
                  >
                    <div className="flex flex-col items-center p-4 min-w-[110px] relative pt-8">
                      {/* Category Badge on hover */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-[#3b82f6] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                          {skill.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-[#242424] border border-gray-700 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-gray-600 transition-all duration-300">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={52}
                          height={52}
                          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                      </div>

                      {/* Label */}
                      <p className="text-sm font-semibold text-gray-300 text-center transition-colors duration-300 group-hover:text-[#3b82f6]">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

      </div>
    </section>
  );
};

export default Hero;
