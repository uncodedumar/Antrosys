import React from 'react';

const HoverImage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center  p-4">
      <div className="w-full md:w-[70%] lg:w-[70%] ">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Horizontal Landscape"
          className="
            w-full 
            h-[400px] md:h-[550px] 
            object-cover 
            rounded-[2rem] 
            grayscale 
            transition-all 
            duration-700 
            ease-in-out 
            hover:grayscale-0 
            shadow-2xl
            my-5
          "
        />
        
      </div>
    </div>
  );
};

export default HoverImage;