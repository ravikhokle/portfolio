'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and order processing.",
      problem: "Small businesses needed an affordable, scalable online store solution.",
      solution: "Built a responsive platform with modern UI/UX and seamless payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      results: "Increased client sales by 300% and reduced cart abandonment by 45%.",
      image: "/projects/ecommerce.jpg",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/ravikhokle/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team chat, and progress tracking. Built with modern web technologies for optimal performance.",
      problem: "Teams struggled with scattered communication and project tracking.",
      solution: "Created an all-in-one platform with real-time collaboration features.",
      tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Prisma"],
      results: "Improved team productivity by 60% and reduced project delays by 40%.",
      image: "/projects/taskmanager.jpg",
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/ravikhokle/taskmanager",
      featured: true,
    },
    {
      id: 3,
      title: "Real Estate Website",
      description: "Modern real estate platform with property listings, advanced search filters, virtual tours, and lead generation forms. Optimized for mobile and SEO.",
      problem: "Real estate agency needed a modern online presence to attract buyers.",
      solution: "Developed a feature-rich platform with stunning visuals and user-friendly navigation.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
      results: "Generated 200+ qualified leads in first month and increased inquiries by 250%.",
      image: "/projects/realestate.jpg",
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/ravikhokle/realestate",
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website for a creative professional featuring smooth animations, dark mode, and optimized performance.",
      problem: "Client needed a professional online presence to showcase their work.",
      solution: "Built an animated, responsive portfolio with modern design principles.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      results: "Helped client land 3 new projects within first week of launch.",
      image: "/projects/portfolio.jpg",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/ravikhokle/portfolio",
      featured: false,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${project.featured ? 'lg:w-1/2' : ''} h-64 bg-gradient-to-br from-blue-500 to-purple-600`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.featured ? 'Featured' : 'Project'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        PROBLEM
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        SOLUTION
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      RESULTS
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                      {project.results}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
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
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </motion.a>
                  </div>
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
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
