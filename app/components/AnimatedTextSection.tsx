"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type Alignment = "start" | "center" | "end";

interface WordItem {
  word: string;
  alignment: Alignment;
}

interface AnimatedSectionProps {
  words: WordItem[];
}

const getXTransform = (alignment: Alignment) => {
  switch (alignment) {
    case "start":
      return ["30%", "0%"];
    case "center":
      return ["-10%", "-20%"];
    case "end":
      return ["-5%", "-30%"];
    default:
      return ["0%", "0%"];
  }
};

const AnimatedTextSection: React.FC<AnimatedSectionProps> = ({ words }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      className="relative bg-black text-white py-22 md:py-24 overflow-hidden"
      ref={containerRef}
    >
      {/* --- Text Content Layer --- */}
      <div className="container mx-auto px-4 relative z-10">
        {words.map((item, index) => {
          const xTransform = getXTransform(item.alignment);
          const start = index * 0.09;
          const end = start + 0.55;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const x = useTransform(scrollYProgress, [start, end], xTransform);
          const y = useTransform(
            scrollYProgress,
            [start, end],
            ["60px", "0px"]
          );

          return (
            <motion.div
              key={`${item.word}-${index}`}
              style={{ x, opacity, y }}
              className={`
                text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
                font-extrabold whitespace-nowrap leading-tight tracking-tight  uppercase mb-1   md:mb-1
                ${item.alignment === "start" ? "mr-auto text-left" : ""} 
                ${item.alignment === "end" ? "ml-auto text-right" : ""}
              `}
            >
              {item.word}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTextSection;
