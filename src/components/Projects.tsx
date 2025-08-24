'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Ai-Powered Resume Builder",
      description: "Build your resume with a pre-built template and download, use AI to generate a summary, or get help while building your resume.",
      tech: ["React", "Node", "Express", "MongoDB", "Gemini API", "Cloudinary"],
      image: "/Images/projects/resumeBuilder.png",
      liveUrl: "https://resumebuilder.ninja/",
      githubUrl: "https://github.com/ravikhokle/Ai-Powered-Resume-Builder",
    },
    {
      id: 2,
      title: "InternshipYatra",
      description: "A platform where HR can publish internships, check applicants, and download their resumes, and Users can apply for internships with their resume.",
      tech: ["React", "Express", "Node", "MongoDB", "TailwindCSS", "Axios"],
      image: "/Images/projects/internshipYatra.png",
      liveUrl: "https://internshipyatra.ravikhokle.site",
      githubUrl: "https://github.com/ravikhokle/InternshipYatra",
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#3b82f6]">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Look at my projects that show my skills in full-stack web development

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
              {/* Project Title */}
              <div className="p-6 pb-0">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
              </div>

              {/* Project Image */}
              <div 
                className="relative h-64 mx-6 mb-6 overflow-hidden bg-gray-800 rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
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

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Fullscreen Image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Project Screenshot"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
