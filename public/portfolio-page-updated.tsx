'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Portfolio() {
  // State untuk filter aktif
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Modern Cafe Branding',
      category: 'Branding',
      description: 'Complete brand identity for a contemporary coffee shop',
      color: 'bg-amber-100',
    },
    {
      title: 'Tech Startup Website',
      category: 'Web Development',
      description: 'Responsive website for a fintech startup',
      color: 'bg-blue-100',
    },
    {
      title: 'Fashion Brand Identity',
      category: 'Graphic Design',
      description: 'Logo and visual identity for fashion brand',
      color: 'bg-pink-100',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with custom CMS',
      color: 'bg-green-100',
    },
    {
      title: 'Restaurant Menu Design',
      category: 'Graphic Design',
      description: 'Print and digital menu design',
      color: 'bg-red-100',
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional website for consulting firm',
      color: 'bg-purple-100',
    },
    {
      title: 'Product Packaging',
      category: 'Graphic Design',
      description: 'Packaging design for organic tea brand',
      color: 'bg-teal-100',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User interface for fitness tracking app',
      color: 'bg-orange-100',
    },
    {
      title: 'Event Branding',
      category: 'Branding',
      description: 'Visual identity for music festival',
      color: 'bg-yellow-100',
    },
  ];

  // Filter projects berdasarkan kategori
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Daftar kategori unik
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-brand-dark">OUR</span>
            <br />
            <span className="text-brand-lime">PORTFOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl animate-slide-in">
            Explore our recent work and see how we've helped brands stand out and succeed.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 font-bold border-2 border-brand-dark transition-all duration-300 rounded-lg ${
                  activeFilter === category
                    ? 'bg-brand-lime text-brand-dark'
                    : 'bg-brand-cream text-brand-dark hover:bg-brand-dark hover:text-brand-lime'
                }`}
              >
                {category === 'All' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Counter hasil filter */}
          <p className="text-center text-brand-dark/70 mb-8 font-medium">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${project.color} aspect-square rounded-lg mb-4 flex items-center justify-center border-2 border-brand-dark overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-brand-lime font-display text-2xl font-bold">View Project</span>
                  </div>
                  <span className="font-display text-6xl font-bold text-brand-dark/20">
                    {index + 1}
                  </span>
                </div>
                <div className="inline-block bg-brand-lime px-3 py-1 text-xs font-bold mb-2 rounded">
                  {project.category}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-brand-dark">
                  {project.title}
                </h3>
                <p className="text-brand-dark/70">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Message jika tidak ada hasil */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-brand-dark/50 font-display">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let's create something amazing for your brand too.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cream transition-all duration-300 border-2 border-brand-lime"
          >
            START YOUR PROJECT
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
