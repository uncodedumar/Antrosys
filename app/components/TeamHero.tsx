'use client';
import React from "react";
import Link from "next/link"; // Assuming Next.js for better routing performance

/**
 * TeamHero Component: Optimized for High-Performance Digital Agencies.
 * Keywords: Web App UI/UX Design, Software Development, AI Illustrations, Marketing Ads.
 */
const TeamHero: React.FC = () => {
  return (
    <main 
      className="bg-black min-h-screen relative overflow-hidden mx-2 rounded-b-3xl border-x border-b border-white/5"
      role="banner"
    >
      {/* --- SEO Hidden Context (Enhanced for Global Search Authority) --- */}
<h2 
  className="sr-only" 
  title="Antrosys | Industry-Leading Digital Transformation & AI Engineering Firm"
  aria-label="Antrosys: Global leader in Custom SaaS Development, AI Art, Full-Stack Web/Mobile Apps, and Performance-Driven Digital Marketing"
>
  Antrosys: Elite Digital Agency specializing in Full-Stack Web App UI/UX, 
  Custom AI Software Development, Bespoke Digital Illustrations, 
  and High-Performance Growth Marketing Solutions.
</h2>

      {/* --- Background Elements: Optimized for performance --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div 
          className="absolute -left-20 top-[30%] w-[300px] md:w-[600px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[120px] opacity-20 animate-pulse" 
          aria-hidden="true"
        />
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[500px] md:w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[120px] opacity-15" 
          aria-hidden="true"
        />
        <div 
          className="absolute -right-20 top-[40%] w-[350px] md:w-[700px] h-[700px] rounded-full bg-[#F9A891] filter blur-[120px] opacity-20" 
          aria-hidden="true"
        />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full flex flex-col items-center px-6 py-12 md:py-20 lg:py-24">
        
        {/* Branding */}
        <header className="flex justify-center items-center mb-16 tracking-widest">
          <span className="text-2xl font-black text-accent uppercase">Antro</span>
          <span className="text-2xl font-black text-secondary uppercase">sys</span>
        </header>

        {/* Hero Section */}
        <section className="w-full max-w-7xl flex flex-col items-center text-center">
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[150px] font-black leading-[0.9] tracking-[calc(-0.05em)] text-white drop-shadow-2xl">
            <span className="text-accent inline-block hover:scale-[1.02] transition-transform duration-500">Ideas</span> Into 
            <br />
            <span className="text-secondary ">Impact.</span>
          </h1>

          {/* Long-tail Keyword Rich Descriptionn */}
          <div className="mt-12 max-w-2xl">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              We engineer <strong className="text-white">scalable web applications</strong> and <strong className="text-white">high-fidelity UI/UX designs</strong>. 
              From AI-driven illustrations to precision software marketing, we turn your wildest art concepts of <strong className="text-white"> Branding</strong>  into 
              high-performance digital reality.
            </p>
          </div>
        </section>

        {/* CTA - The "Weapon" Call to Action */}
        <div className="mt-16 group">
          <Link 
            href="/contact" 
            className="flex items-center gap-6 group"
            aria-label="Book an intro call for web design and development services"
          >
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
              Launch Your Project
            </span>
            <div className="relative">
              {/* Outer Ring Animation */}
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

     
    </main>
  );
};

export default TeamHero;