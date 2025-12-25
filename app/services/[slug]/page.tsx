import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageData } from "@/lib/data";
import ServiceSlugHero from "@/app/components/ServiceSlugHero";
import LogoLoopSection from "@/app/components/logoloop";
import ServiceSuite from "@/app/components/ServiceSuite";
import TechStack from "@/app/components/TechStack";
import IndustrySection from "@/app/components/IndustrySection";
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

  return (
    <>
      <ServiceSlugHero slug={slug} />
      <LogoLoopSection data={service.logoLoop} />
      <ServiceSuite data={service.serviceSuite} />
      <TechStack data={service.techStack} />
      <IndustrySection data={service.industries} />
      <FinalSection data={service.finalSection} />
      <Agenda1 />
      <FaqSection />

    </>
  );
}
