"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="About" title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-base md:text-lg text-muted leading-relaxed"
        >
          <p>
            I&apos;m Ravi, a Full Stack Developer currently pursuing a Master of Computer
            Applications (MCA). I enjoy designing and developing scalable web applications that
            solve real-world problems.
          </p>
          <p>
            My primary expertise is in the MERN stack, where I build responsive frontends, secure
            backend APIs, authentication systems, and cloud-deployed applications. I continuously
            improve my skills by participating in hackathons, building production-ready projects,
            and learning modern software engineering practices.
          </p>
          <p>
            I am currently seeking{" "}
            <span className="text-foreground font-medium">
              Full Stack Developer, Backend Developer, and Software Engineer
            </span>{" "}
            opportunities where I can contribute while continuing to grow as an engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
