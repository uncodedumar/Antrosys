import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between p-6 md:p-12 text-white font-sans selection:bg-red-500">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hoversec.avif" // Replace with your actual image path
          alt="Modern Visual Culture"
          className="w-full h-full object-cover grayscale-[20%] brightness-75 contrast-125"
        />
        {/* Red/Orange Light Overlay - Replicating the dramatic lighting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-orange-500/20 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>

      {/* Top Navigation Row */}
      <div className="relative z-10 flex justify-between items-start uppercase tracking-tighter text-[10px] md:text-xs font-bold">
        <div className="flex items-center gap-2">
          {/* Simple SVG Logo */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin-slow">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <div className="leading-none">
            SHAPE<br />THE FUTURE
          </div>
        </div>
        <button className="hover:opacity-70 transition-opacity cursor-pointer">
          AntroSys
        </button>
      </div>

      {/* Main Headline */}
      <div className="relative z-10 mt-auto mb-12 md:mb-0">
        <h1 className="text-5xl md:text-[8vw] leading-[0.85] font-bold uppercase tracking-tighter max-w-4xl">
          Visual Culture<br />
          <span className="inline-block">Redefine Modern</span>
        </h1>
      </div>

      {/* Bottom Data/Stats Section */}
      <div className="relative z-10 flex justify-end items-end text-right">
        <div className="max-w-[200px] md:max-w-[300px]">
          <div className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            400+
          </div>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
            Clients Audience
          </div>
          <p className="text-[8px] md:text-[10px] opacity-60 leading-tight mt-2 uppercase tracking-tight">
            Where brands are reborn and<br />boundaries are get of erased
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
