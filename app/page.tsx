import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
import HoverImage from "./components/HoverImage";
import IndustrySection from "./components/IndustrySection";
import FinalSection from "./components/finalSection";
import TestimonialSection from "./components/TestimonialSection";
import ThreeCardSection from "./components/ThreeCardSection";
import TypographySection from "./components/TypographySection";
import { homePageData } from "@/lib/data";

// Dynamic imports for heavy components below the fold
const LeftGallerySec = dynamic(() => import("./components/LeftGallerySec"), {
  loading: () => <div className="min-h-screen bg-black" aria-label="Loading gallery" />,
  ssr: true,
});

const HorizontalGallery = dynamic(() => import("./components/HorizontalGallery"), {
  loading: () => <div className="min-h-[80vh] bg-black" aria-label="Loading gallery" />,
  ssr: true,
});

const MobileTestimonialSlider = dynamic(() => import("./components/MobileTestimonialSlider"), {
  loading: () => null,
  ssr: true,
});

const Map = dynamic(() => import("./components/Map"), {
  loading: () => <div className="min-h-[400px] bg-black" aria-label="Loading map" />,
  ssr: true,
});

const MY_WORDS = [
  { word: "Scalability", alignment: "start" },
  { word: "Curiosity", alignment: "end" },
  { word: "Creativity", alignment: "start" },

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
      <VideoPlayer videoSource="/Hero.mp4" />
      <TypographySection />
     
      <ServiceCards />
      
      <LogoLoopco />
      <HeroServicesCards />
      <AnimatedTextSection words={MY_WORDS as any} />
      <LeftAlignedPitch
        text="We engineer digital experiences that shape perception."
        accentColorClass="hover:text-accent-400"
      />

      <IconicBrandPitch >
        We design, build, and scale digital systems that move businesses
        forward. From AI, automation, and cloud platforms to full-stack
        development, apps, e-commerce, branding, and growth — we turn complex
        ideas into high-performing products people trust and love.
      </IconicBrandPitch>
      <CallToActionBanner />

      <StatisticsSection />
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
      < MobileTestimonialSlider/>
      <TestimonialSection />
      <Map />

    </>
  );
}
