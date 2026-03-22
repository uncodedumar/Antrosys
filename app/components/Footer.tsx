"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 
import Image from "next/image";

const Footer = () => {
  const brandName = "ANTROSYS";

  const navLinks = {
    "QUICK LINKS": [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blogs", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    "GO DEEPER": [
      { name: "About", href: "/About" },
      { name: "Get in Touch", href: "/contact" },
      { name: "Book a Meeting", href: "https://calendly.com/antrosys" },
    ],
    SOCIALS: [
      { name: "Linkedin", href: "https://www.linkedin.com/company/antrosys" },
      { name: "Instagram", href: "https://www.instagram.com/antrosys/" },
      { name: "Behance", href: "https://behance.net" },
      { name: "X", href: "https://x.com/antrosys" },
    ],
  };

  return (
    <footer
      className="relative text-accent pt-20 overflow-hidden font-sans"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Call to Action Card */}
        <section
          aria-label="Contact CTA"
          className="bg-[#f5f1e3] rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-24 transition-transform duration-500 hover:scale-[1.01]"
        >
          <div className="relative w-48 h-48 rounded-md overflow-hidden shadow-xl" style={{ aspectRatio: '1/1' }}>
            <Image
              src="/AboutImages/call.avif"
              alt="Abstract creative branding element"
              fill
              sizes="192px"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full">
            <h2 className="text-secondary text-3xl md:text-4xl font-bold leading-tight max-w-md text-center md:text-left tracking-tight">
              START THE CONVERSATION THAT CHANGES EVERYTHING.
            </h2>
            <Link
              href="/contact"
              className="group cursor-pointer flex items-center gap-4 mt-8 md:mt-0 pb-2 transition-all hover:gap-8  rounded-sm"
              aria-label="Click to start a project conversation with AntroSys"
            >
              <span className="text-[#1a1a1a] font-black text-xl leading-none">
                HIT THE
                <br />
                DAMN
                <br />
                ARROW
              </span>
              <ArrowRight
                size={48}
                className="text-[#1a1a1a] transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </section>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight max-w-3xl">
          LET&apos;S TURN YOUR{" "}
          <span className="italic text-secondary"> DIGITAL VISION</span> INTO A
          MARKET-LEADING REALITY.
        </h2>

        {/* Links Grid */}
        <nav
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
          aria-label="Footer Navigation"
        >
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-500 text-xs font-bold tracking-widest mb-6 border-b border-gray-800 pb-2 uppercase">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium focus:text-orange-400 outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="mb-10">
              <h3 className="text-gray-500 text-xs font-bold tracking-widest mb-6 border-b border-gray-800 pb-2">
                CONTACT
              </h3>
              <a
                href="mailto:connect@antrosys.com"
                className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-semibold break-all"
              >
                connect@antrosys.com
              </a>
              <p className="mt-2 text-gray-300 text-sm font-medium">
                +1 350 353 5005
              </p>
              <p className="mt-4 text-gray-500 text-xs leading-relaxed italic">
                1500 N Grant ST# 7997 Denver,CO 80203 
              </p>
            </div>

            {/* Countries Section */}
            <div>
              <h3 className=" text-xs font-bold tracking-widest mb-4 border-b border-gray-800 pb-2 uppercase">
                Our Presence
              </h3>
              <div className="flex flex-wrap gap-4 items-center ">
                <Image src="https://flagcdn.com/us.svg" alt="USA" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/eu.svg" alt="Europe" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/ae.svg" alt="UAE" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/ca.svg" alt="Canada" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/au.svg" alt="Australia" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/tr.svg" alt="Turkey" width={24} height={18} className="w-6 h-auto" loading="lazy" />
                <Image src="https://flagcdn.com/pk.svg" alt="Pakistan" width={24} height={18} className="w-6 h-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </nav>

        {/* Copyright & SEO Metadata */}
        <div className="border-t border-dotted border-gray-700 pt-8 mb-12 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-gray-500 text-xs leading-relaxed">
            © 2026{" "}
            <span className="font-bold text-gray-200">
              AntroSys LLC
            </span>
            . <br className="hidden md:block" />
            Crafting premium digital experiences. All Rights Reserved.
          </p>
          <div className="text-[10px] text-gray-600 uppercase tracking-tighter">
            Next-Gen Tech • Creative Systems • Scalable Architecture
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-full h-[500px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Massive Interactive Branding */}
      <div className="relative w-full select-none overflow-hidden pb-4">
        <div
          className="flex justify-center items-end leading-[0.8] tracking-tighter"
          aria-hidden="true"
        >
          {brandName.split("").map((letter, index) => (
            <motion.span
              key={index}
              animate={{ y: 0 }}
              whileHover={{
                y: -10,
                color: index >= 7 ? "#f59e42" : "#f97316",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`text-[12vw] md:text-[16vw] font-black cursor-default transition-colors duration-300 will-change-transform ${
                index >= 7 ? "text-[#f97316]" : "text-[#ebebeb]"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <span className="sr-only">
          Antrosys: A Global Leader in Digital Transformation, Full-Stack Engineering, 
          Bespoke AI Art, and Performance-Driven Marketing Solutions for Enterprise Growth.
        </span>

        {/* Blur Shades - Bottom Glow */}
        
      </div>
    </footer>
  );
};

export default Footer;