import type { Metadata } from "next";

import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";
import TestimonialSection from '../components/TestimonialSection';
import MobileTestimonialSlider from '../components/MobileTestimonialSlider'
import Map from "../components/Map";
import ServicesCTA from "../components/servicesCTA";



export const metadata: Metadata = {
  title: "Contact - Antrosys",
  description: "Get in touch with Antrosys",
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
