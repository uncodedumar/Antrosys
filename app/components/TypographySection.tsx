"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const services = [
  "AI-driven software ecosystems",
  "high-converting UI/UX design",
  "enterprise web app development",
  "full-scale digital marketing",
  "Seductive Branding",
  "strategic brand scaling",
  "Startup Acceleration",
  "bpo outsourcing",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === services[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % services.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-secondary font-medium inline-block">
      {services[index].substring(0, subIndex)}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default function AntrosysHeartLetter() {
  const containerRef = useRef(null);
  
  // Parallax and Scaling Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imgY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const imgY3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imgY4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const imgY5 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-primary flex flex-col items-center font-poppins text-white overflow-hidden"
    >
      {/* SEO Hidden H2 */}
      <h2 
  className="sr-only" 
  title="Antrosys | Global Leader in AI, Full-Stack Development, and Digital Transformation"
  aria-label="Antrosys: Premier Agency for Web UI/UX, Custom AI Software, and Performance Marketing"
>
  Expert Web App UI/UX Design, Custom AI Software Development, and Global Digital Marketing Agency
</h2>

      {/* Parallax Background Images (Black & White, Overlapping, 25px rounded) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: imgY1 }}
          className="absolute top-[10%] -left-10 w-64 h-80 rounded-[25px] opacity-20 overflow-hidden"
        >
          <Image
            src="https://picsum.photos/400/500?grayscale&sig=1"
            alt="Abstract tech 1"
            width={400}
            height={500}
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
            sizes="256px"
          />
        </motion.div>
        <motion.div 
          style={{ y: imgY2 }}
          className="absolute top-[40%] -right-20 w-80 h-96 rounded-[25px] opacity-25 rotate-12 overflow-hidden"
        >
          <Image
            src="https://picsum.photos/400/500?grayscale&sig=2"
            alt="Abstract tech 2"
            width={400}
            height={500}
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
            sizes="320px"
          />
        </motion.div>
        <motion.div 
          style={{ y: imgY3 }}
          className="absolute bottom-[10%] left-[15%] w-72 h-72 rounded-[25px] opacity-15 -rotate-6 overflow-hidden"
        >
          <Image
            src="https://picsum.photos/400/500?grayscale&sig=3"
            alt="Abstract tech 3"
            width={400}
            height={500}
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
            sizes="288px"
          />
        </motion.div>
        <motion.div 
          style={{ y: imgY4 }}
          className="absolute top-[40%] -right-20 w-80 h-96 rounded-[25px] opacity-25 rotate-12 overflow-hidden"
        >
          <Image
            src="https://picsum.photos/400/500?grayscale&sig=4"
            alt="Abstract tech 4"
            width={400}
            height={500}
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
            sizes="320px"
          />
        </motion.div>
        <motion.div 
          style={{ y: imgY5 }}
          className="absolute bottom-[10%] left-[15%] w-72 h-72 rounded-[25px] opacity-15 -rotate-6 overflow-hidden"
        >
          <Image
            src="https://picsum.photos/400/500?grayscale&sig=5"
            alt="Abstract tech 5"
            width={400}
            height={500}
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
            sizes="288px"
          />
        </motion.div>
      </div>


      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />

      <motion.article 
        style={{ scale: textScale }}
       className="max-w-xl md:max-w-3xl w-full relative z-20 px-4 py-12 md:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Header */}
          <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-secondary mb-1 font-bold">
                Premium Digital Agency
              </p>
              <h1 className="text-xl italic font-light tracking-tight">
                The Heart of Antrosys
              </h1>
            </div>
            <p className="text-[9px] opacity-40 uppercase tracking-[0.2em]">
              MMXXVI
            </p>
          </header>

          {/* Body */}
          <div className="space-y-10 text-lg md:text-xl leading-relaxed font-light text-white/90">
            <p>
              There is a specific kind of hunger that only the visionary knows.
              It is the restless desire to not just exist in the digital
              landscape, but to{" "}
              <span className="italic text-secondary font-medium">
                dominate
              </span>{" "}
              it. Our agency specializes in{" "}
              <span className="text-secondary">something</span> that refuses the
              average.
            </p>

            <p className="text-lg leading-relaxed">
              At Antrosys, we cultivate digital obsessions through full-stack
              excellence. From{" "}
              <span className="text-secondary font-medium">
                Web & Mobile App Development
              </span>{" "}
              to bespoke{" "}
              <span className="text-secondary font-medium">
                AI & Software Engineering
              </span>
              , we build robust{" "}
              <span className="text-secondary font-medium">
                Cloud Architectures
              </span>
              . By integrating seamless{" "}
              <span className="text-secondary font-medium">APIs</span> and
              automated{" "}
              <span className="text-secondary font-medium">
                DevOps workflows
              </span>
              , we create systems that leave competitors in a state of permanent
              envy.
            </p>

            {/* Dynamic Section */}
            <div className="py-6 border-y border-white/5 group">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-secondary transition-colors">
                Our Core Expertise:
              </p>
              <div className="text-2xl md:text-3xl min-h-[1.2em] italic">
                <Typewriter />
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              From the raw visual gravity of our{" "}
              <span className="border-b border-secondary/40 text-white">
                bespoke art and illustrations
              </span>{" "}
              to the high-octane psychology behind our{" "}
              <span className="text-secondary font-medium">
                branding and sales funnels
              </span>
              , we don't just create—we dominate. Every asset is a weaponized
              piece of
              <span className="text-secondary font-medium">
                {" "}
                marketing & ad strategy
              </span>{" "}
              designed to capture attention and force conversions.
            </p>

            <blockquote className="border-l-2 border-secondary pl-6 my-10 italic text-2xl md:text-4xl text-white py-2">
              "Your brand should not beg for a glance. It should demand{" "}
              <span className="text-secondary">total surrender</span>."
            </blockquote>

            {/* CTA */}
            <footer className="pt-10 flex flex-col items-center md:items-start gap-10">
              <div className="space-y-6 w-full">
                <p className="text-[11px] uppercase tracking-[0.4em] opacity-50">
                  Ready for Global Ranking?
                </p>
                <a
                  href="#contact"
                  className="group relative inline-block w-full md:w-auto overflow-hidden border border-secondary/30 px-12 py-5 transition-all duration-500 hover:border-secondary rounded-lg text-center"
                >
                  <span className="relative z-10 text-secondary group-hover:text-primary transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-bold">
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>

              <div className="w-full pt-8 border-t border-white/10">
                <p className="text-xs italic text-white/50">
                  Built for Speed, Performance, and Unyielding Results.
                  <br />
                  <span className="text-secondary text-lg not-italic mt-2 block font-semibold tracking-tight">
                    Antrosys Digital Architecture
                  </span>
                </p>
              </div>
            </footer>
          </div>
        </motion.div>
      </motion.article>
    </section>
  );
}