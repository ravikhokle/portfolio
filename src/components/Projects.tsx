'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HTML TUTORIAL",
      description: "A comprehensive HTML tutorial platform featuring interactive examples, best practices, and modern web development techniques. Built with responsive design and optimized for learning.",
      problem: "Beginners struggled to find quality HTML resources with hands-on examples.",
      solution: "Created an interactive platform with step-by-step tutorials and live code examples.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      results: "Helped 10,000+ developers learn HTML fundamentals.",
      image: "/projects/internshipYatra.png",
      liveUrl: "https://html-tutorial-demo.com",
      githubUrl: "https://github.com/ravikhokle/html-tutorial",
      featured: true,
    },
    {
      id: 2,
      title: "CSS TUTORIAL",
      description: "Advanced CSS tutorial covering modern layouts, animations, and responsive design patterns. Features live examples and interactive code playground for better learning experience.",
      problem: "Developers needed advanced CSS techniques and modern layout methods.",
      solution: "Built a comprehensive guide with interactive examples and real-world projects.",
      tech: ["CSS3", "Sass", "Flexbox", "Grid", "JavaScript"],
      results: "Increased CSS proficiency for 5,000+ developers worldwide.",
      image: "/projects/resumeBuilder.png",
      liveUrl: "https://css-tutorial-demo.com",
      githubUrl: "https://github.com/ravikhokle/css-tutorial",
      featured: true,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#ff6b35]">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            UI/UX design, and problem-solving approach.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#242424] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                {/* Project Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
                </div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.featured ? 'Featured' : 'Project'}
                  </span>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    POWER OF {project.title.includes('HTML') ? 'HTML' : 'CSS'}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300 uppercase tracking-wide">
                      CLICK HERE TO VISIT
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ravikhokle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
