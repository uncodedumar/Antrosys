'use client';

import { FC } from 'react';

/**
 * AdaptTextSection: High-performance, SEO-optimized hero section.
 * Optimizations: Hardware acceleration, Semantic HTML, and Long-tail keyword injection.
 */
const AdaptTextSection: FC = () => {
  return (
    <section 
      className="relative py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[40vh] overflow-hidden"
      aria-labelledby="section-heading"
    >
      {/* SEO Layer: Hidden from UI, but read by Google. 
        Targeting long-tail keywords like 'agile business tools', 'strategic thinking frameworks', 'intentional growth'.
      */}
      <div className="sr-only">
        <h2>Professional Growth and Strategic Adaptation Tools</h2>
        <p>Elevate your workflow with better digital tools, sharper strategic thinking frameworks, and stronger professional intent for business agility.</p>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 
          id="section-heading"
          className="
            font-extrabold 
            text-secondary
            uppercase 
            leading-tight 
            tracking-tighter
            cursor-default
            
            /* Responsive Fluid Typography */
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl

            /* Performance & Smoothness */
            transition-transform 
            duration-500 
            ease-[cubic-bezier(0.23,1,0.32,1)]
            will-change-transform
            hover:scale-[1.05]
            hover:text-accent
            
            /* Selection styling for that 'sexy' feel */
            selection:bg-accent selection:text-white
          "
        >
          <span className="block">ADAPT WITH BETTER TOOLS, SHARPER</span>
          <span className="block text-accent-content">THINKING, AND STRONGER INTENT.</span>
        </h1>
        
        {/* Subtle Decorative element for 'depth' without changing UI layout */}
        <div className="mt-4 h-1 w-24 bg-accent/20 mx-auto rounded-full blur-[1px]" />
      </div>
    </section>
  );
};

export default AdaptTextSection;