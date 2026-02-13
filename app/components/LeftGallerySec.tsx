
"use client";

import React, { useRef } from "react";
import Image from "next/image"; // Crucial for Core Web Vitals
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

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex whitespace-nowrap flex-nowrap overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap gap-4 will-change-transform"
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function LeftGallerySec() {
  // Added descriptive ALT texts for SEO Ranking in Image Search
  const galleryItems = [
    { src: "/left/art5.avif", alt: "Custom UI UX Design for SaaS Platforms" },
    { src: "/left/art6.avif", alt: "Full-stack Web Development Portfolio" },
    {
      src: "/left/art3.avif",
      alt: "Djjjjjjjjjjjjustrations",
    },

    {
      src: "/left/art8.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art9.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art11.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art1.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },

    {
      src: "/left/art4.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },

    { src: "/left/art7.avif", alt: "AI-Powered Software Solutions and Art" },
    {
      src: "/left/art12.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art13.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art2.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },

    {
      src: "/left/art14.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art15.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
    {
      src: "/left/art16.avif",
      alt: "Digital Marketing Ads and Brand Illustrations",
    },
  ];

  return (
    <section
      aria-label="Digital Portfolio Gallery"
      className="relative min-h-screen w-full bg-black text-secondary overflow-hidden flex flex-col md:flex-row items-center px-6 md:px-12 selection:bg-accent selection:text-black"
    >
      {/* LEFT CONTENT - Optimized for Long-Tail SEO */}
      <div className="z-10 w-full md:w-2/5 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
          High-Performance{" "}
          <span className="text-accent">Digital Experiences</span> that Convert.
        </h1>
        <p className="text-zinc-400 font-light text-lg md:text-xl max-w-md mb-8 leading-relaxed">
          Visuvate is a full-service{" "}
          <strong className="text-white font-medium">
            creative digital agency
          </strong>{" "}
          specializing in{" "}
          <span className="text-white">custom software development</span>,
          immersive <span className="text-white">UI/UX design</span>, and
          data-driven <span className="text-white">AI art illustrations</span>.
          We don't just build; we engineer growth.
        </p>

        {/* Hidden SEO Keywords for Indexing (Accessible to screen readers) */}
        <div 
  className="sr-only" 
  title="Antrosys | Global Authority in AI Art & Full-Stack Digital Transformation"
  aria-label="Antrosys service profile: Specializing in Custom SaaS, 3D Brand Identity, and Enterprise AI Integrations"
>
  Antrosys: Elite Custom Web Application Engineering, Premium Full-Stack Mobile Design, 
  Bespoke 3D Brand Illustrations, High-Performance Growth Marketing, and 
  Robust Enterprise Software Solutions powered by Next-Gen AI.
</div>
      </div>

      {/* RIGHT GALLERY - Smooth Parallax */}
      <div className="relative w-full md:w-3/5 h-[600px] md:h-[800px] flex flex-col justify-center gap-2 overflow-hidden mask-fade-edges">
        {/* Row 1 - UX/UI focus */}
        <ParallaxRow baseVelocity={0.8}>
          {galleryItems.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="relative w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 250px, 400px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </ParallaxRow>

        {/* Row 2 - Software/AI focus */}
        <ParallaxRow baseVelocity={-0.8}>
          {galleryItems.map((item, i) => (
            <div
              key={`row2-${i}`}
              className="relative w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 250px, 400px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </ParallaxRow>

        {/* Row 3 - Marketing/Ads focus */}
        <ParallaxRow baseVelocity={1}>
          {galleryItems.map((item, i) => (
            <div
              key={`row3-${i}`}
              className="relative w-[250px] md:w-[400px] h-[180px] md:h-[240px] bg-zinc-900 rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 250px, 400px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </ParallaxRow>

        {/* Overlays for depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-80" />
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}