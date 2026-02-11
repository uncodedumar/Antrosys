import React from 'react';
import Image from 'next/image';

/**
 * CoooperMsg Component
 * Optimized for SEO, Performance (LCP), and Accessibility.
 * Removes vertical whitespace while maintaining responsive typography.
 */
const CoooperMsg: React.FC = () => {
  return (
    <section className="bg-transparent w-full py-4 sm:py-8" aria-labelledby="ceo-message">
      <div className="max-w-5xl mx-auto px-4 text-left">
        <blockquote className="m-0">
          <p className="font-light text-base sm:text-2xl lg:text-2xl text-accent transition-all duration-700 ease-in-out leading-relaxed">
            <strong className="font-light text-secondary" id="ceo-message">Mr. Ryaz</strong>
            
            {/* Optimized Profile Image Container */}
            <span className="inline-flex items-center mx-2 align-middle relative h-[2.5em] w-[3em] sm:h-[2em] sm:w-[4em]">
              <Image 
                src="/AboutImages/Team/CEO.webp" 
                alt="Mr. Ryaz, CEO of Antrosys - Professional Software Solutions"
                width={96}
                height={80}
                loading="eager"
                priority
                className="inline-block rounded-full h-full w-full object-cover shadow-sm border border-white/90"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </span>

            {/* Content optimized with long-tail keyword placement */}
            founded <span className="font-light text-secondary"> Antrosys</span> with a simple but uncompromising belief: 
            clients don’t need more promises, they need <strong className="font-light text-secondary"> real software outcomes</strong>. 
            Every project we take on is treated as a responsibility, not a transaction. 
            Our mission is to <strong className="font-light text-secondary"> remove digital complexity </strong>, build systems that actually work, 
            and give our clients clarity, confidence, and momentum in a 
            <strong className="font-light text-secondary"> fast-moving digital world</strong>. We combine experience, discipline, and 
            <strong className="font-light text-secondary"> forward-thinking technology</strong> to deliver <strong className="font-light text-secondary"> high-performance digital products</strong> 
            that last beyond trends. When you choose Antrosys, you’re choosing a team that 
            listens deeply, executes precisely, and is fully invested in your 
            <strong className="font-light text-secondary"> long-term business success</strong>.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default CoooperMsg;