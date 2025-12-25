"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const brandName = "ANTROSYS";
  
  const navLinks = {
    "QUICK LINKS": ["Home", "Portfolio", "Team", "Career", "Contact"],
    "GO DEEPER": ["Team", "Contact"],
    "SOCIALS": ["Linkedin", "Instagram", "Behance", "Github", "X"],
  };

  return (
    <footer className=" text-accent pt-20 overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Call to Action Card */}
        <div className="bg-[#f5f1e3] rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-24">
          <div className="w-48 h-48 rounded-md bg-gradient-to-br from-orange-400 via-purple-600 to-orange-300" />
          <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full">
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-bold leading-tight max-w-md text-center md:text-left">
              START THE CONVERSATION THAT CHANGES EVERYTHING.
            </h2>
            <div className="group cursor-pointer flex items-center gap-4 mt-8 md:mt-0 border-b-2 border-[#1a1a1a] pb-2 transition-all hover:gap-8">
              <span className="text-[#1a1a1a] font-black text-xl leading-none">
                HIT THE<br />DAMN<br />ARROW
              </span>
              <ArrowRight size={48} className="text-[#1a1a1a]" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          LET'S TURN VISION INTO REALITY.
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-500 text-xs font-bold tracking-widest mb-6 border-b border-gray-800 pb-2">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-gray-500 text-xs font-bold tracking-widest mb-6 border-b border-gray-800 pb-2">
              CONTACT
            </h4>
            <a href="mailto:sayhi@antrosys.com" className="text-gray-300 hover:text-white text-sm">
              sayhi@antrosys.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dotted border-gray-700 pt-8 mb-12">
          <p className="text-gray-500 text-xs leading-relaxed">
            © Copyright 2025 <span className="font-bold text-gray-300">AntroSys</span><br />
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* Massive Interactive Branding */}
      <div className="relative w-full select-none">
        <div className="flex justify-center items-end leading-[0.8] tracking-tighter">
          {brandName.split("").map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ 
                y: -20, 
                color: "#f97316", // Orange hover color from image
                transition: { duration: 0.2 } 
              }}
              className={`text-[12vw] md:text-[16vw]  font-black cursor-default transition-colors duration-300 ${
                index >= 7 ? "text-[#f97316]" : "text-[#ebebeb]"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Background Humpback Whale Image positioning simulation */}
        <div 
          className="absolute left-0 bottom-0 w-1/3 h-full pointer-events-none opacity-40 mix-blend-lighten"
          style={{
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;