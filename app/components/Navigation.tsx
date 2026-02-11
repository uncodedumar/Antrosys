"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown, MoveRight, Phone } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ServicePageData } from "@/lib/data";
import Image from "next/image";

// ... [getCategory and getSpecific functions remain unchanged] ...
const getCategory = (slug: string): string => {
  if (["Automated-Chat-Systems", "AI-Solutions"].includes(slug)) return "AI & Machine Learning";
  if (["App-Dev", "Next-Gen-Desktop-Applications"].includes(slug)) return "Mobile & Desktop Apps";
  if (["Logo-n-Brand-Identity", "Web-n-Application-Design", "Art-n-Illustration", "Print-Design", "Packaging-n-Label-Design", "Social-Media-Graphics"].includes(slug)) return "UI/UX & Creative Design";
  if (["Marketing-n-Advertising", "Growth-Analytics-n-Marketing-Automation"].includes(slug)) return "Digital Marketing & Ads";
  if (slug === "QA-QC") return "Software QA Testing";
  if (slug === "custom-software-development") return "Custom Software Solutions";
  return "Web Development & Performance";
};

const getSpecific = (slug: string): string => {
  const mapping: Record<string, string> = {
    "AI-Solutions": "Enterprise AI Solutions",
    "Automated-Chat-Systems": "AI Chatbot Development",
    "App-Dev": "iOS & Android App Dev",
    "Next-Gen-Desktop-Applications": "Cross-Platform Desktop Apps",
    "Logo-n-Brand-Identity": "Brand Identity Design",
    "Web-n-Application-Design": "UI/UX Interface Design",
    "Art-n-Illustration": "Digital Art & Illustration",
    "Print-Design": "Print & Vector Graphics",
    "Packaging-n-Label-Design": "Product Packaging Design",
    "Social-Media-Graphics": "Social Media Ad Design",
    "Marketing-n-Advertising": "Performance Marketing & Ads",
    "Growth-Analytics-n-Marketing-Automation": "Marketing Automation",
    "QA-QC": "Quality Assurance & QC",
    "custom-software-development": "SaaS Software Development",
    "Front-End-Development": "React & Next.js Front-End",
    "Back-End-Web-Development": "Node & Cloud Back-End",
    "Full-Stack Web Development": "Full-Stack Web Solutions",
    "Website-Maintenance": "Web Support & Maintenance",
    "No-Code-Easy-to-Manage-Websites": "No-Code Web Solutions",
    "WordPress-Engineered-Websites": "Headless WordPress Dev",
    "Shopify-Websites": "Shopify E-commerce Stores",
    "Cloud-Solutions": "Cloud Infrastructure & AWS",
  };
  return mapping[slug] || slug.split("-").join(" ");
};

const generateServicesData = () => {
  const categoryMap = new Map<string, Array<{ name: string; slug: string }>>();
  ServicePageData.forEach((service) => {
    const category = getCategory(service.slug);
    const specific = getSpecific(service.slug);
    if (!categoryMap.has(category)) categoryMap.set(category, []);
    categoryMap.get(category)!.push({ name: specific, slug: `/services/${service.slug}` });
  });
  return Array.from(categoryMap.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([category, subcategories]) => ({
    category,
    slug: `/services#${category.toLowerCase().replace(/\s+/g, "-")}`,
    subcategories: subcategories.sort((a, b) => a.name.localeCompare(b.name)),
  }));
};

const servicesData = generateServicesData();

const navLinks = [
  { name: "Home", href: "/", title: "Agency Home" },
  { name: "Services", href: "/services", hasDropdown: true, title: "Expert Digital Services" },
  { name: "Portfolio", href: "/portfolio", title: "Our Creative Work" },
  { name: "Blogs", href: "/blogs", title: "Tech & Design Insights" },
  { name: "About", href: "/about", title: "About Our Digital Agency" },
];

