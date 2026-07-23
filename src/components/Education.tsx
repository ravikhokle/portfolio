"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Education" title="Academic Background" />

        <div className="space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex gap-4 rounded-2xl border border-card bg-card p-6 hover:border-accent/30 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.degree}</h3>
                    <p className="text-sm text-muted mt-0.5">
                      {item.institution} · {item.location}
                    </p>
                    {"detail" in item && item.detail && (
                      <p className="text-sm text-accent font-medium mt-1">{item.detail}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
