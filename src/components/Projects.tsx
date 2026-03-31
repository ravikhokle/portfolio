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
      title: "AI Resume Builder",
      problem: "Job seekers struggle to quickly craft tailored resumes with consistent formatting.",
      features: [
        "Template-driven resume creation with real-time preview",
        "AI-generated summaries using Gemini API",
        "Asset storage via Cloudinary with secure uploads",
        "Export-ready PDF download"
      ],
      tech: ["React", "Node", "Express", "MongoDB", "Gemini API", "Cloudinary"],
      image: "/Images/projects/resumeBuilder.png",
      liveUrl: "https://resumebuilder.ninja/",
      githubUrl: "https://github.com/ravikhokle/Ai-Powered-Resume-Builder",
    },
    {
      id: 2,
      title: "InternshipYatra",
      problem: "HR teams need a lightweight way to publish internships and review applicants without extra tooling.",
      features: [
        "Employer dashboard to publish roles and track applicants",
        "Resume uploads with quick download for reviewers",
        "Role-based flows for HR and applicants",
        "Searchable listings with responsive UI"
      ],
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
    <section id="projects" className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0d] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-violet-400">PROJECTS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Impactful builds that showcase end-to-end ownership across frontend, backend, and deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#151519] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#2a2a30] hover:border-violet-400/40"
            >
              {/* Project Title */}
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold tracking-tight text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.problem}</p>
              </div>

              {/* Project Image */}
              <div 
                className="relative h-56 mx-6 mb-5 overflow-hidden bg-[#1d1d23] rounded-lg cursor-pointer hover:opacity-90 transition-opacity border border-[#2a2a30]"
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
              <div className="p-6 pt-5 space-y-4.5">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="space-y-1.5 text-gray-300 text-sm">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-violet-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-1">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Tech</h4>
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
                <div className="flex flex-wrap gap-3 pt-2">
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
        <div className="mt-8 text-center">
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
