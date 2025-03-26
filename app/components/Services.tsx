"use client";

import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Logo Design",
      description: "We create distinctive, versatile, and timeless logos that capture your brand's essence and leave a lasting impression.",
      icon: "✏️",
      delay: 0
    },
    {
      title: "Brand Identity",
      description: "Develop a cohesive visual language with color palettes, typography, imagery, and guidelines that express your brand consistently.",
      icon: "🎨",
      delay: 1
    },
    {
      title: "Packaging Design",
      description: "Stand out on the shelf with packaging that communicates your product's value and captivates your target audience.",
      icon: "📦",
      delay: 2
    },
    {
      title: "Social Media Templates",
      description: "Maintain a consistent brand presence across all platforms with custom templates that enhance your digital marketing.",
      icon: "📱",
      delay: 3
    },
    {
      title: "Brand Strategy",
      description: "Define your brand's purpose, positioning, and personality to guide all branding decisions and marketing initiatives.",
      icon: "🧠",
      delay: 4
    },
    {
      title: "Website Design",
      description: "Create beautiful, user-friendly websites that showcase your brand and provide an optimal user experience across all devices.",
      icon: "💻",
      delay: 5
    }
  ];

  return (
    <section id="services" className="section bg-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our Branding Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto"
          >
            We offer comprehensive branding solutions to help your business stand out
            and connect with your target audience effectively.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 