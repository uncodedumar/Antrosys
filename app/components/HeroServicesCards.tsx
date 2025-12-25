"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiDjango, SiPhp, SiLaravel, 
  SiShopify, SiWordpress, SiOdoo, SiWebflow, SiWix, SiGithub, SiJavascript,
  SiTailwindcss, SiTypescript, SiFigma, SiFramer, SiNodedotjs
} from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa6";

// --- Types & Data ---

interface CardData {
  id: number;
  slug: string; // Added slug
  title: string;
  description: string;
  testimonial: string;
  author: string;
  authorpic: string; // Fixed key
  role: string;
  bgColor: string;
  images: string[];
  techIcons: any[]; // Specific icons per card
}

const CARDS: CardData[] = [
  {
    id: 1,
    slug: "ai-solutions",
    title: "AI-Powered Business Intelligence Solutions",
    description: "We transform raw data into actionable insights using advanced AI and predictive analytics. From automating repetitive tasks to optimizing decision-making.",
    testimonial: "Working with them completely changed how we make decisions. Our productivity skyrocketed, and the AI solutions feel like they anticipate our needs!",
    authorpic: "/b.webp",
    author: "boris",
    role: "Manager",
    bgColor: "#222222",
    techIcons: [SiPython, SiDjango, SiJavascript, SiGithub],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    ]
  },
  {
    id: 1,
    slug: "web-experiences",
    title: "Web Experiences That Drive Engagement",
    description: "We craft visually stunning, high-performance websites and web apps that aren’t just beautiful—they convert. Every pixel, animation, and interaction is designed to engage users.",
    testimonial: "Our website went from bland to iconic. Engagement doubled, and investors keep complimenting the design. They’re truly game-changers.",
    authorpic: "/a.webp",
    author: "jayden",
    role: "CFO",
    bgColor: "#3D2FA9",
    techIcons: [SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    ]
  },
  {
    id: 1,
    slug: "brand-growth",
    title: "Brand Growth And Marketing Mastery",
    description: "We design strategies that amplify your brand’s reach and ROI. From AI-driven marketing to growth hacking campaigns, we deliver measurable results.",
    testimonial: "Their marketing strategies delivered more than we imagined. Leads, conversions, and awareness—all skyrocketed. Real growth partners!.",
    authorpic: "/author.webp",
    author: "kate",
    role: "CEO",
    bgColor: "#FF7722",
    techIcons: [SiShopify, SiWordpress, SiWix, SiWebflow],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    ]
  },
  {
    id: 1,
    slug: "immersive-design",
    title: "Immersive Design And User Experiences",
    description: "We create design systems, UI/UX flows, animations, and visual storytelling that captivate audiences. Every touchpoint is designed to feel intuitive.",
    testimonial: "Their design approach is magical. Every interaction feels seamless and premium. Customers notice, and we stand out in the market.",
    authorpic: "/d.webp",
    author: "james",
    role: "CTO",
    bgColor: "#FF3C34",
    techIcons: [SiFigma, SiFramer, SiTailwindcss, SiTypescript],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    ]
  },
  {
    id: 1,
    slug: "product-dev",
    title: "Scalable Product Development Excellence",
    description: "We turn ideas into fully functional, scalable products. From mobile apps to web platforms, our development is fast, secure, and future-proof.",
    testimonial: "They delivered our product ahead of schedule, with flawless execution. The quality is unmatched, and our users love it.",
    authorpic: "/e.webp",
    author: "Cooper K.",
    role: "Tech Entrepreneur",
    bgColor: "#785F47",
    techIcons: [SiNodedotjs, SiPhp, SiLaravel, SiOdoo],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    ]
  }
];

// Helper to make dummy imports work if you didn't have all icons imported
function SiPython(props: any) { return <SiDjango {...props} /> }

export default function StackedCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative bg-black py-30 px-4 md:px-10">
      {CARDS.map((card, i) => {
        const targetScale = 1 - (CARDS.length - i) * 0.05;
        return (
          <Card 
            key={card.id} 
            i={i} 
            {...card} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale} 
          />
        );
      })}
    </main>
  );
}

interface CardProps extends CardData {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, title, description, testimonial, author, authorpic, role, bgColor, images, techIcons, progress, range, targetScale }: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 ">
      <motion.div
        style={{ scale, backgroundColor: bgColor, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative w-full max-w-[1100px] h-[650px] md:h-[600px] rounded-[1rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-between z-10 h-full pb-8 md:pb-0">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-[1.1] mb-4 md:mb-6 tracking-tight">
                {title}
              </h2>
              <p className="text-sm md:text-base font-light opacity-90 max-w-lg leading-relaxed lowercase">
                {description}
              </p>
            </div>

            {/* Testimonial Section with fixed spacing */}
            <div className="mt-auto pt-6">
              <FaQuoteLeft className="text-3xl mb-3 opacity-100" />
              <p className="text-base md:text-lg font-light italic max-w-md mb-6 leading-snug lowercase">
                {testimonial}
              </p>
              
              <div className="flex items-center gap-4">
                {/* Author Image */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 overflow-hidden relative border border-white/10">
                  <Image 
                    src={authorpic} 
                    alt={author} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    {/* The decorative circle before name */}
                    <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                    <span className="font-bold text-base md:text-lg uppercase tracking-wider">{author}</span>
                  </div>
                  <span className="text-xs md:text-sm opacity-70 font-medium uppercase">{role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:flex w-full md:w-2/5 relative flex-col justify-between pt-4">
            {/* Unique Icon Grid per card */}
            <div className="grid grid-cols-4 gap-y-10 gap-x-8 justify-items-end opacity-90 pr-4">
              {techIcons.map((Icon, idx) => (
                <Icon key={idx} className="text-3xl" />
              ))}
            </div>

            {/* Floating Image Row */}
            <div className="absolute -bottom-16 -left-15 flex pointer-events-none py-5">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden border-4 border-white/10 shadow-2xl transition-transform
                    ${idx === 0 ? "rotate-2" : idx === 1 ? "-rotate-2" : "rotate-6 translate-x-4"}`}
                >
                  <img src={img} alt="Work example" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </motion.div>
      
    </div>
    
  );
};