"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

// 1. Data Structure
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes your service different from others?",
    answer: "We focus on high-performance delivery and bespoke design. Unlike template-based solutions, we build everything from the ground up to ensure your brand stands out."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 4 to 6 weeks, depending on the complexity and the specific requirements of your business goals."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We provide dedicated maintenance packages to ensure your platform stays updated, secure, and performing at its peak."
  },
  {
    question: "Can I integrate third-party tools into the platform?",
    answer: "Yes, we specialize in API integrations for CRM, ERP, and marketing automation tools to streamline your existing workflow."
  },
  {
    question: "What is the first step toward starting a project?",
    answer: "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better."
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen  text-[#f5f5dc] py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 items-start font-sans">
      {/* Header Section */}
      <div className="lg:w-1/3 w-full lg:sticky lg:top-16">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="lg:w-2/2 w-full flex flex-col items-end gap-4">
        <div className="w-full space-y-4">
          {faqData.map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              isOpen={activeIndex === index}
              toggle={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Action Button - Bottom Right of the List */}
        <motion.a
          href="/faqs" // Replace with your actual FAQs page route
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex items-center gap-2 bg-[#fdf6e3] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors group"
        >
          Show All
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

// Sub-component for individual FAQ items with Hover Tilt
function FAQCard({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <motion.div
      // Slight Tilt Animation on Hover
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
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl font-medium pr-8 leading-snug">
            {item.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="flex-shrink-0"
          >
            <Plus size={32} strokeWidth={1.5} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
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