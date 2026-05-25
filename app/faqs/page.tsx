import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import FaqsPage from "../components/FaqsPage";




export const metadata: Metadata = {
  title: "FAQs | Software, AI & Web Development Questions",
  description:
    "Answers to common questions about Antrosys services, including custom software, AI development, web design, Shopify, WordPress, branding, and BPO.",
  keywords: [
    "Antrosys FAQ",
    "software development FAQ",
    "AI development questions",
    "web development process",
    "Shopify development FAQ",
    "BPO outsourcing FAQ"
  ],
  alternates: {
    canonical: "/faqs",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys FAQs | Software, AI & Web Development",
    description: "Learn about Antrosys project process, services, technology stack, AI solutions, e-commerce, and support options.",
    path: "/faqs",
  }),
  twitter: buildTwitter({
    title: "Antrosys FAQs | Software, AI & Web Development",
    description: "Answers about Antrosys services, process, technology, and project support.",
  }),
};
export default function Contact() {
  return (
    <>
      <FaqsPage/>

    </>
  );
}
