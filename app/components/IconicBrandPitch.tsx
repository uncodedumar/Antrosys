import React, { memo } from 'react';

interface IconicBrandPitchProps {
  /** The high-impact pitch text */
  children: React.ReactNode;
  /** Hidden SEO title for crawlers (important for ranking) */
  seoTitle?: string;
  /** Tailwind accent color class */
  accentClass?: string;
  /** Optional additional classes */
  className?: string;
}

const IconicBrandPitch: React.FC<IconicBrandPitchProps> = memo(({ 
  children, 
  seoTitle = "Full-Service Digital Agency: UI/UX, Software Development & AI Solutions",
  accentClass = "", 
  className = "" 
}) => {
  return (
    <section 
      className={`relative flex flex-col items-center justify-center overflow-hidden py-4 sm:py-8 lg:py-12 ${className}`}
      aria-labelledby="pitch-heading"
    >
      {/* Visually hidden but SEO powerful long-tail keyword header */}
      <h2 id="pitch-heading" className="sr-only">
        {seoTitle}
      </h2>

      <div className="w-full max-w-7xl px-4 md:px-6 mx-auto text-justify">
        <blockquote className={`
          /* Performance & Typography */
          will-change-auto
          text-[1.1rem] leading-relaxed tracking-tight
          sm:text-4xl sm:leading-snug 
          lg:text-5xl lg:leading-normal
          font-light font-sans antialiased
          
          /* Visual State */
          text-accent cursor-default
          selection:bg-cyan-500/30
          
          ${accentClass}
        `}>
          {children}
        </blockquote>
      </div>
    </section>
  );
});

IconicBrandPitch.displayName = 'IconicBrandPitch';

export default IconicBrandPitch;