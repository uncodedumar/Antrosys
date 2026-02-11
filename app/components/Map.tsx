import React from 'react';
import Image from 'next/image';

/**
 * High-Performance SEO-Optimized Global Presence Map
 * Target Keywords: Custom UI/UX Design Agency, Scalable Software Development, 
 * AI-Driven Marketing Solutions, Digital Product Illustration.
 */
const Map: React.FC = () => {
  // Long-tail SEO description for Accessibility & Google Bots
  const seoDescription = "Global digital agency network specializing in bespoke UI/UX design, full-stack software development, AI-powered marketing strategies, and custom digital illustrations for high-growth brands.";

  return (
    <section 
      aria-label="Our Global Digital Presence"
      className="map-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem 10px', // Standardized spacing
        overflow: 'hidden'
      }}
    >
      <div 
        className="map-wrapper"
        style={{
          width: '100%',
          maxWidth: '1200px', // Slightly wider for better visual impact
          position: 'relative',
        }}
      >
        <Image
          src="/CoLogo/map.svg"
          alt={seoDescription}
          title="Global Reach: UI/UX & Software Development Agency"
          // 'priority' ensures this loads immediately (improves LCP)
          priority 
          // 'intrinsic' or 'responsive' via style
          width={1200}
          height={600}
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{ 
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.05))', // Subtle "sexy" lift
          }}
        />
        
        {/* Hidden SEO Keyword Injection for Search Crawlers */}
        <div style={{ display: 'none' }}>
          <h2>Leading Digital Agency for Web & App Development</h2>
          <p>Expertise in Adobe Creative Cloud, React.js, Next.js, and AI-driven art illustrations.</p>
          <p>Specializing in performance-first ads, marketing automation, and smooth UI transitions.</p>
        </div>
      </div>
    </section>
  );
};

export default Map;