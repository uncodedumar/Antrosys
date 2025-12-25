// components/CallToActionBanner.tsx
'use client'
import { FC } from 'react';

/**
 * A simple, responsive Call-to-Action banner component replicating the provided image.
 * It features left-aligned text and a gradient-filled button.
 */
export const CallToActionBanner: FC = () => {
  return (
    // Outer container for the entire banner section
    // Uses a subtle off-white/beige background color (bg-amber-50) for the main section
    <section className="bg-primary py-10 sm:py-16 md:py-20">
      
      {/* Inner container with max width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Box - Replicates the subtle horizontal bands */}
        <div className="bg-accent p-4 sm:p-6 md:p-8 rounded-lg shadow-inner">
          
          {/* Flex container to hold the text and the button, ensuring they align on the same line */}
          {/* items-center vertically centers the button and text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            
            {/* Left-aligned Text Block */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  text-secondary leading-tight tracking-tighter text-left flex-1">
              READY TO SEE EVERYTHING WE CAN DO FOR YOUR BUSINESS?
            </h2>

            {/* Right-aligned Button Container */}
            <div className="flex-shrink-0">
              {/* Button itself, styled to match the subtle background and box shadow */}
              <a href="/services">
                <button 
                  type="button"
                  className="
                    relative 
                  group 
                  py-2 
                  px-4 
                  rounded-lg 
                  text-sm 
                  sm:text-base 
                  font-semibold 
                  text-orange-700 
                  bg-amber-50 
                  shadow-md 
                  transition-all 
                  duration-300 
                  hover:shadow-lg 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-orange-500
                "
              >
                {/* The Gradient Box:
                  - absolute: Positions it on top of the button text.
                  - inset-y-0 left-0: Stretches it vertically on the left side.
                  - w-1/4: Controls the width of the gradient bar.
                  - rounded-md: Matches the corner radius.
                  - The custom gradient uses shades of orange and blue/purple to match the image.
                */}
                <div 
                  className="
                    absolute 
                    inset-y-0 
                    left-0 
                    w-1/4 
                    bg-gradient-to-r 
                    from-orange-500 
                    to-indigo-500 
                    rounded-l-lg 
                    opacity-80 
                    group-hover:w-full 
                    group-hover:opacity-10 
                    transition-all 
                    duration-500
                  "
                ></div>
                
                {/* Button Text, ensured to be above the gradient layer */}
                <span className="relative z-10 whitespace-nowrap">
                  Unlock Our Expertise
                </span>
              </button></a>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;