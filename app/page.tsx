import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import { homePageData } from "@/lib/data";
import { buildOpenGraph, buildTwitter } from "@/lib/seo";



const ServiceCards = dynamic(() => import("./components/ServiceCards"), {
  ssr: true,
});

const LogoLoopco = dynamic(() => import("./components/logoloopco"), {
  ssr: true,
});

const HeroServicesCards = dynamic(() => import("./components/HeroServicesCards"), {
  ssr: true,
});

const AnimatedTextSection = dynamic(() => import("./components/AnimatedTextSection"), {
  ssr: true,
});

const LeftAlignedPitch = dynamic(() => import("./components/LeftAlignedPitch"), {
  ssr: true,
});

const IconicBrandPitch = dynamic(() => import("./components/IconicBrandPitch"), {
  ssr: true,
});

const CallToActionBanner = dynamic(() => import("./components/CallToActionBanner"), {
  ssr: true,
});

const StatisticsSection = dynamic(() => import("./components/StatisticsSection"), {
  ssr: true,
});


const LeftGallerySec = dynamic(() => import("./components/LeftGallerySec"), {
  loading: () => <div className="min-h-screen bg-black" aria-label="Loading gallery" />,
  ssr: true,
});

const TextLoop = dynamic(() => import("./components/textloop"), {
  ssr: true,
});



const AdaptTextSection = dynamic(() => import("./components/AdaptTextSection"), {
  ssr: true,
});



const HoverImage = dynamic(() => import("./components/HoverImage"), {
  ssr: true,
});





const MobileTestimonialSlider = dynamic(() => import("./components/MobileTestimonialSlider"), {
  loading: () => null,
  ssr: true,
});

const TestimonialSection = dynamic(() => import("./components/TestimonialSection"), {
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
  title: "Custom Web, Software & AI Development Agency",
  description:
    "Antrosys builds custom websites, software platforms, AI systems, mobile apps, Shopify stores, headless WordPress sites, UI/UX, and brand identities.",
  keywords: [
    "custom web development agency",
    "software development company",
    "AI development services",
    "UI UX design agency",
    "Shopify development",
    "headless WordPress development"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys | Custom Web, Software & AI Development",
    description: "Custom digital products, AI systems, e-commerce platforms, UI/UX design, branding, and scalable web development.",
    path: "/",
  }),
  twitter: buildTwitter({
    title: "Antrosys | Custom Web, Software & AI Development",
    description: "Build custom websites, software, AI systems, Shopify stores, and brand experiences with Antrosys.",
  }),
};
export default function Home() {
  // Variant 1: "Our Work" section
  const homeData = homePageData[0];

  return (
    <>
      <HeroSection />
     
      <ServiceCards />
      
      
      <HeroServicesCards />
      <LogoLoopco />
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
      <AdaptTextSection />

      <HoverImage />
      < MobileTestimonialSlider/>
      <TestimonialSection />
      <Map />

    </>
  );
}
