import type { Metadata } from "next";

import ServicesCTA from '../components/servicesCTA'
import ThreeCardSection from "../components/ThreeCardSection";




export const metadata: Metadata = {
  title: "Portfolio | 1,200+ Projects in AI, Apps & Web - Antrosys",
  description:
    "Discover the Antrosys portfolio: a showcase of 1,200+ successful projects spanning cutting-edge AI art, custom SaaS platforms, mobile apps, and enterprise-level AI integrations.",
  keywords: [
    "Antrosys Portfolio",
    "AI Project Case Studies",
    "Full-Stack Development Examples",
    "SaaS Portfolio",
    "Mobile App Showcases",
    "Digital Transformation Projects",
    "Custom AI Model Portfolio"
  ],
  openGraph: {
    title: "The Antrosys Portfolio | Excellence in Digital Engineering",
    description: "From startups to enterprises, see how we’ve delivered 1,200+ bold and authentic digital solutions worldwide.",
    url: "https://antrosys.com/portfolio",
    images: [
      {
        url: "/AboutImages/call.avif", // Use an image showing a grid of your best work
        width: 1200,
        height: 630,
        alt: "Antrosys Portfolio - Showcasing 1,200+ Successful Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Antrosys Success Stories",
    description: "Explore over 1,200 successfully completed projects in AI, Dev, and BPO.",
  },
};

export default function Portfolio() {
  return (
    <>
      <ThreeCardSection />
      

      < ServicesCTA/>
      

    </>
  
  );
}
