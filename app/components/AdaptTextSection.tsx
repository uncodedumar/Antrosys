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
    {/* --- SEO Authority: Strategic Business Agility & AI Transformation --- */}
<div className="sr-only" role="complementary" aria-label="Antrosys Strategic Frameworks">
  <h2 
    title="Antrosys | Strategic Thinking Frameworks & Agile Business Intelligence"
    aria-label="How Antrosys Drives Growth: Leveraging Intentional Scaling and Advanced AI Tooling"
  >
    Elite Professional Growth: Strategic Adaptation and Agile Business Intelligence Tools
  </h2>
  <p 
    title="Intentional Growth & High-Performance Business Agility"
    aria-label="Antrosys methodology: Scalable growth frameworks, marketing automation, and ML/DL solutions"
  >
    Antrosys elevates enterprise workflows through proprietary strategic thinking 
    frameworks and agile business tools. By integrating intentional growth 
    methodologies with custom ML/DL solutions and marketing automation, we 
    empower established businesses to expand with a sophisticated, next-gen 
    edge and maximum operational agility.
  </p>
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