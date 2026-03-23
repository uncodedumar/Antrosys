import React from 'react';

const ServicesSection = () => {
  const allServices = [
    {
      title: <>Ridiculously <br /> powerful AI <br /> & development</>,
      subServices: [
        "Custom AI Models & Art Generation",
        "Enterprise AI & Chatbot Integrations",
        "Full-Stack Web & Mobile Development",
        "UI/UX Design & Brand Identity",
        "Cloud Infrastructure & AWS Solutions",
        "Performance Marketing & Growth Analytics"
      ]
    },
    {
      title: <>High-Touch <br /> Voice & Support <br /> Solutions</>,
      subServices: [
        "24/7 Inbound & Outbound Voice Support",
        "Multilingual Customer Experience",
        "Cold Calling & Appointment Setting",
        "Technical Helpdesk Tier 1-3",
        "Quality Assurance & Monitoring",
        "Crisis Management & Escalation"
      ]
    },
    {
      title: <>Omnichannel <br /> Email & Chat <br /> Support</>,
      subServices: [
        "Real-time Live Chat Assistance",
        "Automated & Human-in-the-loop Email Ticketing",
        "Social Media Community Management",
        "E-commerce & Shopify Support",
        "SLA-Driven Response Management",
        "Zendesk & Freshdesk Implementation"
      ]
    },
    {
      title: <>Strategic <br /> Staff <br /> Augmentation</>,
      subServices: [
        "Dedicated Full-Stack Engineering Teams",
        "On-Demand UI/UX Designers",
        "Project Management & Agile Scrum Leads",
        "Embedded QA & Security Experts",
        "Flexible Monthly Scaling",
        "Vetted Elite Global Talent"
      ]
    },
    {
      title: <>Seamless <br /> Back Office <br /> Operations</>,
      subServices: [
        "Data Entry & Content Moderation",
        "Financial Bookkeeping & Invoicing",
        "Inventory & Supply Chain Management",
        "CRM Data Cleansing & Enrichment",
        "Legal & Medical Transcription",
        "Document Processing & Digitization"
      ]
    },
    {
      title: <>Aggressive <br /> Lead <br /> Generation</>,
      subServices: [
        "B2B Prospecting & Data Mining",
        "LinkedIn Outreach Automation",
        "Sales Funnel Optimization",
        "Qualified Discovery Calls",
        "Market Research & Competitor Analysis",
        "Email Marketing & Warm Nurturing"
      ]
    }
  ];

  return (
    <div className="bg-[var(--primary)] space-y-20 py-20">
      {allServices.map((section, idx) => (
        <section key={idx} className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b border-[var(--secondary)]/10 pb-20 last:border-0">
            
            {/* Left Side: Headline & CTAs */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <h2 className="text-4xl md:text-6xl font-bold text-[var(--accent)] leading-tight tracking-tight">
                {section.title}
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://cal.com/antrosys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[var(--secondary)] text-[var(--primary)] font-semibold rounded-md hover:opacity-90 transition-all text-center"
                >
                  Book a meeting
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-3 border border-[var(--secondary)] text-[var(--secondary)] font-semibold rounded-md hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all text-center"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Right Side: Service List */}
            <div className="space-y-10">
              <ul className="divide-y divide-[var(--secondary)]/30">
                {section.subServices.map((service, i) => (
                  <li 
                    key={i} 
                    // Increased height via py-8 (doubled from py-4)
                    className="py-8 flex items-center text-[var(--accent)] text-lg md:text-xl font-medium group cursor-default hover:pl-2 transition-all duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--secondary)] mr-4 opacity-70 group-hover:scale-150 transition-transform" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesSection;