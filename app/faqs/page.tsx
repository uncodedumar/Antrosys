import type { Metadata } from "next";

import FaqsPage from "../components/FaqsPage";



export const metadata: Metadata = {
  title: "Faqs - Antrosys",
  description: "Answers to all of your questions",
};

export default function Contact() {
  return (
    <>
      <FaqsPage/>

    </>
  );
}
