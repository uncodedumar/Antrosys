'use client';

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";

/**
 * Optimized ContactHero: High-performance, SEO-injected, and A11y compliant.
 * Maintains original UI/UX while maximizing Lighthouse scores.
 */
const ContactHero: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    // Client-side validation
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Validate email format on client side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),
            website: formData.website.trim(),
            service: formData.service.trim(),
          }),
        });

        // Check if response is ok before parsing
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned an invalid response. Please try again.');
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message. Please try again.');
        }

        // Success
        setSubmitStatus('success');
        // Reset form after a short delay to show success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            service: ''
          });
        }, 2000);
      } catch (error) {
        setSubmitStatus('error');
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else if (typeof error === 'string') {
          setErrorMessage(error);
        } else {
          setErrorMessage('An unexpected error occurred. Please try again.');
        }
        console.error('Form submission error:', error);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mx-2 relative overflow-hidden rounded-[40px] min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 bg-primary">
      {/* --- SEO: Hidden Long-Tail Keywords for Indexing --- */}
      <div className="sr-only">
        <h2>Expert Custom Software Development Services</h2>
        <p>Looking for a scalable SaaS architecture or professional web design agency? Our build process focuses on performance optimization and high-conversion UI/UX design.</p>
      </div>

      {/* --- Performance: GPU-Accelerated Background Blobs --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute -left-20 top-[40%] w-[400px] h-[600px] rounded-full bg-[#A5A2D9] filter blur-[100px] will-change-transform" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[800px] h-[500px] rounded-full bg-[#F5C396] filter blur-[100px] will-change-transform" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-20 top-[45%] w-[450px] h-[700px] rounded-full bg-[#F9A891] filter blur-[100px] will-change-transform" 
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
        
        {/* Left Content Side */}
        <div className="flex flex-col space-y-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-bold tracking-tight text-secondary leading-[0.9]"
          >
            Every great <br /> build starts <br /> with hello.
          </motion.h1>
          
          <div className="max-w-lg">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-accent leading-relaxed font-light"
            >
              This isn&apos;t a contact form — it&apos;s the first step toward <strong className="font-medium">custom digital solutions</strong>. 
              Whether you&apos;re scaling a startup or optimizing enterprise workflows, 
              stop guessing and start moving with confidence.
            </motion.p>
          </div>
        </div>

        {/* Right Form Side */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#212121] rounded-[25px] p-6 md:p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {[
              { label: 'Full Name', name: 'fullName', type: 'text', autoComplete: 'name', placeholder: 'John Doe', required: true },
              { label: 'Email Address', name: 'email', type: 'email', autoComplete: 'email', placeholder: 'john@example.com', required: true },
              { label: 'Phone Number', name: 'phone', type: 'tel', autoComplete: 'tel', placeholder: '+1 (555) 123-4567', required: true },
              { label: 'Company Name', name: 'company', type: 'text', autoComplete: 'organization', placeholder: 'Antrosys', required: true },
              { label: 'Website URL', name: 'website', type: 'text', autoComplete: 'url', placeholder: 'https://example.com', required: false },
              { label: 'Message', name: 'service', type: 'text', autoComplete: 'off', placeholder: 'I need an amazing Web/ UI/UX Design/ Brand identity...', required: true },
            ].map((field) => (
              <div key={field.name} className="flex flex-col space-y-1">
                <label 
                  htmlFor={field.name} 
                  className="text-white text-sm md:text-base font-medium ml-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  aria-required={field.required}
                  className="w-full bg-[#D9D9D9] border-2 border-transparent rounded-lg h-12 px-4 focus:border-[#F15A29] focus:bg-white outline-none transition-all text-black placeholder:text-gray-500"
                />
              </div>
            ))}

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isPending}
                className="group relative overflow-hidden bg-[#F15A29] hover:bg-[#d44d21] disabled:opacity-70 text-white font-bold py-4 px-20 rounded-xl text-xl transition-all duration-300 w-full sm:w-auto active:scale-95"
              >
                <span className={isPending ? "opacity-0" : "opacity-100"}>
                  {isPending ? 'Sending...' : 'Submit'}
                </span>
                {isPending && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;