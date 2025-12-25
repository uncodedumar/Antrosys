import React from 'react';
import Image from 'next/image';

/**
 * Renders a responsive, centered map image component.
 * The image (map.svg from the public directory) takes up 80% of the screen width.
 */
const Map: React.FC = () => {
  return (
    // Outer container for centering the image horizontally
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        width: '100%',            // Ensure the container spans the full width
        padding: '10px 10px',        // Optional: add some vertical padding
      }}
    >
      {/* Inner container to control the overall width of the image */}
      <div 
        style={{
          width: '100%',           // Sets the container width to 80% of the screen
          maxWidth: '1000px',     // Optional: set a maximum width for very large screens
          height: 'auto',         // Allows the height to adjust based on content
        }}
      >
        {/* Next.js Image Component for optimized image loading */}
        <Image
          src="/CoLogo/map.svg"          // Path to the image in the public directory
          alt="Responsive Map"    // Descriptive alt text
          layout="responsive"     // Key for responsiveness: scales with the parent container
          width={100}             // Required for 'responsive' layout, sets the intrinsic aspect ratio
          height={100}            // Required for 'responsive' layout, sets the intrinsic aspect ratio
          style={{ 
            width: '100%',        // Ensures the Image component fills its parent (the 80% div)
            height: 'auto',       // Maintains the aspect ratio
            display: 'block',     // Ensures it behaves like a block element
          }}
        />
      </div>
    </div>
  );
};

export default Map;