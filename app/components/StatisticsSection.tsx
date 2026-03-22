import React from 'react';

const ImpactSection = () => {
  return (
    <section className="bg-[#000000] py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Content Side */}
        <div className="lg:w-1/2 flex flex-col space-y-8">
          <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter text-[#FAF3E1]">
            data that <br />
            proves <br />
            <span className="text-[#EF571B]">our impact</span>
          </h2>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <a href="/services" className="border border-[#FAF3E1]/30 text-[#FAF3E1] px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center hover:bg-[#FAF3E1] hover:text-black transition-colors">
              Services
            </a>
            <a href="https://cal.com/antrosys" className="border border-[#FAF3E1]/30 text-[#FAF3E1] px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center hover:bg-[#FAF3E1] hover:text-black transition-colors">
              Book a Meeting
            </a>
            <a href="/contact" className="border border-[#FAF3E1]/30 text-[#FAF3E1] px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center hover:bg-[#FAF3E1] hover:text-black transition-colors">
              Contact Us
            </a>
            <a href="tel:+1234567890" className="bg-[#EF571B] text-[#FAF3E1] px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center font-bold hover:bg-opacity-90 transition-opacity">
              Call
            </a>
          </div>
        </div>

        {/* Right Cards Side - Grid layout instead of flex-scroll */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Key Results */}
          <div className="bg-[#FAF3E1] rounded-[40px] p-8 flex flex-col space-y-4 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">Our key results</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our targeted advertising campaigns reach the right audience at the right time with precise data.
            </p>
            
            <div className="grid grid-cols-2 gap-y-6 pt-2">
              <div>
                <span className="text-4xl font-bold text-[#EF571B] block">3x</span>
                <span className="text-[10px] uppercase text-gray-600 font-bold leading-tight">
                  better conversion <br /> rates
                </span>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#EF571B] block">+65%</span>
                <span className="text-[10px] uppercase text-gray-600 font-bold">
                  ROI improvement
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-4xl font-bold text-[#EF571B] block">40%</span>
                <span className="text-[10px] uppercase text-gray-600 font-bold">
                  lower spend
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Budget */}
          <div className="bg-[#FAF3E1] rounded-[40px] p-8 flex flex-col justify-between shadow-xl min-h-[320px]">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Budget in 2024</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strategically allocated to boost brand awareness and drive conversions.
              </p>
            </div>
            
            <div className="pt-6">
              <span className="text-5xl md:text-6xl font-bold text-[#EF571B] tracking-tighter">
                $613k
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Decoration */}
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="h-[2px] w-full bg-[#FAF3E1]/10 relative">
          <div className="absolute top-0 left-0 h-full w-24 bg-[#EF571B]"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;