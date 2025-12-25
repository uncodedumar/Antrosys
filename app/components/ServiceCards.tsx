'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: "AI AUTOMATIONS",
    slug: "ai-automations",
    description: "INTELLIGENT SYSTEMS, PREDICTIVE ANALYTICS, AND AUTOMATION SOLUTIONS.",
    image: "/a.webp", // Replace with your image paths
    bgColor: "bg-secondary",
    textColor: "text-accent",
    link: "/services/ai-automations"
  },
  {
    title: "WEB & DIGITAL PRESENCE",
    slug: "web-digital",
    description: "WEBSITES, APPS, E-COMMERCE PLATFORMS, AND DIGITAL BRANDING.",
    image: "/b.webp",
    bgColor: "bg-accent",
    textColor: "text-secondary",
    link: "/services/web-digital"
  },
  {
    title: "MARKETING & GROWTH",
    slug: "marketing",
    description: "DIGITAL MARKETING, GROWTH STRATEGIES, SOCIAL MEDIA, SEO, AND CONVERSIONS.",
    image: "/c.webp",
    bgColor: "bg-secondary",
    textColor: "text-accent",
    link: "/services/marketing"
  },
  {
    title: "DESIGN & EXPERIENCE",
    slug: "design",
    description: "UI/UX, BRANDING, MOTION DESIGN, AND IMMERSIVE EXPERIENCES.",
    image: "/d.webp",
    bgColor: "bg-accent",
    textColor: "text-secondary",
    link: "/services/design"
  }
];

const ServiceSection = () => {
  return (
    <section className="bg-primary min-h-screen py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-accent leading-tight tracking-tighter">
          WHAT WE SHIP.<br />
          OUR WAYS TO MOVE FAST.
        </h1>
        <p className="mt-6 text-sm md:text-lg text-accent max-w-2xl mx-auto font-light leading-tight">
          we provide end-to-end digital solutions — from branding and designing to marketing and development — helping businesses to grow and stand out online
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="block group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative h-full rounded-3xl md:rounded-t-full pt-10 pb-10 px-10 flex flex-col items-center text-center transition-all duration-300 ${service.bgColor} ${service.textColor} cursor-pointer shadow-sm`}
            >
              {/* Semi-Circle Image Container */}
              <motion.div 
                className="w-55 h-34 rounded-t-full mb-8 overflow-hidden"
                animate={{ 
                  filter: ["grayscale(0.5)", "grayscale(0)"] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h3 className="text-xl font-primary mb-4 px-2 tracking-tight leading-none uppercase">
                {service.title}
              </h3>
              
              <p className="text-[10px] md:text-[11px] font-bold leading-4 opacity-90 tracking-wider max-w-[180px]">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;