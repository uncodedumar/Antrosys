import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import ServicesHero from '../components/ServicesHero';
import AllServicesCards from '../components/AllServicesCards'
import ServicesCTA from '../components/servicesCTA'


export const metadata: Metadata = {
  title: 'Services | Web, Software, AI, Design & E-Commerce',
  description:
    'Explore Antrosys services for custom software, web development, AI solutions, UI/UX design, branding, Shopify, WordPress, mobile apps, cloud, and BPO.',
  keywords: [
    'custom software development',
    'web development services',
    'AI development services',
    'UI UX design services',
    'Shopify development services',
    'headless WordPress development',
    'mobile app development'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: buildOpenGraph({
    title: 'Antrosys Services | Web, Software, AI, Design & E-Commerce',
    description: 'Custom software, AI systems, websites, apps, UI/UX, branding, Shopify, headless WordPress, cloud, QA, and BPO services.',
    path: '/services',
  }),
  twitter: buildTwitter({
    title: 'Antrosys Services | Web, Software, AI, Design & E-Commerce',
    description: 'Explore Antrosys service capabilities across software, AI, web, design, e-commerce, cloud, and operations.',
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
