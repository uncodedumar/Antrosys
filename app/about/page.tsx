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
  title: "About - Antrosys",
  description: "Dive deep to explore Antrosys",
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
