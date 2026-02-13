"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiDjango, SiPhp, SiLaravel, 
  SiShopify, SiWordpress, SiOdoo, SiWebflow, SiWix, SiGithub, SiJavascript,
  SiTailwindcss, SiTypescript, SiFigma, SiFramer, SiNodedotjs,
  SiOpenai, SiDialogflow, SiRasa, SiAdobexd, SiMiro, SiSketch, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiNotion, SiCoreldraw, SiAffinitydesigner,SiMeta, SiInstagram, SiFacebook, SiLinkedin,  SiYoutube, SiTiktok, SiPinterest, SiReddit, SiDiscord, SiTelegram, SiWhatsapp,SiCplusplus,SiDotnet,SiQt, SiAmazonwebservices,SiDocker,SiKubernetes,SiSwift,SiKotlin
} from "react-icons/si";
import { FaQuoteLeft, FaRobot, FaEye, FaBrain, FaComments, FaDatabase } from "react-icons/fa6";

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
    slug: "AI-Solutions",
    title: "AI-Powered Business Intelligence Solutions",
    description: "Our AI solutions help businesses optimize operations, personalize experiences, and scale intelligently using data-driven intelligence.",
    testimonial: "Working with them completely changed how we make decisions. Our productivity skyrocketed, and the AI solutions feel like they anticipate our needs!",
    authorpic: "/People/r.avif",
    author: "Emily Harris",
    role: "Manager @Imperia Tech",
    bgColor: "#222222",
    techIcons: [SiOpenai, FaRobot,FaBrain, FaEye,FaComments,FaDatabase,SiDialogflow,SiRasa,
    ],
    images: [
      "/heroservcards/ai.avif",
      "/heroservcards/ai2.avif",
      "/heroservcards/ai3.avif"
    ]
  },
  {
    id: 1,
    slug: "Logo-n-Brand-Identity",
    title: "Brand Identities That Stick and Sell",
    description: "We build high-performance digital experiences where aesthetics meet ROI. We don't just design for the eyes; we design for the click",
    testimonial: "The transformation was more than aesthetic; it was structural. We saw a 100% increase in user interaction thanks to their high-performance design.",
    authorpic: "/People/j.avif",
    author: "Jayden Dave",
    role: "CTO @dota inc",
    bgColor: "#3D2FA9",
    techIcons: [SiFigma,SiAdobephotoshop,SiAdobeillustrator,SiAdobeindesign,SiAdobeindesign,SiNotion ,SiCoreldraw ,SiAffinitydesigner],
    images: [
      "/heroservcards/brand3.avif",
      "/heroservcards/brand.avif",
      "/heroservcards/brand2.avif"
    ]
  },
  {
    id: 1,
    slug: "Marketing-n-Advertising",
    title: "Brand Growth And Marketing Mastery",
    description: "We design strategies that amplify your brand's reach and ROI. From AI-driven marketing to growth hacking campaigns, we deliver measurable results.",
    testimonial: "Their marketing strategies delivered more than we imagined. Leads, conversions, and awareness—all skyrocketed. Real growth partners!.",
    authorpic: "/People/o.avif",
    author: "kate .W",
    role: "CEO @kryptek inc",
    bgColor: "#FF7722",
    techIcons: [SiNotion, SiMeta, SiInstagram, SiFacebook, SiLinkedin, SiYoutube, SiTiktok, SiPinterest, SiReddit, SiDiscord, SiTelegram, SiWhatsapp, SiOdoo ],
    images: [
      "/heroservcards/marketwoman.avif",
      "/heroservcards/market.avif",
      "/heroservcards/market2.avif"
    ]
  },
  {
    id: 1,
    slug: "Web-n-Application-Design",
    title: "Immersive Design And User Experiences",
    description: "We create design systems, UI/UX flows, animations, and visual storytelling that captivate audiences. Every touchpoint is designed to feel intuitive.",
    testimonial: "Their design approach is magical. Every interaction feels seamless and premium. Customers notice, and we stand out in the market.",
    authorpic: "/People/a.avif",
    author: "Sofia Coleman",
    role: "CTO @wizards llc",
    bgColor: "#FF3C34",
    techIcons: [SiFigma,SiAdobexd, SiMiro, SiSketch, SiFramer, SiTailwindcss, SiTypescript,SiShopify, SiWordpress, SiWix, SiWebflow],
    images: [
      "/heroservcards/art3.avif",
      "/heroservcards/art4.avif",
      "/heroservcards/art.avif"
    ]
  },
  {
    id: 1,
    slug: "custom-software-development",
    title: "Scalable software Development Excellence",
    description: "We turn ideas into fully functional, scalable products. From mobile apps to web platforms, our development is fast, secure, and future-proof.",
    testimonial: "They delivered our product ahead of schedule, with flawless execution. The quality is unmatched, and our users love it.",
    authorpic: "/People/e.avif",
    author: "Adrian James",
    role: "Tech Entrepreneur",
      bgColor: "#785F47",
      techIcons: [SiPython, SiNodedotjs, SiPhp, SiLaravel, SiNodedotjs,SiCplusplus,SiDotnet,SiQt, SiAmazonwebservices,SiDocker,SiKubernetes,SiSwift,SiKotlin ],
    images: [
      "/heroservcards/st.avif",
      "/heroservcards/st2.avif",
      "/heroservcards/st3.avif"
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
              <p className="text-base md:text-lg font-light italic max-w-md mb-6 leading-snug ">
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
                    
                    <span className="font-medium text-base md:text-lg uppercase tracking-wider">{author}</span>
                  </div>
                  <span className="text-xs md:text-sm opacity-70 font-light ">{role}</span>
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