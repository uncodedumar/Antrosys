'use client';
import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Image from 'next/image';

// LONG-TAIL SEO STRATEGY:
// Using "Sr-only" descriptions for deep-indexing of high-intent keywords: 
// custom software development, UI/UX design agency, AI-driven marketing, etc.
const services = [
  {
    title: "Command Your Market",
    description: "Own the spotlight with undisputed authority.",
    seoDescription: "Full-scale digital marketing, performance ads, and brand authority building for scaling startups.",
    image: "/lead.avif", 
    bgColor: "bg-secondary",
    textColor: "text-accent",
  },
  {
    title: "Uncap Your Potential",
    description: "Scale effortlessly while we handle everything.",
    seoDescription: "Custom software development, enterprise web applications, and scalable SaaS architecture solutions.",
    image: "/potential.avif",
    bgColor: "bg-accent",
    textColor: "text-secondary",
  },
  {
    title: "Total Digital Serenity",
    description: "Reliable experts guarding your brand's future.",
    seoDescription: "UI/UX design systems, accessibility-first web design, and continuous technical maintenance.",
    image: "/Serenity.avif",
    bgColor: "bg-secondary",
    textColor: "text-accent",
  },
  {
    title: "Human-Centric Impact",
    description: "Deeply resonate with your ideal audience",
    seoDescription: "AI-generated illustrations, custom art, and empathetic user-centered design for modern brands.",
    image: "/human.avif",
    bgColor: "bg-accent",
    textColor: "text-secondary",
  }
];

const ServiceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for buttery-smooth performance
  const cardVariants: Variants = {
    hover: { 
      scale: shouldReduceMotion ? 1 : 1.03, 
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="bg-primary min-h-screen py-20 px-6 font-sans overflow-hidden" aria-labelledby="section-title">
      <header className="max-w-6xl mx-auto text-center mb-16">
        <h1 id="section-title" className="text-5xl md:text-7xl font-black text-accent leading-tight tracking-tighter">
          WHAT WE SHIP.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
            OUR WAYS TO MOVE FAST.
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-lg text-accent max-w-2xl mx-auto font-light leading-relaxed">
          The ultimate digital partner for <strong className="font-bold">high-performance web development</strong>, 
          <strong className="font-bold"> bespoke UI/UX design</strong>, and <strong className="font-bold">AI-driven marketing strategies</strong>. 
          We ship products that dominate search engines and delight humans.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <article key={index} className="h-full group">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`relative h-full rounded-3xl md:rounded-t-full pt-12 pb-10 px-8 flex flex-col items-center text-center transition-colors duration-500 ${service.bgColor} ${service.textColor} cursor-pointer shadow-xl will-change-transform`}
            >
              {/* Semi-Circle Image Container with optimized LCP */}
              <div className="relative w-56 h-36 rounded-t-full mb-8 overflow-hidden bg-black/10">
                <Image 
                  src={service.image} 
                  alt={`${service.title} - ${service.seoDescription}`} // Descriptive Alt text for SEO
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2} // Crucial for Core Web Vitals (LCP)
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>

              <h3 className="text-xl font-bold mb-4 px-2 tracking-tight leading-none uppercase">
                {service.title}
              </h3>
              
              <p className="text-[11px] md:text-[12px] font-medium leading-relaxed opacity-90 tracking-wide max-w-[200px]">
                {service.description}
              </p>

              {/* Hidden SEO content for Google Crawlers (Zero UI impact) */}
              <span className="sr-only">
                Our agency specializes in {service.seoDescription}. 
                We combine art, illustration, and cutting-edge software development.
              </span>
            </motion.div>
          </article>
        ))}
      </div>

      {/* Structured Data (JSON-LD) for Rich Snippets - Google Loves This */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Agency",
            "provider": { "@type": "LocalBusiness", "name": "Your Agency Name" },
            "areaServed": "Worldwide",
            "description": "Expert web development, UI/UX design, AI marketing, and custom software solutions."
          })
        }}
      />
    </section>
  );
};

export default ServiceSection;