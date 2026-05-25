import type { Metadata } from "next";

export const siteUrl = "https://www.antrosys.com";
export const siteName = "Antrosys";

export const defaultOgImage = {
  url: "/AboutImages/call.avif",
  width: 1200,
  height: 630,
  alt: "Antrosys Denver digital product and software development team",
};

export const coreKeywords = [
  "custom web development",
  "software development",
  "AI development",
  "UI UX design",
  "brand identity design",
  "Shopify development",
  "headless WordPress development",
  "mobile app development",
  "cloud solutions",
  "BPO services",
  "web development company in Denver",
  "software development agency Denver",
  "AI development company Denver",
  "Denver web design agency",
  "custom software development Denver",
];

export const denverServiceKeywords = [
  "web development company in Denver",
  "software development agency Denver",
  "AI development company Denver",
  "Denver web design agency",
  "Shopify development Denver",
  "UI UX design agency Denver",
  "custom software development Denver",
  "Denver digital product agency",
];

export function cleanDescription(text: string, maxLength = 155) {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const truncated = normalized.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 80 ? lastSpace : truncated.length).trim()}.`;
}

export function buildOpenGraph({
  title,
  description,
  path,
  type = "website",
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: typeof defaultOgImage;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url: `${siteUrl}${path}`,
    siteName,
    type,
    images: [image],
  };
}

export function buildTwitter({
  title,
  description,
  image = defaultOgImage.url,
}: {
  title: string;
  description: string;
  image?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  };
}
