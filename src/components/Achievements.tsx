"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Achievements" title="Highlights & Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="flex items-start gap-3 rounded-2xl border border-card bg-card p-5 hover:border-accent/30 transition-colors"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Award size={16} />
              </div>
              <p className="text-sm text-foreground font-medium leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
