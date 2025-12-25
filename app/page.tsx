import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import VideoPlayer from "./components/VideoPlayer";

import IconicBrandPitch from "./components/IconicBrandPitch";
import LogoLoopco from "./components/logoloopco";
import AnimatedTextSection from "./components/AnimatedTextSection";
import TextLoop from "./components/textloop";
import LeftAlignedPitch from "./components/LeftAlignedPitch";
import ServiceCards from "./components/ServiceCards";
import HeroServicesCards from "./components/HeroServicesCards";
import StatisticsSection from "./components/StatisticsSection";
import CallToActionBanner from "./components/CallToActionBanner";
import AdaptTextSection from "./components/AdaptTextSection";
import LeftGallerySec from "./components/LeftGallerySec";
import HorizontalGallery from "./components/HorizontalGallery";
import HoverImage from "./components/HoverImage";
import IndustrySection from "./components/IndustrySection";
import FinalSection from "./components/finalSection";
import TestimonialSection from "./components/TestimonialSection";
import Map from "./components/Map";
import ThreeCardSection from "./components/ThreeCardSection";

import TypographySection from "./components/TypographySection";
import { homePageData } from "@/lib/data";

const MY_WORDS = [
  { word: "GREAT WORK", alignment: "start" },
  { word: "DOES'T JUST ", alignment: "center" },
  { word: "GUIDES", alignment: "start" },
  { word: "BEHAVIOURS", alignment: "start" },
  { word: "it speaks", alignment: "center" },
  { word: "directly with the", alignment: "end" },

  { word: "nervous system", alignment: "start" },
];


export const metadata: Metadata = {
  title: "Antrosys",
  description:
    "Welcome to Antrosys - Your trusted partner for innovative solutions",
};

export default function Home() {
  // Variant 1: "Our Work" section
  const homeData = homePageData[0];

  return (
    <>
      <HeroSection />
      <VideoPlayer videoSource="/Herobg.mp4" />
      <IconicBrandPitch accentClass="hover:text-accent">
        We design, build, and scale digital systems that move businesses
        forward. From AI, automation, and cloud platforms to full-stack
        development, apps, e-commerce, branding, and growth — we turn complex
        ideas into high-performing products people trust and love.
      </IconicBrandPitch>
      <LogoLoopco />
      <AnimatedTextSection words={MY_WORDS as any} />
      <LeftAlignedPitch
        text="We engineer digital experiences that shape perception."
        accentColorClass="hover:text-accent-400"
      />
      <ServiceCards />
      <HeroServicesCards />
      <CallToActionBanner />

      <StatisticsSection />
      <CallToActionBanner />
      <LeftGallerySec />
      <TextLoop
        texts={[
          "Future-Proof Architecture Scalability Built-In Transparent Processes Exceptional Performance Security First Results-Driven Partnership Innovation Delivered Custom Solutions",
        ]}
      />
      <HorizontalGallery />
      <AdaptTextSection />
      <ThreeCardSection />

      <HoverImage />
      <IndustrySection data={homeData.industries} />
      <FinalSection data={homeData.finalSection} />
      <TestimonialSection />
      <Map />
      <TypographySection />

    </>
  );
}
