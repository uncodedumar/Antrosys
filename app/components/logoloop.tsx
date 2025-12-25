'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageData } from '@/lib/data';

interface LogoLoopProps {
  data: ServicePageData['logoLoop'];
}

const LogoItem = ({ logoUrl, index }: { logoUrl: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      // Increased mx-12 for better spacing between logos
      className="flex-shrink-0 mx-10 md:mx-14 group cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={logoUrl}
          alt={`Partner Logo ${index}`}
          className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300"
          loading="eager"
        />
      </div>
    </motion.div>
  );
};

const LogoCarousel = ({ 
  logos, 
  direction = 'right', 
  speed = 40 
}: { 
  logos: string[]; 
  direction?: 'right' | 'left'; 
  speed?: number 
}) => {
  // Determine animation name based on direction
  const animationName = direction === 'right' ? 'scroll-right' : 'scroll-left';

  return (
    <div className="relative py-4">
      <div className="overflow-hidden">
        <div 
          className="flex w-max animate-scroll-infinite" 
          style={{
            animation: `${animationName} ${speed}s linear infinite`
          }}
        >
          {/* First set */}
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <LogoItem key={`row-${direction}-1-${index}`} logoUrl={logo} index={index} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <LogoItem key={`row-${direction}-2-${index}`} logoUrl={logo} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Side gradients to hide edges */}
      <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default function LogoLoopSection({ data }: LogoLoopProps) {
  const logos = data?.logos || [];
  
  // Logical split for two rows
  const midPoint = Math.ceil(logos.length / 2);
  const firstRowLogos = logos.slice(0, midPoint);
  const secondRowLogos = logos.slice(midPoint);

  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* First Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <LogoCarousel
            logos={firstRowLogos}
            direction="right"
            speed={40}
          />
        </motion.div>

        {/* Second Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LogoCarousel
            logos={secondRowLogos}
            direction="left"
            speed={45}
          />
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}