// ProfileCardLayout.tsx
'use client';
import React from 'react';

interface ProfileData {
  name: string;
  title: string;
  mainImage: string;
  avatarImage: string;
}

interface ProfileCardProps {
  data: ProfileData;
}

const cardData: ProfileData[] = [
  {
    name: 'Mr. Ryaz',
    title: 'CEO & FOUNDER',
    mainImage: 'CEO.png',
    avatarImage: 'https://placehold.co/100x100?text=U',
  },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  const tiltStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white group"
      style={tiltStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'perspective(1000px) rotateX(4deg) rotateY(4deg) scale(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
    >
      <div className="w-full pt-[100%] relative">
        <img
          src={data.mainImage}
          alt={`Profile image of ${data.name}`}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="absolute right-3 bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-white shadow-md z-10">
        <img
          src={data.avatarImage}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3 pt-6 text-left bg-gradient-to-t from-black/50 to-transparent">
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

const ProfileCardLayout: React.FC = () => {
  const renderCard = (data: ProfileData, key: number, wrapperClasses: string) => (
    <div key={key} className={wrapperClasses}>
      <ProfileCard data={data} />
    </div>
  );

  return (
    /* Removed min-h-screen to collapse the height to the content only */
    <div className="h-auto w-full"> 
      <div className="max-w-7xl mx-auto">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          {cardData[0] && renderCard(cardData[0], 0, "w-full")}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardLayout;