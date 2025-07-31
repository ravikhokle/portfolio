'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Next.js, Node.js, and databases. From concept to deployment.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
      price: "Starting at $2,500"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that convert visitors into customers. Mobile-first, accessible design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,200"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile-First Development",
      description: "Responsive web applications that work perfectly on all devices. Progressive Web Apps (PWA) for native-like mobile experience.",
      features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Touch Interactions"],
      price: "Starting at $1,800"
    },
    {
      icon: <Globe size={40} />,
      title: "E-Commerce Solutions", 
      description: "Complete online store setup with payment processing, inventory management, and customer analytics. Scalable and secure platforms.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      price: "Starting at $3,500"
    },
    {
      icon: <Database size={40} />,
      title: "Database & Backend",
      description: "Robust backend systems with secure APIs, database optimization, and cloud deployment. Scalable architecture for growing businesses.",
      features: ["API Development", "Database Design", "Cloud Deployment", "Performance Optimization"],
      price: "Starting at $2,000"
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Optimization",
      description: "Speed up your existing website with performance audits, code optimization, and SEO improvements. Boost conversions and user experience.",
      features: ["Speed Optimization", "SEO Improvements", "Code Refactoring", "Analytics Setup"],
      price: "Starting at $800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I help businesses and individuals create powerful digital experiences
            that drive results and engage users effectively.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Need Something Custom?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Every project is unique. Let&apos;s discuss your specific requirements
            and create a tailored solution that fits your needs and budget.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
