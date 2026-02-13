import type { Metadata } from "next";

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
  title: "About Antrosys | The Leaders in AI & Digital Transformation",
  description:
    "Founded by Muhammad Umar Riaz, Antrosys is a global technology consulting firm specializing in AI art, custom software, and elite BPO solutions. Discover our mission to empower brands to dominate the digital landscape.",
  keywords: [
    "About Antrosys",
    "Muhammad Umar Riaz",
    "AI Agency Leadership",
    "Digital Transformation Experts",
    "Global Technology Consulting",
    "Software Engineering Excellence"
  ],
  openGraph: {
    title: "The Story of Antrosys | Engineering the Future",
    description: "Meet the team behind 1,200+ successful projects. Learn how Antrosys combines creative UI/UX with high-performance AI and cloud infrastructure.",
    url: "https://antrosys.com/about",
    images: [
      {
        url: "/logo.svg", // Recommended: A photo of the leadership or team office
        width: 1200,
        height: 630,
        alt: "About Antrosys - Led by Muhammad Umar Riaz",
      },
    ],
    type: "profile", // "profile" is great for About pages that highlight founders/teams
  },
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
