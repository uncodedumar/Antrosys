'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { ServicePageData } from '@/lib/data';
import { IconType } from 'react-icons';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

const iconMap: Record<string, IconType> = { ...SiIcons, ...FaIcons, ...GiIcons };

interface TechStackProps {
  data: ServicePageData['techStack'];
}

const TechStack: React.FC<TechStackProps> = ({ data }) => {
  // Memoize icons to prevent re-renders during scroll
  const renderedIcons = useMemo(() => iconMap, []);

  // SEO: Structured Data for Tech Stack (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "Your Agency Name"
    },
    "offers": data.items.map(item => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": item.heading,
        "description": item.text
      }
    }))
  };

  return (
    <section 
      className="bg-primary text-accent py-20 px-6 md:px-12 lg:px-24"
      aria-labelledby="tech-stack-title"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-4xl mx-auto text-center mb-20">
        <h2 
          id="tech-stack-title"
          className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
        >
          {data.title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          {data.description}
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 border-t border-gray-800">
        <aside className="lg:w-1/3 pt-12">
          <div className="lg:sticky lg:top-32">
            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              {data.asideText}
            </h3>
          </div>
        </aside>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 border-l border-gray-800">
          {data.items.map((item, index) => {
            const IconComponent = renderedIcons[item.logoUrl];
            const isImageUrl = item.logoUrl.startsWith('/') || item.logoUrl.startsWith('http');
            
            return (
              <article
                key={index}
                className={`flex items-start gap-4 p-8 border-b border-gray-800 transition-colors duration-300 hover:bg-white/[0.02] ${
                  index % 2 === 0 ? 'md:border-r' : ''
                }`}
              >
                <div className="flex-shrink-0 mt-1" aria-hidden="true">
                  {!isImageUrl && IconComponent ? (
                    React.createElement(IconComponent, {
                      className: "w-10 h-10 text-white opacity-90",
                      size: 40
                    })
                  ) : (
                    <Image
                      src={item.logoUrl}
                      alt={`${item.heading} technology logo`}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="opacity-90 object-contain"
                    />
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {item.heading}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;