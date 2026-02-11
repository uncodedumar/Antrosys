"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

const iconMap: Record<string, IconType> = { ...SiIcons, ...FaIcons, ...GiIcons };

interface IndustryItem {
  icon: string | IconType;
  heading: string;
  text: string;
}

// Performance: Memoized Card with SEO-friendly semantics
const IndustryCard = React.memo(({ item, index }: { item: IndustryItem; index: number }) => {
  const IconComponent = typeof item.icon === 'string' ? iconMap[item.icon] : item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col items-start p-6 rounded-3xl transition-all duration-500 hover:bg-white/[0.02] will-change-transform"
    >
      {/* Background Glow - Optimized with will-change */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#EF571B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
      
      {/* Icon Container */}
      <div className="relative mb-6 text-secondary transition-transform duration-500 group-hover:scale-110 will-change-transform">
        {IconComponent ? (
          <IconComponent size={50} aria-hidden="true" />
        ) : (
          <img 
            src={typeof item.icon === 'string' && (item.icon.startsWith('/') || item.icon.startsWith('http')) ? item.icon : `/icons/${item.icon}.svg`}
            alt={`${item.heading} icon`} 
            loading="lazy"
            className="w-12 h-12 object-contain brightness-90 group-hover:brightness-110" 
          />
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-medium text-lg mb-2 tracking-tight group-hover:text-[#EF571B] transition-colors duration-300">
          {item.heading}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
});

IndustryCard.displayName = "IndustryCard";

export default function IndustrySection({ data }: { data: { title: string, description: string, items: IndustryItem[] } }) {
  const { title, description, items } = data;

  // SEO: Generate JSON-LD for Services to rank for long-tail keywords
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency Services",
    "provider": { "@type": "LocalBusiness", "name": "Your Agency Name" },
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Expertise",
      "itemListElement": items.map((item, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.heading,
          "description": item.text
        }
      }))
    }
  }), [description, items]);

  return (
    <section className="relative bg-background py-24 px-4 sm:px-6 overflow-hidden" aria-labelledby="expertise-title">
      {/* SEO: Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#EF571B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block"
              >
                Our Expertise
              </motion.span>
              <motion.h2 
                id="expertise-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter"
              >
                {title}
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-zinc-500 max-w-sm text-lg font-light leading-snug"
            >
              {description}
            </motion.p>
          </div>
        </header>

        {/* Optimized Grid with Semantic Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8" role="list">
          {items.map((item, index) => (
            <div role="listitem" key={`${item.heading}-${index}`}>
                <IndustryCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Footer Detail */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-[#EF571B]/40 to-transparent mb-6" aria-hidden="true" />
          <p className="text-zinc-500 tracking-normal text-lg font-light">
            Pushing boundaries in <span className="text-white font-medium">AI-Driven Development</span> & <span className="text-white font-medium">Immersive Design</span>.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}