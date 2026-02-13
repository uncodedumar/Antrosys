import type { Metadata } from 'next';
import ServicesHero from '../components/ServicesHero';
import AllServicesCards from '../components/AllServicesCards'
import ServicesCTA from '../components/servicesCTA'


export const metadata: Metadata = {
  title: 'Services | AI, Full-Stack Development & BPO - Antrosys',
  description: 
    'Explore Antrosys’ elite services: from custom AI models and SaaS development to mobile apps (iOS/Android) and professional BPO solutions for global scaling.',
  keywords: [
    'Custom AI Models',
    'SaaS Development',
    'Full-Stack Web Development',
    'Mobile App Engineering',
    'BPO & Customer Support',
    'UI/UX Design',
    'AWS Cloud Infrastructure'
  ],
  openGraph: {
    title: 'Elite AI & Development Services | Antrosys',
    description: 'Empowering brands with next-gen technology, from intelligent chatbots to high-performance enterprise integrations.',
    url: 'https://antrosys.com/services',
    images: [
      {
        url: '/Logo.svg', // Recommended: Use a high-quality graphic of your tech stack
        width: 1200,
        height: 630,
        alt: 'Antrosys Service Suite - AI and Digital Transformation',
      },
    ],
    type: 'website',
  },
};

export default function Service() {
  return (
    <>
    <ServicesHero/>
    {/* <ServicesSubHero/> */}

    <AllServicesCards/>
    <ServicesCTA/>

    
    </>
  );
}


















