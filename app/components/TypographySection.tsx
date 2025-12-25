"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const phrases = [
  {
    lines: ["NOT", "EVERYONE", "GETS HERE.", "YOU DID."],
    align: "items-start text-left",
    containerAlign: "self-start",
  },
  {
    lines: ["WHAT YOU", "NEED IS A", "TEAM", "OBSESSED", "WITH YOUR", "OUTCOME,", "NOT JUST", "YOUR", "OUTPUT."],
    align: "items-end text-right",
    containerAlign: "self-end",
  },
  {
    lines: ["STOP", "PLANNING IN", "ISOLATION.", "LET'S BUILD", "IN", "ALIGNMENT."],
    align: "items-start text-left",
    containerAlign: "self-start",
  },
  {
    lines: ["BOOK A", "CALL AND", "TURN", "PRESSURE", "INTO", "PROGRESS."],
    align: "items-end text-right",
    containerAlign: "self-end",
  },
];

// Parallax background image that moves up as the section scrolls into view
const ParallaxImage = ({
  src,
  top,
  left,
  speed,
  progress,
}: {
  src: string;
  top: string;
  left: string;
  speed: number;
  progress: MotionValue<number>;
}) => {
  // As scroll progress goes from 0 → 1, y moves from 0 → -speed (scroll down, image moves up)
  const y = useTransform(progress, [0, 1], [0, speed]);

  return (
    <motion.div
      style={{ y, top, left }}
      className="absolute w-24 h-24 md:w-32 md:h-32 opacity-20 pointer-events-none z-0"
    >
      <img src={src} alt="" className="w-full h-full object-cover grayscale rounded-sm" />
    </motion.div>
  );
};

const AnimatedLetter = ({ letter }: { letter: string }) => {
  const randomRotation = Math.random() * 6 - 3;

  return (
    <motion.span
      initial={{ rotate: randomRotation }}
      whileHover={{
        rotate: 0,
        color: "#facc15",
        scale: 1.2,
        transition: { type: "spring", stiffness: 900 },
      }}
      className="inline-block cursor-default transition-colors duration-200"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const PhraseBlock = ({ phrase }: { phrase: typeof phrases[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 20]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`flex flex-col mb-24 md:mb-32 max-w-[100%] md:max-w-[90%] z-10 ${phrase.containerAlign}`}
    >
      <div className={`flex flex-col ${phrase.align}`}>
        {phrase.lines.map((line, lineIdx) => (
          <h2 
            key={lineIdx} 
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-[#EBE3D5] uppercase"
          >
            {line.split("").map((char, charIdx) => (
              <AnimatedLetter key={charIdx} letter={char} />
            ))}
          </h2>
        ))}
      </div>
    </motion.div>
  );
};

export default function TypographySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 md:px-16 lg:px-24 flex flex-col overflow-hidden"
    >
      {/* Background Parallax Elements */}
      {/* Higher speed values will make the image move up faster */}
      <ParallaxImage src="/a.webp" top="10%" left="75%" speed={100} progress={scrollYProgress} />
      <ParallaxImage src="/b.webp" top="30%" left="5%" speed={500} progress={scrollYProgress} />
      <ParallaxImage src="/c.webp" top="60%" left="55%" speed={250} progress={scrollYProgress} />
      <ParallaxImage src="/d.webp" top="85%" left="10%" speed={450} progress={scrollYProgress} />
      <ParallaxImage src="/a.webp" top="20%" left="55%" speed={300} progress={scrollYProgress} />
      <ParallaxImage src="/b.webp" top="40%" left="40%" speed={500} progress={scrollYProgress} />
      <ParallaxImage src="/c.webp" top="50%" left="85%" speed={250} progress={scrollYProgress} />
      <ParallaxImage src="/d.webp" top="75%" left="50%" speed={450} progress={scrollYProgress} />
      
      <div className="relative z-10 flex flex-col w-full">
        {phrases.map((phrase, idx) => (
          <PhraseBlock key={idx} phrase={phrase} />
        ))}
      </div>
    </section>
  );
}