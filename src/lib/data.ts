export const siteConfig = {
  name: "Ravi Khokle",
  title: "Full Stack Developer",
  description:
    "Building scalable, secure, and production-ready web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
  url: "https://ravikhokle.dev",
  email: "ravikhokle1@gmail.com",
  phone: "+91 7218014410",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/ravikhokle",
  linkedin: "https://linkedin.com/in/ravikhokle",
  resume: "/Images/ravi_khokle_resume.pdf",
  image: "/Images/me/ravikhokle.png",
};

export const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Redux", slug: "redux" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "WordPress", slug: "wordpress" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "REST API Development", slug: "openapiinitiative" },
      { name: "JWT Authentication", slug: "jsonwebtokens" },
      { name: "Google OAuth", slug: "google" },
      { name: "EJS", slug: "ejs" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MongoDB Atlas", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", slug: "amazonec2" },
      { name: "AWS Lambda", slug: "awslambda" },
      { name: "AWS VPC", slug: "amazonwebservices" },
      { name: "Docker", slug: "docker" },
      { name: "Nginx", slug: "nginx" },
      { name: "PM2", slug: "pm2" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Vercel", slug: "vercel" },
      { name: "Render", slug: "render" },
      { name: "Cloudinary", slug: "cloudinary" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Python", slug: "python" },
      { name: "Java", slug: "java" },
      { name: "C++", slug: "cplusplus" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Linux", slug: "linux" },
      { name: "Postman", slug: "postman" },
      { name: "VS Code", slug: "visualstudiocode" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "InternshipYatra",
    subtitle: "Full Stack Internship Platform",
    description:
      "Production-ready internship platform connecting students with recruiters through secure authentication, role-based dashboards, and internship management features.",
    highlights: [
      "Student and Recruiter dashboards",
      "JWT Authentication & Google OAuth Login",
      "OTP Email Verification & Refresh Token Auth",
      "Resume Upload & Public User Profiles",
      "Internship Search with Advanced Filters",
      "Applicant Tracking & Company Dashboard",
      "Cloudinary File Uploads & Secure REST APIs",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Google OAuth",
      "Cloudinary",
      "Vercel",
      "Render",
      "MongoDB Atlas",
    ],
    image: "/Images/projects/internshipYatra.png",
    liveUrl: "https://internshipyatra.vercel.app/",
    githubUrl: "https://github.com/ravikhokle/InternshipYatra",
    featured: true,
  },
  {
    id: 2,
    title: "Social Saver Bot",
    subtitle: "AI Powered WhatsApp Link Manager",
    description:
      "Automatically saves, categorizes, and organizes social media links received through WhatsApp.",
    highlights: [
      "WhatsApp Integration using Twilio",
      "AI-powered categorization",
      "Searchable Dashboard",
      "Category-based organization",
      "Modern responsive interface",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Twilio API", "Cohere AI"],
    image: "/Images/projects/socialSaverBot.png",
    liveUrl: "https://socialsaverbot.vercel.app/",
    githubUrl: "https://github.com/ravikhokle/social-saver-bot",
    featured: true,
  },
  {
    id: 3,
    title: "Emergency Coordination System (Emergex)",
    subtitle: "Emergency Response Platform",
    description:
      "Real-time emergency response platform coordinating citizens, hospitals, ambulances, and emergency responders through GPS tracking.",
    highlights: [
      "Emergency SOS Requests",
      "GPS Location Tracking",
      "Live Ambulance Tracking",
      "Hospital Allocation",
      "Traffic Police Coordination",
      "Multi-role Authentication",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    image: "/Images/projects/emergex.png",
    liveUrl: "https://emergexnew.vercel.app/",
    githubUrl: "https://github.com/ravikhokle/Navonmesh",
  },
    {
    id: 4,
    title: "Resume Builder",
    subtitle: "AI Resume Builder",
    description:
      "AI-powered resume builder allowing users to create professional resumes with real-time preview and PDF export.",
    highlights: [
      "AI-generated summaries",
      "Live Preview",
      "Multiple Resume Templates",
      "PDF Export",
      "Resume Management",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "PDFKit", "Gemini API"],
    image: "/Images/projects/resumeBuilder.png",
    liveUrl: "https://resumebuilder.ninja/",
    githubUrl: "https://github.com/ravikhokle/Ai-Powered-Resume-Builder",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "Totally Optimised Solutions",
    period: "January 2025 – March 2025",
    description:
      "Worked as a Backend Developer Intern building scalable backend services using Node.js and MongoDB.",
    responsibilities: [
      "Developed REST APIs using Node.js and Express.js",
      "Built Product Filters, Coupons, Inbox, and Address Management modules",
      "Implemented JWT authentication and role-based authorization",
      "Designed scalable MongoDB schemas",
      "Performed API testing using Postman",
      "Collaborated with frontend developers",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Postman"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Modern College of Engineering",
    location: "Pune",
    period: "2025 – Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Swami Ramanand Teerth Marathwada University",
    location: "Nanded",
    period: "2022 – 2025",
    detail: "CGPA: 7.50",
  },
];

export const achievements = [
  "Odoo × SPIT Hackathon 2025 — Finalist",
  "Navonmesh 2026 Hackathon — Finalist",
  "Full-Stack Web Development Certification — Udemy",
];
