"use client";

import React, { useRef } from "react";
import Image from "next/image"; // Essential for performance/SEO
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

// SEO Metadata for the images (Long-tail keywords)
const PROJECT_METADATA = [
  { src: "/Mockups/httpswww.curvyswimwear.com.au/3.avif", alt: "Custom UI/UX Design for SaaS Platforms", title: "Product Design" },
  { src: "/Mockups/httpswww.noahdemeuldre.com/1.avif", alt: "Full Stack Mobile App Development Services", title: "App Dev" },
  { src: "/Mockups/httpswww.jennikayne.com/8.avif", alt: "AI-Powered Generative Art and Digital Branding", title: "AI Art" },
  { src: "/Mockups/www.antrosys.com/1.avif", alt: "High Performance Web Design and SEO Marketing", title: "Web Performance" },

  { src: "/Mockups/httpswww.bigcatcreative.com/2.avif", alt: "Custom UI/UX Design for SaaS Platforms", title: "Product Design" },
  { src: "/Mockups/httpsfellowshipco.com/4.avif", alt: "Full Stack Mobile App Development Services", title: "App Dev" },
  { src: "/Mockups/httpskerfcase.com/2.webp", alt: "AI-Powered Generative Art and Digital Branding", title: "AI Art" },
  { src: "/Mockups/httpswww.saltandstone.com/1.webp", alt: "High Performance Web Design and SEO Marketing", title: "Web Performance" },

  { src: "/Mockups/httpswww.soundstripe.com/4.webp", alt: "Custom UI/UX Design for SaaS Platforms", title: "Product Design" },
  { src: "/Mockups/httpslivingbarreandyoga.com.au/1.avif", alt: "Full Stack Mobile App Development Services", title: "App Dev" },


];

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxRow({ children, baseVelocity = 1000 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 100,
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
    <div className="flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap gap-6" 
        style={{ x }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function HorizontalGallery() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black overflow-hidden flex items-center ">
      {/* SEO Hidden Header for Rankability */}
      <h2 className="sr-only">Our Digital Agency Portfolio: Web Design, AI Illustrations, and Software Development</h2>
      
      <div className="relative w-full flex flex-col justify-center gap-8 overflow-hidden mask-fade-edges">
        
        {/* Row 1: Custom Web & UI/UX */}
        <ParallaxRow baseVelocity={0.5}>
          {PROJECT_METADATA.map((project, i) => (
            <GalleryItem key={`r1-${i}`} project={project} />
          ))}
        </ParallaxRow>

        {/* Row 2: Software & AI Development */}
        <ParallaxRow baseVelocity={-0.8}>
          {PROJECT_METADATA.map((project, i) => (
            <GalleryItem key={`r2-${i}`} project={project} />
          ))}
        </ParallaxRow>

        {/* Row 3: Marketing & Performance Ads */}
        <ParallaxRow baseVelocity={1}>
          {PROJECT_METADATA.map((project, i) => (
            <GalleryItem key={`r3-${i}`} project={project} />
          ))}
        </ParallaxRow>

        {/* Visual Polish: Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}

function GalleryItem({ project }: { project: typeof PROJECT_METADATA[0] }) {
  return (
    <div className="group relative w-[280px] md:w-[450px] h-[200px] md:h-[280px] bg-zinc-900 rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes="(max-width: 768px) 280px, 450px"
        className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      </div>
    </div>
  );
}