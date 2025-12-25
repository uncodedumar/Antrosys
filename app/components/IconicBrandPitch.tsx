import React, { memo } from 'react';

interface IconicBrandPitchProps {
  /** The text content to display */
  children: React.ReactNode;
  /** Tailwind accent color class, e.g., 'hover:text-red-500' */
  accentClass?: string;
  /** Optional additional classes for the container */
  className?: string;
}

const IconicBrandPitch: React.FC<IconicBrandPitchProps> = memo(({ 
  children, 
  accentClass = "hover:text-accent", 
  className = "" 
}) => {
  return (
    <div className={`bg-transparent flex min-h-[50vh] w-full items-center justify-center p-2 sm:p-4 lg:p-6 ${className}`}>
      <div className="max-w-2xl mx-auto text-center font-light">
        <p className={`
          text-base sm:text-lg lg:text-xl font-sans 
          text-gray-300 
          opacity-30 
          transition-all duration-700 ease-in-out
          hover:opacity-100 
          ${accentClass}
        `}>
          {children}
        </p>
      </div>
    </div>
  );
});

// Setting a display name for easier debugging since we used memo
IconicBrandPitch.displayName = 'IconicBrandPitch';

export default IconicBrandPitch;