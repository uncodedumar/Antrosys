import React from 'react';
// Assuming your interface is exported from a types file
import { ServicePageData } from '@/lib/data';


interface Props {
  data: ServicePageData['serviceSuite'];
}

const FrontEndServiceSuite: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-[#111111] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Hero Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          {data.title}
        </h2>
        
        {/* Subheading & Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className={`
              p-10 flex flex-col items-center text-center group transition-all duration-300
              /* Borders logic to match the 0.5px grid look */
              border-white/20
              ${index < 6 ? 'lg:border-b-[0.5px]' : ''} 
              ${(index + 1) % 3 !== 0 ? 'lg:border-r-[0.5px]' : ''}
              ${index % 2 !== 0 ? 'md:max-lg:border-l-[0.5px]' : ''}
              ${index < 8 ? 'md:max-lg:border-b-[0.5px]' : ''}
              max-md:border-b-[0.5px] last:border-b-0
            `}
          >
            {/* Icon / Image */}
            <div className="mb-8 w-12 h-12 flex items-center justify-center">
              <img 
                src={card.icon} 
                alt={card.heading} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Heading with Icon (based on your image layout) */}
            <div className="flex items-start gap-2 mb-4 ">
               {/* This is the small icon next to heading seen in your image */}
               <span className="mt-1 text-xs opacity-80">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
               </span>
               <h3 className="font-semibold text-lg tracking-wide uppercase text-[15px]">
                {card.heading}
              </h3>
            </div>

            {/* Card Description */}
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-[280px] text-left">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontEndServiceSuite;