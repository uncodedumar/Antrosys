'use client';
import React, { useState, useEffect } from "react";

// --- Utility Components ---

const AIAutomationsBox: React.FC = () => {
  return (
    <div 
      onClick={() => window.location.href = "/automations"}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 w-full max-w-[520px] md:w-90 text-center shadow-none border-[0.5px] border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
    >
      <div className="h-24 bg-gradient-to-br from-red-500 to-orange-400 rounded-lg mb-4 flex items-center justify-center relative border-[1px] border-orange-200">
        <img src="/CoLogo/brain.svg" className="h-10 md:h-10 object-contain" />
      </div>
      <p className="text-5xl font-bold text-white mb-1">180+</p>
      <p className="text-sm text-white/80 tracking-widest font-semibold mb-4">AI AUTOMATIONS</p>

      <p className="text-xs text-white/70 px-2 leading-tight mb-6 font-light">
        Behind every smart business is an intelligent system doing the heavy lifting.
      </p>
      
      <div className="flex justify-center -space-x-4">
      </div>
    </div>
  );
};

// --- Main Component ---
const HeroSection: React.FC = () => {

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden mx-2 rounded-b-2xl">
      {/* --- Background Blurred Blobs --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Changed mix-blend-multiply to opacity/screen for visibility on black */}
        <div className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[80px] opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[80px] opacity-20" />
        <div className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] filter blur-[80px] opacity-30" />
      </div>

      {/* Removed bg-accent to let the black bg and blobs show through */}
      <div className="relative p-10 md:p-10 lg:p-16 mx-2 rounded-[25px] z-10">
        <header className="flex justify-center items-center my-8">
          <p className="text-xl font-bold text-accent">ANTRO</p>
          <p className="text-xl font-bold text-secondary">SYS</p>
        </header>

        <section className="text-center mb-12 lg:mb-20">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold leading-none text-accent tracking-tighter">
            We Create <br /><span className=" text-secondary"> Feelings.</span>
          </h1>

          {/* --- Brand Logos Row --- */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8 opacity-40 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500">
            <img src="/CoLogo/adyen.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/ford.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/dolphin.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/emirates.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/activision.svg" className="h-12 md:h-12 object-contain" />
            <img src="/CoLogo/pelican.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/dacia.svg" className="h-10 md:h-10 object-contain" />
            <img src="/CoLogo/tumblr.svg" className="h-10 md:h-10 object-contain" />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-md text-white/80 max-w-lg mb-8 font-light">
              In the world where digital presence means everything, we help businesses grow, attract clients, and stay one step ahead of the competition. Your goal is our focus. We create strategies that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start items-center">
              <div 
                onClick={() => window.location.href = "/services"}
                className="w-full max-w-[320px] p-6 rounded-3xl bg-white/5 text-white border-[0.5px] border-white/10 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br from-[#FF6C0C] to-[#060771]"></div>
                  <div>
                    <p className="text-3xl font-extrabold">30+</p>
                    <p className="text-xl font-semibold uppercase">services</p>
                  </div>
                </div>
                <p className="text-sm font-extralight text-white/70">We close the full cycle: From Positioning to advertising</p>
              </div>

              <div 
                onClick={() => window.location.href = "/projects"}
                className="w-full max-w-[320px] p-6 rounded-3xl bg-white/5 text-white border-[0.5px] border-white/10 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br from-[#060771] to-[#FF6C0C]"></div>
                  <div>
                    <p className="text-3xl font-extrabold">120+</p>
                    <p className="text-xl font-semibold uppercase">projects</p>
                  </div>
                </div>
                <p className="text-sm font-extralight text-white/70">Collaborating with clients across 15+ countries</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AIAutomationsBox />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10"> 
          <a href="/contact">
            <div className="flex items-center cursor-pointer group">
              <p className="text-xl font-semibold text-white mr-4">Book an intro call</p>
              <div className="relative w-12 h-12">
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-12 h-12 bg-secondary rounded-full flex justify-center items-center z-10 shadow-lg group-hover:scale-[1.1] transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;