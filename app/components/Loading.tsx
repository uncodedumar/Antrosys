'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Loader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ["APP", "WEB DESIGN", "SEO", "MARKETING", "DEVELOPMENT"];

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // 1. Progress Logic (No change to your logic, just linked to UI)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 10;
      });
    }, 150);

    // 2. Word Cycling Logic (Smoothly cycles keywords)
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 800);

    // 3. Completion Logic
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2500); // Adjusted for visibility of the "Great things" message

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500">
      
      {/* YOUR ORIGINAL LOADER UI (No Changes) */}
      <div className="relative mb-24">
        <div className="absolute animate-spin">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border-4 border-secondary rounded-full"
              style={{
                animation: `spin ${2 + i * 0.5}s linear infinite`,
                opacity: 0.7 - i * 0.2,
                transform: `scale(${1 + i * 0.2})`,
              }}
            />
          ))}
        </div>

        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              animation: `sparkle 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: `rotate(${i * 45}deg) translateX(30px)`,
            }}
          />
        ))}
        <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
      </div>

      {/* TEXT & PERCENTAGE SECTION */}
      <div className="flex flex-col items-center gap-4 text-center mt-8">
        <p className="text-secondary text-xs tracking-[0.3em] uppercase font-medium animate-pulse">
            Great things can take time
        </p>
        
        <div className="h-6 overflow-hidden">
            <p className="text-accent text-sm tracking-widest uppercase transition-all duration-500">
                {words[currentWordIndex]}
            </p>
        </div>

        <div className="relative w-48 h-[2px] accent mt-2 overflow-hidden">
             <div 
                className="absolute h-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
             />
        </div>
        
        <span className="text-white font-mono text-lg tabular-nums">
            {Math.round(progress)}%
        </span>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes sparkle {
          0% { transform: rotate(0deg) translateX(30px) scale(1); opacity: 0; }
          50% { transform: rotate(180deg) translateX(60px) scale(1.5); opacity: 1; }
          100% { transform: rotate(360deg) translateX(90px) scale(0); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;