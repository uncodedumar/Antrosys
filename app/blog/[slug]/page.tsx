import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import BlogsSlug from '@/app/components/BlogsSlug';
import FaqSection from "@/app/components/FaqSection";


interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {

  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found | Antrosys",
    };
  }

  const description = post.abstractContent;

  return {
    title: post.title,
    description,

    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `https://www.antrosys.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image],
    },
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
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
