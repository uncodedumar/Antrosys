'use client';

import React from 'react';
import { 
  siAdyen, siFord, siDolphin, siEmirates, 
  siActivision, siPelican, siDacia, siTumblr,
  siQatarairways, siGoldmansachs, siHyundai, siTietoevry,
} from 'simple-icons';

const LogoTickerSection: React.FC = () => {
  const logos = [
    { icon: siAdyen, name: 'Adyen' },
    { icon: siFord, name: 'Ford' },
    { icon: siDolphin, name: 'Dolphin' },
    { icon: siEmirates, name: 'Emirates' },
    { icon: siActivision, name: 'Activision' },
    { icon: siPelican, name: 'Pelican' },
    { icon: siDacia, name: 'Dacia' },
    { icon: siTumblr, name: 'Tumblr' },
    { icon: siQatarairways, name: 'Qatar Airways' },
    { icon: siGoldmansachs, name: 'Goldman Sachs' },
    { icon: siHyundai, name: 'Hyundai' },
    { icon: siTietoevry, name: 'Tietoevry' },
  ];

  return (
    <section 
      className="w-full bg-black py-6 px-6 md:px-12 " 
      aria-label="Partner Logos"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
        {logos.map((logo, index) => (
          <svg 
            key={index} 
            role="img" 
            viewBox="0 0 24 24" 
            className="h-7 md:h-8 lg:h-9 fill-white transition-transform duration-300 hover:scale-105"
            aria-label={logo.name}
          >
            <path d={logo.icon.path} />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default LogoTickerSection;