"use client";
import React, { useRef, useState, MouseEvent, useMemo } from "react";
import Link from "next/link";
import Image from "next/image"; // Essential for Core Web Vitals (LCP)
import { motion, useInView } from "framer-motion"; // For sexy smooth transitions
import { caseStudies } from "@/lib/data";

// --- Data Structure with SEO Keywords ---
interface CaseStudyData {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string; // Added for SEO context
  image1: { src: string; alt: string; overlayText: string };
  image2: { src: string; alt: string };
}

// Helper function to extract category from title or slug
const getCategoryFromTitle = (title: string, slug: string): string => {
  const titleLower = title.toLowerCase();
  const slugLower = slug.toLowerCase();
  
  if (titleLower.includes("ai") || titleLower.includes("artificial intelligence") || slugLower.includes("ai")) {
    return "AI Solutions & Automation";
  }
  if (titleLower.includes("e-commerce") || titleLower.includes("ecommerce") || titleLower.includes("shop") || slugLower.includes("shop")) {
    return "E-Commerce Development";
  }
  if (titleLower.includes("fintech") || titleLower.includes("financial") || titleLower.includes("bank") || slugLower.includes("fintech")) {
    return "FinTech Solutions";
  }
  if (titleLower.includes("design") || titleLower.includes("ui/ux") || titleLower.includes("ux") || slugLower.includes("design")) {
    return "UI/UX Design & Development";
  }
  if (titleLower.includes("brand") || titleLower.includes("identity") || slugLower.includes("brand")) {
    return "Brand Identity & Design";
  }
  if (titleLower.includes("marketing") || titleLower.includes("advertising") || slugLower.includes("marketing")) {
    return "Marketing & Advertising";
  }
  if (titleLower.includes("software") || titleLower.includes("development") || titleLower.includes("platform") || slugLower.includes("software")) {
    return "Software Development";
  }
  if (titleLower.includes("wellness") || titleLower.includes("health") || titleLower.includes("yoga") || slugLower.includes("wellness")) {
    return "Wellness & Lifestyle";
  }
  if (titleLower.includes("social") || titleLower.includes("community") || slugLower.includes("social")) {
    return "Social & Community Platforms";
  }
  if (titleLower.includes("research") || titleLower.includes("scientific") || titleLower.includes("lab") || slugLower.includes("research")) {
    return "Research & Scientific Platforms";
  }
  if (titleLower.includes("logistics") || titleLower.includes("cargo") || titleLower.includes("shipping") || slugLower.includes("logistics")) {
    return "Logistics & Operations";
  }
  if (titleLower.includes("energy") || titleLower.includes("sustainability") || slugLower.includes("energy")) {
    return "Energy & Sustainability";
  }
  if (titleLower.includes("fashion") || titleLower.includes("retail") || slugLower.includes("fashion")) {
    return "Fashion & Retail";
  }
  if (titleLower.includes("education") || titleLower.includes("learning") || titleLower.includes("bootcamp") || slugLower.includes("education")) {
    return "Education & Learning";
  }
  if (titleLower.includes("creative") || titleLower.includes("portfolio") || titleLower.includes("agency") || slugLower.includes("creative")) {
    return "Creative & Portfolio";
  }
  
  return "Digital Solutions";
};

// Transform case studies from lib/data.ts to match CaseStudyData interface
const transformCaseStudies = (studies: typeof caseStudies): CaseStudyData[] => {
  return studies.map((study, index) => {
    const category = getCategoryFromTitle(study.title, study.slug);
    // Extract a short overlay text from the title (first few words or key phrase)
    const overlayText = study.title.split(":")[0] || study.title.split(" ").slice(0, 3).join(" ");
    
    return {
      id: index + 1,
      slug: `/case-studies/${study.slug}`,
      title: study.title,
      description: study.description,
      category,
      image1: {
        src: study.images[0] || "/a.webp",
        alt: `${study.title} main showcase`,
        overlayText: overlayText.length > 20 ? overlayText.substring(0, 20) + "..." : overlayText
      },
      image2: {
        src: study.images[1] || study.images[0] || "/b.webp",
        alt: `${study.title} secondary view`
      }
    };
  });
};

// --- Card Component (Smooth 3D Hover) ---
const Card: React.FC<{ children: React.ReactNode; className?: string; isTextCard?: boolean }> = ({ 
  children, className = "", isTextCard = false 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -10, y: x * 10 }); // Increased tilt for "sexy" feel
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-500 ease-out rounded-2xl ${
        isTextCard ? "bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm" : "bg-zinc-900"
      } ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        willChange: "transform"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
};

// --- CaseStudyBlock Component ---
const CaseStudyBlock: React.FC<{ study: CaseStudyData }> = ({ study }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.article 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-12 gap-6 mb-24"
    >
      {/* Left Column: Hero Image Section */}
      <div className="col-span-12 lg:col-span-7 h-[450px] lg:h-[650px] group">
        <Link href={study.slug} aria-label={`View details for ${study.title}`}>
          <Card className="h-full">
            <Image 
              src={study.image1.src} 
              alt={study.image1.alt} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
          </Card>
        </Link>
      </div>

      {/* Right Column: Secondary Assets & Copy */}
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
        <div className="hidden lg:block h-[312px] group">
          <Link href={study.slug}>
            <Card className="h-full">
              <Image 
                src={study.image2.src} 
                alt={study.image2.alt} 
                fill
                className="object-cover transition-transform duration-700 group-hover:rotate-2 group-hover:scale-110"
              />
            </Card>
          </Link>
        </div>

        <div className="h-[315px] overflow-hidden">
          <Link href={study.slug} className="h-full block">
            <Card isTextCard={true} className="h-full p-10 flex flex-col justify-center hover:border-white/20 transition-colors overflow-hidden">
              <h3 className="text-3xl font-bold mb-4 text-white uppercase tracking-tight leading-tight line-clamp-2">
                {study.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-400 font-light line-clamp-4">
                {study.description}
              </p>
              <div className="mt-8 flex items-center text-white text-xs font-bold uppercase tracking-[0.2em] group">
                <span className="border-b border-white/40 pb-1 group-hover:border-white transition-all">
                  Launch Case Study
                </span>
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudiesGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  // Transform case studies from lib/data.ts
  const CASE_STUDIES = useMemo(() => transformCaseStudies(caseStudies), []);

  return (
    <section className="bg-black px-6 md:px-12 py-32 selection:bg-white selection:text-black">
      <div className="mx-auto max-w-[1400px]">
        {/* SEO Hidden H1 */}
        <h1 
  className="sr-only" 
  title="Antrosys Portfolio | Global Leaders in AI Art, Custom SaaS, and Full-Stack Engineering"
  aria-label="Antrosys Digital Portfolio: Showcasing 1,200+ Projects in AI Software, UI/UX, and Enterprise Integration"
>
  Antrosys Portfolio: Elite Web App Design, Custom UI/UX, and AI-Driven Digital Marketing Solutions
</h1>
        
        <header className="mb-20">
          <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-[0.5em] mb-4">Featured Work</h2>
          <p className="text-zinc-100 text-4xl font-light max-w-2xl">
            Where high-end <span className="italic font-serif">art</span> meets clinical <span className="text-secondary">performance</span>.
          </p>
        </header>

        <div className="space-y-24">
          {CASE_STUDIES.slice(0, visibleCount).map((study) => (
            <CaseStudyBlock key={study.id} study={study} />
          ))}
        </div>

        {visibleCount < CASE_STUDIES.length && (
          <div className="flex justify-center mt-24">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="group relative px-12 py-5 overflow-hidden rounded-full bg-accent text-black font-black uppercase tracking-tighter text-lg hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Load More Stories</span>
              <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;