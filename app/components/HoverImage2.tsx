import React from 'react';
import Image from 'next/image';

/**
 * HoverImage Component
 * Optimized for: LCP (Largest Contentful Paint), SEO, and Accessibility.
 * Focus: Digital Agency Services - UI/UX, Web Dev, AI, and Marketing.
 */
const HoverImage = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center p-4 bg-transparent">
      <div className="w-full md:w-[70%] lg:w-[70%]">
        <figure className="relative overflow-hidden rounded-[2rem] aspect-[16/11]">
          <Image
            src="/AboutImages/meeting.webp"
            // SEO: High-intent long-tail keywords in alt text
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
              my-5
              cursor-pointer
            "
            loading="lazy"
          />
          {/* SEO Hidden Text for Search Crawlers (Accessibility & Rankings) */}
          <figcaption 
  id="agency-service-overview"
  className="sr-only" 
  title="Antrosys | Industry-Leading Digital Engineering & Creative Solutions"
  aria-label="Antrosys service overview: Specializing in AI Art, Custom SaaS, Full-Stack Web/Mobile Development, and Elite BPO Solutions"
>
  Antrosys: A Global Leader in Digital Transformation. Our firm delivers 
  High-Performance Full-Stack Engineering, Next-Gen AI Software, 
  Enterprise UI/UX Design, and Bespoke Digital Illustrations with a 
  proven portfolio of 1,200+ successful projects.
</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HoverImage;