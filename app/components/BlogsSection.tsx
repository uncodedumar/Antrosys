'use client'
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

// --- Types ---
interface Blog {
  id: number;
  title: string;
  slug: string;
  category: 'SEO' | 'Design' | 'Development' | 'AI';
  image: string;
  excerpt: string;
  featured: boolean;
}

// --- Mock Data ---
const BLOG_DATA: Blog[] = [
  { id: 1, title: "Boost Your Rankings with AI", slug: "boost-rankings-ai", category: "AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", excerpt: "Leverage machine learning to dominate search engine results effortlessly.", featured: true },
  { id: 2, title: "Modern Design Trends", slug: "modern-design-2024", category: "Design", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", excerpt: "Explore the shift towards brutalist and minimalist digital aesthetics.", featured: true },
  { id: 3, title: "Next.js 15 Performance Guide", slug: "nextjs-15-guide", category: "Development", image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800", excerpt: "Optimizing your server components for lightning-fast load times.", featured: true },
  { id: 4, title: "Technical SEO Checklist", slug: "technical-seo-checklist", category: "SEO", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", excerpt: "The ultimate guide to site audits and crawlability in 2025.", featured: false },
  { id: 5, title: "Tailwind CSS Mastery", slug: "tailwind-css-mastery", category: "Design", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800", excerpt: "Advanced utility-first patterns for scalable frontend architecture.", featured: false },
  { id: 6, title: "The Future of Web Dev", slug: "future-web-dev", category: "Development", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", excerpt: "Predicting the impact of edge computing on global applications.", featured: false },
];

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        rotateX: 5, 
        rotateY: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative overflow-hidden rounded-[25px] bg-primary  shadow-sm "
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 " />
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {blog.featured && (
            <span className="absolute top-4 left-4 z-20 bg-secondary text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-6 text-gray-900">
          <p className="text-secondary text-xs font-bold mb-2 uppercase tracking-tighter">{blog.category}</p>
          <h3 className="text-xl font-medium  mb-3 leading-tight text-accent">
            {blog.title}
          </h3>
          <p className="text-accent font-light text-sm line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogListing() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'SEO', 'Design', 'Development', 'AI'];

  const filteredBlogs = useMemo(() => {
    return filter === 'All' ? BLOG_DATA : BLOG_DATA.filter(b => b.category === filter);
  }, [filter]);

  const bestOfWeek = useMemo(() => BLOG_DATA.filter(b => b.featured).slice(0, 3), []);

  return (
    <main className="relative min-h-screen bg-primary overflow-x-hidden py-12">
      <Head>
        <title>Expert Insights | Best of the Week Web Articles</title>
      </Head>

      {/* --- Main Section Container --- */}
      <div className="relative z-10 mx-2 bg-primary rounded-lg shadow-2xl p-6 sm:p-12 md:mx-2 lg:mx-2">
        
        {/* --- Header Section --- */}
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16 border-l-4 border-orange-600 pl-6"
        >
          <h1 className="text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter">
            Best Of The <span className="text-orange-600">Week</span>
          </h1>
          <p className="mt-4 text-accent font-light max-w-2xl text-lg">
            Our editorial team handpicks the most impactful stories in technology and digital marketing.
          </p>
        </motion.header>

        {/* --- Featured Grid --- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestOfWeek.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-20" />

        {/* --- Filter Bar --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2">All Blogs & Articles</h2>
            <p className="text-accent font-light">Discover deep dives into modern technology.</p>
          </div>

          <div className="flex flex-wrap gap-2 items-center bg-accent p-2 rounded-xl border border-gray-200">
            <Filter size={18} className="text-orange-600 mx-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Main Grid --- */}
        <section className="min-h-[400px]">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 text-accent italic">
              No articles found in this category.
            </div>
          )}
        </section>

        {/* --- Footer Content --- */}
        <footer className="mt-32 py-16 border-t border-gray-100 text-gray-500 text-sm leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-accent font-bold mb-4 uppercase  tracking-widest">Industry Leading Content</h4>
              <p>
                Our platform serves as a hub for professional developers and digital marketers. Each 
                article is written by domain experts to ensure technical accuracy and actionable insights.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-4  uppercase tracking-widest">Stay Connected</h4>
              <p>
                Explore our comprehensive documentation on Tailwind CSS, Next.js 15, and Framer Motion 
                animations for higher engagement metrics and higher conversion rates.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </main>
  );
}