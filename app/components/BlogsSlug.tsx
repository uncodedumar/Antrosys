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
    <div className="w-full font-sans antialiased "> {/* Light bg to show the 98% banner effect */}
      {/* MAIN CONTENT SECTION */}
      <section className="mx-2  flex flex-col items-center font-sans overflow-x-hidden bg-white rounded-[25px]  ">
        {/* Adjusted to 98% width, White Background, and 2-inch x-axis padding */}
        <div className="w-[99%] bg-white py-16 rounded-[2rem] px-2   shadow-sm">
          
          {/* Main Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full aspect-video h-[500] rounded-[2rem] overflow-hidden shadow-md">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:px-20 p-2">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm text-slate-500 mb-10 uppercase tracking-widest font-medium">
              {post.authors.map((a, i) => (
                <span key={i}>{a.name}{i < post.authors.length - 1 ? ', ' : ''}</span>
              ))}
            </p>

            <div className="space-y-10 text-slate-800 leading-relaxed text-left">
              <div>
                <h2 className="text-2xl font-extrabold mb-4">{post.abstractHeading}</h2>
                <p className="text-lg opacity-90">{post.abstractContent}</p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold mb-4">{post.introductionHeading}</h2>
                <p className="text-lg opacity-90">{post.introductionContent}</p>
              </div>
            </div>

            {/* Read All Button */}
            <div className="flex justify-end mt-16">
              <button 
                onClick={handleReadMoreClick}
                className="flex items-center gap-2 font-bold text-lg text-slate-900 hover:mr-2 transition-all"
              >
                Read All <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* YOU MAY LIKE SECTION */}
      <section className="bg-black text-white py-20">
        <div className="mx-auto px-6 md:px-[2in]">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">You may like</h2>
            <Link href="/blogs" className="flex items-center gap-2 text-lg font-medium hover:text-gray-300 transition-colors">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {otherPosts.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-zinc-900 mb-4 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXTERNAL LINK MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-white text-black p-10 rounded-3xl max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">Leaving Site</h3>
            <p className="text-slate-600 mb-8 text-lg">
              You are about to leave our site to read the full article. Do you want to continue?
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 border-2 border-slate-100 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <a 
                href={post.readAllLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-black text-white text-center rounded-xl font-bold hover:bg-zinc-800 transition-colors"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsSlug;