"use client";

import React, { useState, useEffect } from 'react';

const images = [
  "https://api.dicebear.com/7.x/shapes/svg?seed=1",
  "https://api.dicebear.com/7.x/shapes/svg?seed=6",
  "https://api.dicebear.com/7.x/shapes/svg?seed=3",
  "https://api.dicebear.com/7.x/shapes/svg?seed=8",
  "https://api.dicebear.com/7.x/shapes/svg?seed=9",
];

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    // 1. Update position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Cycle through images every 300ms
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 500);

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className="hidden lg:block pointer-events-none fixed z-[9999] transition-all duration-75 ease-in-out"
      style={{ 
        left: `${position.x + 15}px`, 
        top: `${position.y + 15}px`,
        transform: 'translate(-50%, -50%)' 
      }}
    >
      <img 
        src={images[imgIndex]} 
        alt="cursor-effect" 
        className="w-8 h-8 rounded-full  shadow-sm" 
      />
    </div>
  );
};

export default CursorFollower;