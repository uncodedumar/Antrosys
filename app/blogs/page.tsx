import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import BlogsSection from '../components/BlogsSection';

export const metadata: Metadata = {
  title: "Blog | Denver Software, AI & Product Insights",
  description:
    "Read Antrosys insights from Denver on AI development, machine learning, custom software, web platforms, healthcare technology, and product engineering.",
  keywords: [
    "Denver AI development blog",
    "Denver software development insights",
    "machine learning articles",
    "web development blog Denver",
    "Denver digital product strategy"
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys Blog | Denver Software, AI & Digital Product Insights",
    description: "Articles from Antrosys on AI, machine learning, software development, web platforms, and product engineering in Denver.",
    path: "/blogs",
  }),
  twitter: buildTwitter({
    title: "Antrosys Blog | Denver Software, AI & Digital Product Insights",
    description: "Read practical technology insights from Antrosys in Denver.",
  }),
};
export default function Service() {
  return (
    <>
    <BlogsSection/>    
    </>
  );
}


















