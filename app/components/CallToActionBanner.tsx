// components/CallToActionBanner.tsx
import Link from 'next/link';

/**
 * HIGH-PERFORMANCE RSC (React Server Component)
 * - SEO: Structured Data (JSON-LD) for better SERP visibility.
 * - UX: GPU-accelerated transforms (will-change) for 60fps smoothness.
 * - A11y: WCAG 2.1 compliant contrast and keyboard navigation.
 * - Fast: Zero hydration cost, optimized SVG paths.
 */
export default function CallToActionBanner() {
  // Long-tail keyword strategy for hidden SEO context
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Business Growth Solutions CTA",
    "description": "Unlock expert business scaling strategies and professional services to see everything we can do for your business growth.",
  };

  return (
    <section 
      className="bg-primary py-12 sm:py-20 overflow-hidden" 
      aria-labelledby="cta-heading"
    >
      {/* Schema.org for SEO - Invisible but powerful for Google Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent p-6 md:p-10 rounded-2xl shadow-xl border border-white/5 relative overflow-hidden group/container transition-transform duration-500 will-change-transform">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary leading-[1.1] tracking-tight text-left flex-[1.5]"
            >
              {/* Splitting text slightly helps screen readers and crawlers parse "Business" as a keyword */}
              READY TO SEE EVERYTHING WE CAN DO FOR YOUR <span className="block sm:inline text-orange-500">BUSINESS?</span>
            </h2>

            <div className="flex-shrink-0">
              <Link
                href="/services"
                title="Explore our full suite of professional business services"
                aria-label="Unlock Our Expertise and see our services"
                className="
                  relative 
                  inline-flex 
                  items-center 
                  justify-center 
                  px-8 
                  py-4 
                  overflow-hidden 
                  font-bold 
                  text-orange-700 
                  transition-all 
                  duration-300 
                  bg-amber-50 
                  rounded-xl 
                  group 
                  hover:text-white
                  shadow-[0_4px_14px_0_rgb(0,0,0,0.1)]
                  hover:shadow-orange-500/40
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-orange-500
                  focus:ring-offset-2
                  active:scale-95
                  will-change-transform
                "
              >
                {/* Hardware Accelerated Background Slide */}
                <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-orange-600 to-indigo-700 group-hover:w-full will-change-[width]"></span>
                
                <span className="relative flex items-center gap-2">
                  Unlock Our Expertise
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Decorative element - added 'pointer-events-none' to prevent hover interference */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover/container:bg-orange-500/20 transition-colors duration-700 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}