import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import BlogsSlug from '@/app/components/BlogsSlug';
import FaqSection from "@/app/components/FaqSection";


interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.abstractContent,
    alternates: {
      canonical: `https://www.antrosys.com/blog/${post.slug}`,
    },
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogsSlug blogPost={post} />
      <FaqSection />

    </>
  );
}
