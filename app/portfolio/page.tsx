import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import ServicesCTA from '../components/servicesCTA'
import ThreeCardSection from "../components/ThreeCardSection";


export const metadata: Metadata = {
  title: "Portfolio | Denver Web, Software, AI & E-Commerce Work",
  description:
    "Explore Antrosys work across Denver custom websites, software platforms, mobile apps, Shopify stores, AI products, branding, and digital experiences.",
  keywords: [
    "Antrosys Portfolio",
    "Denver web development portfolio",
    "software development case studies Denver",
    "AI project examples Denver",
    "Shopify portfolio Denver",
    "UI UX design work Denver"
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys Portfolio | Denver Web, Software, AI & E-Commerce Work",
    description: "Case studies and selected work across Denver custom web development, software platforms, mobile apps, AI, Shopify, and branding.",
    path: "/portfolio",
  }),
  twitter: buildTwitter({
    title: "Antrosys Portfolio | Denver Web, Software, AI & E-Commerce Work",
    description: "Explore Antrosys websites, apps, AI products, e-commerce platforms, and brand work for Denver businesses.",
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
