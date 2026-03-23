import type { Metadata } from 'next';
import BPOHero from '../components/Bpohero';

import IconicBrandPitch from "../components/IconicBrandPitch";
import BpoReviews from "../components/BpoReviews";
import BpoRpoSection from "../components/BpoRpoSection";
import BpoServices from "../components/BpoServices";


export const metadata: Metadata = {
  title: 'BPO & RPO | Antrosys',
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
        url: '/AboutImages/call.avif', // Recommended: Use a high-quality graphic of your tech stack
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
    <BPOHero/>
    <IconicBrandPitch >
    Our RPO and BPO services strip away the bloat of legacy outsourcing, replacing script-reading with strategic problem-solving and slow recruitment with precision-engineered talent acquisition. We provide the high-performance infrastructure and the sophisticated human intelligence required to dominate your market, ensuring your operations aren't just running—they're evolving.
      </IconicBrandPitch>
      <BpoRpoSection />
      <BpoServices />
      <BpoReviews />
    

    
    </>
  );
}


















