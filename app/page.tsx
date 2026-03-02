import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import { homePageData } from "@/lib/data";

// Critical above-the-fold components - loaded immediately
const VideoPlayer = dynamic(() => import("./components/VideoPlayer"), {
  ssr: true,
});

// Below-the-fold components - lazy loaded with code splitting
const TypographySection = dynamic(() => import("./components/TypographySection"), {
  ssr: true,
});

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

const HorizontalGallery = dynamic(() => import("./components/HorizontalGallery"), {
  loading: () => <div className="min-h-[80vh] bg-black" aria-label="Loading gallery" />,
  ssr: true,
});

const AdaptTextSection = dynamic(() => import("./components/AdaptTextSection"), {
  ssr: true,
});

const ThreeCardSection = dynamic(() => import("./components/ThreeCardSection"), {
  ssr: true,
});

const HoverImage = dynamic(() => import("./components/HoverImage"), {
  ssr: true,
});

const IndustrySection = dynamic(() => import("./components/IndustrySection"), {
  ssr: true,
});

const FinalSection = dynamic(() => import("./components/finalSection"), {
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
  title: "Antrosys | Cutting-Edge AI, Full-Stack Dev & Elite BPO Solutions",
  description:
    "Antrosys empowers startups and enterprises with custom AI integrations, high-performance mobile & web development, and elite BPO outsourcing. Transform your digital presence with bold, trusted engineering.",
  keywords: [
    "AI Development Agency",
    "Custom SaaS Solutions",
    "Mobile App Development",
    "BPO Customer Support",
    "Enterprise AI Integration",
    "Antrosys",
    "Muhammad Umar Riaz"
  ],
  alternates: {
    canonical: "https://antrosys.com", // Replace with your live URL
  },
  openGraph: {
    title: "Antrosys | Leading Digital Transformation Agency",
    description: "Specializing in AI art, custom models, and full-stack development to help businesses scale effortlessly.",
    url: "https://antrosys.com",
    siteName: "Antrosys",
    images: [
      {
        url: "/AboutImages/call.avif", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Antrosys - Empowering Brands to Dominate the Digital Landscape",
      },
    ],
    type: "website",
  },
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
