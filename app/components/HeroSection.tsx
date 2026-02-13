'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  siAdyen, siFord, siDolphin, siEmirates, 
  siActivision, siPelican, siDacia, siTumblr 
} from 'simple-icons';
import Link from "next/link";
import Image from "next/image";

const SEO_KEYWORDS = "Custom Web App Development, UI/UX Design Agency, AI Automations for Business, Digital Marketing Strategy, Brand Illustrations";

const AIAutomationsBox: React.FC = () => {
  return (
    <motion.button 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => window.location.href = "/automations"}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 w-full max-w-[520px] md:w-90 text-center shadow-2xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all group"
      aria-label="View 280+ AI Automations & Workflows"
    >
      <div className="h-24 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
        <motion.div 
          whileHover={{ scale: 1.3 }}
          className="h-25 w-auto object-contain z-10 relative"
        >
          <Image
            src="/Avatar/robo.avif" 
            alt="AI Automation and Intelligence"
            width={100}
            height={100}
            className="h-25 w-auto object-contain"
            priority
            sizes="100px"
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h2 className="text-5xl font-black text-white mb-1 tracking-tighter">280+</h2>
      <h3 className="text-xs text-orange-400 tracking-[0.3em] font-black mb-4 uppercase">AI Automations & Workflows</h3>
      <p className="text-sm text-white/70 px-4 leading-relaxed mb-6 font-light">
        Scaling enterprises with <span className="text-white font-medium">intelligent systems</span> and custom AI integration that does the heavy lifting.
      </p>
    </motion.button>
  );
};

const HeroSection: React.FC = () => {
  const containerRef = useRef(null);
  
  // Hook into scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and Scale Transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);
  const cardsScale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);

  return (
    <div ref={containerRef} className="hero-container bg-black min-h-[120vh] relative overflow-hidden mx-2 rounded-b-[40px] selection:bg-orange-500/30">
      
      {/* --- Parallax Background --- */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-[45%] w-[600px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[120px] opacity-20" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[600px] rounded-full bg-[#F8C396] filter blur-[120px] opacity-30" />
        <div className="absolute -right-20 top-[40%] w-[600px] h-[700px] rounded-full bg-[#F9A891] filter blur-[120px] opacity-20" />
      </motion.div>

      <div className="relative p-6 md:p-12 lg:p-20 z-10">
        <header className="flex justify-center items-center mb-16">
        <a 
  href="/" 
  className="invisible md:visible flex items-center space-x-1 hover:opacity-80 transition-opacity" 
  title="Antrosys Home"
>
  <span className="text-2xl font-black text-white tracking-tighter">ANTRO</span>
  <span className="text-2xl font-black text-orange-500 tracking-tighter">SYS</span>
</a>
        </header>

        <section className="text-center mb-20">
          <h1 
            className="hero-h1 text-6xl sm:text-8xl md:text-[10rem] font-black leading-[0.85] text-white tracking-tightest mb-6"
            style={{ 
              opacity: 1,
              visibility: 'visible',
              transform: 'none'
            }}
          >
            We Create <br />
            <span className="text-secondary">Feelings.</span>
          </h1>

          <p className="sr-only">{SEO_KEYWORDS}</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mt-12 opacity-30 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
            {[siAdyen, siFord, siDolphin, siEmirates, siActivision, siPelican, siDacia, siTumblr].map((icon, i) => (
              <svg key={i} role="img" viewBox="0 0 24 24" className="h-8 md:h-9 fill-white" aria-label="Partner Brand">
                <path d={icon.path} />
              </svg>
            ))}
          </div>
        </section>

        <motion.div 
          style={{ scale: cardsScale }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-20"
        >
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light leading-relaxed">
              In the world where digital presence means everything, we help businesses grow, attract clients, and stay one step ahead of the competition. Your goal is our focus. We create strategies that work.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Card 1: Services */}
              <motion.button 
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/services"}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 cursor-pointer transition-all hover:bg-white/10 hover:border-orange-500/30 w-full text-left"
                aria-label="View our 30+ services"
              >
                <div className="flex items-center space-x-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-900 group-hover:rotate-12 transition-transform" />
                  <div>
                    <p className="text-4xl font-black text-white">30+</p>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Services</p>
                  </div>
                </div>
                <p className="text-sm font-light text-white/60">Full-cycle product design, <span className="text-white/80">custom illustrations</span>, and performance marketing.</p>
              </motion.button>

              {/* Card 2: Projects */}
              <motion.button 
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/projects"}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 cursor-pointer transition-all hover:bg-white/10 hover:border-blue-500/30 w-full text-left"
                aria-label="View our 1200+ projects"
              >
                <div className="flex items-center space-x-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-900 to-orange-500 group-hover:-rotate-12 transition-transform" />
                  <div>
                    <p className="text-4xl font-black text-white">1200+</p>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Projects</p>
                  </div>
                </div>
                <p className="text-sm font-light text-white/60">Global portfolio spanning <span className="text-white/80">SaaS development</span> and creative art direction.</p>
              </motion.button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <AIAutomationsBox />
          </div>
        </motion.div>

        {/* --- CTA --- */}
        <div className="flex justify-center items-center mt-20"> 
          <div className="mt-16 group">
            <Link 
              href="/contact" 
              className="flex items-center gap-6 group"
            >
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                Launch Your Project
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full scale-150 animate-ping group-hover:bg-secondary/40" />
                <div className="relative w-16 h-16 bg-secondary rounded-full flex justify-center items-center shadow-[0_0_30px_rgba(243,117,37,0.4)] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;