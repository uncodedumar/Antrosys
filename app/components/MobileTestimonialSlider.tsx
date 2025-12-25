"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

// Data for your 5 cards
const TESTIMONIALS = [
  {
    id: 1,
    name: "Cooper Williams",
    role: "CEO At Bricklix",
    text: "If You Want A Partner Who Actually Cares About Outcomes, This Is Your Team. We’ve Worked With Agencies Before — None Come Close. If You’re Serious About Building Something That Lasts, This Is The Team You Want Beside You.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder of TechFlow",
    text: "The level of professionalism and technical expertise is unmatched. They didn't just build a product; they helped us define our future trajectory in the market.",
  },
  // ... Add 3 more unique reviews here
];

const MobileTestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      }
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="block md:hidden bg-[#1a1818] min-h-screen py-12 px-6 font-sans overflow-hidden">
      <h2 className="text-white text-center text-2xl font-bold uppercase tracking-wider mb-12">
        TRUSTED ACROSS THE GLOBE
      </h2>

      <div className="relative flex items-center justify-center max-w-sm mx-auto h-[500px]">
        {/* Left Arrow */}
        <button 
          onClick={() => paginate(-1)}
          className="absolute left-[-20px] z-10 p-3 rounded-full border border-gray-600 bg-[#2a2626] text-white hover:bg-[#3d3838] transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full bg-[#f5eddc] rounded-xl p-8 shadow-2xl flex flex-col justify-between"
          >
            {/* Top Row: Stars and Contact */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#e68a5c] text-xl">★</span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-tighter">CONTACT SALES</span>
                <div className="bg-[#382828] p-1.5 rounded-full">
                  <Phone size={14} className="text-[#f5eddc]" />
                </div>
              </div>
            </div>

            {/* Quote Body */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#1a1818] text-xl font-medium leading-tight mb-8"
            >
              {TESTIMONIALS[index].text}
            </motion.p>

            {/* Footer: Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#382828] rounded-full" />
              <div>
                <h4 className="font-bold text-sm leading-none">{TESTIMONIALS[index].name}</h4>
                <p className="text-xs opacity-80">{TESTIMONIALS[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button 
          onClick={() => paginate(1)}
          className="absolute right-[-20px] z-10 p-3 rounded-full border border-gray-600 bg-[#2a2626] text-white hover:bg-[#3d3838] transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default MobileTestimonialSlider;