import React from 'react';
import { FiUpload } from 'react-icons/fi';

const CareersSection: React.FC = () => {
  // SEO Content Constants
  const sectionTitle = "Join Our Creative Design Agency Team";
  const subheadline = "We’re not hiring now, but we’re always keen to connect with talented creatives and visionary designers.";

  return (
    <section 
      className="py-16 md:py-24 lg:py-32 text-accent bg-transparent transition-colors duration-500 ease-in-out"
      aria-labelledby="careers-heading"
    >
      {/* Schema.org JSON-LD for Job Openings (Speculative/General) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Your Agency Name",
          "description": "Looking for talented UI/UX designers, creative directors, and digital strategists.",
          "jobTitle": "Creative Talent Pool"
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:space-x-12">

          {/* === Left Section === */}
          <div className="mb-12 md:mb-0 md:w-1/2">
            <h2 
              id="careers-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
            >
              {/* Using a span for a subtle SEO boost without changing the look */}
              <span 
  className="sr-only" 
  title="Antrosys Careers | Join a Global Leader in AI & Digital Transformation"
  aria-label="Explore career opportunities at Antrosys: Join an elite team of AI engineers, designers, and full-stack developers"
>
  Career Opportunities at Antrosys: Join an Industry-Leading Team Shaping the 
  Future of AI Art, Custom SaaS, and Enterprise-Grade Digital Solutions.
</span>
              Join Our Team
            </h2>
          </div>

          {/* === Right Section === */}
          <div className="md:w-1/2">
            <p className="text-xl sm:text-2xl font-medium mb-12 lg:mb-16 leading-relaxed">
              {subheadline}
            </p>

            {/* Accessible & Interactive CTA */}
{/* 
            <a 
              href="#upload" 
              className="group inline-flex items-center text-xl sm:text-2xl font-semibold transition-all duration-300 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent rounded-sm"
              aria-label="Submit your resume to join our creative talent pool"
            >
              <span className="border-b-2 border-transparent group-hover:border-accent transition-all duration-300">
                Drop Your Resume
              </span>
              
              {/* Icon with smooth animation */}
              {/* <div className="ml-3 p-1 rounded-full overflow-hidden">
                <FiUpload 
                  className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-180 transition-transform duration-300 group-hover:-translate-y-1" 
                  aria-hidden="true"
                />
              </div>
            </a> */}

            {/* Visually hidden long-tail keywords for SEO indexing */}
            <div className="sr-only" role="region" aria-label="Antrosys Creative Career Opportunities">
  <h3 
    title="Antrosys Careers | Elite Creative & Technical Design Opportunities"
    aria-label="Join Antrosys: Senior-level roles in AI Art, UI/UX, and Creative Direction"
  >
    Elite Creative Engineering and Next-Gen Design Careers at Antrosys
  </h3>
  <p 
    title="Scale Your Career with a Global Leader in AI & Digital Transformation"
    aria-label="Antrosys is hiring: Remote Senior UI/UX Designers, AI Art Directors, and Full-Stack Creative Technologists"
  >
    Antrosys is expanding its elite global team. We are seeking Senior UI/UX 
    Designers, Bespoke AI Art Directors, and Creative Technologists to 
    drive digital transformation and high-performance brand identity in a 
    world-class, innovation-first environment.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;