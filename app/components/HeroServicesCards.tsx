"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, ArrowUpRight, Cpu, Code, Megaphone, 
  Smartphone, Palette, Globe, Users, Phone, Mail, Calendar 
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { 
    id: "01", 
    title: "AI & Machine Learning", 
    icon: Cpu,
    subServices: [
      { name: "Enterprise AI Solutions", href: "/services/AI-Solutions" },
      { name: "Automated-Chat-Systems", href: "/services/AI Chatbot Development" },
    ] 
  },
  { 
    id: "02", 
    title: "Custom Software Solutions", 
    icon: Code,
    subServices: [
      { name: "SaaS Software Development", href: "/services/custom-software-development" },
      { name: "Quality Assurance & QC", href: "/services/QA-QC" },
      { name: "Cloud Infrastructure & AWS", href: "/services/Cloud-Solutions" }
    ] 
  },
  { 
    id: "03", 
    title: "Digital Marketing & Ads (SMM)", 
    icon: Megaphone,
    subServices: [
      { name: "Performance Marketing & Ads", href: "/services/Marketing-n-Advertising" },
      { name: "Social Media Marketing (SMM)", href: "/services/Social-Media-Graphics" },
      { name: "Marketing Automation", href: "/services/Growth-Analytics-n-Marketing-Automation" }
    ] 
  },
  { 
    id: "04", 
    title: "Mobile & Desktop Apps", 
    icon: Smartphone,
    subServices: [
      { name: "iOS/Android Development", href: "/services/App-Dev" },
      { name: "Next Gen Desktop Application", href: "/services/Next-Gen-Desktop-Applications" },
    ] 
  },
  { 
    id: "05", 
    title: "UI/UX & Creative Design", 
    icon: Palette,
    subServices: [
      { name: "Product Packaging Design", href: "/services/Packaging-n-Label-Design" },
      { name: "Brand Identity", href: "/services/Logo-n-Brand-Identity" },
      { name: "UI/UX Interface Design (Web/App)", href: "/services/Web-n-Application-Design" },
      { name: "Digital Art & Illustration", href: "/services/Art-n-Illustration"},
      { name: "Print & Vector Graphics", href: "/services/Print-Design" }
    ] 
  },
  { 
    id: "06", 
    title: "Web Development & SEO", 
    icon: Globe,
    subServices: [
      { name: "React & Next.js Front-End", href: "/services/Front-End-Development" },
      { name: "Node & Cloud Back-End", href: "/services/Back-End-Web-Development" },
      { name: "Full-Stack Web Solutions", href: "/services/Full-Stack Web Development" },
      { name: "Web Support & Maintenance (SEO)", href: "/services/Website-Maintenance" },
      { name: "No-Code Web Solutions", href: "/services/No-Code-Easy-to-Manage-Websites" },
      { name: "Headless WordPress Dev", href: "/services/WordPress-Engineered-Websites" },
      { name: "Shopify & E-commerce Stores", href: "/services/Shopify-Websites" },
    ] 
  },
  { 
    id: "07", 
    title: "Outsourcing", 
    icon: Users,
    subServices: [
      { name: "Voice Support", href: "/bpo" },
      { name: "Email & Chat Support Services", href: "/bpo" },
      { name: "Staff Augmentation Services", href: "/bpo" },
      { name: "Back Office Support Services", href: "/bpo" },
      { name: "Lead Generations", href: "/bpo" },
      { name: "Technical Support", href: "/bpo" },
    ] 
  },
];

const WobbleText = ({ text }: { text: string }) => {
  return (
    <span className="flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{ 
            y: -5,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.3 } 
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const PulsingIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <Link href={href} className="relative group">
    <motion.div 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute inset-0 rounded-full border border-[var(--secondary)] opacity-50"
    />
    <div className="relative z-10 p-4 rounded-full border-2 border-[var(--secondary)] bg-[var(--accent)] text-[var(--primary)] transition-transform group-hover:scale-110">
      <Icon size={24} />
    </div>
  </Link>
);

export default function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("01");

  return (
    <section className="bg-black text-white py-20 px-6 font-sans relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="flex gap-4">
             <PulsingIcon icon={Calendar} href="https://cal.com/antrosys" />
             <PulsingIcon icon={Phone} href="tel:#" />
             <PulsingIcon icon={Mail} href="/contact" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-right">
            Our Services
          </h2>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service) => {
            const isOpen = openIndex === service.id;
            const ServiceIcon = service.icon;

            return (
              <div key={service.id} className="border-b border-gray-800">
                <div 
                  className={`flex items-center justify-between py-10 cursor-pointer group transition-colors duration-300 ${isOpen ? 'text-[var(--secondary)]' : 'text-white'}`}
                  onClick={() => setOpenIndex(isOpen ? null : service.id)}
                >
                  <div className="flex items-center gap-12">
                    <span className="text-7xl md:text-9xl font-black leading-none opacity-100">
                      {service.id}
                    </span>
                    <div className="flex items-center gap-6">
                      <ServiceIcon 
                        size={48} 
                        className={`transition-all duration-500 ${isOpen ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`} 
                      />
                      <h3 className="text-xl md:text-4xl font-bold uppercase tracking-tight">
                        <WobbleText text={service.title} />
                      </h3>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'bg-[var(--secondary)] text-black scale-110 border-[var(--secondary)]' : 'border-gray-600 text-[var(--secondary)]'}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pl-4 md:pl-[240px]">
                        <ul className="space-y-6">
                          {service.subServices.map((sub, idx) => (
                            <li key={idx}>
                              <Link 
                                href={sub.href}
                                className="group/link inline-flex items-center gap-4 text-gray-400 hover:text-[var(--secondary)] transition-colors text-lg md:text-xl font-medium"
                              >
                                <span className="w-2 h-2 rounded-full bg-[var(--secondary)] scale-0 group-hover/link:scale-100 transition-transform duration-300" />
                                {sub.name}
                                <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}