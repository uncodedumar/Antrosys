import React from 'react';

interface Service {
  name: string;
  description: string;
}

interface DesignServiceViewProps {
  service: Service;
}

export default function DesignServiceView({ service }: DesignServiceViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Design Service
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Process</h2>
            <p className="text-gray-600 leading-relaxed">
              Our design approach combines creativity with strategic thinking to deliver
              solutions that not only look stunning but also drive results.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              We leverage industry-leading design tools including Figma, Adobe Creative Suite,
              and prototyping platforms to bring your vision to life.
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
          <ul className="space-y-4">
            {[
              'User-centered design approach',
              'Responsive and adaptive layouts',
              'Prototype and wireframe creation',
              'Design system development',
              'Brand identity integration',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

