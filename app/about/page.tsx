import type { Metadata } from "next";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";

import TeamHero from "../components/TeamHero";
import HoverImage from "../components/HoverImage2";
import IconicBrandPitch from "../components/IconicBrandPitch";
import CoooperMsg from "../components/CoooperMsg";

import ImageTiltGrid from "../components/ImageTiltGrid";
import LeftAlignedPitch from "../components/LeftAlignedPitch";
import ProfileCardLayout from "../components/ProfileCardLayout";
import ProfileRow2 from "../components/ProfileRow2";
import CareersSection from "../components/CareersSection";
import ServicesCTA from "../components/servicesCTA";


export const metadata: Metadata = {
  title: "About Antrosys | Software, AI & Design Team",
  description:
    "Meet Antrosys, a software, AI, UI/UX, branding, e-commerce, and digital product team building practical systems for growing businesses.",
  keywords: [
    "About Antrosys",
    "software development team",
    "AI development company",
    "UI UX design team",
    "digital product agency",
    "brand and technology partner"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: buildOpenGraph({
    title: "About Antrosys | Software, AI & Design Team",
    description: "Learn how Antrosys blends software engineering, AI development, UI/UX design, branding, and e-commerce delivery.",
    path: "/about",
  }),
  twitter: buildTwitter({
    title: "About Antrosys | Software, AI & Design Team",
    description: "A digital product team for custom software, AI systems, websites, apps, e-commerce, and brand experiences.",
  }),
};

export default function Portfolio() {
  return (
    <>
      <TeamHero />
      <HoverImage />
      <IconicBrandPitch accentClass="hover:text-accent">
        Building smarter digital experiences that scale. Turning ideas into
        high-performing systems. Digital solutions, engineered for impact.
      </IconicBrandPitch>{" "}
      <ImageTiltGrid />
      <CoooperMsg />
      <LeftAlignedPitch
        text="Minds That Move Markets"
        accentColorClass="hover:text-accent"
      />{" "}
      <ProfileCardLayout />
      <ProfileRow2 />
      <CareersSection />
      <ServicesCTA />
    </>
  );
}
