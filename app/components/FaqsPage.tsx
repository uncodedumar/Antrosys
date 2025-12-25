"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// 1. Data Structure
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "We focus on high-performance delivery and bespoke design. Unlike template-based solutions, we build everything from the ground up to ensure your brand stands out.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "Most projects are completed within 4 to 6 weeks, depending on the complexity and the specific requirements of your business goals.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "Absolutely. We provide dedicated maintenance packages to ensure your platform stays updated, secure, and performing at its peak.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "Yes, we specialize in API integrations for CRM, ERP, and marketing automation tools to streamline your existing workflow.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },
  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },

  {
    question:
      "This isn't a contact form — it's the first step toward something better.",
    answer:
      "It starts with a discovery call where we dive into your vision. This isn't just a contact form—it's the first step toward something better.",
  },
];

export default function FaqsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#f1ede2] text-[#1a1a1a] py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12 items-start font-sans mx-2 rounded-b-lg">
      {/* Header Section */}
      <div className="lg:w-[40%] w-full lg:sticky lg:top-16">
        <h2 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-[#1a1a1a]">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="lg:w-[60%] w-full flex flex-col gap-3">
        {faqData.map((item, index) => (
          <FAQCard
            key={index}
            item={item}
            isOpen={activeIndex === index}
            toggle={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

// Sub-component for individual FAQ items
function FAQCard({
  item,
  isOpen,
  toggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="w-full">
      <motion.div
        onClick={toggle}
        initial={false}
        className="cursor-pointer bg-[#1a1a1a] text-white rounded-[12px] p-6 md:p-8 transition-colors duration-300 hover:bg-[#252525]"
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-lg md:text-xl font-normal leading-tight opacity-90">
            {item.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex-shrink-0"
          >
            <Plus size={36} strokeWidth={1.5} />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 pb-2 text-gray-400 text-base md:text-lg border-t border-white/10 mt-6">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
