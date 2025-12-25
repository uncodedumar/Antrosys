'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- Assets Imports (Add your new images here) ---
import Image1 from '../../public/a.webp'; 
import Image2 from '../../public/b.webp'; 
import Image3 from '../../public/c.webp'; 
import Image4 from '../../public/d.webp'; 
// Placeholder imports for steps 3 and 4 - replace with actual paths
import Image5 from '../../public/a.webp'; 
import Image6 from '../../public/b.webp'; 

/**
 * Background Parallax Component
 * Creates small B&W floating elements that scroll up
 */
const ParallaxBackground = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -500]); // Moves up as we scroll down
  
  // Array of positions for background decorative elements
  const decor = [
    { top: '10%', left: '5%' }, { top: '30%', left: '85%' },
    { top: '50%', left: '10%' }, { top: '70%', left: '90%' },
    { top: '85%', left: '15%' }, { top: '20%', left: '20%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 grayscale">
      {decor.map((pos, i) => (
        <motion.div
          key={i}
          style={{ y: yPos, top: pos.top, left: pos.left }}
          className="absolute w-12 h-12 md:w-20 md:h-20"
        >
          {/* Using a generic placeholder or one of your existing images as B&W decor */}
          <Image src={Image1} alt="decor" layout="fill" objectFit="contain" />
        </motion.div>
      ))}
    </div>
  );
};

interface AgendaStepProps {
  step: number;
  title: string;
  description: string[];
  image: {
    src: any;
    alt: string;
  };
  imageOnRight: boolean;
}

const agendaData: AgendaStepProps[] = [
  {
    step: 1,
    title: 'Strategy',
    description: ['Business-First Digital Transformation.', 'Intelligent System Architecture', 'Product Strategy & Execution Planning'],
    image: { src: Image1, alt: 'Strategy' },
    imageOnRight: false,
  },
  {
    step: 2,
    title: 'Design',
    description: ['UI / UX Design', 'Component Libraries & Style Guides', 'Motion Design (Lottie, 3D, Web)'],
    image: { src: Image3, alt: 'Design' },
    imageOnRight: true,
  },
  {
    step: 3,
    title: 'Development',
    description: ['Scalable Cloud Architecture', 'Next.js & React Optimization', 'API First Integration'],
    image: { src: Image5, alt: 'Development' },
    imageOnRight: false,
  },
  {
    step: 4,
    title: 'Launch',
    description: ['Continuous Deployment', 'Performance Monitoring', 'Scale-up Strategy'],
    image: { src: Image6, alt: 'Launch' },
    imageOnRight: true,
  },
  
];

const centerImages = [
  { src: Image2, alt: 'Cat' },
  { src: Image4, alt: 'Leaves' },
  { src: Image2, alt: 'Center 3' },
  { src: Image4, alt: 'Center 4' },
];

const GradientBox: React.FC<AgendaStepProps> = ({ step, title, description, imageOnRight }) => (
  <div className={`w-full max-w-[400px] text-white p-4 ${imageOnRight ? 'md:text-left' : 'md:text-right'}`}>
    <div className={`flex items-center space-x-2 ${imageOnRight ? 'md:justify-start' : 'md:justify-end'}`}>
      <div className="w-[45px] h-[20px] rounded bg-gradient-to-r from-orange-400 to-indigo-500 flex items-center justify-center">
        <span className="text-white text-xs font-bold">0{step}</span>
      </div>
      <p className="text-sm text-gray-400 font-medium">Step</p>
    </div>
    <h2 className="text-4xl font-semibold mt-2 mb-4">{title}</h2>
    <div className="text-gray-300 space-y-1 text-sm font-light">
      {description.map((line, index) => <p key={index}>{line}</p>)}
    </div>
  </div>
);

export const Agenda: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Split scroll progress into 4 segments
  const s1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const s2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const s3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const s4 = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

  const progressArray = [s1, s2, s3, s4];

  return (
    <div ref={containerRef} className="relative bg-black py-16 min-h-[500vh]">
      <ParallaxBackground scrollYProgress={scrollYProgress} />
      
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full relative">
          {agendaData.map((step, index) => {
            const progress = progressArray[index];
            const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const scale = useTransform(progress, [0, 0.2], [0.8, 1]);
            const y = useTransform(progress, [0, 0.2], [50, 0]);

            return (
              <motion.div
                key={index}
                style={{ opacity, scale, y }}
                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between ${
                  index === 0 ? 'relative' : 'pointer-events-none'
                }`}
              >
                {step.imageOnRight ? (
                  <>
                    <GradientBox {...step} />
                    <div className="w-full max-w-[400px] mt-8 md:mt-0">
                      <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                        <Image src={step.image.src} alt={step.image.alt} layout="responsive" width={400} height={400} objectFit="cover" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full max-w-[400px] mb-8 md:mb-0">
                      <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                        <Image src={step.image.src} alt={step.image.alt} layout="responsive" width={400} height={400} objectFit="cover" />
                      </div>
                    </div>
                    <GradientBox {...step} />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agenda;