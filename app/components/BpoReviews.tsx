"use client";
import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const testimonials = [
  {
    company: "Bricklix",
    quote: "I have worked with Outsource for many years on various projects. When we work with Outsource, we know that we are going to have a project that is completed on time.",
    author: "Anas Shahid, Managing Director",
    subtext: "Bricklix",
    id: "01/03",
  },
  {
    company: "Sypnos",
    quote: "Expertise in digital transformation is rare. This team delivered a custom AI model that outperformed our expectations within the first quarter.",
    author: "David .K, CMO",
    subtext: "SYPNOS LABS",
    id: "02/03",
  },
  {
    company: "Dateika",
    quote: "The seamless enterprise AI integration allowed us to scale our operations globally without the typical technical debt associated with such shifts.",
    author: "Alex .P, FOUNDER",
    subtext: "DATEIKA TECH",
    id: "03/03",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const t = testimonials[current];

  return (
    <section className="bg-[var(--primary)] w-full py-12 md:py-24 font-sans text-[var(--accent)] relative overflow-hidden">
      {/* Added ml-auto and max-w-7xl to create space on the left 
         and constrain the overall width/height feel.
      */}
      <div className="max-w-7xl ml-auto px-8 md:px-20 flex flex-col md:flex-row items-start">
        
        {/* Left Column: Logo and Navigation */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 relative">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12 text-[var(--secondary)] transition-all duration-500">
            {t.company}
          </h2>

          {/* Vertical Line & Buttons Container */}
          <div className="flex flex-col items-center gap-4 relative">
            <div className="w-[1px] h-20 bg-[var(--secondary)] opacity-30 mb-2"></div>
            
            {/* Functional Nav Buttons */}
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border border-[var(--secondary)] flex items-center justify-center hover:bg-[var(--secondary)] hover:bg-opacity-10 transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ArrowUp size={20} className="text-[var(--secondary)]" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border border-[var(--secondary)] flex items-center justify-center hover:bg-[var(--secondary)] hover:bg-opacity-10 transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ArrowDown size={20} className="text-[var(--secondary)]" />
            </button>

            <div className="w-[1px] h-20 bg-[var(--secondary)] opacity-30 mt-2"></div>
          </div>
        </div>

        {/* Right Column: Quote and Meta */}
        <div className="flex flex-col justify-between w-full md:w-3/4 md:pl-24 mt-8 md:mt-0 min-h-[400px]">
          <blockquote className="text-3xl md:text-5xl leading-[1.15] font-medium max-w-4xl transition-opacity duration-300">
            “{t.quote}”
          </blockquote>

          <div className="mt-12 flex items-end gap-16 font-mono text-xs tracking-widest uppercase">
            <span className="text-[var(--secondary)] font-bold">{t.id}</span>
            <div>
              <p className="text-[var(--secondary)] opacity-90">{t.author}</p>
              <p className="text-[var(--secondary)] opacity-60">{t.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;