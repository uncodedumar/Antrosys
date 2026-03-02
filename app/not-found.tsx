import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/api/placeholder/1920/1080")', // Replace with your Antrosys brand asset
        }}
      />
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/60 to-black" />

      <div className="relative z-20 px-6 text-center">
        {/* Error Code */}
        <h1 className="text-[12rem] font-black leading-none text-orange-600/20 md:text-[20rem] select-none">
          404
        </h1>

        <div className="mt-[-4rem] md:mt-[-8rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
            Lost in the <span className="text-orange-500">Digital Void?</span>
          </h2>
          
          <p className="max-w-md mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            I guess you got lost trying to find the best we got for you. 
            Let's get you back on track to global-leading solutions.
          </p>

          {/* Action Button */}
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-orange-600 text-black font-bold text-sm uppercase tracking-widest hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,88,12,0.4)]"
          >
            Connect with Antrosys
          </Link>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-t from-orange-600 to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default NotFound;