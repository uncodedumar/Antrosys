"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    percentage: "+ 101%",
    title: "CUSTOM WEB APP DEVELOPMENT & AI INTEGRATION",
    description: "We turn radical AI concepts into functional, scalable market leaders. From LLM implementation to complex SaaS architecture.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    alt: "AI Software Development and Tech Stack"
  },
  {
    percentage: "+ 246%",
    title: "ROI-DRIVEN UI/UX DESIGN & DIGITAL ART",
    description: "Dominating FinTech, Fashion, and E-commerce with high-conversion interfaces and bespoke brand illustrations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    alt: "High-end UI/UX Design Interface"
  },
  {
    percentage: "+ 312%",
    title: "ENTERPRISE SOFTWARE & SCALE-UP SOLUTIONS",
    description: "Precision-engineered systems for joint-stock giants and local scale-ups. Architecture that never breaks.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    alt: "Enterprise Software Architecture"
  },
  {
    percentage: "+ 180%",
    title: "PERFORMANCE MARKETING & ADS STRATEGY",
    description: "We don't just run ads; we build profit engines through data-driven performance marketing and aggressive SEO.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    alt: "Data-driven Marketing Analytics"
  },
];

// Sub-component for each card to manage its own mouse state
interface StatCardProps {
  stat: {
    percentage: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to a subtle movement range (e.g., -20px to 20px)
  const moveX = useTransform(mouseX, [0, 1], [-20, 20]);
  const moveY = useTransform(mouseY, [0, 1], [-20, 20]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    x.set(mouseXPos / width);
    y.set(mouseYPos / height);
  }

  function handleMouseLeave() {
    x.set(0.5); // Reset to center
    y.set(0.5);
  }

  return (
    <motion.div
      layout
      initial={{ flex: 1 }}
      whileHover={{ flex: 3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25, 
        mass: 0.8,
        layout: { duration: 0.35 } 
      }}
      className="group relative min-h-[350px] md:min-h-full overflow-hidden cursor-pointer bg-zinc-900 rounded-xl border border-white/5 will-change-[flex,transform]"
    >
      {/* Moving Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-[filter] duration-1000"
        style={{ 
          backgroundImage: `url(${stat.image})`,
          x: moveX,
          y: moveY,
          scale: 1.1, // Scale up slightly so edges don't show when moving
        }}
        role="img"
        aria-label={stat.alt}
      >
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 group-hover:bg-black/20 transition-colors duration-700" />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end pointer-events-none">
        <motion.span layout="position" className="text-4xl md:text-5xl font-black mb-2 block tracking-tighter text-white">
          {stat.percentage}
        </motion.span>
        
        <motion.h3 layout="position" className="text-lg md:text-xl font-bold leading-tight mb-4 uppercase tracking-widest text-zinc-100">
          {stat.title}
        </motion.h3>

        <div className="overflow-hidden">
          <p className="text-base text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out max-w-sm">
            {stat.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function StatisticsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-5xl mb-16">
        <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          Digital Mastery. <br />
          <span className="text-zinc-500">No Bullsh*t.</span>
        </h2>
        <p className="mt-6 text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
          While competitors follow "best practices," we engineer the future. 
          Our metrics prove a relentless obsession with 
          <span className="text-white"> web app development, UI/UX perfection, and AI-driven growth.</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
}