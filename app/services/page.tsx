import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import ServicesHero from '../components/ServicesHero';
import AllServicesCards from '../components/AllServicesCards'
import ServicesCTA from '../components/servicesCTA'


export const metadata: Metadata = {
  title: 'Denver Services | Web, Software, AI, Design & E-Commerce',
  description:
    'Explore Denver-focused Antrosys services for custom software, web development, AI solutions, UI/UX design, branding, Shopify, WordPress, mobile apps, cloud, and BPO.',
  keywords: [
    'custom software development Denver',
    'web development company in Denver',
    'AI development company Denver',
    'UI UX design agency Denver',
    'Shopify development Denver',
    'headless WordPress development',
    'Denver digital product agency'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: buildOpenGraph({
    title: 'Antrosys Denver Services | Web, Software, AI, Design & E-Commerce',
    description: 'Denver custom software, AI systems, websites, apps, UI/UX, branding, Shopify, headless WordPress, cloud, QA, and BPO services.',
    path: '/services',
  }),
  twitter: buildTwitter({
    title: 'Antrosys Denver Services | Web, Software, AI, Design & E-Commerce',
    description: 'Explore Denver service capabilities across software, AI, web, design, e-commerce, cloud, and operations.',
  }),
};

export default function Service() {
  return (
    <>
      <ServicesHero/>
      <AllServicesCards/>
      <ServicesCTA/>
    </>
  );
}
