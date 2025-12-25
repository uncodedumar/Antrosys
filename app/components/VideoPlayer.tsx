'use client'
import React, { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 1. Initialize scale at 0.4 (40%)
  const [scale, setScale] = useState(0.6); 
  const [borderRadius, setBorderRadius] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight;
      
      // Calculate progress (0 to 1)
      const progress = Math.min(Math.max(-rect.top / (scrollHeight - window.innerHeight), 0), 1);

      // 2. Map progress: 
      // Scale: starts at 0.4, adds up to 0.6 more (total 1.0)
      // Radius: starts at 24, subtracts down to 0
      const newScale = 0.4 + (progress * 0.6);
      const newRadius = 24 - (progress * 24);

      setScale(newScale);
      setBorderRadius(newRadius);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="relative transition-transform duration-75 ease-out will-change-transform"
          style={{ 
            transform: `scale(${scale})`,
            width: '100%',
            height: '100%',
            borderRadius: `${borderRadius}px`,
            overflow: 'hidden'
          }}
        >
          <video
            ref={videoRef}
            src={videoSource}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500"
            style={{ opacity: scale > 0.95 ? 1 : 0 }}
          >
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;