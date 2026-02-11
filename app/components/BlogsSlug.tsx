"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { BlogPost, blogPosts } from '@/lib/data';

interface BlogsSlugProps {
  blogPost: BlogPost;
}

const BlogsSlug: React.FC<BlogsSlugProps> = ({ blogPost }) => {
  const [showModal, setShowModal] = useState(false);
  const post = blogPost;
  
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    // Optimized for SEO with Article Schema and Semantic Tags
    <article className="w-full font-sans antialiased bg-black selection:bg-zinc-800 selection:text-white">
      
      {/* HERO SECTION: Image on Black for that "Sexy" look */}
      <section className="w-full bg-black pt-10 pb-2 md:pt-16 md:pb-4 flex flex-col items-center">
        <div className="w-[98%] max-w-[1400px] px-2 md:px-4">
          <div className="relative w-full aspect-video md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            <Image 
              src={post.image} 
              alt={`${post.title} - Main coverage image`} 
              fill 
              priority // LCP Optimization: Loads this image first for Google
              sizes="(max-width: 768px) 100vw, 98vw"
              className="object-cover" 
            />
            {/* Subtle Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTENT SECTION: Clean White */}
      <section className="w-[98%] bg-accent rounded-lg mx-2 mt-10 relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto py-16 md:py-24 px-6 md:px-[2in]">
          
          {/* SEO Header Group */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 uppercase tracking-widest font-semibold">
              <p className="flex items-center gap-2">
                <span>By</span>
                {post.authors.map((a, i) => (
                  <span key={i} className="text-black hover:text-zinc-600 transition-colors cursor-default">
                    {a.name}{i < post.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <span className="hidden md:block w-1.5 h-1.5 bg-zinc-200 rounded-full" />
              <time dateTime={new Date().toISOString()}>{/* Add date if available in blogPost */}</time>
            </div>
          </header>

          {/* Body Content with enhanced readability */}
          <div className="space-y-12 text-slate-800 leading-relaxed text-left max-w-4xl">
            <section>
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-black tracking-tight">
                {post.abstractHeading}
              </h2>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed opacity-95">
                {post.abstractContent}
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-black tracking-tight">
                {post.introductionHeading}
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed opacity-95">
                {post.introductionContent}
              </p>
            </section>
          </div>

          {/* CTA: Smooth interaction */}
          <div className="flex justify-end mt-20">
            <button 
              onClick={handleReadMoreClick}
              aria-label={`Read the full article about ${post.title}`}
              className="group flex items-center gap-4 font-black text-xl text-slate-900 transition-all active:scale-95"
            >
              <span className="border-b-2 border-transparent group-hover:border-black transition-all">Read Full Article</span>
              <div className="p-3 bg-black text-white rounded-full group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight size={24} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* RELEVANT CONTENT SECTION */}
      <section className="bg-primary text-white py-24">
        <div className="mx-auto px-6 md:px-[2in] max-w-[1400px]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] font-bold text-xs mb-2">Up Next</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">You may like</h2>
            </div>
            <Link 
              href="/blogs" 
              className="hidden md:flex items-center gap-3 text-lg font-bold hover:text-zinc-400 transition-all group"
            >
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {otherPosts.map((item) => (
              <Link 
                key={item.slug} 
                href={`/blog/${item.slug}`} 
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-900 mb-6 transition-all duration-500 group-hover:rounded-[1.5rem] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold leading-snug group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL: Highly Accessible & Fast */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowModal(false)} />
          <div className="bg-white text-black p-8 md:p-12 rounded-[2.5rem] max-w-md w-full relative shadow-2xl scale-in-center animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-8 right-8 text-zinc-400 hover:text-black hover:rotate-90 transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>
            <h3 className="text-3xl font-black mb-4 tracking-tight">Wait!</h3>
            <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
              You're heading to an external source to finish this story. Ready to dive in?
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={post.readAllLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-black text-white text-center rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all active:scale-[0.98]"
              >
                Continue Reading
              </a>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full px-8 py-4 border-2 border-zinc-100 rounded-2xl font-bold text-zinc-500 hover:bg-zinc-50 transition-all"
              >
                Stay here
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogsSlug;