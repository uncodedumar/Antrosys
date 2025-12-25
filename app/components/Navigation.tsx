'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Structure ---
const servicesData = [
  {
    category: "Developing",
    slug: "/services/developing",
    subcategories: [
      { name: "Front End", slug: "/services/developing/front-end" },
      { name: "Back End", slug: "/services/developing/back-end" },
      { name: "Full Stack", slug: "/services/developing/full-stack" },
    ]
  },
  {
    category: "Design",
    slug: "/services/design",
    subcategories: [
      { name: "UI/UX Design", slug: "/services/design/ui-ux" },
      { name: "Design System", slug: "/services/design/systems" },
      { name: "Interaction Design", slug: "/services/design/interaction" },
    ]
  },
  {
    category: "Marketing",
    slug: "/services/marketing",
    subcategories: [
      { name: "SEO", slug: "/services/marketing/seo" },
      { name: "Social Media", slug: "/services/marketing/social-media" },
      { name: "E-commerce", slug: "/services/marketing/e-commerce" },
    ]
  }
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const BouncingLink = ({ name, href, isDropdown = false }: { name: string, href: string, isDropdown?: boolean }) => {
  return (
    <Link href={href} className={`group relative flex items-center ${isDropdown ? 'text-gray-400 hover:text-white' : 'text-accent'}`}>
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={char === " " ? "mr-1" : ""}
        >
          {char}
        </motion.span>
      ))}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(servicesData[1].category);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Fixed container: top-0 on mobile, top-8 on desktop */
    <div className={`fixed left-0 right-0 z-[9999] transition-all duration-300 pointer-events-none ${isScrolled || isMenuOpen ? 'top-0' : 'md:top-8 top-0'}`}>
      <header 
        className={`
          mx-auto transition-all duration-500 ease-in-out pointer-events-auto
          bg-black md:bg-transparent
          ${isScrolled 
            ? 'md:mt-4 md:max-w-[90%] md:rounded-full md:border-[0.5px] md:border-secondary md:shadow-lg md:backdrop-blur' 
            : 'mt-0 max-w-full md:rounded-t-[25px]'}
           overflow-visible w-full
        `}
      >
        <nav className="flex justify-between items-center h-16 px-6 lg:px-10 max-w-7xl mx-auto">
          {/* Logo: Now visible on all devices */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative py-4"
                onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setShowDropdown(false)}
              >
                <div className="flex items-center font-light text-accent gap-1 cursor-pointer">
                  <BouncingLink name={link.name} href={link.href} />
                  {link.hasDropdown && <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />}
                </div>

                <AnimatePresence>
                  {link.hasDropdown && showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-[#111111] text-white rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-4 space-y-4 border-r border-secondary">
                          {servicesData.map((item) => (
                            <button
                              key={item.category}
                              onMouseEnter={() => setActiveCategory(item.category)}
                              className={`block text-2xl font-medium transition-colors ${activeCategory === item.category ? 'text-secondary' : 'text-accent'}`}
                            >
                              <Link href={item.slug}>{item.category}</Link>
                            </button>
                          ))}
                        </div>

                        <div className="col-span-8 grid grid-cols-2 gap-y-4 content-start">
                          {servicesData.find(s => s.category === activeCategory)?.subcategories.map((sub) => (
                            <BouncingLink key={sub.name} name={sub.name} href={sub.slug} isDropdown />
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 pt-6 border-t border-accent flex justify-between items-center">
                        <p className="text-sm text-gray-400">Want to develop your digital product? <Link className='underline uppercase text-accent' href='contact'>Let's connect!</Link></p>
                        <Link href="/services" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-secondary hover:bg-black transition-all">
                          VIEW ALL SERVICES <MoveRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Button: Aligned right */}
          <div className="md:hidden flex justify-end">
            <button className="p-2 text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </nav>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed inset-0 bg-black z-[9999] p-6 flex flex-col h-screen w-screen overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                {/* Logo added to the open mobile menu header */}
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 border border-white/20 rounded-full text-white">
                  <X size={30} />
                </button>
              </div>

              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/10 pb-6">
                    <div className="flex justify-between items-center">
                      <Link 
                        href={link.href} 
                        className="text-4xl font-bold text-white" 
                        onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      
                      {link.hasDropdown && (
                        <button 
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`p-2 text-white transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown size={32} />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.hasDropdown && mobileServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-6 ml-4 space-y-6 overflow-hidden"
                        >
                          <Link href="/services" className="block text-secondary font-bold text-2xl" onClick={() => setIsMenuOpen(false)}>
                            All Services
                          </Link>

                          {servicesData.map(cat => (
                            <div key={cat.category} className="space-y-4">
                              <button 
                                onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.category ? null : cat.category)}
                                className="w-full flex justify-between items-center text-gray-400 text-lg uppercase tracking-widest"
                              >
                                {cat.category}
                                <ChevronDown 
                                  size={20} 
                                  className={`transition-transform duration-300 ${mobileActiveCategory === cat.category ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              
                              <AnimatePresence>
                                {mobileActiveCategory === cat.category && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="space-y-4 ml-4 border-l border-white/10 pl-4 overflow-hidden"
                                  >
                                    {cat.subcategories.map(sub => (
                                      <Link 
                                        key={sub.slug} 
                                        href={sub.slug} 
                                        className="block text-xl text-white/80 py-1" 
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}