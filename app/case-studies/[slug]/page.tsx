import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import CaseStudySlug from '@/app/components/CaseStudySlug';


interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
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

