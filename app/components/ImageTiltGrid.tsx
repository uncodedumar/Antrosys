/**
 * Title: ImageTiltGrid.tsx
 * Description: Updated with 90% width and increased height.
 * Each image tilts in 3D space upon hover.
 */
'use client';
import React, { useRef, useState, useCallback } from 'react';
import type { CSSProperties, MouseEventHandler, TouchEventHandler } from 'react';

// --- 1. TYPES & DATA ---

interface GridImage {
  id: number;
  src: string;
  alt: string;
}

const IMAGES_DATA: GridImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2070&auto=format&fit=crop', alt: 'Ocean Waves' },
  { id: 2, src: '/b.webp', alt: 'Mountain Sunset' },
  { id: 3, src: '/c.webp', alt: 'City Skyline' },
  { id: 4, src: '/d.webp', alt: 'Forest Path' },
];

interface TiltState {
  rotateX: number;
  rotateY: number;
}

// --- 2. TILT HOOK ---

const useTiltEffect = (maxTilt: number = 7) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltState, setTiltState] = useState<TiltState>({ rotateX: 0, rotateY: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const { width, height } = rect;
    const { clientX, clientY } = event;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    const mouseX = clientX - centerX;
    const mouseY = clientY - centerY;
    const rotateY = (mouseX / (width / 2)) * maxTilt;
    const rotateX = (mouseY / (height / 2)) * -maxTilt;
    setTiltState({ rotateX, rotateY });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTiltState({ rotateX: 0, rotateY: 0 });
  }, []);

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = useCallback((event) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      const syntheticEvent = { clientX: touch.clientX, clientY: touch.clientY } as React.MouseEvent<HTMLDivElement>;
      handleMouseMove(syntheticEvent);
    }
  }, [handleMouseMove]);

  const style: CSSProperties = {
    transform: `perspective(1000px) rotateX(${tiltState.rotateX}deg) rotateY(${tiltState.rotateY}deg)`,
  };

  return { ref, style, handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onTouchMove: handleTouchMove, onTouchEnd: handleMouseLeave } };
};

// --- 3. SUB-COMPONENT ---

interface TiltCardProps {
  image: GridImage;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ image, className }) => {
  const { ref, style, handlers } = useTiltEffect(7);

  return (
    <div ref={ref} style={style} className={`tilt-card-wrapper ${className || ''}`} {...handlers}>
      <div className="tilt-card-inner">
        <img src={image.src} alt={image.alt} className="tilt-card-image" loading="lazy" />
        <div className="tilt-card-overlay">
          <p className="tilt-card-text">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN COMPONENT ---

const ImageTiltGrid: React.FC = () => {
  return (
    <div className="full-page-wrapper">
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; }

        .full-page-wrapper {
          min-height: 100vh;
          background-color:primary;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .image-tilt-grid-container {
          width: 90%; /* Updated: Width set to 90% */
          max-width: 1400px; /* Increased max-width to allow 90% to scale on large screens */
          display: grid;
          grid-template-columns: 2fr 1fr; 
          grid-template-rows: 1fr 1fr; 
          gap: 20px;
          height: 70vh; /* Increased: Explicit height for the grid container */
          min-height: 600px; /* Increased: Ensures visibility on shorter viewports */
        }

        .tilt-card-wrapper {
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
          overflow: hidden;
          border-radius: 24px; 
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); 
          height: 100%;
          cursor: pointer;
        }

        .card-1 { grid-column: 1 / 2; grid-row: 1 / 3; }
        .card-2 { grid-column: 2 / 3; grid-row: 1 / 2; }

        .bottom-right-wrapper {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          display: flex;
          gap: 20px;
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: translateZ(20px);
        }

        .tilt-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          z-index: 10;
          transform: translateZ(30px);
        }

        .tilt-card-text {
          color: white;
          font-family: sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tilt-card-wrapper:hover .tilt-card-text { opacity: 1; }

        @media (max-width: 768px) {
          .image-tilt-grid-container {
            width: 95%;
            grid-template-columns: 1fr; 
            grid-template-rows: auto;
            height: auto;
          }
          .card-1, .card-2 { grid-column: 1 / 2; grid-row: auto; height: 400px; }
          .bottom-right-wrapper { grid-column: 1 / 2; grid-row: auto; flex-direction: column; height: auto; }
          .bottom-right-wrapper > .tilt-card-wrapper { height: 300px; }
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
    </div>
  );
};

export default ImageTiltGrid;