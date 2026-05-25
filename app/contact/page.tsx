import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";
import TestimonialSection from '../components/TestimonialSection';
import MobileTestimonialSlider from '../components/MobileTestimonialSlider'
import Map from "../components/Map";
import ServicesCTA from "../components/servicesCTA";



export const metadata: Metadata = {
  title: "Contact Antrosys | Start a Software or AI Project",
  description:
    "Contact Antrosys to discuss custom software, web development, AI systems, UI/UX design, Shopify, WordPress, branding, or BPO support.",
  keywords: [
    "contact Antrosys",
    "hire software development agency",
    "AI development consultation",
    "web development quote",
    "Shopify development consultation"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: buildOpenGraph({
    title: "Contact Antrosys | Start a Software or AI Project",
    description: "Talk with Antrosys about websites, apps, AI systems, e-commerce builds, UI/UX, branding, and digital operations.",
    path: "/contact",
  }),
  twitter: buildTwitter({
    title: "Contact Antrosys | Start a Software or AI Project",
    description: "Discuss your next website, app, AI, Shopify, WordPress, branding, or BPO project.",
  }),
};

export default function Contact() {
  return (
    <>
      <ContactHero/>
      <FaqSection />
      <TestimonialSection/>
      <MobileTestimonialSlider/>
      <Map/>
      <ServicesCTA />

    </>
  );
}
