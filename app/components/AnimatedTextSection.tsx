"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// @ts-ignore
import Matter from "matter-js";


export type Alignment = "start" | "center" | "end";

interface WordItem {
  word: string;
  alignment: Alignment;
}

interface AnimatedSectionProps {
  words: WordItem[];
  sectionTitle?: string;
}

const COLORS = [ "#3D2FA9", "#FF7722", "#FF3C34", "#785F47"];

import type { MotionValue } from "framer-motion";

const MatterBackground = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create({ gravity: { x: 0, y: 0 } }));

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = engineRef.current;
    
    // Batch DOM reads to avoid layout thrashing
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;
    
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Walls
    const wallOptions = { isStatic: true, render: { visible: false } };

    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(width / 2, -10, width, 20, wallOptions), // Top
      Matter.Bodies.rectangle(width / 2, height + 10, width, 20, wallOptions), // Bottom
      Matter.Bodies.rectangle(-10, height / 2, 20, height, wallOptions), // Left
      Matter.Bodies.rectangle(width + 10, height / 2, 20, height, wallOptions), // Right
    ]);

    // Create shapes
    const bodies = Array.from({ length: 15 }).map(() => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 30 + 30;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      // Randomly choose shape type
      const sides = [3, 4, 6, 8][Math.floor(Math.random() * 4)];
      
      const body = Matter.Bodies.polygon(x, y, sides, size, {
        restitution: 0.9, // Bounciness
        friction: 0.05,
        frictionAir: 0.01,
        render: {
          fillStyle: color,
          opacity: 0.5,
        },
      });

      // Initial random push
      Matter.Body.setVelocity(body, { 
        x: (Math.random() - 0.5) * 5, 
        y: (Math.random() - 0.5) * 5 
      });
      
      return body;
    });

    Matter.Composite.add(engine.world, bodies);
    
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Sync scroll to physics: applying force when scrolling
    const unsubscribe = scrollProgress.onChange((_v: number) => {
      const delta = scrollProgress.getVelocity();
      bodies.forEach((body) => {
        Matter.Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.02,
          y: delta * 0.005, // Move shapes based on scroll speed
        });
        // Subtle rotation increase on scroll
        Matter.Body.setAngularVelocity(body, body.angularVelocity + delta * 0.01);
      });
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
      unsubscribe();
      render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const getXTransform = (alignment: Alignment) => {
  switch (alignment) {
    case "start": return ["20%", "0%"];
    case "center": return ["0%", "0%"];
    case "end": return ["-20%", "0%"];
    default: return ["0%", "0%"];
  }
};

const AnimatedTextSection: React.FC<AnimatedSectionProps> = ({ words, sectionTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white py-64 overflow-hidden"
    >
      <MatterBackground scrollProgress={smoothProgress} />

      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        {words.map((item, index) => {
          const xValues = getXTransform(item.alignment);
          const opacity = useTransform(smoothProgress, [0.1 + index * 0.05, 0.4 + index * 0.05], [0, 1]);
          const x = useTransform(smoothProgress, [0, 1], xValues);

          return (
            <motion.div
              key={index}
              style={{ x, opacity }}
              className={`
                text-5xl md:text-8xl lg:text-[9rem] 
                font-black uppercase leading-[0.85] tracking-tighter mb-6
                ${item.alignment === "start" ? "text-left" : ""} 
                ${item.alignment === "center" ? "text-center" : ""} 
                ${item.alignment === "end" ? "text-right" : ""}
              `}
            >
              {item.word}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AnimatedTextSection;