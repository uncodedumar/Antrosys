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

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botpress.cloud https://files.bpcontent.cloud https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://flagcdn.com https://www.antrosys.com https://cdn.botpress.cloud https://files.bpcontent.cloud https://grainy-gradients.vercel.app",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://*.botpress.cloud wss://*.botpress.cloud https://www.google-analytics.com https://vitals.vercel-insights.com https://*.vercel-insights.com",
  "frame-src 'self' https://cal.com https://*.botpress.cloud",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const legacyUppercaseRedirects = [
  ["/Logo.svg", "/logo.svg"],
  ["/Logow.svg", "/logow.svg"],
  ["/case-studies/Antrosys", "/case-studies/antrosys"],
  ["/services/Logo-n-Brand-Identity", "/services/logo-n-brand-identity"],
  ["/services/Web-n-Application-Design", "/services/web-n-application-design"],
  ["/services/Art-n-Illustration", "/services/art-n-illustration"],
  ["/services/Print-Design", "/services/print-design"],
  ["/services/Packaging-n-Label-Design", "/services/packaging-n-label-design"],
  ["/services/Social-Media-Graphics", "/services/social-media-graphics"],
  ["/services/Marketing-n-Advertising", "/services/marketing-n-advertising"],
  ["/services/Growth-Analytics-n-Marketing-Automation", "/services/growth-analytics-n-marketing-automation"],
  ["/services/Front-End-Development", "/services/front-end-development"],
  ["/services/Back-End-Web-Development", "/services/back-end-web-development"],
  ["/services/Website-Maintenance", "/services/website-maintenance"],
  ["/services/Full-Stack-Web-Development", "/services/full-stack-web-development"],
  ["/services/No-Code-Easy-to-Manage-Websites", "/services/no-code-easy-to-manage-websites"],
  ["/services/WordPress-Engineered-Websites", "/services/wordpress-engineered-websites"],
  ["/services/Shopify-Websites", "/services/shopify-websites"],
  ["/services/Next-Gen-Desktop-Applications", "/services/next-gen-desktop-applications"],
  ["/services/Automated-Chat-Systems", "/services/automated-chat-systems"],
  ["/services/Cloud-Solutions", "/services/cloud-solutions"],
  ["/services/AI-Solutions", "/services/ai-solutions"],
  ["/services/QA-QC", "/services/qa-qc"],
  ["/services/App-Dev", "/services/app-dev"],
] as const;

const nextConfig: NextConfig = {
  htmlLimitedBots,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/services/AI%20Chatbot%20Development",
        destination: "/services/automated-chat-systems",
        permanent: true,
      },
      {
        source: "/services/Full-Stack%20Web%20Development",
        destination: "/services/full-stack-web-development",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      ...legacyUppercaseRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },

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
