"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Work Experience"
          description="Professional experience building production-ready backend services and APIs."
        />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-card bg-card p-6 md:p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent text-sm font-medium mt-0.5">{exp.company}</p>
                </div>
                <span className="inline-flex self-start px-3 py-1 rounded-full bg-background border border-card text-xs text-muted font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-muted mb-5 leading-relaxed">{exp.description}</p>

              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-card">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-background border border-card text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