const BouncingLink = ({ name, href, isDropdown = false }: { name: string; href: string; isDropdown?: boolean }) => (
  <Link href={href} className={`group relative flex items-center overflow-hidden ${isDropdown ? "text-gray-400 hover:text-white py-1" : "text-accent"}`}>
    {name.split("").map((char, i) => (
      <motion.span key={i} style={{ display: "inline-block" }} whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 10 } }} className={char === " " ? "mr-1" : ""}>
        {char}
      </motion.span>
    ))}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(servicesData[0]?.category || "");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={`fixed left-0 right-0 z-[9999] transition-all duration-500 pointer-events-none top-6 px-4 md:px-0`}>
      <header
        className={`
          mx-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) pointer-events-auto
           backdrop-blur-2xl 
          ${
            isScrolled
              ? "max-w-[92%] md:max-w-[85%] rounded-[24px] md:rounded-full bg-neutral-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              : "max-w-full rounded-[24px] md:rounded-[30px]"
          }
           overflow-visible w-full
        `}
      >
        <nav className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-screen-2xl mx-auto relative" aria-label="Main Navigation">
          <Link href="/" className="flex-shrink-0 z-10 hover:scale-105 transition-transform" aria-label="Digital Agency Home">
            <Image src="/logo.svg" alt="Antrosys Logo" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            <LayoutGroup>
              {navLinks.map((link) => (
                <div key={link.name} className="relative py-6" onMouseEnter={() => link.hasDropdown && setShowDropdown(true)} onMouseLeave={() => link.hasDropdown && setShowDropdown(false)}>
                  <div className="flex items-center font-medium text-accent gap-1.5 cursor-pointer text-[15px] tracking-wide uppercase">
                    <BouncingLink name={link.name} href={link.href} />
                    {link.hasDropdown && (
                      <motion.div animate={{ rotate: showDropdown ? 180 : 0 }}>
                        <ChevronDown size={14} className="opacity-70" />
                      </motion.div>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.hasDropdown && showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[850px] bg-[#0A0A0A] text-white rounded-[2.5rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/5 overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-10">
                          <div className="col-span-5 space-y-3 border-r border-white/10 pr-6">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6">Our Expertise</p>
                            {servicesData.map((item) => (
                              <button
                                key={item.category}
                                onMouseEnter={() => setActiveCategory(item.category)}
                                onFocus={() => setActiveCategory(item.category)}
                                className={`group flex items-center justify-between w-full text-lg font-semibold text-left transition-all ${
                                  activeCategory === item.category ? "text-orange-500 translate-x-2" : "text-white/60 hover:text-white"
                                }`}
                                aria-label={`View ${item.category} services`}
                              >
                                <span>{item.category}</span>
                                <MoveRight size={16} className={`transition-opacity ${activeCategory === item.category ? "opacity-100" : "opacity-0"}`} />
                              </button>
                            ))}
                          </div>
                          <div className="col-span-7 grid grid-cols-2 gap-x-6 gap-y-4 content-start">
                            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">Specialized Solutions</p>
                            {servicesData.find((s) => s.category === activeCategory)?.subcategories.map((sub) => (
                              <Link key={sub.name} href={sub.slug} className="text-white/70 hover:text-orange-400 transition-colors text-sm font-medium py-1">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">Scale your digital presence.</span>
                            <Link href="/contact" className="text-xs text-orange-500 hover:underline">Book a Free Strategy Call</Link>
                          </div>
                          <Link href="/services" className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-tighter hover:bg-orange-500 hover:text-white transition-all">
                            EXPLORE ALL CAPABILITIES <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </LayoutGroup>
          </div>

          <div className="hidden md:flex items-center z-10">
            <Link href="/contact" className="relative w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] group">
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full bg-orange-500/30" />
              <Phone size={22} fill="currentColor" className="relative z-10" />
            </Link>
          </div>

          <div className="md:hidden">
            <button className="p-3 bg-white/5 rounded-xl text-white active:scale-90 transition-transform" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu size={28} aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-[#050505] z-[9999] p-8 flex flex-col h-screen w-screen overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-16">
                <Image src="/logo.svg" alt="Agency Logo" width={48} height={48} className="w-12 h-12" priority />
                <button onClick={closeMobileMenu} aria-label="Close menu" className="p-4 bg-white/5 rounded-full text-white active:rotate-90 transition-transform">
                  <X size={32} aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col space-y-10">
                {[...navLinks, { name: "Contact", href: "/contact", hasDropdown: false }].map((link, idx) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="border-b border-white/5 pb-8">
                    <div className="flex justify-between items-center">
                      <Link href={link.href} className="text-4xl font-bold text-white tracking-tighter" onClick={() => !link.hasDropdown && closeMobileMenu()}>
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} aria-label={mobileServicesOpen ? "Close services menu" : "Open services menu"} aria-expanded={mobileServicesOpen} className={`p-3 bg-orange-500 rounded-full text-white transition-transform duration-500 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                          <ChevronDown size={24} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.hasDropdown && mobileServicesOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-8 space-y-8 overflow-hidden">
                          {servicesData.map((cat) => (
                            <div key={cat.category} className="space-y-4">
                              <button onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.category ? null : cat.category)} aria-label={`${mobileActiveCategory === cat.category ? "Close" : "Open"} ${cat.category} submenu`} aria-expanded={mobileActiveCategory === cat.category} className="w-full flex justify-between items-center text-orange-500 text-xs font-bold uppercase tracking-widest">
                                {cat.category}
                                <ChevronDown size={16} className={`transition-transform ${mobileActiveCategory === cat.category ? "rotate-180" : ""}`} aria-hidden="true" />
                              </button>
                              <AnimatePresence>
                                {mobileActiveCategory === cat.category && (
                                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 gap-4 ml-2 border-l-2 border-orange-500/20 pl-6">
                                    {cat.subcategories.map((sub) => (
                                      <Link key={sub.slug} href={sub.slug} className="text-xl font-medium text-white/80" onClick={closeMobileMenu}>{sub.name}</Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}