import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BpoRpoSection = () => {
  return (
    <section className="bg-[var(--primary)] py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Left Content Column */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--secondary)] leading-tight tracking-tight mb-6">
          Effortless BPO and <br /> warp-speed RPO
        </h2>
        
        <p className="text-[var(--accent)]/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          Scaling global teams can feel like navigating the Kobayashi Maru. 
          But with our specialized talent solutions, you can manage growth with 
          ease and ensure high-performance operational continuity.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="/contact"
            className="px-8 py-3 bg-[var(--secondary)] text-[var(--primary)] font-semibold rounded-full hover:opacity-90 transition-all uppercase tracking-wider text-sm"
          >
            Contact us
          </Link>
          
          <Link 
            href="https://cal.com/antrosys"
            target="_blank"
            className="px-8 py-3 border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold rounded-full hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all uppercase tracking-wider text-sm"
          >
            Book a meeting
          </Link>
        </div>
      </div>

      {/* Right Visual Column (Image) */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <div className="relative w-full max-w-xl aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/bposub.avif" // Replace with your actual image path
            alt="BPO and RPO Solutions"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BpoRpoSection;