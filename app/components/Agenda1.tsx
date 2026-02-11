'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- Assets Imports ---
import Image1 from '../../public/agenda/strategy.avif'; 
import Image3 from '../../public/agenda/design.avif'; 
import Image2 from '../../public/agenda1a.jpg'; 
import Image4 from '../../public/agenda1c.jpg'; 
import Image5 from '../../public/agenda/development.avif'; 
import Image6 from '../../public/agenda/launch.avif'; 

/**
 * SEO-Optimized Parallax Background
 */
const ParallaxBackground = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const decor = [
    { top: '10%', left: '5%' }, { top: '30%', left: '85%' },
    { top: '50%', left: '10%' }, { top: '70%', left: '90%' },
    { top: '85%', left: '15%' }, { top: '20%', left: '20%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 grayscale" aria-hidden="true">
      {decor.map((pos, i) => (
        <motion.div
          key={i}
          style={{ y: yPos, top: pos.top, left: pos.left }}
          className="absolute w-12 h-12 md:w-20 md:h-20"
        >
          <Image 
            src={Image1} 
            alt="" // Decorative images should have empty alt
            fill
            sizes="100px"
            className="object-contain"
          />
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
    seoTitle: string; // New field for SEO
  };
  imageOnRight: boolean;
}

const agendaData: AgendaStepProps[] = [
  {
    step: 1,
    title: 'Strategy',
    description: ['Business-First Digital Transformation.', 'Intelligent System Architecture', 'Product Strategy & Execution Planning'],
    image: { 
      src: Image1, 
      alt: 'Strategic digital transformation and business architecture planning',
      seoTitle: 'Enterprise Digital Strategy Services' 
    },
    imageOnRight: false,
  },
  {
    step: 2,
    title: 'Design',
    description: ['UI / UX Design', 'Component Libraries & Style Guides', 'Motion Design (Lottie, 3D, Web)'],
    image: { 
      src: Image3, 
      alt: 'Modern UI/UX design with motion graphics and component libraries',
      seoTitle: 'User Experience & Interface Design Agency' 
    },
    imageOnRight: true,
  },
  {
    step: 3,
    title: 'Development',
    description: ['Scalable Cloud Architecture', 'Next.js & React Optimization', 'API First Integration'],
    image: { 
      src: Image5, 
      alt: 'Scalable Next.js development and cloud infrastructure integration',
      seoTitle: 'Custom Full-Stack Web Development' 
    },
    imageOnRight: false,
  },
  {
    step: 4,
    title: 'Launch',
    description: ['Continuous Deployment', 'Performance Monitoring', 'Scale-up Strategy'],
    image: { 
      src: Image6, 
      alt: 'Successful product launch and continuous deployment monitoring',
      seoTitle: 'Agile Product Launch and Scaling' 
    },
    imageOnRight: true,
  },
];

const GradientBox: React.FC<AgendaStepProps> = ({ step, title, description, imageOnRight }) => (
  <div className={`w-full max-w-[400px] text-white p-4 ${imageOnRight ? 'md:text-left' : 'md:text-right'}`}>
    <div className={`flex items-center space-x-2 mb-2 ${imageOnRight ? 'md:justify-start' : 'md:justify-end'}`}>
      <div className="w-[45px] h-[20px] rounded bg-gradient-to-r from-orange-400 to-indigo-500 flex items-center justify-center">
        <span className="text-white text-xs font-bold">0{step}</span>
      </div>

    </div>
    {/* Using h3 for better SEO hierarchy */}
    <h3 className="text-4xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
      {title}
    </h3>
    <div className="text-gray-300  text-base font-light leading-tight">
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

  const progressArray = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.45], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
    useTransform(scrollYProgress, [0.75, 0.95], [0, 1])
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black py-16 min-h-[500vh] antialiased"
      aria-label="Our Digital Transformation Process"
    >
      <ParallaxBackground scrollYProgress={scrollYProgress} />
      
      {/* Hidden SEO Content for Google Crawlers */}
      <div className="sr-only">
        <h2>Our Comprehensive Digital Strategy and Development Workflow</h2>
        <p>Expert Next.js development, UI/UX design, and scalable cloud architecture services.</p>
      </div>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full relative">
          {agendaData.map((step, index) => {
            const progress = progressArray[index];
            const opacity = useTransform(progress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
            const scale = useTransform(progress, [0, 0.2], [0.95, 1]);
            const y = useTransform(progress, [0, 0.2], [40, 0]);

            return (
              <motion.article
                key={index}
                style={{ opacity, scale, y }}
                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-out ${
                  index === 0 ? 'relative' : 'pointer-events-none'
                }`}
              >
                {step.imageOnRight ? (
                  <>
                    <GradientBox {...step} />
                    <div className="w-full max-w-[350px] mt-8 md:mt-0 group">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover:scale-105">
                        <Image 
                          src={step.image.src} 
                          alt={step.image.alt} 
                          title={step.image.seoTitle}
                          width={450} 
                          height={450} 
                          className="object-cover w-full h-full"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full max-w-[350px] mb-8 md:mb-0 group">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover:scale-105">
                        <Image 
                          src={step.image.src} 
                          alt={step.image.alt} 
                          title={step.image.seoTitle}
                          width={450} 
                          height={450} 
                          className="object-cover w-full h-full"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    <GradientBox {...step} />
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agenda;