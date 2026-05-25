/**
 * Organization JSON-LD for the site root (injected from app/layout.tsx `<head>`).
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Antrosys",
  url: "https://www.antrosys.com",
  logo: "https://www.antrosys.com/logo.svg",
  description:
    "Antrosys is a Denver, Colorado digital product and software development company offering custom web development, AI development, UI/UX design, branding, Shopify, headless WordPress, mobile apps, cloud solutions, QA, and BPO services.",
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
    "Web development company in Denver",
    "Software development agency Denver",
    "AI development company Denver",
    "Denver web design agency",
    "Denver digital product agency",
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
    telephone: "+1 350 353 5005",
    contactType: "Customer Service",
  },
  email: "connect@antrosys.com",
  telephone: "+1 350 353 5005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1500 N Grant St #7997",
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80203",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Denver",
    },
    {
      "@type": "State",
      name: "Colorado",
    },
  ],
} as const;
