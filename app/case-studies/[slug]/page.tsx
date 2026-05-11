import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import CaseStudySlug from '@/app/components/CaseStudySlug';


interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    alternates: {
      canonical: `https://www.antrosys.com/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudySlug data={study} />
    

    </>
  );
}

