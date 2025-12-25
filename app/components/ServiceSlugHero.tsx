import Image from 'next/image';
import { ServicePageData } from '@/lib/data';

interface ServiceSlugHeroProps {
  slug: string;
}

export default function ServiceSlugHero({ slug }: ServiceSlugHeroProps) {
  const data = ServicePageData.find((s) => s.slug === slug);

  if (!data) return null;

  const { hero } = data;

  return (
    <section className="mx-2 relative overflow-hidden bg-[#F9F4E8] rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6">
      
       {/* --- Background Blurred Blobs --- */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Purple Blob */}
        <div 
          className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] mix-blend-multiply filter blur-[60px] opacity-70"
        />
        {/* Center Orange Blob */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] mix-blend-multiply filter blur-[80px] opacity-80"
        />
        {/* Right Red/Coral Blob */}
        <div 
          className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] mix-blend-multiply filter blur-[60px] opacity-90"
        />
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 lg:px-[2in] w-full max-w-[1920px]">
            {/* Logo */}
            <header className="mb-12">
          <h2 className="text-sm font-black tracking-tighter flex items-center gap-0.5">
            ANTRO<span className="text-[#FF5C28]">SYS</span>
          </h2>
        </header>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] leading-tight mb-4">
          {hero.title}
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-[#333333] tracking-tight mb-10">
          {hero.subHero}
        </h2>

        {/* Description Text */}
        <p className="max-w-2xl text-[14px] md:text-base text-[#4A4A4A] leading-relaxed font-light mb-12">
          {hero.description}
        </p>

        {/* Hero Image */}
        <div className="w-full relative rounded-t-2xl overflow-hidden shadow-2xl">
          <Image
            src={hero.imageUrl}
            alt={hero.title}
            width={1600}
            height={900}
            className="w-full h-[500] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}