'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-violet-400">PROJECTS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Look at my projects that show my skills in full-stack web development

          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#151519] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#2a2a30] hover:border-violet-400/40"
            >
              {/* Project Title */}
              <div className="p-7 pb-0">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                  {project.title}
                </h3>
              </div>

              {/* Project Image */}
              <div 
                className="relative h-64 mx-7 mb-6 overflow-hidden bg-[#1d1d23] rounded-xl cursor-pointer hover:opacity-90 transition-opacity border border-[#2a2a30]"
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
              <div className="p-8 pt-6">
                <p className="text-gray-400 mb-6 leading-relaxed text-[15px] sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#222228] text-gray-300 rounded-full text-sm font-medium border border-[#2e2e36]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Live demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25252c] hover:bg-[#31313a] text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More projects CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/ravikhokle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-transparent border border-[#383842] hover:bg-[#19191f] text-gray-200 rounded-md text-sm font-semibold transition-colors"
          >
            More projects on GitHub
          </a>
        </div>

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
