'use client';
import React, { useState } from 'react';
import { Star, Phone, Quote } from 'lucide-react';

interface CardData {
  rotation: string;
  bgColor: string;
  textColor: string;
  starColor: string;
  name: string;
  role: string;
  company: string;
  review: string;
}

const TestimonialCard = ({ 
  index, 
  total,
  data,
  isSectionHovered 
}: { 
  index: number; 
  total: number; 
  data: CardData;
  isSectionHovered: boolean;
}) => {
  const [isIndividualHovered, setIsIndividualHovered] = useState(false);

  // Calculate the distance from the center (0 is middle card)
  const centerIndex = (total - 1) / 2;
  const distanceSafeFromCenter = index - centerIndex;
  
  // Consistent spread values
  const passiveSpread = distanceSafeFromCenter * 160; 
  const hoverSpread = distanceSafeFromCenter * 260;

  return (
    <div
      onMouseEnter={() => setIsIndividualHovered(true)}
      onMouseLeave={() => setIsIndividualHovered(false)}
      className={`
        absolute left-1/2 top-0
        w-[300px] h-[420px] 
        rounded-2xl p-8 shadow-2xl 
        transition-all duration-500 ease-out cursor-pointer select-none
        ${isIndividualHovered ? 'scale-110' : 'scale-100'}
      `}
      style={{
        backgroundColor: data.bgColor,
        // Removed window check to prevent hydration mismatch/jumping
        transform: isSectionHovered 
            ? `translateX(calc(-50% + ${hoverSpread}px)) rotate(0deg)` 
            : `translateX(calc(-50% + ${passiveSpread}px)) rotate(${data.rotation}deg)`,
        zIndex: isIndividualHovered ? 50 : 10 + index,
      }}
    >
      <div className="flex justify-between items-start mb-10">
        <div className="flex ">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={data.starColor} color={data.starColor} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="/contact">
          <span className={`text-[9px] font-bold uppercase tracking-wider ${data.textColor}`}>
            Contact Sales
          </span></a>
          <div className={`p-1 rounded-full border ${data.bgColor === '#3D2924' ? 'border-zinc-500' : 'border-zinc-300'}`}>
          <a href="/contact">
          <Phone size={10} className={data.textColor} /></a>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Quote className={`mb-3 opacity-20 ${data.textColor}`} size={28} />
        <p className={`text-lg font-light italic leading-tight ${data.textColor}`}>
          "{data.review}"
        </p>
      </div>

      <div className="absolute bottom-8 left-8 right-6 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex-shrink-0 ${data.bgColor === '#3D2924' ? 'bg-zinc-100/10' : 'bg-zinc-800/10'}`} />
        <div className="flex flex-col overflow-hidden">
          <span className={`text-sm font-bold truncate ${data.textColor}`}>{data.name}</span>
          <span className={`text-[9px] uppercase opacity-70 truncate ${data.textColor}`}>
            {data.role} @ {data.company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const [isHovered, setIsHovered] = useState(false);

  const cards: CardData[] = [
    { rotation: '-6', bgColor: '#F5F2E9', textColor: 'text-zinc-900', starColor: '#FF6B2C', name: "Cooper Williams", role: "CEO", company: "Bricklix", review: "Their attention to detail in the UI phase was unlike anything we've seen. Truly a top-tier partner." },
    { rotation: '-3', bgColor: '#3D2924', textColor: 'text-zinc-100', starColor: '#FF6B2C', name: "Alex Chen", role: "Founder", company: "Vantage", review: "The scaling issues we had were solved in weeks. If you want results, this is the team." },
    { rotation: '-2', bgColor: '#F5F2E9', textColor: 'text-zinc-900', starColor: '#FF6B2C', name: "Sarah Jenkins", role: "CTO", company: "Orbit", review: "Communication was seamless. It felt like they were an extension of our internal team." },
    { rotation: '3', bgColor: '#3D2924', textColor: 'text-zinc-100', starColor: '#FF6B2C', name: "Marcus Thorne", role: "Director", company: "Nexus", review: "We increased our conversion rate by 40% after the relaunch. The ROI speaks for itself." },
    { rotation: '6', bgColor: '#F5F2E9', textColor: 'text-zinc-900', starColor: '#FF6B2C', name: "Elena Rossi", role: "VP", company: "Solaris", review: "Creative, fast, and technically sound. They delivered exactly what they promised on time." },
  ];

  return (
    // Added 'hidden sm:flex' to hide on mobile and show on tablet/desktop
    <section className="hidden sm:flex  py-20 overflow-hidden min-h-[700px] flex-col items-center justify-center">
      <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase mb-20 text-center max-w-3xl leading-none px-4">
        Trusted Across <br /> The Globe
      </h2>

      <div 
        className="relative w-full block max-w-screen-xl h-[450px] overflow-visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cards.map((card, i) => (
          <TestimonialCard
            key={i}
            index={i}
            total={cards.length}
            data={card}
            isSectionHovered={isHovered}
          />
        ))}
      </div>
    </section>
  );
}