import type { Metadata } from 'next';
import ServicesHero from '../components/ServicesHero';
import ServicesSubHero from '../components/ServicesSubHero'
import AllServicesCards from '../components/AllServicesCards'
import ServicesCTA from '../components/servicesCTA'


export const metadata: Metadata = {
  title: 'Service - Antrosys',
  description: 'Our comprehensive range of services',
};

export default function Service() {
  return (
    <>
    <ServicesHero/>
    <ServicesSubHero/>
    <AllServicesCards/>
    < ServicesCTA/>
    
    </>
  );
}


















