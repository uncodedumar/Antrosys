"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

/**
 * Helper component for the horizontal infinite scroll
 */
function ParallaxRow({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // This wraps the value between -20% and -45% for a seamless loop
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Speed up based on scroll velocity
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div className="flex whitespace-nowrap flex-nowrap gap-4" style={{ x }}>
        {/* Render children multiple times for infinite effect */}
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function HorizontalGallery() {
  // Sample Image placeholders
  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
  ];

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center ">
      
      {/* FULL WIDTH GALLERY - 3 ROWS */}
      <div className="relative w-full h-[500px] md:h-[700px] flex flex-col justify-center gap-4 overflow-hidden mask-fade-edges">
        
        {/* Row 1 - Moves Right */}
        <ParallaxRow baseVelocity={1}>
          {images.map((src, i) => (
            <div key={i} className="w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-xl overflow-hidden">
              <img src={src} alt="Work" className="w-full h-full object-cover opacity-80" />
            </div>
          ))}
        </ParallaxRow>

        {/* Row 2 - Moves Left */}
        <ParallaxRow baseVelocity={-1}>
          {images.map((src, i) => (
            <div key={i} className="w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-xl overflow-hidden">
              <img src={src} alt="Work" className="w-full h-full object-cover opacity-80" />
            </div>
          ))}
        </ParallaxRow>

        {/* Row 3 - Moves Right */}
        <ParallaxRow baseVelocity={1.2}>
          {images.map((src, i) => (
            <div key={i} className="w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-xl overflow-hidden">
              <img src={src} alt="Work" className="w-full h-full object-cover opacity-80" />
            </div>
          ))}
        </ParallaxRow>

        {/* Dark Overlay/Gradient for blending */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}