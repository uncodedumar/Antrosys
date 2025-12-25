"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServicePageData } from "@/lib/data"; // Adjust path as needed

interface FinalSectionProps {
  data: ServicePageData["finalSection"];
}

const FinalSection = ({ data }: FinalSectionProps) => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <ServiceCard 
                key={index} 
                card={card} 
                index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ card, index }: { card: any; index: number }) => {
  const isBlack = index === 0 || index === 8;

  return (
    <motion.div
      initial="initial"
      whileHover="hover" // This triggers 'hover' variants in children
      variants={{
        hover: {
          scale: 1.05,
          rotateX: 5,
          rotateY: -5,
          zIndex: 50,
        }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative p-8 rounded-2xl flex flex-col min-h-[280px] transition-colors duration-300 shadow-xl overflow-hidden ${
        isBlack 
          ? "bg-[#0a0a0a] text-white border border-neutral-800" 
          : "bg-white text-black"
      }`}
    >
      {/* Orange Floating Circle */}
      <motion.div
        variants={{
          initial: { x: "100%", y: "100%", opacity: 0 },
          hover: { x: "50%", y: "50%", opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-60 pointer-events-none"
      />
      
      {/* Actual Circle Shape (Sharp edge) */}
      <motion.div
        variants={{
          initial: { x: "100%", y: "100%" },
          hover: { x: "20%", y: "20%" }
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute bottom-0 right-0 w-44 h-44 bg-orange-600 rounded-full z-0 pointer-events-none blur"
      />

      <div className="relative z-10 flex justify-between items-start mb-8">
        {/* Logo/Icon */}
        <div className="relative w-10 h-10">
          <img
            src={card.icon}
            alt="icon"
            className={`w-full h-full object-contain ${isBlack ? "invert-0" : "invert"}`}
          />
        </div>
        
        {/* Count Heading */}
        <span className="text-4xl font-light tracking-tighter">
          {card.countHeading}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold mb-3 leading-tight">
          {card.textHeading}
        </h3>
        <p className={`text-sm leading-relaxed ${isBlack ? "text-gray-400" : "text-gray-600"}`}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FinalSection;