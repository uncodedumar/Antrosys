import React from 'react';
import Image from 'next/image';
import { ServicePageData } from '@/lib/data';

interface TechStackProps {
  data: ServicePageData['techStack'];
}

const TechStack: React.FC<TechStackProps> = ({ data }) => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-12 lg:px-24">
      {/* Top Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
          {data.title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 border-t border-gray-800">
        {/* Sticky Left Sidebar */}
        <div className="lg:w-1/3 pt-12">
          <div className="lg:sticky lg:top-32">
            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              {data.asideText}
            </h3>
          </div>
        </div>

        {/* Grid Right Section */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 border-l border-gray-800">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-8 border-b border-gray-800 ${
                index % 2 === 0 ? 'md:border-r' : ''
              }`}
            >
              {/* Logo / Icon Container */}
              <div className="flex-shrink-0 mt-1">
                <Image
                  src={item.logoUrl}
                  alt={item.heading}
                  width={40}
                  height={40}
                  className="opacity-90 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="text-sm opacity-60">
                    {/* Placeholder for the small icons next to text in image */}
                    {index % 3 === 0 && "☁️"}
                    {index % 3 === 1 && "📋"}
                    {index % 3 === 2 && "⚙️"}
                  </span>
                  {item.heading}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;