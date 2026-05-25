import type { Metadata } from 'next';
import { buildOpenGraph, buildTwitter } from '@/lib/seo';
import BPOHero from '../components/Bpohero';

import IconicBrandPitch from "../components/IconicBrandPitch";
import BpoReviews from "../components/BpoReviews";
import BpoRpoSection from "../components/BpoRpoSection";
import BpoServices from "../components/BpoServices";


export const metadata: Metadata = {
  title: 'BPO & RPO Services',
  description:
    'Scale operations with Antrosys BPO and RPO services for customer support, recruiting support, back-office workflows, and managed business processes.',
  keywords: [
    'BPO services',
    'RPO services',
    'customer support outsourcing',
    'recruitment process outsourcing',
    'back office support'
  ],
  alternates: {
    canonical: '/bpo',
  },
  openGraph: buildOpenGraph({
    title: 'BPO & RPO Services | Antrosys',
    description: 'Customer support, recruitment process outsourcing, back-office workflows, and managed operations for growing teams.',
    path: '/bpo',
  }),
  twitter: buildTwitter({
    title: 'BPO & RPO Services | Antrosys',
    description: 'Operational support for customer service, recruiting, back-office workflows, and scalable business processes.',
  }),
};

export default function Service() {
  return (
    <>
      <BPOHero/>
      <IconicBrandPitch>
        Our RPO and BPO services strip away the bloat of legacy outsourcing, replacing script-reading with strategic problem-solving and slow recruitment with precision-engineered talent acquisition. We provide the high-performance infrastructure and the sophisticated human intelligence required to dominate your market, ensuring your operations aren't just running—they're evolving.
      </IconicBrandPitch>
      <BpoRpoSection />
      <BpoServices />
      <BpoReviews />
    </>
  );
}
