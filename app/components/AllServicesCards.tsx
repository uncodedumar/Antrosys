"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Quote } from 'lucide-react';

// --- Types ---
type ServiceCardData = {
  id: string;
  category: string;
  subCategory: string;
  specific: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    avatar: string; // Added avatar field
  };
  images: string[];
};

// --- Mock Data ---
const SERVICES_DATA: ServiceCardData[] = [
  {
    id: '1',
    category: 'Development',
    subCategory: 'Web Development',
    specific: 'Front End Development',
    slug: 'custom-software-development',
    title: 'Front-End That Feels Alive, Fast, And Flawless',
    description: 'We Build Web Interfaces That Don’t Just Look Good—They Perform Flawlessly.',
    techStack: ['React', 'Next.js', 'Tailwind'],
    testimonial: { 
      text: "Fast and intuitive.", 
      author: "Cooper Williams", 
      role: "CEO At Bricklix",
      avatar: "https://i.pravatar.cc/150?u=cooper" // Example Avatar
    },
    images: ['/img1.jpg', '/img2.jpg']
  },
  {
    id: '2',
    category: 'UI/UX',
    subCategory: 'Mobile Design',
    specific: 'App Prototyping',
    slug: 'app-prototyping',
    title: 'Visual Journeys Designed for Conversion',
    description: 'We craft experiences that turn visitors into loyal customers through design.',
    techStack: ['Figma', 'Adobe XD', 'Protopie'],
    testimonial: { 
      text: "Stunning visuals.", 
      author: "Sarah Jane", 
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?u=sarah" // Example Avatar
    },
    images: ['/img3.jpg', '/img4.jpg']
  },
];

// Array of background colors for Testimonial Cards
const TESTIMONIAL_BGS = [
  'bg-[#1E1E1E]', // Dark Charcoal
  'bg-[#2D3142]', // Muted Blue/Gray
  'bg-[#0F4C5C]', // Deep Teal
  'bg-[#5F0F40]', // Deep Plum
  'bg-[#1B4332]'  // Forest Green
];

const AllServicesCards = () => {
  const [filter, setFilter] = useState({ 
    cat: 'Development', 
    sub: 'Web Development', 
    spec: 'Front End Development' 
  });

  const categories = useMemo(() => Array.from(new Set(SERVICES_DATA.map(s => s.category))), []);
  const subCategories = useMemo(() => 
    Array.from(new Set(SERVICES_DATA.filter(s => s.category === filter.cat).map(s => s.subCategory))), 
    [filter.cat]
  );
  const specifics = useMemo(() => 
    Array.from(new Set(SERVICES_DATA.filter(s => s.subCategory === filter.sub).map(s => s.specific))), 
    [filter.sub]
  );

  const sortedServices = useMemo(() => {
    return [...SERVICES_DATA].sort((a, b) => {
      const aScore = (a.category === filter.cat ? 1 : 0) + (a.subCategory === filter.sub ? 1 : 0) + (a.specific === filter.spec ? 1 : 0);
      const bScore = (b.category === filter.cat ? 1 : 0) + (b.subCategory === filter.sub ? 1 : 0) + (b.specific === filter.spec ? 1 : 0);
      return bScore - aScore;
    });
  }, [filter]);

  return (
    <div className="min-h-screen py-10 md:py-20 px-6 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-accent font-bold mb-12 tracking-tight">WHERE DO YOU BEGIN?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Dropdown num="1" options={categories} value={filter.cat} onChange={(val) => setFilter(f => ({ ...f, cat: val }))} />
            <Dropdown num="2" options={subCategories} value={filter.sub} onChange={(val) => setFilter(f => ({ ...f, sub: val }))} />
            <Dropdown num="3" options={specifics} value={filter.spec} onChange={(val) => setFilter(f => ({ ...f, spec: val }))} />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-8 uppercase text-accent tracking-widest">HERE YOU BEGIN</h3>

        <div className="space-y-12 md:space-y-24">
          <AnimatePresence mode="popLayout">
            {sortedServices.map((service, index) => (
              <ServiceGroup key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ServiceGroup = ({ service, index }: { service: ServiceCardData, index: number }) => {
  // Select background color based on index
  const bgColor = TESTIMONIAL_BGS[index % TESTIMONIAL_BGS.length];

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4"
    >
      {/* Main Info Card */}
      <Link href={`/services/${service.slug}`} className="md:col-span-5">
        <TiltCard className="bg-white p-8 md:p-10 rounded-xl shadow-sm flex flex-col justify-between h-full group">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            <div className="flex flex-wrap gap-2">
                {service.techStack.map(tech => <span key={tech} className="text-xs font-bold uppercase text-[#FF6B2C]">{tech}</span>)}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </div>
        </TiltCard>
      </Link>

      {/* Testimonial Card - Now with Dynamic BG and Author Image */}
      <div className="hidden md:block md:col-span-4">
        <TiltCard className={`${bgColor} text-white p-10 rounded-xl h-full flex flex-col justify-between`}>
          <div>
            <Quote className="w-12 h-12 text-[#F9F5E9] mb-6 fill-current opacity-20" />
            <p className="text-xl font-bold italic leading-snug">{service.testimonial.text}</p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src={service.testimonial.avatar} 
                alt={service.testimonial.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">{service.testimonial.author}</p>
              <p className="text-sm text-white/60">{service.testimonial.role}</p>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Image Column */}
      <div className="hidden md:flex md:col-span-3 flex-col gap-4">
        <TiltCard className="h-1/2 rounded-xl overflow-hidden relative bg-gray-300 min-h-[150px]" />
        <TiltCard className="h-1/2 rounded-xl overflow-hidden relative bg-gray-400 min-h-[150px]" />
      </div>
    </motion.div>
  );
};

// ... Dropdown and TiltCard components remain the same ...
const Dropdown = ({ num, value, options, onChange }: { num: string, value: string, options: string[], onChange: (v: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative min-w-[280px]">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FF6B2C] text-white px-5 py-4 rounded-full flex items-center justify-between cursor-pointer hover:bg-[#e85a1f] transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-white text-[#FF6B2C] flex items-center justify-center font-bold text-sm">
            {num}
          </span>
          <span className="border-b border-white/50 pb-1 text-lg font-medium">{value}</span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mt-2"
          >
            {options.map((opt) => (
              <li 
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className="px-6 py-3 hover:bg-[#F9F5E9] cursor-pointer transition-colors text-gray-800"
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
      style={{ perspective: 1000 }}
      className={`transition-shadow hover:shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AllServicesCards;