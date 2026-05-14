/**
 * Organization JSON-LD for the site root (injected from app/layout.tsx `<head>`).
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Antrosys",
  url: "https://www.antrosys.com",
  logo: "https://www.antrosys.com/Logo.svg",
  description:
    "Strategic Technology For Intelligent Growth. Transform your business with innovative digital solutions, cutting-edge technology, and expert development services.Antrosys goes beyond development to ensure your brand dominates the market. We specialize in performance marketing, growth analytics, and marketing automation designed to maximize ROI and accelerate lead generation. As a premier BPO partner, we provide elite outsourcing solutions and customer support, allowing your business to scale effortlessly while we handle the technical and operational heavy lifting. Partner with Antrosys to turn sophisticated technology into sustainable business growth.",
  sameAs: [
    "https://www.linkedin.com/company/antrosys",
    "https://www.instagram.com/antrosys/",
    "https://github.com/uncodedumar",
    "https://x.com/antrosys",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "connect@antrosys.com",
    contactType: "Customer Service",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: ["US", "EU", "AE", "CA", "AU", "TR", "PK"],
  },
} as const;
