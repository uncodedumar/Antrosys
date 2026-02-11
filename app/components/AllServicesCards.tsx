"use client";

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ServicePageData } from '@/lib/data';

// --- Types ---
type ServiceCardData = {
  id: string;
  category: string;
  specific: string;
  slug: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  images: string[];
};

// --- SEO Schema Component ---
// This tells Google exactly what your services are without visual changes
const ServiceSchema = ({ services }: { services: ServiceCardData[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": s.title,
        "description": s.description,
        "url": `https://antrosys.com/services/${s.slug}`, // Update with your domain
        "provider": { "@type": "Digital Agency", "name": "Antrosys" }
      }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

const getCategory = (slug: string): string => {
  if (['Automated-Chat-Systems', 'AI-Solutions'].includes(slug)) return 'AI Development';
  if (['App-Dev', 'Next-Gen-Desktop-Applications'].includes(slug)) return 'Application Development';
  if (['Logo-n-Brand-Identity', 'Web-n-Application-Design', 'Art-n-Illustration', 'Print-Design', 'Packaging-n-Label-Design', 'Social-Media-Graphics'].includes(slug)) return 'Design';
  if (['Marketing-n-Advertising', 'Growth-Analytics-n-Marketing-Automation'].includes(slug)) return 'Marketing';
  if (slug === 'QA-QC') return 'QA Testing';
  if (slug === 'custom-software-development') return 'Software Development';
  return 'Web Development';
};

const getSpecific = (slug: string): string => {
  const mapping: Record<string, string> = {
    'AI-Solutions': 'AI Solutions',
    'App-Dev': 'Mobile Apps',
    'Next-Gen-Desktop-Applications': 'Desktop Applications',
    'Logo-n-Brand-Identity': 'Brand Identity',
    'Web-n-Application-Design': 'Web & App Design',
    'Art-n-Illustration': 'Art & Illustration',
    'Print-Design': 'Print Design',
    'Packaging-n-Label-Design': 'Packaging Design',
    'Social-Media-Graphics': 'Social Media Graphics',
    'Marketing-n-Advertising': 'Advertising',
    'Growth-Analytics-n-Marketing-Automation': 'Growth & Analytics',
    'QA-QC': 'Quality Assurance',
    'custom-software-development': 'Custom Software',
    'Front-End-Development': 'Front-End Development',
    'Back-End-Web-Development': 'Back-End Development',
    'Full-Stack Web Development': 'Full-Stack Development',
    'Website-Maintenance': 'Website Maintenance',
    'No-Code-Easy-to-Manage-Websites': 'No-Code Websites',
    'WordPress-Engineered-Websites': 'WordPress',
    'Shopify-Websites': 'Shopify',
    'Automated-Chat-Systems': 'Chat Systems',
    'Cloud-Solutions': 'Cloud Solutions',
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
    metrics: [
      { label: 'Client Satisfaction', value: '95%' },
      { label: 'Project Success', value: '100%' },
      { label: 'On-Time Delivery', value: '98%' },
      { label: 'Quality Score', value: 'A+' },
    ],
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

  useEffect(() => {
    if (filter.cat !== 'All' && !specifics.includes(filter.spec)) {
      setFilter(prev => ({ ...prev, spec: 'All' }));
    }
  }, [filter.cat, specifics, filter.spec]);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA
      .filter(s => (filter.cat === 'All' || s.category === filter.cat) && (filter.spec === 'All' || s.specific === filter.spec))
      .sort((a, b) => a.category.localeCompare(b.category));
  }, [filter]);

  return (
    <section className="min-h-screen py-10 bg-primary text-accent selection:bg-secondary selection:text-secondary">
      <ServiceSchema services={filteredServices} />
      <div className="max-w-[1400px] mx-auto px-6">
        
        <nav className="flex flex-wrap gap-4 mb-16 justify-center" aria-label="Service Category Filters">
          <Dropdown num="1" options={allCategories} value={filter.cat} onChange={(val) => setFilter(f => ({ ...f, cat: val }))} />
          <Dropdown num="2" options={specifics} value={filter.spec} onChange={(val) => setFilter(f => ({ ...f, spec: val }))} />
        </nav>

        <LayoutGroup>
          <motion.div layout className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceGroup key={service.id} service={service} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredServices.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-400 py-20">
            <p>No services found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ServiceGroup = ({ service }: { service: ServiceCardData }) => {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]"
    >
      <div className="md:col-span-4 bg-primary border border-secondary rounded-[30px] md:rounded-[40px] p-8 md:p-10 flex flex-col justify-between ">
      <Link 
          href={`/services/${service.slug}`} 
          
          aria-label={` ${service.title}`}
        >

       
        <div>
          <h3 className="text-3xl text-accent font-medium mb-4 tracking-tight">{service.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            {service.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-semibold mb-1 tabular-nums">{m.value}</span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-gray-500 font-bold">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
   
        </Link>
        <Link 
          href={`/services/${service.slug}`} 
          className="group inline-flex items-center gap-2 bg-gray-900  rounded-full px-4 py-2 text-sm mt-10 w-fit transition-all hover:text-white text-gray-400"
          aria-label={`Learn more about ${service.title}`}
        >
          Explore <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          
        </Link>
      </div>

      <div className="md:col-span-8 relative rounded-[25px] overflow-hidden group min-h-[300px] bg-neutral-900">
      <Link 
          href={`/services/${service.slug}`} 
      
          aria-label={`${service.title}`}
        >  
      
        <Image 
          src={service.images[0]} 
          alt={`${service.title} - High Performance ${service.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          priority={service.id === '1'}
          loading={service.id === '1' ? 'eager' : 'lazy'}
        />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </motion.article>
  );
};

const Dropdown = ({ num, value, options, onChange }: { num: string, value: string, options: string[], onChange: (v: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div className="relative min-w-[240px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => e.key === 'Escape' && handleClose()}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full bg-[#1a1a1a] border border-white/10 text-white px-6 py-3 rounded-full flex items-center justify-between cursor-pointer hover:border-white/30 hover:bg-[#222] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        <div className="flex items-center gap-3 pointer-events-none">
          <span className="text-gray-500 font-mono text-xs" aria-hidden="true">{num.padStart(2, '0')}</span>
          <span className="text-sm font-medium">{value}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={handleClose} />
            <motion.ul 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 5, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full bg-[#141414] border border-white/10 rounded-2xl shadow-2xl overflow-hidden mt-2 max-h-[300px] overflow-y-auto custom-scrollbar"
              role="listbox"
            >
              {options.map((opt) => (
                <li 
                  key={opt}
                  role="option"
                  aria-selected={value === opt}
                  onClick={() => { onChange(opt); handleClose(); }}
                  className={`px-6 py-3 cursor-pointer text-sm transition-colors ${value === opt ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}
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