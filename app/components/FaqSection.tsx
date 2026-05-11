"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

// 1. Data Structure with SEO-optimized, high-conversion answers
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does your digital agency ensure a high ROI on my project?",
    answer: "We blend data-driven strategy with bespoke creative execution. By focusing on conversion rate optimization (CRO) and high-performance engineering, we ensure your digital platform isn't just a cost, but a scalable revenue-generating asset."
  },
  {
    question: "What is the typical timeline for custom software development?",
    answer: "Our agile development process usually delivers a fully functional MVP or custom website within 4 to 8 weeks. This includes discovery, UI/UX design, and rigorous performance testing to meet Google's Core Web Vitals."
  },
  {
    question: "Do you provide post-launch support and growth marketing?",
    answer: "Yes, our partnership extends beyond launch. We offer comprehensive maintenance, SEO monitoring, and security updates to ensure your platform scales seamlessly as your user base grows."
  },
  {
    question: "Can you integrate custom APIs and third-party CRM systems?",
    answer: "Absolutely. We specialize in complex API integrations, connecting your frontend to tools like Salesforce, HubSpot, or custom ERPs to automate workflows and unify your business data."
  },
  {
    question: "How do we start a digital transformation project with you?",
    answer: "It begins with a strategic discovery session. We analyze your market competitors and business goals to map out a technical roadmap that prioritizes speed, security, and user experience."
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  

  return (
    <section className="min-h-screen text-[#f5f5dc] py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 items-start font-sans">
      {/* Schema.org injection */}

      {/* Header Section */}
      <div className="lg:w-1/3 w-full lg:sticky lg:top-16">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Digital <br /> Agency <br /> Insights
        </h2>
        <p className="mt-6 text-lg opacity-80 max-w-sm">
          Everything you need to know about our high-performance design and development process.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="lg:w-2/3 w-full flex flex-col items-end gap-4">
        <div className="w-full space-y-4">
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

        {/* Action Button */}
        <motion.a
          href="/faqs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex items-center gap-2 bg-[#fdf6e3] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors group"
        >
          View All FAQs
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

function FAQCard({ 
  item, 
  isOpen, 
  toggle, 
  index 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  toggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ 
        rotateX: -2, 
        rotateY: 2, 
        scale: 1.01,
        transition: { duration: 0.2 } 
      }}
      style={{ perspective: 1000 }}
      className="cursor-pointer"
    >
      <div 
        onClick={toggle}
        className="bg-[#fdf6e3] text-black rounded-[18px] p-6 md:p-8 transition-all duration-300"
      >
        <button 
          className="w-full flex justify-between items-center text-left"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
        >
          <h3 className="text-lg md:text-xl font-medium pr-8 leading-snug">
            {item.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="flex-shrink-0"
          >
            <Plus size={32} strokeWidth={1.5} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`faq-content-${index}`}
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 20 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-700 text-base md:text-lg border-t border-black/10 pt-4">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
