import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import ServicesCTA from '../components/servicesCTA'
import ThreeCardSection from "../components/ThreeCardSection";


export const metadata: Metadata = {
  title: "Portfolio | Web, Software, AI & E-Commerce Work",
  description:
    "Explore Antrosys work across custom websites, software platforms, mobile apps, Shopify stores, AI products, branding, and digital experiences.",
  keywords: [
    "Antrosys Portfolio",
    "web development portfolio",
    "software development case studies",
    "AI project examples",
    "Shopify portfolio",
    "UI UX design work"
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys Portfolio | Web, Software, AI & E-Commerce Work",
    description: "Case studies and selected work across custom web development, software platforms, mobile apps, AI, Shopify, and branding.",
    path: "/portfolio",
  }),
  twitter: buildTwitter({
    title: "Antrosys Portfolio | Web, Software, AI & E-Commerce Work",
    description: "Explore Antrosys websites, apps, AI products, e-commerce platforms, and brand work.",
  }),
};

export default function Portfolio() {
  return (
    <>
      <ThreeCardSection />
      <ServicesCTA/>
    </>
  );
}
