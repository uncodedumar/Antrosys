import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";
import TestimonialSection from '../components/TestimonialSection';
import MobileTestimonialSlider from '../components/MobileTestimonialSlider'
import Map from "../components/Map";
import ServicesCTA from "../components/servicesCTA";



export const metadata: Metadata = {
  title: "Contact Antrosys | Denver Software & AI Projects",
  description:
    "Contact Antrosys in Denver to discuss custom software, web development, AI systems, UI/UX design, Shopify, WordPress, branding, or BPO support.",
  keywords: [
    "contact Antrosys",
    "hire software development agency Denver",
    "AI development consultation Denver",
    "Denver web development quote",
    "Shopify development Denver"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: buildOpenGraph({
    title: "Contact Antrosys | Denver Software & AI Projects",
    description: "Talk with Antrosys in Denver about websites, apps, AI systems, e-commerce builds, UI/UX, branding, and digital operations.",
    path: "/contact",
  }),
  twitter: buildTwitter({
    title: "Contact Antrosys | Denver Software & AI Projects",
    description: "Discuss your next Denver website, app, AI, Shopify, WordPress, branding, or BPO project.",
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
