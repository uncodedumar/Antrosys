/**
 * Title: ImageTiltGrid.tsx
 * Optimized for: Performance, SEO, and Mobile UX.
 */
'use client';
import React, { useRef, useState, useCallback, useMemo } from 'react';
import type { CSSProperties, MouseEventHandler, TouchEventHandler } from 'react';
import Image from 'next/image';

// --- 1. SEO-OPTIMIZED DATA ---
// Using long-tail keywords in alt text helps Google Image search rank your agency.
const IMAGES_DATA = [
  { id: 1, src: '/AboutImages/building.webp', alt: 'Innovative Digital Agency Software Development Architecture' },
  { id: 2, src: '/AboutImages/table.webp', alt: 'Collaborative UI UX Design Strategy and Planning' },
  { id: 3, src: '/AboutImages/working.webp', alt: 'Full Stack Web Development and AI Integration Experts' },
  { id: 4, src: '/AboutImages/workspace.webp', alt: 'Creative Brand Marketing and Digital Ads Management' },
];

interface TiltState {
  rotateX: number;
  rotateY: number;
}

// --- 2. HIGH-PERFORMANCE TILT HOOK ---
const useTiltEffect = (maxTilt: number = 7) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltState, setTiltState] = useState<TiltState>({ rotateX: 0, rotateY: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!ref.current) return;
    // Using requestAnimationFrame would be overkill here, but 
    // transition: transform 0.15s handles the "smoothness" factor.
    const rect = ref.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const rotateY = ((mouseX / rect.width) - 0.5) * (maxTilt * 2);
    const rotateX = ((mouseY / rect.height) - 0.5) * -(maxTilt * 2);
    setTiltState({ rotateX, rotateY });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTiltState({ rotateX: 0, rotateY: 0 });
  }, []);

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = useCallback((event) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const rotateY = ((touch.clientX - rect.left) / rect.width - 0.5) * (maxTilt * 2);
      const rotateX = ((touch.clientY - rect.top) / rect.height - 0.5) * -(maxTilt * 2);
      setTiltState({ rotateX, rotateY });
    }
  }, [maxTilt]);

  const style: CSSProperties = {
    transform: `perspective(1000px) rotateX(${tiltState.rotateX}deg) rotateY(${tiltState.rotateY}deg)`,
  };

  return { ref, style, handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onTouchMove: handleTouchMove, onTouchEnd: handleMouseLeave } };
};

// --- 3. COMPONENT ---
const TiltCard: React.FC<{ image: typeof IMAGES_DATA[0]; className?: string }> = ({ image, className }) => {
  const { ref, style, handlers } = useTiltEffect(8);

  return (
    <figure 
      ref={ref} 
      style={style} 
      className={`tilt-card-wrapper ${className || ''}`} 
      {...handlers}
    >
      <div className="tilt-card-inner">
        <Image 
          src={image.src} 
          alt={image.alt} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="tilt-card-image" 
          loading="lazy" 
        />

      </div>
    </figure>
  );
};

const ImageTiltGrid: React.FC = () => {
  return (
    <section className="agency-grid-section" aria-label="Our Creative Portfolio">
      <style jsx global>{`
        .agency-grid-section {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background-color: var(--primary-bg, #000); /* Fallback */
        }

        .image-tilt-grid-container {
          width: 90%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 24px;
          height: 75vh;
          min-height: 650px;
        }

        .tilt-card-wrapper {
          margin: 0; /* Remove default figure margin */
          transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
          will-change: transform;
          overflow: hidden;
          border-radius: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          height: 100%;
          cursor: pointer;
          position: relative;
        }

        .card-1 { grid-column: 1 / 2; grid-row: 1 / 3; }
        .card-2 { grid-column: 2 / 3; grid-row: 1 / 2; }

        .bottom-right-wrapper {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          display: flex;
          gap: 24px;
          height: 100%;
        }

        .bottom-right-wrapper > .tilt-card-wrapper { flex: 1; }

        .tilt-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .tilt-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: scale 0.5s ease;
          transform: translateZ(0); /* Fixes some flickering in Safari */
        }

        .tilt-card-wrapper:hover .tilt-card-image {
          scale: 1.05;
        }

        .tilt-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          padding: 30px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.3s ease;
          transform: translateZ(40px); /* Massive depth effect */
        }

        .tilt-card-wrapper:hover .tilt-card-overlay { opacity: 1; }

        .tilt-card-text {
          color: #fff;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* MOBILE FIXES: Removing extra padding and spacing */
        @media (max-width: 768px) {
          .agency-grid-section {
            padding: 20px 10px; /* Reduced vertical space */
            min-height: auto;
          }
          .image-tilt-grid-container {
            width: 100%; /* More edge-to-edge on mobile */
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: auto;
            gap: 16px; /* Tighter gaps on mobile */
          }
          .card-1, .card-2 { 
            grid-column: 1 / 2; 
            grid-row: auto; 
            height: 350px; 
          }
          .bottom-right-wrapper { 
            grid-column: 1 / 2; 
            grid-row: auto; 
            flex-direction: column; 
            height: auto; 
            gap: 16px;
          }
          .bottom-right-wrapper > .tilt-card-wrapper { 
            height: 300px; 
          }
          .tilt-card-overlay {
            opacity: 1; /* Always show text on mobile since there is no hover */
            background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%);
            padding: 20px;
          }
        }
      `}</style>

      <div className="image-tilt-grid-container">
        <TiltCard image={IMAGES_DATA[0]} className="card-1" />
        <TiltCard image={IMAGES_DATA[1]} className="card-2" />
        <div className="bottom-right-wrapper">
          <TiltCard image={IMAGES_DATA[2]} className="card-3" />
          <TiltCard image={IMAGES_DATA[3]} className="card-4" />
        </div>
      </div>
    </section>
  );
};

export default ImageTiltGrid;