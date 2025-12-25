"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  {
    percentage: "+ 101%",
    title: "WE IMPLEMENT EVERY IDEA, EVEN THE CRAZY ONES",
    description: "Turning radical concepts into functional market leaders.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
  },
  {
    percentage: "+ 246%",
    title: "OUR PORTFOLIO IS FULL OF DIVERSE INDUSTRIES",
    description: "From FinTech to Fashion—we dominate every vertical.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    percentage: "+ 312%",
    title: "WE SERVE JOINT-STOCK & LOCAL SCALE-UPS",
    description: "Enterprise-grade precision for businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    percentage: "+ 180%",
    title: "REVENUE GROWTH ACROSS ALL CLIENTS",
    description: "We don't just build products; we build profit engines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-accent leading-tight tracking-tighter">
          We don't play safe. <br />
          <span className="text-secondary">We play to win.</span>
        </h2>
        <p className="text-lg md:text-xl text-accent max-w-2xl leading-relaxed">
          While others follow best practices, we create them. Our metrics aren't just 
          numbers—they are proof of a relentless obsession with digital perfection.
        </p>
      </div>

      {/* Interactive Bars */}
      <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            layout // This is the magic: it tells Framer Motion to handle the flex change smoothly
            initial={{ flex: 1 }}
            whileHover={{ flex: 2.5 }}
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 20, 
              mass: 1,
              // Uses hardware accelerated properties where possible
              layout: { duration: 0.4 } 
            }}
            className="group relative min-h-[300px] md:min-h-full overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 will-change-[flex]"
          >
            {/* Background Image - Optimized transition */}
            <motion.div 
              className="absolute inset-0 z-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              style={{ 
                backgroundImage: `url(${stat.image})`,
                transform: 'translateZ(0)' // Forces GPU rendering
              }}
            >
                {/* Darker Overlay inside the image container for better contrast */}
                <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end pointer-events-none">
              <motion.span 
                layout="position"
                className="text-xl font-bold mb-4 block"
              >
                {stat.percentage}
              </motion.span>
              
              <motion.h3 
                layout="position"
                className="text-xl md:text-2xl font-bold leading-tight mb-4 max-w-[280px]"
              >
                {stat.title}
              </motion.h3>

              <div className="overflow-hidden">
                  <p className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-xs">
                    {stat.description}
                  </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}