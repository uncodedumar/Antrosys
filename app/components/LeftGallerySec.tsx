"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    image: "/face.jpg",
    isTall: true,
  },
  {
    title: "Explore the world's leading designers",
    isGradient: true,
    hasButton: true,
  },
  {
    image: "/face2.avif",
    isTall: true,
  },
];

export default function StatisticsSection() {
  const bookingUrl = "https://cal.com/antrosys";

  return (
    <section className="bg-[#000000] text-[#FAF3E1] py-16 min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* --- HEADER SECTION --- */}
      {/* Added 'hidden md:block' to hide on mobile and show on desktop */}
      <div className="hidden md:block max-w-7xl w-full text-center mb-12 md:mb-16 space-y-4">
        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-tighter leading-[1.1] uppercase flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 text-[#EF571B]">
          <span className="whitespace-nowrap">We turn ideas</span>
          <div className="inline-flex items-center gap-2">
            <span>Into Visual</span>
            <div className="inline-block w-14 h-7 md:w-28 md:h-12 bg-[#EF571B] rounded-full overflow-hidden relative border-2 border-[#EF571B] shrink-0">
               <img src="/Bike.avif" className="object-cover w-full h-full brightness-90" alt="pill graphic" />
            </div>
            <span>Statements</span>
          </div>
        </h2>
        
        <h2 className="text-[clamp(1.8rem,6vw,4.5rem)] font-light tracking-tighter uppercase text-[#FAF3E1]/70 leading-tight">
          From Vision to Delivery —
        </h2>
        
        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-tighter uppercase text-[#EF571B] leading-tight">
          Impact That Lasts
        </h2>
      </div>

      {/* --- GRID SECTION --- */}
      {/* Adjusted width to 98% on mobile (w-[98%]) and added auto margins (mx-auto) */}
      <div className="w-[98%] mx-auto md:w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Image Card */}
        <div className="relative group min-h-[400px] md:h-[550px] overflow-hidden rounded-[30px] md:rounded-[40px] border border-[#FAF3E1]/10">
          <img 
            src={cards[0].image} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Designer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-start gap-4">
            <div className="text-2xl md:text-3xl text-[#EF571B] font-bold leading-none">★</div>
            <p className="text-[10px] md:text-[11px] leading-tight text-[#FAF3E1] max-w-[140px] uppercase tracking-wider">
              We design visual worlds that resonate. From brand core to final detail.
            </p>
          </div>
        </div>

        {/* Middle Gradient Card */}
        <div className="relative min-h-[400px] md:h-auto bg-gradient-to-br from-[#EF571B] via-[#8B2E0B] to-[#000000] rounded-[30px] md:rounded-[40px] p-8 md:p-10 flex flex-col justify-between overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-[#FAF3E1]/20 backdrop-blur-md flex items-center justify-center text-[#FAF3E1] font-bold">
                A
            </div>
            
            <div className="space-y-6 z-10">
                <h3 className="text-3xl md:text-4xl font-medium text-[#FAF3E1] leading-tight tracking-tight max-w-[260px]">
                    Explore the world's <span className="inline-block w-10 h-5 md:w-12 md:h-6 border border-[#FAF3E1] rounded-full translate-y-1"></span> leading designers <span className="inline-block w-10 h-5 md:w-12 md:h-6 border border-[#FAF3E1] rounded-full translate-y-1"></span>
                </h3>
                
                <motion.a 
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-[#FAF3E1] rounded-full flex items-center justify-center text-[#000000] shadow-xl"
                >
                    <ArrowUpRight size={24} />
                </motion.a>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
        </div>

        {/* Right Image Card & Button */}
        <div className="flex flex-col gap-6">
            <div className="relative group h-[350px] md:h-[430px] overflow-hidden rounded-[30px] md:rounded-[40px] border border-[#FAF3E1]/10">
                <img 
                    src={cards[2].image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="Work" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            {/* Bottom "Book a Meeting" Pill */}
            <motion.a 
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "#EF571B", color: "#000000", borderColor: "#EF571B" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 md:py-6 px-8 md:px-10 border border-[#FAF3E1] rounded-full text-lg md:text-xl font-medium uppercase flex justify-between items-center transition-colors duration-300 text-[#FAF3E1] cursor-pointer"
            >
                <span>Book a meeting</span>
                <ArrowUpRight size={24} className="shrink-0" />
            </motion.a>
        </div>

      </div>
    </section>
  );
}