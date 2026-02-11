'use client';

import React, { useMemo, memo } from 'react';
import Image from 'next/image';
import { ServicePageData } from '@/lib/data';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

type IconMap = Record<string, React.ComponentType<{ className?: string; ariaHidden?: boolean }>>;
const iconMap: IconMap = { ...SiIcons, ...FaIcons, ...GiIcons };

interface Props {
  data: ServicePageData['serviceSuite'];
}

// Sub-component for performance: Memoizing individual cards prevents re-renders of the entire grid
const ServiceCard = memo(({ card }: { card: any }) => {
  const IconComponent = iconMap[card.icon];
  const isImageUrl = card.icon.startsWith('/') || card.icon.startsWith('http');

  return (
    <article
      className="group relative p-8 md:p-10 border-r border-b border-white/10 
                 hover:bg-white/[0.04] transition-all duration-700 ease-in-out
                 flex-1 hover:flex-[1.5] overflow-hidden cursor-default"
    >
      {/* SEO & Accessibility: Hidden heading for context if needed, but keeping UI clean */}
      <div className="mb-10 inline-flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
        {isImageUrl ? (
          <div className="relative w-12 h-12">
            <Image 
              src={card.icon} 
              alt={`${card.heading} icon`} // Improved Alt Text for SEO
              fill
              loading="lazy"
              className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
              sizes="48px"
            />
          </div>
        ) : IconComponent ? (
          <IconComponent 
            className="w-10 h-10 text-white/60 group-hover:text-secondary transition-colors duration-500" 
            aria-hidden="true" 
          />
        ) : null}
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
          {card.heading}
        </h3>
        {/* SEO: Long-tail keywords should be passed via {card.text} from your data file */}
        <p className="text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-4 lg:line-clamp-none">
          {card.text}
        </p>
      </div>
      
      {/* Sexy visual glow element */}
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
         <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_2px_rgba(var(--secondary-rgb),0.8)]" />
      </div>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

const FrontEndServiceSuite: React.FC<Props> = ({ data }) => {
  // Memoize rows to ensure zero layout shift on re-renders
  const rows = useMemo(() => {
    const res = [];
    for (let i = 0; i < data.cards.length; i += 3) {
      res.push(data.cards.slice(i, i + 3));
    }
    return res;
  }, [data.cards]);

  return (
    <section 
      className="bg-primary text-white py-16 px-4 sm:px-8 lg:py-24"
      aria-labelledby="service-suite-title"
    >
      <div className="max-w-7xl mx-auto mb-16 lg:mb-20">
        <header className="max-w-4xl">
          <h2 
            id="service-suite-title"
            className="text-4xl text-secondary md:text-5xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[1.05]"
          >
            {data.title}
          </h2>
          <p className="font-light text-lg md:text-2xl leading-relaxed text-gray-300 max-w-2xl">
            {data.description}
          </p>
        </header>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto flex flex-col border-t border-l border-white/10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col lg:flex-row w-full overflow-hidden">
            {row.map((card, index) => (
              <ServiceCard key={`${rowIndex}-${index}`} card={card} />
            ))}
            {/* Fill empty slots */}
            {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
              <div key={`empty-${i}`} className="flex-1 border-r border-b border-white/10 hidden lg:block" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontEndServiceSuite;