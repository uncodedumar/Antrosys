'use client';
import React from "react";
import { Phone } from "lucide-react"; // Or use a standard SVG

const ServicesHero: React.FC = () => {
  return (
    <section className="mx-2 relative overflow-hidden  rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center py-20 px-6">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Changed mix-blend-multiply to opacity/screen for visibility on black */}
        <div className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[80px] opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[80px] opacity-20" />
        <div className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] filter blur-[80px] opacity-30" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        
        {/* Logo */}
        <header className="flex justify-center items-center my-8">
          <p className="text-xl font-bold text-white">ANTRO</p>
          <p className="text-xl font-bold text-secondary">SYS</p>
        </header>

        {/* Hero Text */}
        <div className="flex flex-col items-center space-y-0">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold leading-none text-secondary tracking-tighter">
            Warning!
          </h1>
          <h2 className="text-accent text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-tight leading-[0.9]">
            Scroll slowly
          </h2>
        </div>

        {/* Subtext */}
        <p className="mt-8 text-accent text-base font-light md:text-lg font-medium">
          Your Unfair advantage is below. Jump In.
        </p>

        {/* CTA Button (The Overlapping Circles) */}
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
    </section>
  );
};

export default ServicesHero;