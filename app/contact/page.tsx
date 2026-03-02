import type { Metadata } from "next";

import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";
import TestimonialSection from '../components/TestimonialSection';
import MobileTestimonialSlider from '../components/MobileTestimonialSlider'
import Map from "../components/Map";
import ServicesCTA from "../components/servicesCTA";



export const metadata: Metadata = {
  title: "Contact Antrosys | Start Your Digital Transformation Today",
  description:
    "Ready to scale? Contact Antrosys to discuss your next AI integration, mobile app project, or elite BPO outsourcing needs. Let's build something bold together.",
  keywords: [
    "Hire Antrosys",
    "AI Development Consultation",
    "Software Development Agency Contact",
    "BPO Partner Inquiry",
    "Antrosys Support",
    "Scale Business with AI"
  ],
  openGraph: {
    title: "Get in Touch with Antrosys | Global Tech & BPO Partner",
    description: "Partner with a global leader in AI and digital transformation. Reach out today for a consultation and maximize your profitability.",
    url: "https://antrosys.com/contact",
    images: [
      {
        url: "/AboutImages/call.avif",
        width: 1200,
        height: 630,
        alt: "Contact Antrosys for AI and Software Development",
      },
    ],
    type: "website",
  },
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
