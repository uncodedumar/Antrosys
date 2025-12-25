"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MEDIA_ITEMS = [
  { video: "/Herobg.mp4", poster: "/a.webp" },
  { video: "/Herobg.mp4", poster: "/b.webp" },
  { video: "/Herobg.mp4", poster: "/c.webp" },
  { video: "/Herobg.mp4", poster: "/d.webp" },
  { video: "/Herobg.mp4", poster: "/a.webp" },
  { video: "/Herobg.mp4", poster: "/b.webp" },
  { video: "/Herobg.mp4", poster: "/c.webp" }, // Index 7 (Center)
  { video: "/Herobg.mp4", poster: "/d.webp" },
  { video: "/Herobg.mp4", poster: "/a.webp" },
  { video: "/Herobg.mp4", poster: "/b.webp" },
  { video: "/Herobg.mp4", poster: "/c.webp" },
  { video: "/Herobg.mp4", poster: "/d.webp" },
  { video: "/Herobg.mp4", poster: "/a.webp" },
  { video: "/Herobg.mp4", poster: "/b.webp" },
  { video: "/Herobg.mp4", poster: "/c.webp" },
];

export default function ZoomGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 4.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="hidden lg:block">
      <div ref={containerRef} className="relative h-[400vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Key Changes:
              1. Added 'gap-4' (or any value) for equal X and Y spacing.
              2. Removed 'h-full' and 'max-h-screen' from the grid to let items 
                 define height naturally based on width + gap.
              3. Added 'p-4' to match the gap for edge symmetry.
          */}
          <div className="grid grid-cols-5 gap-4 w-full p-4 items-center justify-center mx-auto">
            {MEDIA_ITEMS.map((item, index) => {
              const isCenter = index === 7;

              return (
                <motion.div
                  key={index}
                  style={isCenter ? { scale, zIndex: 50 } : { opacity }}
                  className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 group"
                >
                  <video
                    src={item.video}
                    poster={item.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}