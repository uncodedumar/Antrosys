import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageData, homePageData } from "@/lib/data";
import { buildOpenGraph, buildTwitter, cleanDescription } from "@/lib/seo";
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

  const title = service.hero?.title || "Service";
  const description = cleanDescription(
    service.hero?.description || service.serviceSuite?.description || service.hero?.subHero || "Explore Antrosys service capabilities."
  );
  const keywords = [
    title,
    service.hero?.subHero,
    service.serviceSuite?.title,
    ...service.serviceSuite.cards.slice(0, 5).map((card) => card.heading),
    ...service.techStack.items.slice(0, 4).map((item) => item.heading),
  ].filter(Boolean) as string[];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: buildOpenGraph({
      title: `${title} | Antrosys`,
      description,
      path: `/services/${service.slug}`,
      image: {
        url: service.hero.imageUrl,
        width: 1200,
        height: 630,
        alt: `${title} by Antrosys`,
      },
    }),
    twitter: buildTwitter({
      title: `${title} | Antrosys`,
      description,
      image: service.hero.imageUrl,
    }),
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
