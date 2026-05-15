import { notFound, redirect } from "next/navigation";
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
  const normalizedSlug = slug.toLowerCase();
  const service = ServicePageData.find((s) => s.slug === normalizedSlug);

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
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const service = ServicePageData.find((s) => s.slug === normalizedSlug);

  if (service && slug !== service.slug) {
    redirect(`/services/${service.slug}`);
  }

  if (!service) {
    notFound();
  }

  // Get industries and finalSection from homePageData (same as home page)
  const homeData = homePageData[0];

  return (
    <>
      <ServiceSlugHero slug={service.slug} />
      <ServiceSuite data={service.serviceSuite} />
      <TechStack data={service.techStack} />
      <FinalSection data={homeData.finalSection} />
      <Agenda1 />
      <FaqSection />

    </>
  );
}
