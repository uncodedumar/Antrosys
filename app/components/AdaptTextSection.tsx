// components/AdaptTextSection.tsx
'use client';

import { FC } from 'react';

/**
 * A responsive component displaying a motivational phrase with a text hover effect.
 * The text changes color and scales up slightly on hover for an interactive feel.
 */
const AdaptTextSection: FC = () => {
  return (
    // Outer container for the background color and padding.
    // Use a responsive padding system (p-16) for spacing.
    <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[40vh]">
      
      {/* The core text element.
        - text-center ensures the text is centered within its container.
        - max-w-4xl prevents the text from stretching too wide on massive screens.
      */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/*
          The main text element with the hover effect.
          
          - Initial State: Black color (text-gray-900), no transform.
          - Hover State: Text darkens slightly (hover:text-black) and scales up (hover:scale-[1.03]).
          - Transition: The transition-all class makes the change smooth over 300ms.
          
          Responsiveness:
          - text-xl on mobile, scaling up to 3xl on medium screens, and 4xl on large screens.
        */}
        <h1 
          className="
            font-extrabold 
            text-secondary
            uppercase 
            leading-tight 
            tracking-tighter
            cursor-pointer
            
            // Text Size Responsiveness
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl

            // Hover Effect
            transition-all 
            duration-300 
            ease-in-out
            hover:text-accent 
            hover:scale-[1.3]
          "
        >
          ADAPT WITH BETTER TOOLS, SHARPER
          <br />
          THINKING, AND STRONGER INTENT.
        </h1>
        
      </div>
    </section>
  );
};

export default AdaptTextSection;