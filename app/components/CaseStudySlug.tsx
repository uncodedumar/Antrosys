"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface CaseStudyProps {
  data: {
    title: string;
    description: string;
    paragraph: string;
    images: string[];
    externalLink: string;
    testimonial: {
      stars: number;
      text: string;
      author: string;
      position: string;
      image: string;
    };
  } | undefined;
}

const CaseStudySlug: React.FC<CaseStudyProps> = ({ data }) => {
  // Animation settings for the "slight tilt"
  const hoverAnimation = {
    whileHover: { scale: 1.02, rotate: 1, transition: { duration: 0.3 } },
  };

  if (!data) {
    return null;
  }

  return (
    <section className="mx-2  flex flex-col items-center font-sans overflow-x-hidden bg-white rounded-[25px] ">
      {/* Header Section */}
      <div className="max-w-4xl w-full text-center mt-20 mb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 text-gray-900">
          {data.title}
        </h1>
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
          <p>{data.description}</p>
          <p>{data.paragraph}</p> {/* Repeated as per reference image 2 */}
        </div>
        
        
      </div>

      {/* Image Gallery Grid */}
      <div className="w-full max-w-7xl flex flex-col gap-6 px-4">
        {/* Pattern: Full, 2-Row (45/45), Full, 2-Row (45/45), Full */}
        
        {/* 1. Full Width */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video">
          <Image 
            src={data.images[0]} 
            alt="Work 1" 
            fill 
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* 2 & 3. 45% Width Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <motion.div {...hoverAnimation} className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-sm relative aspect-video">
            <Image 
              src={data.images[1]} 
              alt="Work 2" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <motion.div {...hoverAnimation} className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-sm relative aspect-video">
            <Image 
              src={data.images[2]} 
              alt="Work 3" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>

        {/* 4. Full Width */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video">
          <Image 
            src={data.images[3]} 
            alt="Work 4" 
            fill 
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* 5 & 6. 45% Width Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <motion.div {...hoverAnimation} className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-sm relative aspect-video">
            <Image 
              src={data.images[4]} 
              alt="Work 5" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <motion.div {...hoverAnimation} className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-sm relative aspect-video">
            <Image 
              src={data.images[5]} 
              alt="Work 6" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>

        {/* 7. Full Width */}
        <motion.div {...hoverAnimation} className="w-full rounded-2xl overflow-hidden shadow-sm relative aspect-video">
          <Image 
            src={data.images[6]} 
            alt="Work 7" 
            fill 
            className="object-cover"
            unoptimized
          />
        </motion.div>
      </div>
      <Link 
          href={data.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Visit Website
        </Link>
      {/* Testimonial Card */}
      <motion.div 
        {...hoverAnimation}
        className="mt-20 w-[95%] md:w-[60%] bg-[#4c1d95] text-white p-8 md:p-12 rounded-[2rem] shadow-xl relative my-10 mx-15"
      >
        {/* Star Rating */}
        <div className="flex gap-1 mb-8">
          {[...Array(data.testimonial.stars)].map((_, i) => (
            <Star key={i} size={20} fill="#f97316" color="#f97316" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-medium leading-snug mb-10">
          &ldquo;{data.testimonial.text}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300">
            <Image 
              src={data.testimonial.image} 
              alt={data.testimonial.author} 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="font-bold text-lg">{data.testimonial.author}</p>
            <p className="text-gray-300 text-sm">{data.testimonial.position}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudySlug;
