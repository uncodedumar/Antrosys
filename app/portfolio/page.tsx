import type { Metadata } from "next";

import ServicesCTA from '../components/servicesCTA'
import ThreeCardSection from "../components/ThreeCardSection";


export const metadata: Metadata = {
  title: "Portfolio - Antrosys",
  description: "Explore our portfolio of successful projects",
};

export default function Portfolio() {
  return (
    <>
      <ThreeCardSection />

      < ServicesCTA/>

    </>
  
  );
}
