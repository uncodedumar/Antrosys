import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

/**
 * TopNavBar Component
 * Optimized for: Web App UI/UX Design, Software Development, AI Illustrations, & Digital Marketing Ads.
 */
const TopNavBar: React.FC = () => {
  return (
    <nav 
      className=" top-0 z-50 flex items-center justify-between w-full bg-primary text-accent h-6 md:h-6 px-4 sm:px-10 lg:px-20 transition-all duration-300 ease-in-out"
      aria-label="High-performance Digital Agency Navigation"
    >
      {/* 1. Multilingual Dropdown (Left) */}
      <div className="flex items-center">
        <label htmlFor="language-select" className="sr-only">Select Language</label>
        <select 
          id="language-select"
          className="bg-transparent text-[10px] md:text-xs uppercase tracking-widest font-medium cursor-pointer focus:outline-none hover:text-secondary transition-colors"
          defaultValue="en"
        >
          <option value="en" className="bg-primary text-white">EN</option>
          <option value="es" className="bg-primary text-white">ES</option>
          <option value="fr" className="bg-primary text-white">FR</option>
        </select>
      </div>

    

      {/* 3. Social Links (Right) - High Speed Interactions */}
      <div className="flex items-center space-x-5 text-sm md:text-base">
        <Link 
          href="https://github.com/uncodedumar" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Visit our Github for Custom Software Development"
          className="hover:scale-110 hover:text-secondary transition-all duration-200"
        >
          <FaGithub />
        </Link>
        <Link 
          href="https://www.linkedin.com/company/antrosys" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Connect on LinkedIn for UI/UX Design Trends"
          className="hover:scale-110 hover:text-secondary transition-all duration-200"
        >
          <FaLinkedin />
        </Link>
        <Link 
          href="https://instagram.com/antrosys" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow our AI Art and Illustrations on Instagram"
          className="hover:scale-110 hover:text-secondary transition-all duration-200"
        >
          <FaInstagram />
        </Link>
        <Link 
          href="https://x.com/antrosys" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on X for Digital Marketing Ads Strategy"
          className="hover:scale-110 hover:text-secondary transition-all duration-200"
        >
          <FaTwitter />
        </Link>
      </div>
    </nav>
  );
};

export default TopNavBar;