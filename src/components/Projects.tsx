'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 4,
    title: "Emergex – Emergency Coordination System",
    description: "Real-time emergency coordination with live GPS tracking and multi-role dispatch.",
    features: [
      "SOS intake with auto-dial (108) and GPS location capture",
      "Multi-role system: Citizen, ERS, Ambulance, Hospital, Traffic Police",
      "Live ambulance tracking with shared map and ETA updates",
      "Automated hospital & ambulance allocation by proximity"
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    image: "/Images/projects/emergex.png",
    liveUrl: "https://emergexnew.vercel.app/",
    githubUrl: "https://github.com/ravikhokle/Navonmesh",
    featured: true,
  },
  {
    id: 1,
    title: "Social Saver Bot",
    description: "WhatsApp bot that auto-categorizes and stores social media links in a dashboard.",
    features: [
      "WhatsApp bot via Twilio for real-time link ingestion",
      "AI-powered categorization and tagging using LLM APIs",
      "Searchable dashboard with filters by category and platform"
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Twilio API", "Gemini API"],
    image: "/Images/projects/socialSaverBot.png",
    liveUrl: "https://socialsaverbot.vercel.app/",
    githubUrl: "https://github.com/ravikhokle/social-saver-bot",
    featured: true,
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "Resume builder with real-time preview and PDF export.",
    features: [
      "AI-generated summaries via Gemini API",
      "Real-time resume preview with live editing",
      "PDF generation and export using PDFKit"
    ],
    tech: ["React", "Node.js", "MongoDB", "PDFKit", "Gemini API"],
    image: "/Images/projects/resumeBuilder.png",
    liveUrl: "https://resumebuilder.ninja/",
    githubUrl: "https://github.com/ravikhokle/Ai-Powered-Resume-Builder",
  },
  {
    id: 3,
    title: "InternshipYatra",
    description: "Role-based internship platform for HRs and applicants.",
    features: [
      "Role-based access for employers and applicants",
      "Employer dashboard with applicant tracking",
      "JWT authentication and secure file uploads"
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
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
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const ProjectCard = ({ project, onImageClick }: { project: Project; onImageClick: (image: string) => void; }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group h-full"
    >
      <div className="relative flex flex-col h-full bg-[#151519] rounded-2xl transition-all duration-300 overflow-hidden border border-[#2a2a30] hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/15">
        <div className="p-6 pb-0">
          <h3 className="text-lg font-bold tracking-tight text-white">{project.title}</h3>
          <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">{project.description}</p>
        </div>

        <div
          className="relative h-44 mx-6 my-4 overflow-hidden bg-[#1d1d23] rounded-lg cursor-pointer border border-[#2a2a30]"
          onClick={() => onImageClick(project.image)}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 640px, 100vw"
            priority={project.featured}
          />
        </div>

        <div className="p-6 pt-2 space-y-4 flex-1 flex flex-col">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-baseline gap-2">
                  <span className="text-violet-400 text-[10px]">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 mt-auto">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tech</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 bg-[#222228] text-gray-300 rounded-full text-xs font-medium border border-[#2e2e36]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500 hover:bg-violet-400 text-white rounded-md text-sm font-medium transition-colors"
              >
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#25252c] hover:bg-[#31313a] text-white rounded-md text-sm font-medium transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Projects that showcase skills across frontend, backend, and deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onImageClick={setSelectedImage} />
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
