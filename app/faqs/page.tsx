import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import FaqsPage from "../components/FaqsPage";




export const metadata: Metadata = {
  title: "FAQs | Denver Software, AI & Web Development",
  description:
    "Answers to common questions about Antrosys Denver services, including custom software, AI development, web design, Shopify, WordPress, branding, and BPO.",
  keywords: [
    "Antrosys FAQ",
    "Denver software development FAQ",
    "AI development questions Denver",
    "Denver web development process",
    "Shopify development FAQ Denver",
    "BPO outsourcing FAQ"
  ],
  alternates: {
    canonical: "/faqs",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys FAQs | Denver Software, AI & Web Development",
    description: "Learn about Antrosys Denver project process, services, technology stack, AI solutions, e-commerce, and support options.",
    path: "/faqs",
  }),
  twitter: buildTwitter({
    title: "Antrosys FAQs | Denver Software, AI & Web Development",
    description: "Answers about Antrosys Denver services, process, technology, and project support.",
  }),
};
export default function Contact() {
  return (
    <>
      <FaqsPage/>

    </>
  );
}
