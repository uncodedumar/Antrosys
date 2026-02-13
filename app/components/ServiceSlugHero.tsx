import Image from 'next/image';
import { ServicePageData } from '@/lib/data';

interface ServiceSlugHeroProps {
  slug: string;
}

export default function ServiceSlugHero({ slug }: ServiceSlugHeroProps) {
  const data = ServicePageData.find((s) => s.slug === slug);

  if (!data) return null;

  const { hero } = data;

  // SEO Strategy: Dynamic Alt tags and Aria labels based on service type
  const seoTitle = `${hero.title} | Premium Digital Agency UI/UX & Web Development`;

  return (
    <section 
      className="mx-2 relative overflow-hidden bg-primary rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6"
      aria-labelledby="hero-heading"
    >
      {/* --- Performance Optimized Background --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -left-20 top-[45%] w-[600px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[80px] opacity-40 will-change-transform" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[600px] rounded-full bg-[#F8C396] filter blur-[80px] opacity-50 will-change-transform" />
        <div className="absolute -right-20 top-[45%] w-[600px] h-[700px] rounded-full bg-[#F9A891] filter blur-[80px] opacity-40 will-change-transform" />
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 lg:px-[2in] w-full max-w-[1920px]">
        
        {/* Logo - Wrapped in span for SEO branding without hijacking H1/H2 */}
        <header className="flex justify-center items-center my-8">
          <span className="text-xl font-bold text-accent tracking-tighter">ANTRO</span>
          <span className="text-xl font-bold text-secondary tracking-tighter">SYS</span>
        </header>

        {/* Heading - H1 is the most important SEO signal */}
        <h1 
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-accent leading-tight mb-4 tracking-tight"
        >
          {hero.title}
        </h1>

        {/* Subheading - High-value Long-tail Keywords */}
        <p className="text-3xl md:text-5xl lg:text-6xl font-extralight text-secondary tracking-tight mb-10 leading-none">
          {hero.subHero}
        </p>

        {/* Description - Optimized for Semantic Reach */}
        <div className="max-w-2xl mb-12">
           <p className="text-[14px] md:text-base text-accent leading-relaxed font-light italic opacity-90">
            {hero.description}
          </p>
          {/* Hidden SEO text for crawlers - provides context for AI, Art, and Ads */}
          <span 
  className="sr-only" 
  title="Antrosys | Industry-Leading Digital Transformation & AI Engineering"
  aria-label="Antrosys: Global leaders in Full-Stack Web Development, Custom SaaS, AI Art, and High-Performance Growth Marketing"
>
  Antrosys: Elite Custom Full-Stack Web App Development, High-End UI/UX Design, 
  Bespoke AI-Driven Illustrations, and Data-Backed Performance Marketing Solutions.
</span>
        </div>

        {/* Hero Image - LCP Optimized */}
        <div className="w-full relative rounded-t-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.1]">
          <Image
            src={hero.imageUrl}
            alt={`${hero.title} - Next-gen UI/UX Design and AI Software Development by Antrosys`}
            width={1600}
            height={900}
            className="w-full h-150 object-cover"
            priority // Critical for LCP (Largest Contentful Paint)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1600px"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}