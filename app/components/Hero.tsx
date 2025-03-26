"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white mb-6">
              Build Your <span className="text-accent">Brand</span> <br />
              Stand Out from the Crowd
            </h1>
            <p className="text-white text-xl mb-8 max-w-lg">
              Your Branding Source helps businesses establish memorable brand identities 
              that connect with their audience and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn btn-accent">
                Get Started
              </Link>
              <Link href="#portfolio" className="btn bg-white text-primary hover:bg-opacity-90">
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
              <div className="bg-white p-4 rounded-lg shadow-2xl">
                <img 
                  src="/images/branding-showcase.jpg" 
                  alt="Branding showcase" 
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="font-medium text-sm">Industry Leaders</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                    ★
                  </div>
                  <span className="font-medium text-sm">Award Winning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 