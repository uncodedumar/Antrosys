import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { organizationSchema } from "@/lib/organization-schema";
import { buildOpenGraph, buildTwitter, coreKeywords, defaultOgImage, siteUrl } from "@/lib/seo";
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



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antrosys | Denver Software, AI & Digital Product Agency",
    template: "%s | Antrosys"
  },
  description: "Antrosys is a Denver, Colorado software and AI agency building custom websites, digital products, Shopify stores, WordPress platforms, and brand experiences.",
  keywords: coreKeywords,
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
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    title: "Antrosys | Denver Software, AI & Digital Product Agency",
    description: "Denver-based custom web development, software engineering, AI development, UI/UX design, Shopify, headless WordPress, branding, and digital operations support.",
    path: "/",
    image: defaultOgImage,
  }),
  twitter: {
    ...buildTwitter({
      title: "Antrosys | Denver Software, AI & Digital Product Agency",
      description: "Build websites, apps, AI systems, e-commerce platforms, and brand experiences with Antrosys in Denver.",
    }),
    creator: "@antrosys",
  },
  
  verification: {

  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
