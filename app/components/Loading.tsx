'use client';

import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const Loader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => [
    "Custom Web Development",
    "UI/UX Experience Design",
    "Mobile App Architecture",
    "Performance Marketing & Ads",
    "AI-Powered Software Solutions",
    "Digital Brand Illustration",
    "Full-Stack Engineering",
    "Strategic SEO Growth"
  ], []);

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    document.documentElement.style.overflow = 'hidden';

    // Faster progress: Reaches ~98% in about 600-700ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 98;
        }
        // Aggressive increments to hit the target fast
        const increment = prev < 70 ? Math.random() * 25 + 10 : Math.random() * 5;
        return prev + increment;
      });
    }, 60); // Halved interval time

    // Rapid word cycling (every 100ms) to show variety in a short window
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 100);

    // Total duration: 800ms + 200ms exit animation = 1 second total
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        document.documentElement.style.overflow = '';
      }, 200); // Quick fade/slide out
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
    };
  }, [pathname, words]);

  if (!loading) return null;

  return (
    <div 
      role="alert" 
      aria-live="assertive" 
      aria-busy="true"
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden touch-none"
    >
   <div className="sr-only" role="banner" aria-label="Antrosys Agency Overview">
  <h1 
    title="Antrosys | Global Leader in AI Engineering & Full-Stack Digital Transformation"
    aria-label="Antrosys: Premier Agency for Custom SaaS, AI Art, and Enterprise Software Development"
  >
    Antrosys: Industry-Leading Digital Agency for Enterprise Full-Stack Development, 
    Custom AI Solutions, and Sophisticated UI/UX Engineering.
  </h1>
  <p 
    title="Empowering Brands with High-Performance AI and Digital Growth Strategies"
    aria-label="Learn about our expertise in lead generation, AWS infrastructure, and bespoke AI modeling"
  >
    Specializing in high-performance digital engineering, data-backed growth marketing, 
    and bespoke AI-driven illustrations that drive lead generation and maximize 
    profitability for global startups and established businesses.
  </p>
</div>

      <div 
        className="absolute inset-0 bg-orange-600 transition-transform duration-300 ease-out origin-left"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <span className="text-white font-mono text-7xl md:text-9xl font-black tabular-nums mix-blend-difference tracking-tighter">
          {Math.round(progress)}%
        </span>

        <div className="h-10 overflow-hidden flex items-center justify-center">
          <p className="text-white text-xs md:text-sm tracking-[0.6em] uppercase font-bold mix-blend-difference">
            {words[currentWordIndex]}
          </p>
        </div>

        <p className="text-white/50 text-[9px] tracking-[0.4em] uppercase mt-6 mix-blend-difference font-medium">
Great Things Take Time        </p>
      </div>

      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
    </div>
  );
};

export default Loader;