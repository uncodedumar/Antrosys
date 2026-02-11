import React from 'react';

/**
 * High-Performance Portfolio Section
 * Optimized for: Core Web Vitals, Long-tail SEO, and Accessibility.
 */
const HoverImage = () => {
  return (
    // Sectioning tag for SEO hierarchy
    <section className="flex min-h-screen w-full items-center justify-center p-4 bg-transparent" aria-label="Digital Creative Showcase">
      <div className="w-full md:w-[70%] lg:w-[70%]">
        
        {/* Figure 1: Digital Strategy & UI/UX Development */}
        <figure className="relative group overflow-hidden rounded-[2rem] my-5 shadow-2xl">
          <img
            src="/hover/artai.avif" // Reduced width for faster LCP
           
            sizes="(max-width: 768px) 100vw, 70vw"
            alt="Custom software development and AI-driven UI/UX design for digital agencies"
            loading="eager" // Priority for top image
            decoding="async"
            className="
              w-full 
              h-[400px] md:h-[550px] 
              object-cover 
              transition-all 
              duration-700 
              ease-in-out 
              hover:grayscale-0 
              transform 
              will-change-transform
              hover:scale-[1.02]
            "
          />
          {/* SEO Metadata Hidden from UI but visible to Crawlers */}
          <figcaption className="sr-only">
            Innovative digital marketing strategies and full-stack web development services 
            integrating AI illustrations and custom art.
          </figcaption>
        </figure>

        {/* Figure 2: Creative Art & Illustration Agency Services */}
        <figure className="relative group overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src="/hover/girl.avif"
            alt="Professional brand identity, digital advertising, and bespoke 2D/3D art illustrations"
            loading="lazy" // SEO/Speed win: only loads when user scrolls
            decoding="async"
            className="
              w-full 
              h-[400px] md:h-[550px] 
              object-cover 
              
              transition-all 
              duration-700 
              ease-in-out 
              hover:grayscale-0 
              transform 
              will-change-transform
              hover:scale-[1.02]
            "
          />
          <figcaption className="sr-only">
            High-performance mobile app development and creative advertising campaigns 
            using cutting-edge AI software tools.
          </figcaption>
        </figure>

      </div>
    </section>
  );
};

export default HoverImage;