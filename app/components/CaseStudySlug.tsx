"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface CaseStudyProps {
  data: {
    title: string;
    description: string;
    paragraph: string;
    images: string[];
    testimonial: {
      stars: number;
      text: string;
      author: string;
      position: string;
      image: string;
    };
  } | undefined;
}

const CaseStudySlug: React.FC<CaseStudyProps> = ({ data }) => {
  if (!data) return null;

  // SEO: Structured Data for Google (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "name": data.title,
    "description": data.description,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": data.testimonial.stars,
        "bestRating": "5"
      },
      "author": { "@type": "Person", "name": data.testimonial.author },
      "reviewBody": data.testimonial.text
    }
  };

  const hoverAnimation = {
    whileHover: { scale: 1.015, rotate: 0.5 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  };

  return (
    <article className="mx-2 flex flex-col items-center  overflow-x-hidden bg-primary ">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <header className="max-w-4xl w-full text-center mt-20 mb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 text-secondary tracking-tight">
          {data.title}
        </h1>
        <div className="space-y-6 text-lg md:text-xl text-accent leading-relaxed max-w-5xl mx-auto">
          <p className="font-light">{data.description}</p>
          <p>{data.paragraph}</p>
        </div>
      </header>

      {/* Image Gallery Grid */}
      <section className="w-full max-w-7xl flex flex-col gap-6 px-4" aria-label="Project Gallery">
        
        {/* 1. Full Width - LCP OPTIMIZED */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video bg-gray-50">
          <Image 
            src={data.images[0]} 
            alt={`${data.title} main showcase`} 
            fill 
            priority // First image loads immediately for SEO/Speed
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </motion.div>

        {/* 2 & 3. Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {[data.images[1], data.images[2]].map((img, idx) => (
            <motion.div key={idx} {...hoverAnimation} className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm relative aspect-video bg-gray-50">
              <Image 
                src={img} 
                alt={`${data.title} detail ${idx + 2}`} 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* 4. Full Width */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video bg-gray-50">
          <Image 
            src={data.images[3]} 
            alt={`${data.title} feature display`} 
            fill 
            loading="lazy"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </motion.div>

        {/* 5 & 6. Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {[data.images[4], data.images[5]].map((img, idx) => (
            <motion.div key={idx} {...hoverAnimation} className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm relative aspect-video bg-gray-50">
              <Image 
                src={img} 
                alt={`${data.title} secondary detail ${idx + 5}`} 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* 7. Full Width */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video bg-gray-50">
          <Image 
            src={data.images[6]} 
            alt={`${data.title} final presentation`} 
            fill 
            loading="lazy"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </motion.div>
      </section>

      <footer className="flex flex-col items-center w-full">
    
        {/* Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-[95%] md:w-[60%] bg-[#4c1d95] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative my-10"
        >
          {/* Star Rating */}
          <div className="flex gap-1 mb-8" aria-label={`${data.testimonial.stars} star rating`}>
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={22} 
                fill={i < data.testimonial.stars ? "#f97316" : "none"} 
                color={i < data.testimonial.stars ? "#f97316" : "#7c3aed"} 
              />
            ))}
          </div>

          <blockquote className="text-xl md:text-3xl font-medium italic leading-tight mb-10">
            &ldquo;{data.testimonial.text}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400">
              <Image 
                src={data.testimonial.image} 
                alt={data.testimonial.author} 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-xl">{data.testimonial.author}</p>
              <p className="text-purple-200 text-sm tracking-wide uppercase">{data.testimonial.position}</p>
            </div>
          </div>
        </motion.div>
      </footer>
    </article>
  );
};

export default CaseStudySlug;