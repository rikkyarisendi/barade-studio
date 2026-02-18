'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-brand-dark">
            LET'S TALK
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto animate-slide-in">
            Ready to start your project? Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-4xl font-bold mb-8 text-[var(--text-primary)]">
              GET IN <span className="text-brand-lime">TOUCH</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">Email</h3>
                  <a href="mailto:baradedesign@gmail.com" className="text-[var(--text-muted)] hover:text-brand-lime transition-colors">
                    baradedesign@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">Phone</h3>
                  <a href="tel:+6288970909446" className="text-[var(--text-muted)] hover:text-brand-lime transition-colors">
                    +62 889 7090 9446
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">Location</h3>
                  <p className="text-[var(--text-muted)]">
                    Bandung, West Java, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card - Dark Mode Support */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 rounded-lg border-2 border-[var(--border-color)]">
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-lime">
                BUSINESS HOURS
              </h3>
              <div className="space-y-2 text-[var(--text-primary)]">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Dark Mode Support */}
          <div className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 rounded-lg border-2 border-[var(--border-color)]">
            <h3 className="font-display text-3xl font-bold mb-6 text-[var(--text-primary)]">
              SEND US A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2 text-[var(--text-primary)]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg placeholder-[var(--text-muted)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold mb-2 text-[var(--text-primary)]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg placeholder-[var(--text-muted)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-bold mb-2 text-[var(--text-primary)]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg placeholder-[var(--text-muted)]"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-bold mb-2 text-[var(--text-primary)]">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg"
                >
                  <option value="">Select a service</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="branding">Brand Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-bold mb-2 text-[var(--text-primary)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] resize-none placeholder-[var(--text-muted)]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 
      ============================================
      MAP SECTION - DISABLED (Commented Out)
      Uncomment when ready to add Google Maps
      ============================================
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-dark rounded-lg h-96 flex items-center justify-center border-4 border-brand-lime">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-brand-cream font-display text-2xl font-bold">
                Find us in Bandung
              </p>
              <p className="text-brand-gray mt-2">
                Jl. Sukajadi No. 123, Bandung, West Java
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </>
  );
}