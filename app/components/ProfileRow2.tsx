// ProfileRow2.tsx
'use client';
import React from 'react';

// Using a type definition for the props, though this component is self-contained.
interface ProfileData {
  name: string;
  title: string;
  mainImage: string;
  avatarImage: string;
}

interface ProfileCardProps {
  data: ProfileData;
}

// ---------------------------
// DATA WITH MODAL CONTENT (Extended to 14 cards for the 8 requested rows)
// ---------------------------

const cardData: ProfileData[] = [
  
  {
    name: 'Mr. Sam',
    title: 'CMO',
    mainImage: '/cmo.jpeg',
    avatarImage: 'https://placehold.co/100x100?text=S',
  },// Row 1 (2 cards - Right)
  {
    name: 'Amy',
    title: 'COO',
    mainImage: '/coo.png',
    avatarImage: 'https://placehold.co/100x100?text=L',
  },
  {
    name: 'Kate',
    title: 'UI/UX Designer',
    mainImage: '/kate.png',
    avatarImage: 'https://placehold.co/100x100?text=A',
  }
  ,
  {
    name: 'Jayden',
    title: 'Software Engineer',
    mainImage: '/jayden.png',
    avatarImage: 'https://placehold.co/100x100?text=S',
  },
  // Row 2 (2 cards - Left)
  {
    name: 'Mr. Arman',
    title: 'Full-Stack Developer',
    mainImage: '/arman.png',
    avatarImage: 'https://placehold.co/100x100?text=E',
  },
  {
    name: 'David',
    title: 'Marketing Manager',
    mainImage: '/david.png',
    avatarImage: 'https://placehold.co/100x100?text=S',
  },
  // Row 3 (1 card - Right)
  {
    name: 'Chris',
    title: 'Content Strategist',
    mainImage: '/chris.png',
    avatarImage: 'https://placehold.co/100x100?text=T',
  },
  // Row 4 (2 cards - Right)
  {
    name: 'Alma',
    title: 'Data Scientist',
    mainImage: '/alma.png',
    avatarImage: 'https://placehold.co/100x100?text=U',
  },
  {
    name: 'Cooper',
    title: 'QA Engineer',
    mainImage: '/Cooper.png',
    avatarImage: 'https://placehold.co/100x100?text=D',
  },
  // Row 5 (2 cards - Left)
  {
    name: 'fara',
    title: 'DevOps Engineer',
    mainImage: '/fara.png',
    avatarImage: 'https://placehold.co/100x100?text=L',
  },
  {
    name: 'Emma',
    title: 'Mobile App Developer',
    mainImage: '/emma.png',
    avatarImage: 'https://placehold.co/100x100?text=M',
  },

  
];


// ---------------------------
// 2. ProfileCard Component (NO CHANGE - As requested)
// ---------------------------

/**
 * Renders a single profile card with tilt effect.
 * @param props - ProfileCardProps
 */
const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  const tiltStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div
      // REMOVED: cursor-pointer class
      className="relative w-full overflow-hidden rounded-lg shadow-lg  group"
      style={tiltStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'perspective(1000px) rotateX(6deg) rotateY(6deg) scale(1.07)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
      // REMOVED: onClick={() => onClick(data)} 
    >
      {/* Main Image Container - w-full and pt-[100%] creates a perfect square for equal card sizing */}
      <div className="w-full  pt-[100%] relative">
        <img
          src={data.mainImage}
          alt={`Profile image of ${data.name}`}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      
      {/* Avatar Square on Bottom Right (Kept as requested) */}
      <div className="absolute right-3 bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-white shadow-md z-10">
        <img
          src={data.avatarImage}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Overlay (Bottom Left) (Kept as requested) */}
      <div className="absolute inset-x-0 bottom-0 p-3 pt-15 text-left bg-gradient-to-t from-black to-transparent">
        <h3 className="text-sm font-semibold text-white truncate">
          {data.name}
        </h3>
        <p className="text-xs text-white opacity-75 uppercase">
          {data.title}
        </p>
      </div>
    </div>
  );
};


// ---------------------------
// 3. Main Layout Component (MODIFIED to implement the 8-row layout)
// ---------------------------

// Standard card wrapper classes for consistent size and responsiveness
const CARD_WRAPPER_CLASSES = "w-full max-w-sm md:w-1/2 lg:w-1/3";

/**
 * Helper function to render a row of cards with specified alignment.
 * @param rowData - Array of ProfileData for the row.
 * @param alignClass - Tailwind class for horizontal alignment (e.g., md:justify-end).
 * @param startIndex - Starting index in the cardData array for unique keys.
 */
const renderRow = (
  rowData: ProfileData[],
  alignClass: string,
  startIndex: number
) => {
  // Mobile: flex-col, items-center (stacked, centered)
  // Desktop: flex-row, alignClass (row, specified alignment)
  return (
    <div 
      className={`flex flex-col items-center md:flex-row ${alignClass} md:space-x-4 space-y-4 md:space-y-0 mt-8 first:mt-0`} 
      key={`row-${startIndex}`}
    >
      {rowData.map((data, index) => (
        <div 
          key={startIndex + index} 
          className={CARD_WRAPPER_CLASSES}
        >
          <ProfileCard data={data} />
        </div>
      ))}
    </div>
  );
};

const ProfileRow2: React.FC = () => {

  
  // Split the cardData into the specified rows
  const rowConfig = [
    { count: 2, align: 'md:justify-end' }, // Row 1: 2 cards, Right-aligned
    { count: 1, align: 'md:justify-start' }, // Row 2: 2 cards, Left-aligned
    { count: 2, align: 'md:justify-end' }, // Row 3: 1 card, Right-aligned
    { count: 2, align: 'md:justify-end' }, // Row 4: 2 cards, Right-aligned
    { count: 1, align: 'md:justify-start' }, // Row 5: 2 cards, Left-aligned
    { count: 2, align: 'md:justify-end' }, // Row 6: 1 card, Right-aligned
    { count: 1, align: 'md:justify-end' }, // Row 7: 2 cards, Right-aligned
  ];

  const allRows: React.ReactElement[] = [];
  let dataIndex = 0;

  rowConfig.forEach((config, rowNumber) => {
    const rowData = cardData.slice(dataIndex, dataIndex + config.count);
    if (rowData.length === config.count) {
      allRows.push(
        renderRow(rowData, config.align, dataIndex)
      );
    }
    dataIndex += config.count;
  });

  return (
    <div className={`min-h-screen py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        {allRows}
      </div>

      {/* REMOVED: Profile Modal Section */}
    </div>
  );
};

export default ProfileRow2;