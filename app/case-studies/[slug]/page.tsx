import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import { buildOpenGraph, buildTwitter, cleanDescription } from '@/lib/seo';
import CaseStudySlug from '@/app/components/CaseStudySlug';


interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const study = caseStudies.find((s) => s.slug === normalizedSlug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  const description = cleanDescription(`Denver digital product agency case study: ${study.paragraph || study.description}`);
  const title = `${study.title} Case Study`;
  const image = study.images[0] || "/AboutImages/call.avif";
  const category = study.title.split(":")[1]?.trim() || "Digital Product";

  return {
    title: `${title} | Denver Digital Product Agency`,
    description,
    keywords: [
      `${study.title} case study`,
      category,
      "web development case study",
      "software development portfolio",
      "digital product design",
      "Denver digital product agency",
    ],
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: buildOpenGraph({
      title: `${title} | Denver Digital Product Agency`,
      description,
      path: `/case-studies/${study.slug}`,
      image: {
        url: image,
        width: 1200,
        height: 630,
        alt: `${study.title} project by Antrosys`,
      },
    }),
    twitter: buildTwitter({
      title: `${title} | Denver Digital Product Agency`,
      description,
      image,
    }),
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const study = caseStudies.find((s) => s.slug === normalizedSlug);

  if (study && slug !== study.slug) {
    redirect(`/case-studies/${study.slug}`);
  }

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudySlug data={study} />
    

    </>
  );
}

