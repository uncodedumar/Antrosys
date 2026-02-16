'use client';
import React from 'react';
import Image from 'next/image';

interface ProfileData {
  name: string;
  role: string; // Changed 'title' to 'role' for better Schema mapping
  specialty: string; // Added for long-tail SEO keywords
  mainImage: string;
  avatarImage: string;
}

const cardData: ProfileData[] = [
  {
    name: 'Mr. Ryaz',
    role: 'CEO & Founder',
    specialty: 'Expert in AI-Driven Digital Strategy & UI/UX Design',
    mainImage: '/AboutImages/Team/CEO.webp',
    avatarImage: '/Avatar/team/ryaza.webp',
  },
];

const ProfileCard: React.FC<{ data: ProfileData }> = ({ data }) => {
  // SEO Trick: Structured Data for Google to rank the "Person" and "Organization"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name,
    "jobTitle": data.role,
    "description": data.specialty,
    "image": data.mainImage
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="group relative w-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ease-out will-change-transform hover:z-20"
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          // Silky smooth GPU-accelerated tilt
          card.style.transform = `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }}
      >
        {/* Main Image - Optimized for LCP */}
        <div className="relative pt-[100%] w-full">
          <Image
            src={data.mainImage}
            alt={`${data.name} - ${data.role} at Digital Agency`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority // Fast LCP ranking factor
            className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Floating Avatar - High Polish */}
        <div className="absolute right-3 bottom-3 z-10 h-16 w-16 overflow-hidden rounded-lg border-2 border-white shadow-xl sm:h-20 sm:w-20">
          <Image
            src={data.avatarImage}
            alt={`${data.name} avatar`}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        {/* SEO-Rich Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left transition-opacity duration-300">
          <h3 className="text-base font-bold text-white sm:text-lg">
            {data.name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-200">
            {data.role}
          </p>
          {/* Hidden but readable for SEO bots */}
          <span className="sr-only">{data.specialty}</span>
        </div>
      </div>
    </>
  );
};

const ProfileCardLayout: React.FC = () => {
  return (
    <section className="h-auto w-full py-12 px-4" aria-label="Our Creative Leadership">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((profile, idx) => (
            <ProfileCard key={idx} data={profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCardLayout;
