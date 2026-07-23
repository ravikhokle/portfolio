"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerH = document.getElementById("site-header")?.offsetHeight ?? 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-2 ring-offset-background shadow-lg shadow-accent/10">
            <Image
              src={siteConfig.image}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
              sizes="128px"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-3 px-1"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg md:text-2xl font-medium text-accent mb-4 sm:mb-6 px-1"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-1"
        >
          {siteConfig.description} Experienced in developing REST APIs, authentication systems,
          cloud deployments, and responsive user interfaces with a strong focus on clean
          architecture and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 w-full max-w-md sm:max-w-none mx-auto"
        >
          <a
            href={siteConfig.resume}
            download="Ravi_Khokle_Resume.pdf"
            className="col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full border border-card bg-card text-foreground text-sm font-medium hover:border-accent/50 transition-colors min-h-[44px]"
          >
            <span className="sm:hidden">Projects</span>
            <span className="hidden sm:inline">View Projects</span>
            <ArrowDown size={16} className="shrink-0" />
          </button>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full border border-card bg-card text-foreground text-sm font-medium hover:border-accent/50 transition-colors min-h-[44px]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full border border-card bg-card text-foreground text-sm font-medium hover:border-accent/50 transition-colors min-h-[44px]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
