import type { Metadata } from "next";

import FaqsPage from "../components/FaqsPage";




export const metadata: Metadata = {
  title: "FAQs | Expert Insights on AI & Development - Antrosys",
  description:
    "Find answers to common questions about Antrosys' AI integrations, custom software development, BPO solutions, and how we help brands scale with next-gen technology.",
  keywords: [
    "Antrosys FAQ",
    "AI Agency Questions",
    "Software Development Process",
    "BPO Outsourcing FAQ",
    "Custom AI Integration Cost",
    "Antrosys Project Timeline"
  ],
  openGraph: {
    title: "Antrosys FAQs | Everything You Need to Know",
    description: "Clearing the path to digital transformation. Learn about our process, technology stack, and elite BPO support.",
    url: "https://antrosys.com/faqs",
    type: "website",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Antrosys Frequently Asked Questions",
      },
    ],
  },
};
export default function Contact() {
  return (
    <>
      <FaqsPage/>

    </>
  );
}
