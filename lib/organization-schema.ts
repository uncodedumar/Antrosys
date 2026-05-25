/**
 * Organization JSON-LD for the site root (injected from app/layout.tsx `<head>`).
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Antrosys",
  url: "https://www.antrosys.com",
  logo: "https://www.antrosys.com/logo.svg",
  description:
    "Antrosys is a digital product and software development company offering custom web development, AI development, UI/UX design, branding, Shopify, headless WordPress, mobile apps, cloud solutions, QA, and BPO services.",
  knowsAbout: [
    "Custom web development",
    "Software development",
    "AI development",
    "UI/UX design",
    "Brand identity design",
    "Shopify development",
    "Headless WordPress development",
    "Mobile app development",
    "Cloud solutions",
    "BPO services",
  ],
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
