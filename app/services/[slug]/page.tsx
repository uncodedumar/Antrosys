import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageData, homePageData } from "@/lib/data";
import ServiceSlugHero from "@/app/components/ServiceSlugHero";
import ServiceSuite from "@/app/components/ServiceSuite";
import TechStack from "@/app/components/TechStack";
import FinalSection from "@/app/components/finalSection";
import Agenda1 from "@/app/components/Agenda1";
import FaqSection from "@/app/components/FaqSection";

 
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ServicePageData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = ServicePageData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  // Get the title from hero section
  const title = service.hero?.title || "Service";

  return {
    title: `${title} - Antrosys Services`,
    description:
      service.hero?.subHero || "Our comprehensive service offering",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = ServicePageData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get industries and finalSection from homePageData (same as home page)
  const homeData = homePageData[0];

  return (
    <>
      <ServiceSlugHero slug={slug} />
      <ServiceSuite data={service.serviceSuite} />
      <TechStack data={service.techStack} />
      <FinalSection data={homeData.finalSection} />
      <Agenda1 />
      <FaqSection />

    </>
  );
}
