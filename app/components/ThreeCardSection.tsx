"use client";
import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";

// --- Data Structure ---
interface CaseStudyData {
  id: number;
  slug: string;
  title: string;
  description: string;
  image1: { src: string; alt: string; overlayText: string };
  image2: { src: string; alt: string };
}

const CASE_STUDIES: CaseStudyData[] = [
    {
      id: 1,
      slug: "/case-studies/ecommerce-platform",
      title: "Project Boost: AI-Powered Ranking",
      description: "His Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion.",
      image1: { src: "/a.webp", alt: "Laptop", overlayText: "Boost your rankings with AI." },
      image2: { src: "/b.webp", alt: "Characters" },
    },
    // ... (Keeping your other 14 items here)
    {
      id: 2,
      slug: "/case-studies/quantum-leap",
      title: "Quantum Leap: E-commerce Refactor",
      description: "Revamped a legacy e-commerce platform, achieving a 40% reduction in load time.",
      image1: { src: "/images/c.webp", alt: "Mobile", overlayText: "40% Faster Checkout" },
      image2: { src: "/images/d.webp", alt: "Data" },
    },
    {
      id: 3,
      slug: "/case-studies/fintech-dashboard",
      title: "FinTech Hub: Intuitive Analytics",
      description: "Developed a comprehensive financial dashboard for investors.",
      image1: { src: "/images/e.webp", alt: "Chart", overlayText: "Real-Time Financial Data" },
      image2: { src: "/images/f.webp", alt: "Lock" },
    },
    // Adding placeholders for demonstration based on your list
    { id: 4, slug: "#", title: "Project 4", description: "Description here...", image1: { src: "/images/g.webp", alt: "Map", overlayText: "Text" }, image2: { src: "/images/h.webp", alt: "Nodes" } },
    { id: 5, slug: "#", title: "Project 5", description: "Description here...", image1: { src: "/images/i.webp", alt: "Video", overlayText: "Text" }, image2: { src: "/images/j.webp", alt: "Waves" } },
    { id: 6, slug: "#", title: "Project 6", description: "Description here...", image1: { src: "/images/k.webp", alt: "CRM", overlayText: "Text" }, image2: { src: "/images/l.webp", alt: "Keys" } },
];

// --- Card Component ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  isTextCard?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", isTextCard = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { offsetWidth: width, offsetHeight: height, offsetLeft: left, offsetTop: top } = cardRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) / (width / 2);
    const y = (clientY - centerY) / (height / 2);
    setRotation({ x: y * 0.2, y: x * -1 });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-300 ease-out rounded-lg shadow-xl ${isTextCard ? "bg-zinc-900 border border-zinc-800" : "bg-zinc-900"} ${className}`}
      style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// --- CaseStudyBlock Component ---
const CaseStudyBlock: React.FC<{ study: CaseStudyData }> = ({ study }) => {
  return (
    <div className="grid grid-cols-12 gap-4 mb-16">
      {/* Card 1: Main Image */}
      <div className="col-span-12 lg:col-span-7 h-[400px] lg:h-[600px]">
        <Link href={study.slug} className="h-full block">
          <Card className="h-full">
            <img src={study.image1.src} alt={study.image1.alt} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 w-full">
              <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tighter italic">{study.image1.overlayText}</h2>
            </div>
          </Card>
        </Link>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
        {/* Card 2: Secondary Image - HIDDEN ON MOBILE */}
        <div className="hidden lg:block flex-1 lg:h-[292px]">
          <Link href={study.slug} className="h-full block">
            <Card className="h-full">
              <img src={study.image2.src} alt={study.image2.alt} className="w-full h-full object-cover absolute inset-0" />
            </Card>
          </Link>
        </div>

        {/* Card 3: Text Content */}
        <div className="flex-1 min-h-[250px] lg:h-[292px]">
          <Link href={study.slug} className="h-full block">
            <Card isTextCard={true} className="h-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{study.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{study.description}</p>
              <span className="mt-6 text-white text-xs font-bold uppercase tracking-widest border-b border-white w-fit pb-1 hover:text-zinc-400 transition-colors">
                View Project &rarr;
              </span>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- Main Grid Component ---
const CaseStudiesGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-black px-4 md:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        {CASE_STUDIES.slice(0, visibleCount).map((study) => (
          <CaseStudyBlock key={study.id} study={study} />
        ))}

        {/* Load More Button */}
        {visibleCount < CASE_STUDIES.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all rounded-full"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;