import React from 'react';
import Image from 'next/image';

/**
 * HoverImage Component
 * Optimized for: LCP, SEO, and Accessibility.
 * Fixed: Removed excessive vertical spacing on mobile.
 */
const HoverImage = () => {
  return (
    // Changed min-h-screen to md:min-h-screen so it doesn't force height on mobile
    // Reduced padding on mobile (py-8) vs desktop (p-4)
    <section className="flex md:min-h-screen w-full items-center justify-center py-8 px-4 bg-transparent">
      <div className="w-full md:w-[70%] lg:w-[70%]">
        <figure className="relative overflow-hidden rounded-[2rem] aspect-[16/11]">
          <Image
            src="/AboutImages/meeting.webp"
            alt="Collaborative digital agency team planning bespoke UI/UX design and AI software development solutions"
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="
              object-cover 
              rounded-[2rem] 
              grayscale 
              transition-all 
              duration-700 
              ease-in-out 
              hover:grayscale-0 
              hover:scale-[1.02]
              shadow-2xl
              /* Removed my-5 as it conflicts with 'fill' and causes layout issues */
              cursor-pointer
            "
            priority // Suggestion: If this is an LCP element (top of page), use priority instead of lazy
          />
          <figcaption 
            id="agency-service-overview"
            className="sr-only" 
          >
            Antrosys: A Global Leader in Digital Transformation. Our firm delivers 
            High-Performance Full-Stack Engineering, Next-Gen AI Software, 
            Enterprise UI/UX Design, and Bespoke Digital Illustrations.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HoverImage;