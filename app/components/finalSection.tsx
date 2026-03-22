"use client";

import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaTrophy, FaCheckCircle, FaUsers, FaClock, FaGlobe,
  FaStar, FaChartLine, FaLock, FaRocket, FaUserFriends
} from "react-icons/fa";

const finalSectionIconMap: Record<string, React.ElementType> = {
  FaTrophy, FaCheckCircle, FaUsers, FaClock, FaGlobe,
  FaStar, FaChartLine, FaLock, FaRocket, FaUserFriends,
};

interface FinalSectionCard {
  icon: string;
  countHeading: string;
  textHeading: string;
  description: string;
}

interface FinalSectionData {
  title: string;
  description: string;
  cards: FinalSectionCard[];
  // Added for SEO injection
  keywords?: string; 
}

interface FinalSectionProps {
  data: FinalSectionData;
}

const FinalSection = ({ data }: FinalSectionProps) => {
  // Generate Structured Data for Google Rich Results
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": data.cards.map((card, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": card.textHeading,
      "description": card.description
    }))
  }), [data.cards]);

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden" aria-labelledby="section-title">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sexy background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 id="section-title" className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            {data.title}
          </h2>
          {/* SEO Long-tail hidden container */}
          <span className="sr-only">
            {data.keywords || "High-performance solutions and professional services for modern businesses."}
          </span>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <ServiceCard 
              key={`${card.textHeading}-${index}`} 
              card={card} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// GPU Accelerated & Viewport Optimized
const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 1 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { 
    scale: 1.03, 
    rotateX: 4, 
    rotateY: -4, 
    transition: { type: "spring", stiffness: 400, damping: 15 } 
  }
};

const ServiceCard = ({ card, index }: { card: FinalSectionCard; index: number }) => {
  const isBlack = index === 0 || index === 8;
  const IconComponent = useMemo(() => finalSectionIconMap[card.icon], [card.icon]);

  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }} // Triggers only when visible
      variants={cardVariants}
      style={{ willChange: "transform, opacity" }}
      className={`relative p-8 rounded-2xl flex flex-col min-h-[280px] shadow-xl overflow-hidden cursor-default group ${
        isBlack ? "bg-stone-900 text-white" : "bg-accent text-black"
      }`}
    >
      {/* Decorative Elements - Using transforms for 60fps smoothness */}
      <motion.div
        variants={{
          initial: { x: "100%", y: "100%", opacity: 0 },
          hover: { x: "40%", y: "40%", opacity: 0.8 }
        }}
        className="absolute bottom-0 right-0 w-100 h-100 bg-[#EF571B] rounded-full blur-3xl pointer-events-none"
      />
      
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div className="relative w-10 h-10 flex items-center justify-center">
          {IconComponent ? (
            <IconComponent 
              className={`w-full h-full transition-transform duration-300 group-hover:scale-110 ${isBlack ? "text-white" : "text-black"}`} 
              aria-hidden="true"
            />
          ) : (
            <img
              src={card.icon}
              alt=""
              loading="lazy"
              className={`w-full h-full object-contain ${isBlack ? "" : "invert"}`}
            />
          )}
        </div>
        
        <span className="text-4xl font-light tracking-tighter" aria-label={`Metric: ${card.countHeading}`}>
          {card.countHeading}
        </span>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold mb-3 leading-tight tracking-tight">
          {card.textHeading}
        </h3>
        <p className={`text-sm leading-relaxed ${isBlack ? "text-gray-400" : "text-gray-700"}`}>
          {card.description}
        </p>
      </div>
    </motion.article>
  );
};

export default FinalSection;