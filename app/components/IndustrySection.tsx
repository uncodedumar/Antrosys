// components/IndustrySection.tsx
"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface IndustryItem {
  icon: string;
  heading: string;
  text: string;
}

const IndustryCard = ({ item }: { item: IndustryItem }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      className="relative group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full transition-colors hover:bg-zinc-800/80 hover:border-zinc-700 flex flex-col items-center justify-center text-center cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
        {item.icon && (
          <div className="mb-4 relative w-8 h-8">
            <img 
              src={item.icon.startsWith('/') || item.icon.startsWith('http') ? item.icon : `/icons/${item.icon}.svg`}
              alt={item.heading} 
              className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" 
            />
          </div>
        )}
        <h3 className="text-white font-medium text-lg tracking-tight">
          {item.heading}
        </h3>
        {item.text && (
            <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
                {item.text}
            </p>
        )}
      </div>
    </motion.div>
  );
};

export default function IndustrySection({ data }: { data: any }) {
  const { title, description, items } = data;

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {title}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item: IndustryItem, index: number) => (
            <IndustryCard key={index} item={item} />
          ))}
        </div>
       
      </div>
      <div className="bg-transparent flex min-h-[200px] w-full items-center">
      <div className="max-w-2xl mx-auto text-center font-light">
        <p className={`
          text-base sm:text-lg lg:text-2xl
          text-accent
        `}>
         And many more!
        </p>
      </div>
    </div>
    </section>
  );
}