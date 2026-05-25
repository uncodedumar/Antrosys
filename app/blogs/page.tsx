import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import BlogsSection from '../components/BlogsSection';

export const metadata: Metadata = {
  title: "Blog | Software, AI & Digital Product Insights",
  description:
    "Read Antrosys insights on AI development, machine learning, custom software, web platforms, healthcare technology, and product engineering.",
  keywords: [
    "AI development blog",
    "software development insights",
    "machine learning articles",
    "web development blog",
    "digital product strategy"
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys Blog | Software, AI & Digital Product Insights",
    description: "Articles on AI, machine learning, software development, web platforms, and product engineering.",
    path: "/blogs",
  }),
  twitter: buildTwitter({
    title: "Antrosys Blog | Software, AI & Digital Product Insights",
    description: "Read practical technology insights from Antrosys.",
  }),
};
export default function Service() {
  return (
    <>
    <BlogsSection/>    
    </>
  );
}


















