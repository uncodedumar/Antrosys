'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="cta-heading">
            {/* Ambient Background - Optimized for Performance */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-stone-700/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative p-0 min-h-[450px] flex flex-col justify-center">
                    
                    {/* SEO Subheading: Long-tail Keyword Rich */}
                    <p className="text-secondary text-center uppercase tracking-[0.3em] text-xs md:text-sm mb-6 transition-opacity duration-1000 font-semibold">
                        Award-Winning Full-Service Digital Agency
                    </p>

                    {/* Main H1: High-Value Keywords for Google Ranking */}
                    <h1 
                        id="cta-heading"
                        className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-black text-accent text-center leading-[0.9] tracking-tighter transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        Scale Your Brand With <span className="text-secondary">Next-Gen</span> AI & Design.
                    </h1>
                    
                    {/* Bottom Content Bar */}
                    <div className="mt-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-12 border-t border-stone-900">
                        
                        {/* Descriptive SEO Copy */}
                        <div
                            className={`max-w-xl transition-all duration-1000 delay-300 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        >
                            <h2 className="text-stone-400 text-sm uppercase tracking-widest mb-2 font-bold">Expert Solutions</h2>
                            <p className="text-accent font-light text-lg md:text-xl leading-relaxed italic">
                                From custom software development to immersive UI/UX design, Ai automations, AI Art and data-driven marketing—we build the future of your digital ecosystem.
                            </p>
                        </div>

                        {/* Interactive CTA Button */}
                        <div
                            className={`transition-all duration-1000 delay-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        >
                            <Link 
                                href="/contact" 
                                aria-label="Book a free consultation for digital services"
                                className="group relative px-8 py-5 bg-secondary/50 text-accent rounded-full font-bold text-lg transition-all duration-500 hover:bg-secondary hover:scale-105 hover:shadow-[0_0_30px_rgba(185,28,28,0.4)] flex items-center overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Your Project
                                    <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Social Proof Section - Highlighting Performance & Growth */}
                <div
                    className={`mt-24 text-center transition-all duration-1000 delay-700 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <p className="text-stone-500 text-xs md:text-sm mb-10 uppercase tracking-widest">
                        Trusted by Innovators in Web3, SaaS, and Creative Tech
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
                        <div className="group">
                            <p className="text-4xl md:text-5xl font-black text-white group-hover:text-secondary transition-colors">400+</p>
                            <p className="text-stone-500 text-xs mt-2 font-bold uppercase tracking-tighter">Global Partners</p>
                        </div>
                        <div className="group">
                            <p className="text-4xl md:text-5xl font-black text-white group-hover:text-secondary transition-colors">120+</p>
                            <p className="text-stone-500 text-xs mt-2 font-bold uppercase tracking-tighter">Products Launched</p>
                        </div>
                        <div className="group">
                            <p className="text-4xl md:text-5xl font-black text-white group-hover:text-secondary transition-colors">99%</p>
                            <p className="text-stone-500 text-xs mt-2 font-bold uppercase tracking-tighter">Client Retention</p>
                        </div>
                    </div>
                    
                    <a
                        href="https://www.instagram.com/antrosys/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-12 inline-flex items-center text-sm font-bold text-stone-400 border-b-2 border-stone-800 pb-1 hover:text-white hover:border-secondary transition-all duration-300"
                    >
                        Follow the journey on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}