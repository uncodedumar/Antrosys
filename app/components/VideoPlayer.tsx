'use client'
import React, { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoSource: string;
  posterFrame?: string;
  title?: string;
  description?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoSource, 
  posterFrame, 
  title = "Antrosys Portfolio Showcase", 
  
  description = "A cinematic walkthrough of our industry-leading AI art, custom software, and digital transformation projects." 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // 1. Setup Observer to only run scroll logic when visible
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    let requestRef: number;
    let cachedHeight = 0;
    let cachedViewportHeight = window.innerHeight;
    
    // Cache dimensions on mount/resize to avoid layout thrashing
    const updateCachedDimensions = () => {
      if (containerRef.current) {
        cachedHeight = containerRef.current.offsetHeight;
        cachedViewportHeight = window.innerHeight;
      }
    };
    
    const handleScroll = () => {
      if (!containerRef.current || !videoWrapperRef.current || !isInView) return;

      // Batch DOM reads - only read getBoundingClientRect
      const rect = containerRef.current.getBoundingClientRect();

      // Use cached values to avoid forced reflow
      const progress = Math.min(Math.max(-rect.top / (cachedHeight - cachedViewportHeight), 0), 1);

      // Smooth interpolation
      const scale = 0.4 + (progress * 0.6); 
      const radius = 24 - (progress * 24);

      // Batch DOM writes - use requestAnimationFrame ensures optimal timing
      requestAnimationFrame(() => {
        if (videoWrapperRef.current) {
          videoWrapperRef.current.style.transform = `scale(${scale})`;
          videoWrapperRef.current.style.borderRadius = `${radius}px`;
        }
      });
    };

    const onScroll = () => {
      requestRef = requestAnimationFrame(handleScroll);
    };
    
    // Cache dimensions on mount and resize
    updateCachedDimensions();
    const resizeObserver = new ResizeObserver(updateCachedDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (isInView) {
      window.addEventListener('scroll', onScroll, { passive: true });
      // Run once immediately to set initial position if starting mid-page
      handleScroll();
    }

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(requestRef);
    };
  }, [isInView]);

  return (
    <section 
      ref={containerRef} 
      // Removed the 'hidden' logic: Section is always in the DOM
      className="relative h-[300vh] bg-black"
      aria-labelledby="video-section-title"
    >
      <div className="sr-only">
        <h2 id="video-section-title">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div 
          ref={videoWrapperRef}
          className="relative w-full h-full overflow-hidden will-change-transform bg-neutral-900"
          style={{ 
            transform: `scale(0.4)`, 
            borderRadius: `24px`,
            aspectRatio: '16/9',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            src={videoSource}
            poster={posterFrame}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-label={title}
            width={1920}
            height={1080}
          >
            <p>Your browser does not support the video tag. {description}</p>
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;