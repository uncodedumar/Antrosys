import type { NextConfig } from "next";
import { HTML_LIMITED_BOT_UA_RE } from "next/dist/shared/lib/router/utils/html-bots";

/**
 * Next serves "streaming metadata" to crawlers whose UA does *not* match this regex,
 * which can place `<title>` / `<meta>` after `<body>` opens (bad for HTML-only crawlers).
 * We extend Next's built-in list so SEO audit tools get a blocking metadata render.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots
 */
const htmlLimitedBots = new RegExp(
  HTML_LIMITED_BOT_UA_RE.source +
    [
      "|Screaming\\s+Frog\\s+SEO\\s+Spider",
      "|ScreamingFrogSEOSpider",
      "|Sitebulb",
      "|AhrefsSiteAudit",
      "|AhrefsBot",
      "|SemrushBot",
      "|SiteAuditBot",
      "|DotBot",
      "|MJ12bot",
      "|BLEXBot",
      "|PetalBot",
      "|Bytespider",
      "|DataForSeoBot",
      "|serpstatbot",
      "|rogerbot",
      "|meta-externalagent",
    ].join(""),
  HTML_LIMITED_BOT_UA_RE.flags
);

const nextConfig: NextConfig = {
  htmlLimitedBots,
  // Modern browser targeting - remove unnecessary polyfills
  // Note: swcMinify is default in Next.js 16, removed to avoid warning
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
    // Modern browser optimizations
    optimizeCss: true,
  },
  // Target modern browsers - reduces bundle size significantly
  transpilePackages: [],
};

export default nextConfig;
