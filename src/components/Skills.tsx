"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SimpleIcon from "@/components/SimpleIcon";
import { skillCategories } from "@/lib/data";
import { getSkillIcon } from "@/lib/icons";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Technical Skills"
          title="Skills & Technologies"
          description="Technologies and tools I use to build scalable, production-ready applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: catIdx * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-card bg-card p-5 md:p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const icon = getSkillIcon(skill.slug);
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background border border-card text-sm text-foreground"
                    >
                      {icon && (
                        <SimpleIcon
                          icon={icon}
                          size={14}
                          className="text-muted shrink-0"
                        />
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
