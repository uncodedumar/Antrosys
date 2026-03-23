'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BPORPOHero: React.FC = () => {
  return (
    <section 
      className="mx-2 relative overflow-hidden rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 bg-black"
      aria-labelledby="hero-heading"
    >
      {/* --- Background Image Layer --- */}
      <div 
        className="absolute inset-0 z-0 opacity-40" // Reduced opacity for a professional corporate feel
        style={{
          backgroundImage: "url('/bpo.avif')", // Suggest an image of a high-tech office or team
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />

      {/* --- SEO Hidden Context (BPO/RPO Focus) --- */}
      <h2 
        className="sr-only" 
        title="Antrosys | Global BPO & RPO Solutions Leader"
        aria-label="Antrosys Enterprise Solutions: Scalable Business Process Outsourcing and Elite Recruitment Process Outsourcing"
      >
        Antrosys: Premier Global Partner for BPO and RPO Services. Specialized in 
        Technical Support, Customer Experience, Talent Acquisition, and Strategic 
        Workforce Scaling for Startups and Enterprises.
      </h2>

      {/* --- Dynamic Background Blurs (Professional Tones) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-blue-900/30 filter blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [20, -20, 20], y: [0, -40, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-[45%] w-[450px] h-[300px] rounded-full bg-slate-800/40 filter blur-[120px]" 
        />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        
        {/* Semantic Logo Header */}
        <header className="flex justify-center items-center my-8">
          <span className="text-xl font-bold text-white tracking-widest uppercase">Antro</span>
          <span className="text-xl font-bold text-secondary tracking-widest uppercase">Sys</span>
        </header>

        {/* Hero Text: Scale & Dominance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-0"
        >
          <h1 
            id="hero-heading"
            className="text-6xl sm:text-8xl md:text-9xl font-extrabold leading-none text-secondary tracking-tighter"
          >
            Scale Fast.
          </h1>
          <h2 className="text-accent text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-tight leading-[0.9] drop-shadow-2xl">
            Outsource Smarter
          </h2>
        </motion.div>

        {/* Subtext: Operational Excellence */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-accent text-base font-light md:text-lg max-w-3xl leading-relaxed"
        >
          Stop managing overhead and start <strong className="font-semibold text-white">dominating your market</strong>. 
          From elite customer support and BPO operations to high-velocity RPO talent acquisition, 
          we build the infrastructure that fuels your growth.
          <span className="block italic opacity-80 mt-2 text-secondary">Operational Excellence, Delivered.</span>
        </motion.p>

       {/* --- CTA: Strategic Partnership --- */}
       <div className="flex justify-center items-center mt-20"> 
        <div className="mt-16 group">
          <Link 
            href="/contact" 
            className="flex items-center gap-6 group"
            aria-label="Book a consultation for BPO and RPO services"
          >
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
              Scale Your Workforce
            </span>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full scale-150 animate-ping group-hover:bg-secondary/40" />
              <div className="relative w-16 h-16 bg-secondary rounded-full flex justify-center items-center shadow-[0_0_30px_rgba(243,117,37,0.4)] group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <svg 
                  className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        </div>

      </div>
    </section>
  );
};

export default BPORPOHero;