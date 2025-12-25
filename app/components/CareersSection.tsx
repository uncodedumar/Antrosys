// components/CareersSection.tsx

import React from 'react';
import { FiUpload } from 'react-icons/fi'; // Using react-icons for the upload arrow

// Define the component
const CareersSection: React.FC = () => {
  // Define the main background color from the image (light beige/cream)

  // Define the text color (dark black/navy)
  const textColor = 'text-accent'; 

  return (
    // Main container with the background color and padding
    <section className={`py-16 md:py-24 lg:py-32 ${textColor}`}>
      {/* Centering container for the content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flex container to hold the two main columns */}
        {/* On mobile (default), it stacks them (flex-col). 
             On medium screens and up (md:), it places them side-by-side (md:flex-row) */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-12">

          {/* === Left Section: "Join Our Team" === */}
          <div className="mb-12 md:mb-0 md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Join Our Team
            </h2>
          </div>

          {/* === Right Section: Details and Drop Resume === */}
          {/* We'll use the other half of the space (md:w-1/2) and align the text to the left */}
          <div className="md:w-1/2">
            
            {/* Main paragraph */}
            <p className="text-xl sm:text-2xl font-medium mb-12 lg:mb-16">
              We’re Not Hiring Now, But We’re Always Keen To Connect With Talented Creatives.
            </p>

            {/* "Drop Your Resume" button/link area */}
            <a 
              href="#" // Replace with your actual resume drop link/functionality
              className="inline-flex items-center text-xl sm:text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              Drop Your Resume
              {/* The upload icon, slightly smaller and positioned like the reference image */}
              <FiUpload className="ml-2 w-5 h-5 sm:w-6 sm:h-6 transform rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;