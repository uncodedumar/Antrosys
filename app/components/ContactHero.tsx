'use client';

import React, { useState } from "react";

/**
 * ContactHero Component: A 1:1 replication of the provided reference.
 * Features a bold headline on the left and a structured form on the right.
 */
const ContactHero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="mx-2 relative overflow-hidden rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center py-20 px-6">
       {/* --- Background Blurred Blobs --- */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Changed mix-blend-multiply to opacity/screen for visibility on black */}
        <div className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[80px] opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[80px] opacity-20" />
        <div className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] filter blur-[80px] opacity-30" />
      </div>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Content Side */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-7xl md:text-8xl font-bold  tracking-tight text-secondary">
            Every great <br /> build starts <br /> with hello.
          </h1>
          
          <div className="max-w-lg">
            <p className="text-lg md:text-xl text-accent  leading-relaxed font-light">
              This isn&apos;t a contact form — it&apos;s the first step toward something better. 
              Whether you&apos;re building, scaling, or fixing what isn&apos;t working, 
              this is where you stop guessing and start moving with confidence. 
              Tell us what you&apos;re working on and where you want to go. 
              We&apos;ll take it from there with focus, honesty, and a plan that actually works.
            </p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="bg-[#212121] rounded-[25px] p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            
            {/* Form Fields */}
            {[
              { label: 'Full Name', name: 'fullName', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
              { label: 'Company', name: 'company', type: 'text' },
              { label: 'Website', name: 'website', type: 'url' },
              { label: 'Service', name: 'service', type: 'text' },
            ].map((field) => (
              <div key={field.name} className="flex flex-col space-y-1">
                <label 
                  htmlFor={field.name} 
                  className="text-white text-lg font-medium ml-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full bg-[#D9D9D9] border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-[#F15A29] outline-none transition-all"
                  required
                />
              </div>
            ))}

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#F15A29] hover:bg-[#d44d21] text-white font-bold py-4 px-20 rounded-xl text-xl transition-colors duration-300 w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;