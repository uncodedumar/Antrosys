"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// 1. DATA: 16+ SEO-Engineered FAQs with Long-Tail Keywords
const faqData = [
  {
    question: "How does your digital agency guarantee a high ROI on custom software?",
    answer: "We maximize ROI by integrating conversion-centric UI/UX design with high-performance engineering. Our strategy focuses on reducing bounce rates and increasing user lifetime value through data-driven development and scalable architecture."
  },
  {
    question: "What is the timeline for custom web development and MVP launches?",
    answer: "Typically, a custom high-performance website or MVP takes 4 to 8 weeks. This rapid deployment includes strategic discovery, mobile-first design, and rigorous SEO optimization to ensure immediate market impact."
  },
  {
    question: "Do you provide white-label development services for other agencies?",
    answer: "Yes, we partner with agencies worldwide to provide high-end, white-label design and development. We act as your invisible technical powerhouse, delivering premium code under your brand's umbrella."
  },
  {
    question: "How do you optimize websites for Google's Core Web Vitals?",
    answer: "We prioritize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). By using Next.js, image optimization, and edge computing, we ensure your site hits a 90+ Lighthouse score."
  },
  {
    question: "Can your team integrate custom Shopify apps and e-commerce solutions?",
    answer: "Absolutely. We specialize in headless commerce and custom Shopify Liquid/Hydrogen builds, enabling seamless integration with third-party inventory systems, ERPs, and custom payment gateways."
  },
  {
    question: "How does mobile-first responsive design impact my SEO ranking?",
    answer: "Google uses mobile-first indexing. We build using fluid grids and optimized assets, ensuring your site ranks higher by providing a flawless experience across all devices and screen sizes."
  },
  {
    question: "What technologies do you use for secure, scalable web applications?",
    answer: "Our tech stack revolves around React, Next.js, TypeScript, and Node.js. For security, we implement JWT authentication, SSL encryption, and regular penetration testing to protect your user data."
  },
  {
    question: "Do you offer local SEO and Google Business Profile optimization?",
    answer: "Yes, we integrate local SEO strategies, schema markup (JSON-LD), and keyword-rich content to help businesses dominate local search results and drive more foot traffic or service inquiries."
  },
  {
    question: "Can you migrate my legacy website to a modern tech stack like Next.js?",
    answer: "We specialize in seamless migrations. We move your data from WordPress, PHP, or older frameworks to Next.js while maintaining your current SEO rankings through strict 301 redirect mapping."
  },
  {
    question: "How do custom API integrations improve business workflow automation?",
    answer: "By connecting your frontend to tools like Salesforce, HubSpot, or Zapier, we eliminate manual data entry, reduce human error, and create a unified ecosystem for your business operations."
  },
  {
    question: "What is the difference between a template and a bespoke custom website?",
    answer: "Templates are bloated and slow. Bespoke sites are built with clean code tailored to your brand, resulting in faster load times, better security, and significantly higher conversion rates."
  },
  {
    question: "Do you provide ongoing maintenance and security updates post-launch?",
    answer: "Our partnership is long-term. We provide proactive monitoring, monthly security patches, and performance tuning to ensure your digital asset remains fast and secure as your business scales."
  },
  {
    question: "How does site speed affect conversion rates and ad spend efficiency?",
    answer: "Every 100ms delay can drop conversions by 7%. High-speed sites lower your PPC cost-per-click (CPC) by improving your 'Quality Score' on Google Ads and Meta Ads."
  },
  {
    question: "Can you help with UI/UX audits to improve existing user journeys?",
    answer: "Yes, we perform heat-map analysis and user-flow audits to identify friction points. We then implement strategic design changes that guide users toward your primary call-to-action (CTA)."
  },
  {
    question: "What is the cost of hiring a full-service digital agency for a startup?",
    answer: "Pricing varies based on complexity, but we offer flexible engagement models. Our focus is on value-driven development that provides a foundation for Series A funding and beyond."
  },
  {
    question: "Why is Schema Markup important for my FAQ section's SEO?",
    answer: "Schema (JSON-LD) tells Google exactly what your questions and answers are. This allows your site to appear in 'Rich Results' and 'Featured Snippets,' drastically increasing your organic CTR."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Memoize Schema to prevent unnecessary re-renders
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  }), []);

  return (
    <section className="min-h-screen text-[#f5f5dc] py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 items-start font-sans selection:bg-black selection:text-[#fdf6e3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header: Fixed for desktop scroll-sync */}
      <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter">
          Expert <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6e3] to-gray-500">
            Digital <br /> Insights
          </span>
        </h2>
        <p className="mt-8 text-xl opacity-70 max-w-sm leading-relaxed">
          Mastering performance, SEO, and conversion-led design to scale your digital presence.
        </p>
        
        {/* Subtle CTA or indicator */}
        <div className="mt-10 hidden lg:block">
          <div className="h-[1px] w-20 bg-current opacity-30 mb-4" />
          <p className="text-sm uppercase tracking-widest opacity-50 font-semibold">Scroll to explore</p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="lg:w-2/3 w-full space-y-5">
        {faqData.map((item, index) => (
          <FAQCard
            key={index}
            index={index}
            item={item}
            isOpen={activeIndex === index}
            toggle={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQCard({ item, isOpen, toggle, index }: { 
  item: { question: string, answer: string }; 
  isOpen: boolean; 
  toggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={false}
      className={`group rounded-[24px] transition-colors duration-500 ${
        isOpen ? "bg-[#fdf6e3]" : "bg-[#fdf6e3]/90 hover:bg-[#fdf6e3]"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left p-6 md:p-9 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
          isOpen ? "text-black" : "text-black/80"
        }`}>
          {item.question}
        </span>
        <motion.div
          animate={{ 
            rotate: isOpen ? 135 : 0,
            scale: isOpen ? 1.2 : 1 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="ml-4 flex-shrink-0 text-black"
        >
          <Plus size={32} strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-9 pb-9">
              <div className="h-[1px] w-full bg-black/10 mb-6" />
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-[90%]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}