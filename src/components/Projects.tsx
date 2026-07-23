"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Featured Projects"
          title="Projects"
          description="Production-ready applications showcasing full-stack development, authentication, and cloud deployment."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-card bg-card overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div
                className="relative h-48 sm:h-52 bg-background border-b border-card cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(project.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(project.image)}
                aria-label={`View screenshot of ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-accent/90 text-white text-xs font-medium hidden sm:inline-block">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-0.5">{project.subtitle}</p>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{project.description}</p>
                </div>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                  {project.highlights.length > 4 && (
                    <li className="text-xs text-muted/70 pl-3">
                      +{project.highlights.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-background border border-card text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-4 border-t border-card">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px]"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg border border-card bg-background text-foreground text-sm font-medium hover:border-accent/50 transition-colors min-h-[44px]"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/ravikhokle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
            View more on GitHub
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[110] flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot preview"
        >
          <div className="relative w-full max-w-5xl h-[85dvh] sm:h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium shadow-lg"
              aria-label="Close preview"
            >
              <X size={18} />
              Close
            </button>
            <div className="relative w-full h-full pt-12">
              <Image src={selectedImage} alt="Project screenshot" fill className="object-contain rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
