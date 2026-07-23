"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto px-1"
    >
      <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">{label}</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed px-1">{description}</p>
      )}
    </motion.div>
  );
}
