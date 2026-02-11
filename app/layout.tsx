import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LoadingBar from "./components/Loading";
import Navigation from "./components/Navigation";
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower'
import { Analytics } from "@vercel/analytics/next"


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// ✅ This works because layout.tsx is a Server Component
export const metadata: Metadata = {
  metadataBase: new URL('https://www.antrosys.com'),
  title: {
    default: "Antrosys | Strategic Technology For Intelligent Growth",
    template: "%s | Antrosys"
  },
  description: "Strategic Technology For Intelligent Growth. Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.",
  keywords: ["digital agency", "web development", "app development", "AI solutions", "cybersecurity", "UI/UX design", "technology consulting", "digital transformation"],
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
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Antrosys",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.Antrosys.com",
    siteName: "Antrosys",
    title: "Antrosys | Strategic Technology For Intelligent Growth",
    description: "Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Antrosys | System That Survives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANtrosys | System That Survives",
    description: "Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.",
    images: ["/logo.svg"],
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
    "logo": "https://www.antrosys.com/logo.svg",
    "description": "Strategic Technology For Intelligent Growth. Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.",
    "sameAs": [
      "https://www.linkedin.com/company/antrosys",
      "https://www.instagram.com/antrosys/",
      "https://github.com/uncodedumar",
      "https://x.com/antrosys"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "sayhi@antrosys.com",
      "contactType": "Customer Service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": ["US", "EU", "AE", "CA", "AU", "TR", "PK"]
    }
  };

  return (
    <html lang="en">
      <head>
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
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
