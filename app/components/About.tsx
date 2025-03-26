"use client";

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Awards Won' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      quote: "Your Branding Source transformed our business identity. Their strategic approach to our brand redesign led to a 40% increase in customer engagement within just three months.",
      author: "Sarah Johnson",
      position: "CEO, Evergreen Organics",
      image: "/images/testimonials/testimonial-1.jpg",
    },
    {
      quote: "Working with Your Branding Source was a game-changer for our startup. Their packaging design not only captured our essence but helped us secure shelf space in major retail chains.",
      author: "Michael Chen",
      position: "Founder, Mountain Brew Co.",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      quote: "Their attention to detail and ability to understand our vision was exceptional. The team delivered a comprehensive brand identity that perfectly conveys our values to our customers.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Lumina Cosmetics",
      image: "/images/testimonials/testimonial-3.jpg",
    },
  ];

  return (
    <section id="about" className="section bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white mb-6"
            >
              Branding Experts with a Passion for Excellence
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Your Branding Source is a team of passionate designers, strategists, and creative thinkers dedicated to building remarkable brands. Since our founding in 2013, we've helped businesses of all sizes establish memorable identities that resonate with their target audiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              What sets us apart is our strategic approach to branding. We don't just create beautiful designs; we develop thoughtful brand strategies that align with your business goals and connect with your customers on a deeper level.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative lg:ml-12"
          >
            <div className="bg-white p-1 rounded-lg shadow-xl">
              <img
                src="/images/about-team.jpg"
                alt="Your Branding Source Team"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="italic mb-6 text-white/90">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 