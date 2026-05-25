import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import { buildOpenGraph, buildTwitter, cleanDescription } from '@/lib/seo';
import BlogsSlug from '@/app/components/BlogsSlug';
import FaqSection from "@/app/components/FaqSection";

const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

const blogKeywordMap: Record<string, string[]> = {
  "boost-rankings-ai": [
    "AI SEO strategy",
    "machine learning for search rankings",
    "AI content optimization",
  ],
  "iomt-smart-healthcare-elderly-monitoring": [
    "IoMT elderly monitoring",
    "machine learning healthcare model",
    "smart healthcare system",
  ],
  "cloud-based-breast-cancer-prediction": [
    "cloud breast cancer prediction",
    "soft computing healthcare",
    "medical AI prediction system",
  ],
  "smart-parking-occupancy-detection": [
    "smart parking occupancy detection",
    "deep learning parking system",
    "traffic parking AI",
  ],
  "brain-tumor-identification-deep-learning": [
    "brain tumor identification",
    "deep learning medical imaging",
    "AI tumor classification",
  ],
};

/** Pre-render every post so crawlers and static hosts always resolve `/blog/[slug]`. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {

  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Antrosys",
    };
  }

  const description = cleanDescription(post.abstractContent);
  const title = `${post.title} | Antrosys Blog`;
  const keywords = blogKeywordMap[post.slug] || [
    post.title,
    "AI development article",
    "software engineering insights",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    authors: post.authors.map((author) => ({ name: author.name, url: author.link })),
    openGraph: {
      ...buildOpenGraph({
        title,
        description,
        path: `/blog/${post.slug}`,
        type: "article",
        image: {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      }),
      title,
      description,
      type: "article",
    },
    twitter: buildTwitter({
      title,
      description,
      image: post.image,
    }),
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
