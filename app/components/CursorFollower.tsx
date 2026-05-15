"use client";

import React, { useState, useEffect, useRef } from 'react';

const cursorBackgrounds = [
  "radial-gradient(circle at 30% 30%, #fb923c, #111827 65%)",
  "radial-gradient(circle at 70% 30%, #f97316, #312e81 70%)",
  "radial-gradient(circle at 45% 65%, #facc15, #7c2d12 68%)",
  "radial-gradient(circle at 60% 40%, #fdba74, #18181b 70%)",
  "radial-gradient(circle at 35% 70%, #fed7aa, #9a3412 66%)",
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
      setImgIndex((prev) => (prev + 1) % cursorBackgrounds.length);
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
      <div
        className="w-6 h-6 rounded-full shadow-sm bg-cover bg-center"
        aria-hidden="true"
        style={{ background: cursorBackgrounds[imgIndex] }}
      />
    </div>
  );
};

export default CursorFollower;
