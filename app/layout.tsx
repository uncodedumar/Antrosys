import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LoadingBar from "./components/Loading";
import Navigation from "./components/Navigation";
import TopNavBar from './components/TopNavBar';
import Chatbot from './components/Chatbot';

import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower'
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});



// ✅ This works because layout.tsx is a Server Component
export const metadata: Metadata = {
  metadataBase: new URL('https://www.antrosys.com'),
  title: {
    default: "Antrosys Global Leader in AI Development & Digital Transformation.",
    template: "%s | Antrosys"
  },
  description: "Antrosys is an industry-leading agency specializing in cutting-edge AI art, custom AI models, and intelligent chatbots. As a premier partner for digital transformation, we provide full-stack development (iOS, Android, Desktop), headless WordPress, and Shopify e-commerce solutions powered by AWS cloud infrastructure. With a portfolio of 1,200+ successful projects, our expertise spans ML/DL solutions, UI/UX interface design, and performance marketing. From startups to enterprises, Antrosys empowers brands to dominate the digital landscape through sophisticated marketing automation and elite BPO outsourcing.",
  keywords: [
    // Core Identity & Leadership

    "cretaive ai agency",
    "ai agency",
    "design agency",
    
    "Antrosys",
    "Software",
    "solutions",
    "software development",
    "software engineering",
    "software solutions",
    "software consulting",
    "software development agency",
    "software development company",
    "software development services",
    "software development solutions",
    "software development consultancy",
    "software development firm",
    "software development team",
    "software development experts",
    "software development services",
    "software development solutions",
    "software development consultancy",
    "design agency",
    "design services",
    "design solutions",
    "design consultancy",
    "design firm",
    "design team",
    "design experts",
    "design services",
    "design solutions",
    "bpo outsourcing",
    "bpo solutions",
    "bpo consultancy",
    "bpo firm",
    "bpo team",
    "bpo experts",
    "bpo services",
    "bpo solutions",
    "bpo consultancy",
    "software design",
    "software development agency",
    "software development company",
    "software development services",
    "software development solutions",
    "Muhammad Umar Riaz",
    "Elite Digital Transformation Agency",
    "Industry-Leading Technology Consulting",
    
    // AI & Advanced Engineering
    "Custom AI Model Development",
    "Bespoke AI Art and Illustration",
    "Enterprise AI Integration",
    "ML/DL Solutions",
    "Generative AI for Business",
    
    // Software & Web Development
    "Full-Stack Web Development",
    "Custom SaaS Software Engineering",
    "High-Performance Mobile App Development",
    "Headless WordPress Development",
    "Shopify E-commerce Experts",
    "Scalable AWS Cloud Infrastructure",
    
    // Design & Growth
    "Next-Gen UI/UX Interface Design",
    "Strategic Brand Identity",
    "Performance Marketing Automation",
    "Growth Analytics and Lead Generation",
    "Data-Backed Digital Strategy",
    
    // Specialized Services & BPO
    "Elite BPO Outsourcing Solutions",
    "Enterprise Customer Support Solutions",
    "Cross-Platform Desktop Application Development",
    "Secure Digital Architecture"
  ],
  authors: [{ name: "Antrosys" }],
  creator: "Antrosys",
  publisher: "Antrosys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", rel:"icon", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Antrosys",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.antrosys.com",
    siteName: "Antrosys",
    title: "Antrosys | Elevate your business with AI & Digital Transformation",
    description: "Transform your digital presence with Antrosys, a global leader in full-stack web and mobile development. Our engineering team excels in building high-performance applications for iOS, Android, and Desktop, utilizing robust AWS cloud infrastructure. Whether you require a headless WordPress architecture, a high-conversion Shopify e-commerce store, or a custom enterprise software suite, Antrosys blends elite UI/UX design with scalable code to drive global profitability.",
    images: [
      {
        url: "/AboutImages/call.avif",
        width: 1200,
        height: 630,
        alt: "Antrosys | System That Survives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANtrosys | Premier destination for Generative AI and custom machine learning solutions.",
    description: "Antrosys is the premier destination for Generative AI and custom machine learning solutions. We specialize in engineering intelligent chatbots and custom AI art models that redefine how brands interact with their audiences. By integrating Deep Learning (DL) and sophisticated ML pipelines into your existing ecosystem, we transform raw data into a competitive powerhouse. From AI-driven SaaS platforms to predictive analytics, Antrosys delivers the technical edge needed to lead the AI revolution.",
    images: ["/AboutImages/call.avif"],
    creator: "@antrosys",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {

  },
  alternates: {
    canonical: "https://www.antrosys.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Antrosys",
    "url": "https://www.antrosys.com",
    "logo": "https://www.antrosys.com/Logo.svg",
    "description": "Strategic Technology For Intelligent Growth. Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.Antrosys goes beyond development to ensure your brand dominates the market. We specialize in performance marketing, growth analytics, and marketing automation designed to maximize ROI and accelerate lead generation. As a premier BPO partner, we provide elite outsourcing solutions and customer support, allowing your business to scale effortlessly while we handle the technical and operational heavy lifting. Partner with Antrosys to turn sophisticated technology into sustainable business growth.",
    "sameAs": [
      "https://www.linkedin.com/company/antrosys",
      "https://www.instagram.com/antrosys/",
      "https://github.com/uncodedumar",
      "https://x.com/antrosys"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "connect@antrosys.com",
      "contactType": "Customer Service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": ["US", "EU", "AE", "CA", "AU", "TR", "PK"]
    }
  };

  // Critical CSS for hero section - inlined for LCP optimization
  // Minified and optimized for immediate render
  const criticalCSS = `:root{--primary:#000;--secondary:#EF571B;--accent:#FAF3E1;--background:#000;--foreground:#000}body{background:#000;font-family:var(--font-poppins,system-ui,arial),sans-serif;margin:0;padding:0}.bg-black{background-color:#000}.text-white{color:#fff}.text-secondary{color:#EF571B}.font-black{font-weight:900}.hero-h1{font-size:clamp(3rem,8vw,10rem);line-height:0.85;color:#fff;font-weight:900;letter-spacing:-0.05em;margin:0;padding:0;opacity:1!important;visibility:visible!important;transform:none!important}.hero-h1 .text-secondary{color:#EF571B}.hero-container{min-height:100vh;position:relative;background-color:#000}.hero-h1,.hero-container{contain:layout style paint}`;

  return (
    <html lang="en">
      <head>
        {/* Manifest - Icons are handled by Next.js metadata API */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Inline Critical CSS for immediate render - ensures H1 is visible without waiting for CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LoadingBar />
        <TopNavBar />

        <Navigation />
        
        <CursorFollower/>
        <Chatbot/>
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-8Z2YZEJZVP" />
        <SpeedInsights />
      </body>
    </html>
  );
}
