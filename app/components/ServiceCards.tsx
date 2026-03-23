'use client';
import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-primary min-h-[60vh] flex items-center py-16 md:py-20 px-4 md:px-6 font-sans overflow-hidden" aria-labelledby="section-title">
      <header className="max-w-6xl mx-auto text-center w-full">
        {/* Adjusted text sizes: text-3xl for mobile, text-5xl for tablets, text-7xl for desktop */}
        <h1 
          id="section-title" 
          className="text-3xl sm:text-5xl md:text-7xl font-medium leading-[1.1] tracking-tighter uppercase break-words"
        >
          <span className="text-secondary block md:inline">
            we create striking concepts and branding 
          </span> 
          <span className="text-accent block md:inline">
            {" "}_that helps your business grow fast
          </span>
        </h1>
      </header>

      {/* Structured Data (JSON-LD) for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Agency",
            "provider": { "@type": "LocalBusiness", "name": "Antrosys" },
            "areaServed": "Worldwide",
            "description": "Expert branding, web development, UI/UX design, and custom software solutions."
          })
        }}
      />
    </section>
  );
};

export default ServiceSection;