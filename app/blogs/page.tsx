import type { Metadata } from 'next';
import BlogsSection from '../components/BlogsSection';

export const metadata: Metadata = {
  title: "Blog | AI Insights & Tech Trends - Antrosys",
  description:
    "Expert perspectives on AI integrations, custom software development, and digital growth strategies. Stay ahead of the curve with the latest from the Antrosys engineering team.",
  keywords: [
    "AI Development Blog",
    "Tech Transformation Insights",
    "Next.js Development Tips",
    "Machine Learning Trends",
    "BPO Industry News",
    "Antrosys Engineering Blog"
  ],
  openGraph: {
    title: "The Antrosys Blog | Mastering Digital Transformation",
    description: "Deep dives into AI, full-stack engineering, and business scaling strategies from the experts at Antrosys.",
    url: "https://www.antrosys.com/blogs",
    type: "website",
    images: [
      {
        url: "/AboutImages/call.avif", // A branded image representing knowledge/innovation
        width: 1200,
        height: 630,
        alt: "Antrosys Blog - AI and Technology Insights",
      },
    ],
  },
  alternates: {
    canonical: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antrosys Blog | Tech & AI Thought Leadership",
    description: "Innovative ideas and technical guides to help your business dominate the digital landscape.",
  },
};
export default function Service() {
  return (
    <>
    <BlogsSection/>    
    </>
  );
}


















