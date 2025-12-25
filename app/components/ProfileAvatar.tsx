import React from 'react';

interface ProfileAvatarProps {
  name: string;
  src?: string;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name, src, className = '' }) => {
  return (
    <div className={`w-8 h-8 rounded-full border-2 border-accent overflow-hidden bg-primary/20 ${className}`}>
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#EF571B] to-[#ff9900] text-white text-xs font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;


