'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Optimized Images
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { blogPosts } from '@/lib/data';


// --- Types ---
interface Blog {
  id: number;
  title: string;
  slug: string;
  category: 'SEO' | 'Design' | 'Development' | 'AI' | 'Healthcare' | 'Smart Cities';
  image: string;
  excerpt: string;
  featured: boolean;
}

// Helper function to determine category from title/slug
const getCategoryFromTitle = (title: string, slug: string): Blog['category'] => {
  const lowerTitle = title.toLowerCase();
  const lowerSlug = slug.toLowerCase();

  if (lowerTitle.includes("ai") || lowerTitle.includes("machine learning") || lowerTitle.includes("deep learning")) return "AI";
  if (lowerTitle.includes("healthcare") || lowerTitle.includes("medical") || lowerTitle.includes("cancer") || lowerTitle.includes("tumor") || lowerTitle.includes("elderly")) return "Healthcare";
  if (lowerTitle.includes("parking") || lowerTitle.includes("traffic") || lowerTitle.includes("smart city")) return "Smart Cities";
  if (lowerTitle.includes("seo") || lowerTitle.includes("ranking")) return "SEO";
  if (lowerTitle.includes("design") || lowerTitle.includes("ui") || lowerTitle.includes("ux")) return "Design";
  if (lowerTitle.includes("development") || lowerTitle.includes("next.js") || lowerTitle.includes("web")) return "Development";
  
  return "AI"; // Default category
};

// Transform blogPosts to Blog format
const transformBlogPosts = (posts: typeof blogPosts): Blog[] => {
  return posts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    slug: post.slug,
    category: getCategoryFromTitle(post.title, post.slug),
    image: post.image,
    excerpt: post.abstractContent,
    featured: index < 3, // First 3 posts are featured
  }));
};

// --- Blog Data from lib/data.ts ---
const BLOG_DATA: Blog[] = transformBlogPosts(blogPosts);

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        rotateX: 2, 
        rotateY: -2, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative overflow-hidden rounded-[25px] bg-primary shadow-sm"
    >
      <Link href={`/blog/${blog.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-[25px]" aria-label={`Read more about ${blog.title}`}>
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={blog.featured}
          />
          {blog.featured && (
            <span className="absolute top-4 left-4 z-20 bg-secondary text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-6 text-gray-900">
          <p className="text-secondary text-xs font-bold mb-2 uppercase tracking-tighter">{blog.category}</p>
          <h3 className="text-xl font-medium mb-3 leading-tight text-accent group-hover:text-orange-600 transition-colors">
            {blog.title}
          </h3>
          <p className="text-accent font-light text-sm line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default function BlogListing() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'AI', 'Healthcare', 'Smart Cities', 'SEO', 'Design', 'Development'];

  const filteredBlogs = useMemo(() => {
    return filter === 'All' ? BLOG_DATA : BLOG_DATA.filter(b => b.category === filter);
  }, [filter]);

  const bestOfWeek = useMemo(() => BLOG_DATA.filter(b => b.featured).slice(0, 3), []);

  // JSON-LD for Search Engines
  const jsonLd = {
    "@context": "https://antrosys.com",
    "@type": "Blog",
    "name": "Expert Insights Blog",
    "description": "High-performance technical articles on SEO, AI, and Next.js Development.",
    "publisher": { "@type": "Organization", "name": "Your Brand" }
  };

  return (
    <main className="relative min-h-screen bg-primary overflow-x-hidden py-12">
      
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* --- Top Banner Image (Updated with Dark Cyberpunk Art) --- */}
      <div className="w-[90%] mx-auto mb-12 overflow-hidden rounded-2xl aspect-[21/9] relative border-b-2 border-orange-600/30">
         <Image 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=90&w=1600" 
            alt="Cyberpunk Action Girl Art" 
            fill
            className="object-cover brightness-75 contrast-125"
            priority
         />
         {/* Subtle overlay to enhance the "dark action" feel */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-2 bg-primary rounded-lg shadow-2xl p-6 sm:p-12 md:mx-4 lg:mx-8">
        
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16 border-l-4 border-orange-600 pl-6"
        >
          <h1 className="text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter">
            Best Of The <span className="text-orange-600">Week</span>
          </h1>
          <p className="mt-4 text-accent font-light max-w-2xl text-lg">
            Curated industry insights on <strong className="font-medium">Technical SEO</strong>, <strong className="font-medium">Next.js Development</strong>, and <strong className="font-medium">AI Strategy</strong>.
          </p>
        </motion.header>

        <section aria-label="Featured Articles" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestOfWeek.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-20" aria-hidden="true" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2">Technical Guides & Articles</h2>
            <p className="text-accent font-light">Advanced tutorials for modern web architecture.</p>
          </div>

          <nav aria-label="Category Filter" className="flex flex-wrap gap-2 items-center bg-accent p-2 rounded-xl border border-gray-200">
            <Filter size={18} className="text-orange-600 mx-2" aria-hidden="true" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  filter === cat 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        <section className="min-h-[400px]" aria-live="polite">
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

        <footer className="mt-32 py-16 border-t border-gray-100 text-gray-500 text-sm leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-accent font-bold mb-4 uppercase tracking-widest">Authority Content</h4>
              <p>
              Signals leadership, inevitability, and superiority without shouting.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-4 uppercase tracking-widest">Performance Driven</h4>
              <p>
              Implies systems, outcomes, and repeatable success — not luck.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}