"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const categories = ['All', 'Logo Design', 'Brand Identity', 'Packaging', 'Web Design', 'Social Media'];

const portfolioItems = [
  {
    title: 'Mountain Brew Co.',
    category: 'Logo Design',
    image: '/images/portfolio/portfolio-1.jpg',
  },
  {
    title: 'Evergreen Organics',
    category: 'Brand Identity',
    image: '/images/portfolio/portfolio-2.jpg',
  },
  {
    title: 'Lumina Cosmetics',
    category: 'Packaging',
    image: '/images/portfolio/portfolio-3.jpg',
  },
  {
    title: 'Tech Innovate',
    category: 'Web Design',
    image: '/images/portfolio/portfolio-4.jpg',
  },
  {
    title: 'Ocean View Resort',
    category: 'Brand Identity',
    image: '/images/portfolio/portfolio-5.jpg',
  },
  {
    title: 'Urban Threads',
    category: 'Logo Design',
    image: '/images/portfolio/portfolio-6.jpg',
  },
  {
    title: 'Fresh Harvest',
    category: 'Packaging',
    image: '/images/portfolio/portfolio-7.jpg',
  },
  {
    title: 'Fitness First',
    category: 'Social Media',
    image: '/images/portfolio/portfolio-8.jpg',
  },
];

const PortfolioItem = ({ title, category, image, index }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-light bg-opacity-20"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <h4 className="text-white font-bold text-xl mb-1">{title}</h4>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto"
          >
            Explore our collection of branding projects that have helped businesses
            stand out and connect with their target audience.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-neutral-light/50 hover:bg-neutral-light'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 