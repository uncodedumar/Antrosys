"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  "https://api.dicebear.com/7.x/shapes/svg?seed=1",
  "https://api.dicebear.com/7.x/shapes/svg?seed=6",
  "https://api.dicebear.com/7.x/shapes/svg?seed=3",
  "https://api.dicebear.com/7.x/shapes/svg?seed=8",
  "https://api.dicebear.com/7.x/shapes/svg?seed=9",
];

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [imgIndex, setImgIndex] = useState(0);

  // 1. Handle Position via direct DOM manipulation (Extreme Speed)
  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Use translate3d to trigger GPU acceleration
      follower.style.transform = `translate3d(${e.clientX + 15}px, ${e.clientY + 15}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Cycle images (State is okay here since it's infrequent)
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={followerRef}
      className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{ 
        // We remove transition-all because it adds lag to a cursor follower
        // If you want a "trailing" effect, use a very short transition on transform only
        transition: 'transform 0.05s linear' 
      }}
    >
      <Image 
        src={images[imgIndex]} 
        alt="" 
        width={24}
        height={24}
        className="w-6 h-6 rounded-full shadow-sm"
        aria-hidden="true"
        unoptimized
      />
    </div>
  );
};

export default CursorFollower;