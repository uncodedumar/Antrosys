import React from 'react';

/**
 * CoooperMsg Component
 * Includes an inline profile picture that scales with the text size.
 */
const CoooperMsg: React.FC = () => {
  return (
    <div className="bg-transparent flex min-h-screen w-full items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="max-w-5xl mx-auto text-left">
        <p className={`
          text-base sm:text-lg lg:text-xl font-sans 
          text-accent 
          transition-all duration-700 ease-in-out
         
        `}>
          Mr. Ryaz    
          {/* Profile Circle Container */}
          <span className="inline-flex items-baseline mx-1">
            <img 
              src="CEO.png" // Replace with actual profile image URL
              alt="Coooper Profile"
              className="inline-block self-center rounded-full h-[3em] w-[6em] object-cover "
            />
          </span>
           founded Antrosys with a simple but uncompromising belief: clients don’t need more promises, they need real outcomes. Every project we take on is treated as a responsibility, not a transaction. Our mission is to remove complexity, build systems that actually work, and give our clients clarity, confidence, and momentum in a fast-moving digital world. We combine experience, discipline, and forward-thinking technology to deliver work that lasts beyond trends. When you choose Antrosys, you’re choosing a team that listens deeply, executes precisely, and is fully invested in your success.
        </p>
      </div>
    </div>
  );
};

export default CoooperMsg;