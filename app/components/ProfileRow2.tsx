'use client';
import React, { memo } from 'react';
import Image from 'next/image';

// --- SEO & TYPES ---
interface ProfileData {
  name: string;
  title: string;
  mainImage: string;
  avatarImage: string;
  // Added for SEO keywords without changing UI
  specialty?: string; 
}

interface ProfileCardProps {
  data: ProfileData;
}

const cardData: ProfileData[] = [
  {
    name: 'Mr. Sam',
    title: 'CMO',
    mainImage: '/AboutImages/Team/cmo.webp',
    avatarImage: '/Avatar/team/sama.webp',
    specialty: 'Digital Marketing Strategy and AI Growth'
  },
  {
    name: 'Amy',
    title: 'COO',
    mainImage: '/AboutImages/Team/coo.webp',
    avatarImage: '/Avatar/team/amya.webp',
    specialty: 'Operations and Creative Project Management'
  }
  ,
  {
    name: 'Fara',
    title: 'Brand Designer',
    mainImage: '/AboutImages/Team/fara.webp',
    avatarImage: '/Avatar/team/faraa.webp',
    specialty: 'Cloud Infrastructure and Deployment Automation'
  },
  {
    name: 'Kate',
    title: 'UI/UX Designer',
    mainImage: '/AboutImages/team/kate.webp',
    avatarImage: '/Avatar/team/katea.webp',
    specialty: 'User Experience Design and Interactive UI'
  },
  {
    name: 'Jayden',
    title: 'Software Engineer',
    mainImage: '/AboutImages/Team/jayden.webp',
    avatarImage: '/Avatar/team/jaydena.webp',
    specialty: 'Custom Software Development and System Architecture'
  },
  {
    name: 'Mr. Arman',
    title: 'Full-Stack Developer',
    mainImage: '/AboutImages/Team/arman.webp',
    avatarImage: '/Avatar/team/armana.webp',
    specialty: 'Full-Stack Web Development and Scalable Apps'
  },
  {
    name: 'David',
    title: 'Marketing Manager',
    mainImage: '/AboutImages/Team/david.webp',
    avatarImage: '/Avatar/team/davida.webp',
    specialty: 'Search Engine Optimization and Ads Specialist'
  },
  {
    name: 'Chris',
    title: 'Content Strategist',
    mainImage: '/AboutImages/Team/chris.webp',
    avatarImage: '/Avatar/team/chrisa.webp',
    specialty: 'Creative Copywriting and Brand Storytelling'
  },
  {
    name: 'Alma',
    title: 'Data Scientist',
    mainImage: '/AboutImages/Team/alma.webp',
    avatarImage: '/Avatar/team/almaa.webp',
    specialty: 'AI Models and Big Data Analytics'
  },
  {
    name: 'Cooper',
    title: 'QA Engineer',
    mainImage: '/AboutImages/Team/cooper.webp',
    avatarImage: '/Avatar/team/coopera.webp',
    specialty: 'Software Quality Assurance and Testing'
  },
  {
    name: 'Emma',
    title: 'Mobile App Developer',
    mainImage: '/AboutImages/Team/emma.webp',
    avatarImage: '/Avatar/team/emmaa.webp',
    specialty: 'iOS and Android Development Expert'
  },
];

// --- 2. ProfileCard Component (Optimized Performance) ---
const ProfileCard: React.FC<ProfileCardProps> = memo(({ data }) => {
  const tiltStyle: React.CSSProperties = {
    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Smoother spring feel
    willChange: 'transform', // Hardware acceleration
  };

  return (
    <figure
      className="relative w-full overflow-hidden rounded-lg shadow-lg group bg-neutral-900"
      style={tiltStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'perspective(1000px) rotateX(4deg) rotateY(4deg) scale(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
      aria-label={`${data.name} - ${data.title} specializing in ${data.specialty}`}
    >
      {/* Main Image Container */}
      <div className="w-full pt-[100%] relative bg-neutral-800">
        <img
          src={data.mainImage}
          alt={`${data.name} | ${data.title} at Digital Agency`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300"
        />
      </div>

      {/* Avatar Square */}
      <div className="absolute right-3 bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-white shadow-md z-10 bg-neutral-700">
        <img
          src={data.avatarImage}
          alt={`${data.name} avatar`}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Overlay */}
      <figcaption className="absolute inset-x-0 bottom-0 p-3 pt-15 text-left bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-sm font-semibold text-white truncate">
          {data.name}
        </h3>
        <p className="text-xs text-white/80 uppercase tracking-wider">
          {data.title}
        </p>
        {/* Hidden SEO text for Google to crawl long-tail keywords without ruining UI */}
        <span className="sr-only">{data.specialty}</span>
      </figcaption>
    </figure>
  );
});

ProfileCard.displayName = 'ProfileCard';

// --- 3. Main Layout Component ---
const CARD_WRAPPER_CLASSES = "w-full max-w-sm md:w-1/2 lg:w-1/3 p-2";

const renderRow = (rowData: ProfileData[], alignClass: string, startIndex: number) => (
  <section 
    className={`flex flex-col items-center md:flex-row ${alignClass} md:space-x-2 space-y-6 md:space-y-0 mt-8 first:mt-0`} 
    key={`row-${startIndex}`}
  >
    {rowData.map((data, index) => (
      <div key={startIndex + index} className={CARD_WRAPPER_CLASSES}>
        <ProfileCard data={data} />
      </div>
    ))}
  </section>
);

const ProfileRow2: React.FC = () => {
  const rowConfig = [
    { count: 2, align: 'md:justify-end' },
    { count: 1, align: 'md:justify-start' },
    { count: 2, align: 'md:justify-end' },
    { count: 2, align: 'md:justify-end' },
    { count: 1, align: 'md:justify-start' },
    { count: 2, align: 'md:justify-end' },
    { count: 1, align: 'md:justify-end' },
  ];

  const allRows: React.ReactElement[] = [];
  let dataIndex = 0;

  rowConfig.forEach((config) => {
    const rowData = cardData.slice(dataIndex, dataIndex + config.count);
    if (rowData.length > 0) {
      allRows.push(renderRow(rowData, config.align, dataIndex));
    }
    dataIndex += config.count;
  });

  // JSON-LD for Schema Markup (Google LOVES this for "Our Team" pages)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": cardData.map(person => ({
      "@type": "Person",
      "name": person.name,
      "jobTitle": person.title,
      "image": person.mainImage,
      "description": person.specialty
    }))
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-transparent selection:bg-purple-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        {allRows}
      </div>
    </div>
  );
};

export default ProfileRow2;