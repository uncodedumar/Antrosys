"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Star } from 'lucide-react';
import Image from 'next/image';
import { testimonialCards } from './TestimonialSection';

/** * SEO TIP: Use Long-tail keywords in roles and text. 
 * "Custom Software Development" and "UI/UX Design Agency" help search engines 
 * understand your niche through client social proof.
 */

const MobileTestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Faster, smoother physics-based transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + testimonialCards.length) % testimonialCards.length);
  };

  return (
    <section 
      className="block md:hidden bg-primary py-16 px-6 font-sans overflow-hidden"
      aria-labelledby="testimonial-heading"
    >
      {/* Hidden SEO Content for Google Bots */}
      <div className="sr-only" role="region" aria-label="Antrosys Client Success and Testimonials">
  <h2 
    title="Antrosys | Industry-Leading Client Success in AI & Full-Stack Development"
    aria-label="Antrosys: Global proof of excellence in Custom SaaS, AI Art, and Digital Transformation"
  >
    Elite Success Stories: Expert Full-Stack Development, UI/UX Engineering, and Custom AI Solutions
  </h2>
  <p 
    title="Trusted by Global Brands for Digital Growth and Profitability"
    aria-label="Read why enterprise-level partners choose Antrosys for high-performance software and marketing automation"
  >
    Discover why global startups and established enterprises partner with Antrosys for 
    sophisticated digital engineering, high-conversion growth marketing, 
    and bespoke AI-driven illustrations that maximize profitability.
  </p>
</div>

      <h2 
        id="testimonial-heading"
        className="text-white text-center text-2xl font-black uppercase tracking-tighter mb-12"
      >
        TRUSTED ACROSS THE GLOBE
      </h2>

      <div className="relative flex items-center justify-center max-w-sm mx-auto min-h-[480px]">
        {/* Navigation - Enhanced Accessibility */}
        <button 
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="absolute left-[-10px] z-20 p-3 rounded-full border border-gray-700 bg-[#2a2626]/40  text-white active:scale-90 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full bg-[#f5eddc] rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between will-change-transform"
          >
            {/* Top Row: Stars and Contact */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#e68a5c" stroke="none" />
                ))}
              </div>
              <a 
                href="/contact" // Add your actual number
                className="flex items-center gap-2 group"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest group-hover:underline">CONTACT SALES</span>
                <div className="bg-[#382828] p-2 rounded-full group-hover:bg-black transition-colors">
                  <Phone size={12} className="text-[#f5eddc]" />
                </div>
              </a>
            </div>

            {/* Quote Body with Semantic Blockquote */}
            <figure className="m-0">
              <blockquote className="text-[#1a1818] text-xl font-bold italic leading-snug mb-8 tracking-tight">
                "{testimonialCards[index].review}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                {/* Profile Image with Alt Text for SEO */}
                <div className="relative w-14 h-14 rounded-full flex-shrink-0 overflow-hidden bg-[#382828]">
                  <Image
                    src={testimonialCards[index].src}
                    alt={`${testimonialCards[index].name} - ${testimonialCards[index].role} at ${testimonialCards[index].company}`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    sizes="56px"
                    onError={(e) => {
                      // Fallback: hide image on error, background color will show
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <figcaption>
                  <h4 className="font-black text-[15px] leading-none text-[#1a1818]">
                    {testimonialCards[index].name}
                  </h4>
                  <cite className="text-xs font-medium opacity-70 mt-1 block not-italic">
                    {testimonialCards[index].role} @ {testimonialCards[index].company}
                  </cite>
                </figcaption>
              </div>
            </figure>
          </motion.div>
        </AnimatePresence>

        <button 
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="absolute right-[-10px] z-20 p-3 rounded-full border border-gray-700 bg-[#2a2626]/40  text-white active:scale-90 transition-transform"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default MobileTestimonialSlider;