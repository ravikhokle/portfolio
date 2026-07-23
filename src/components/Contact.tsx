"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Together"
          description="I'm actively looking for Full Stack Developer, Backend Developer, and Software Engineer opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-card bg-card p-6 md:p-8 space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-card bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-card bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-muted mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-card bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="+91 7218014410"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted mb-1.5">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-card bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-card bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                placeholder="Tell me about the role and how I can help."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-60 transition-opacity flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle size={16} />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} />
                Failed to send. Please email me directly.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5 hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-foreground hover:text-accent transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-card bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-card bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
