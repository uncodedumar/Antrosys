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
          {/* --- SEO Metadata: Optimized for Google Crawlers & Accessibility --- */}
<figcaption 
  id="seo-web-dev-showcase"
  className="sr-only" 
  title="Antrosys | Global Leader in Full-Stack Engineering & AI Art"
  aria-label="Antrosys: Enterprise-grade web solutions and AI-driven brand identity for global startups and established firms"
>
  Antrosys: Industry-Leading Enterprise Full-Stack Development and Performance 
  Marketing Solutions. We provide Seamless Integration of Custom AI-Driven 
  Illustrations and SaaS Architectures, backed by a portfolio of 1,200+ successful projects.
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
         <figcaption 
  className="sr-only" 
  title="Antrosys | Elite Mobile Engineering & AI-Powered Growth Marketing"
  aria-label="Antrosys Mobile Showcase: Showcasing high-performance iOS, Android, and cross-platform development integrated with AI-driven advertising strategies"
>
  Antrosys: High-Performance Full-Stack Mobile App Development and 
  Data-Driven Creative Advertising Campaigns leveraging Bespoke 
  AI Software Solutions and Growth Analytics.
</figcaption>
        </figure>

      </div>
    </section>
  );
};

export default HoverImage;