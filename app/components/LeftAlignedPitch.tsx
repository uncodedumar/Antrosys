import React, { memo } from 'react';

interface LeftAlignedPitchProps {
  /** The text content to display */
  text: string;
  /** The Tailwind text color class for hover (e.g., 'hover:text-red-500') */
  accentColorClass?: string;
}

const LeftAlignedPitch: React.FC<LeftAlignedPitchProps> = ({ 
  text, 
  accentColorClass = 'hover:text-accent' 
}) => {
  return (
    <div className="bg-transparent flex min-h-[200px] w-full items-center">
      <div className="max-w-2xl mx-auto text-center font-light">
        <p className={`
          text-base sm:text-lg lg:text-2xl
          text-gray-300 
          opacity-30 
          transition-all duration-700 ease-in-out
          hover:opacity-100 
          ${accentColorClass}
        `}>
          {text}
        </p>
      </div>
    </div>
  );
};

// React.memo prevents re-renders unless props change, 
// keeping performance "best-in-class" for static text displays.
export default memo(LeftAlignedPitch);