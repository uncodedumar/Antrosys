import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const TopNavBar: React.FC = () => {
  return (
    // Removed 'hidden' and 'md:flex'. Added 'flex' as default.
    // Height is h-8 on mobile, h-10 on desktop.
    <nav className="flex items-center justify-between w-full bg-primary text-accent h-8 md:h-10 px-4 sm:px-10 lg:px-20 border-b border-primary/20">
      
      {/* Left Side - Text size is smaller on mobile (xs) and grows on desktop (sm) */}
      <div className="text-[10px] md:text-sm font-light tracking-wider uppercase md:normal-case">
        Digital the moves Deeper
      </div>

      {/* Right Side - Social Links - Icons are smaller on mobile */}
      <div className="flex space-x-3 md:space-x-4 text-sm md:text-lg font-extralight">
        <Link href="https://github.com/uncodedumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-secondary transition-colors duration-200" />
        </Link>
        <Link href="https://www.linkedin.com/company/antrosys" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-secondary transition-colors duration-200" />
        </Link>
        <Link href="https://instagram.com/antrosys" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-secondary transition-colors duration-200" />
        </Link>
        <Link href="https://x.com/antrosys" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <FaTwitter className="hover:text-secondary transition-colors duration-200" />
        </Link>
      </div>
    </nav>
  );
};

export default TopNavBar;