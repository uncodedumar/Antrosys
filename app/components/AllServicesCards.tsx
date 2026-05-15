"use client";

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { ServicePageData } from '@/lib/data';

// --- Types ---
type ServiceCardData = {
  id: string;
  category: string;
  specific: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
};

const getCategory = (slug: string): string => {
  if (['automated-chat-systems', 'ai-solutions'].includes(slug)) return 'AI Development';
  if (['app-dev', 'next-gen-desktop-applications'].includes(slug)) return 'Application Development';
  if (['logo-n-brand-identity', 'web-n-application-design', 'art-n-illustration', 'print-design', 'packaging-n-label-design', 'social-media-graphics'].includes(slug)) return 'Design';
  if (['marketing-n-advertising', 'growth-analytics-n-marketing-automation'].includes(slug)) return 'Marketing';
  if (slug === 'qa-qc') return 'QA Testing';
  if (slug === 'custom-software-development') return 'Software Development';
  return 'Web Development';
};

const getSpecific = (slug: string): string => {
  const mapping: Record<string, string> = {
    'ai-solutions': 'AI Solutions',
    'app-dev': 'Mobile Apps',
    'next-gen-desktop-applications': 'Desktop Applications',
    'logo-n-brand-identity': 'Brand Identity',
    'web-n-application-design': 'Web & App Design',
    'art-n-illustration': 'Art & Illustration',
    'print-design': 'Print Design',
    'packaging-n-label-design': 'Packaging Design',
    'social-media-graphics': 'Social Media Graphics',
    'marketing-n-advertising': 'Advertising',
    'growth-analytics-n-marketing-automation': 'Growth & Analytics',
    'qa-qc': 'Quality Assurance',
    'custom-software-development': 'Custom Software',
    'front-end-development': 'Front-End Development',
    'back-end-web-development': 'Back-End Development',
    'full-stack-web-development': 'Full-Stack Development',
    'website-maintenance': 'Website Maintenance',
    'no-code-easy-to-manage-websites': 'No-Code Websites',
    'wordpress-engineered-websites': 'WordPress',
    'shopify-websites': 'Shopify',
    'automated-chat-systems': 'Chat Systems',
    'cloud-solutions': 'Cloud Solutions',
  };
  return mapping[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

const transformServiceData = (services: ServicePageData[]): ServiceCardData[] => {
  return services.map((service, index) => ({
    id: String(index + 1),
    category: getCategory(service.slug),
    specific: getSpecific(service.slug),
    slug: service.slug,
    title: service.hero.title,
    description: service.hero.description,
    images: service.hero.imageUrl ? [service.hero.imageUrl] : ['/a.webp'],
  }));
};

const SERVICES_DATA: ServiceCardData[] = transformServiceData(ServicePageData);

const AllServicesCards = () => {
  const [filter, setFilter] = useState({ cat: 'All', spec: 'All' });

  const allCategories = useMemo(() => ['All', ...Array.from(new Set(SERVICES_DATA.map(s => s.category))).sort()], []);
  
  const specifics = useMemo(() => {
    const base = filter.cat === 'All' 
      ? SERVICES_DATA.map(s => s.specific) 
      : SERVICES_DATA.filter(s => s.category === filter.cat).map(s => s.specific);
    return ['All', ...Array.from(new Set(base)).sort()];
  }, [filter.cat]);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA
      .filter(s => (filter.cat === 'All' || s.category === filter.cat) && (filter.spec === 'All' || s.specific === filter.spec));
  }, [filter]);

  return (
    <section className="py-24 bg-primary text-accent">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Navigation / Filters */}
        <nav className="flex flex-wrap gap-4 mb-24 justify-center">
          <Dropdown num="1" options={allCategories} value={filter.cat} onChange={(val) => setFilter(f => ({ ...f, cat: val }))} />
          <Dropdown num="2" options={specifics} value={filter.spec} onChange={(val) => setFilter(f => ({ ...f, spec: val }))} />
        </nav>

        <LayoutGroup>
          <motion.div layout className="flex flex-col gap-32">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceRow key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredServices.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl font-light">No services found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceRow = ({ service, index }: { service: ServiceCardData; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
    >
      {/* Text Content */}
      <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="mb-6">
            <span className="text-xs font-mono tracking-widest text-secondary uppercase border border-secondary/30 px-3 py-1 rounded-full">
                {service.category}
            </span>
        </div>
        
        <h3 className="text-5xl md:text-6xl font-medium mb-6 tracking-tight leading-[1.1]">
            {service.title}
        </h3>
        
        <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
          {service.description}
        </p>

        {/* Dynamic CTA Dock */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link 
            href="https://cal.com/antrosys" 
            target="_blank"
            className="flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl shadow-accent/10"
          >
            <Calendar className="w-5 h-5" />
            Book a Meeting
          </Link>
          
          <Link 
            href="tel:+1234567890" // Replace with your actual number
            className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 text-accent px-8 py-4 rounded-full font-semibold hover:bg-secondary/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </Link>

          <Link 
            href={`/services/${service.slug}`}
            className="group flex items-center gap-2 text-gray-500 hover:text-accent ml-2 transition-colors duration-300"
          >
            Case Studies <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <Link href={`/services/${service.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-[40px] group border border-white/5">
          <Image 
            src={service.images[0]} 
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
      </div>
    </motion.article>
  );
};

// ... Dropdown component remains similar but styled more sleekly ...
const Dropdown = ({ num, value, options, onChange }: { num: string, value: string, options: string[], onChange: (v: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = useCallback(() => setIsOpen(false), []);
  
    return (
      <div className="relative min-w-[260px]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-secondary/5 border border-white/10 text-white px-8 py-4 rounded-full flex items-center justify-between hover:border-accent/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="text-secondary font-mono text-xs">{num.padStart(2, '0')}</span>
            <span className="text-sm font-medium tracking-wide">{value}</span>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={handleClose} />
              <motion.ul 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-50 w-full bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden mt-2 max-h-[300px] overflow-y-auto"
              >
                {options.map((opt) => (
                  <li 
                    key={opt}
                    onClick={() => { onChange(opt); handleClose(); }}
                    className={`px-8 py-4 cursor-pointer text-sm transition-colors ${value === opt ? 'bg-accent text-primary font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    {opt}
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };

export default AllServicesCards;