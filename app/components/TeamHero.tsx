'use client';
import React from "react";

// The colors used based on the reference image:
// Background: A very light cream/peach color (like #FBF4E7 or #FAF5EB)
// Stripes: A slightly darker peach/pink color (like #F2E3D4 or #EEDCC7)
// Dark Text: A dark brown/black (like #302621)
// Orange Text: A vibrant orange (like #F37525 or #E9651D)
// CTA Circles: Two dark brown/maroon shades (like #724E4E and #5B4040)

/**
 * TeamHero Component: Designed to replicate the 'Not Just a Team. A Weapon.' hero section
 * from the reference image, ensuring responsiveness across all devices.
 */
const TeamHero: React.FC = () => {

  // Define custom colors for clarity, though they will be used as Tailwind classes.
  // We'll use custom Tailwind classes if available, or fall back to standard ones.
  // For the background and text colors, we'll approximate with common Tailwind utility colors
  // and extend them if necessary (assuming a default Tailwind setup).

  const darkBrown = 'text-[#302621]';
  const vibrantOrange = 'text-[#F37525]';
  const lightBackground = 'bg-[#FAF5EB]'; 
  const stripeColor = '#F2E3D4'; // Used for the background pattern
  const ctaCircleOne = 'bg-[#724E4E]';
  const ctaCircleTwo = 'bg-[#5B4040]';
  const ctaText = 'text-[#302621]';// Same as dark text

  return (
    // Main container with the light background color
    <div className={`bg-black min-h-screen relative overflow-x-hidden mx-2 rounded-b-2xl`}>
      
        {/* --- Background Blurred Blobs --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Changed mix-blend-multiply to opacity/screen for visibility on black */}
        <div className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[80px] opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[80px] opacity-20" />
        <div className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] filter blur-[80px] opacity-30" />
      </div>
      <div 
        className="absolute inset-0 z-0 opacity-70"
        style={{
           // Adjusts the spacing of the stripes
        }}
      />

      {/* Content Container: Centered, relative to be above the stripes, and uses padding */}
      <div className="relative z-10 w-full flex flex-col items-center p-4 sm:p-8 lg:p-12 xl:p-16">
        
      <header className="flex justify-center items-center my-8">
          <p className="text-xl font-bold text-accent">ANTRO</p>
          <p className="text-xl font-bold text-secondary">SYS</p>
        </header>

        {/* Main Content Area: Flex layout for side-by-side text and large, centered hero text */}
        <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl">
          
          {/* Left Text Block */}
          

          {/* Center Hero Text */}
          <section className="w-full lg:w-2/4 text-center px-4">
            <h1 className={`text-6xl sm:text-8xl md:text-9xl font-extrabold leading-none text-accent tracking-tighter`}>
            Ideas Into <br className="sm:hidden" /> 
            
            <span className=" text-secondary">Impact.</span></h1>
          </section>

        

          {/* Mobile Text Block (Shows on devices smaller than lg) */}
          <div className="lg:hidden w-full text-center mt-8 px-4">
            <p className={`text-sm leading-relaxed ${darkBrown} max-w-md mx-auto`}>
              We bring concepts to life with clean, scalable, and high-performance solutions. Every line of code is written to support growth and reliability.
            </p>
          </div>
        </div>

        {/* Placeholder for the remaining space to push the CTA to the bottom/center when min-h-screen is active */}
        <div className="flex-grow min-h-[5vh] lg:min-h-[10vh]"></div> 

        {/* Book Intro Call CTA - Centered under the main text */}
        <div className="flex justify-center items-center mt-10"> 
          <a href="/contact">
            <div className="flex items-center cursor-pointer group">
              <p className="text-xl font-semibold text-white mr-4">Book an intro call</p>
              <div className="relative w-12 h-12">
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-12 h-12 bg-secondary rounded-full flex justify-center items-center z-10 shadow-lg group-hover:scale-[1.1] transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;