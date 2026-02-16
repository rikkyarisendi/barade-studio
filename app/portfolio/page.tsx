'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { projects as allProjects, Project } from '@/lib/projects';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

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
          <p className="text-center text-brand-dark/70 mb-8 font-medium">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`${project.color} aspect-square rounded-xl mb-4 flex items-center justify-center border-2 border-brand-dark overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-brand-lime font-display text-2xl font-bold">Quick View</span>
                  </div>
                  <span className="font-display text-6xl font-bold text-brand-dark/20">
                    {String(index + 1).padStart(2, '0')}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-brand-dark/50 font-display">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Preview */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-brand-dark/95 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-brand-cream max-w-5xl w-full my-8 rounded-2xl border-4 border-brand-lime p-6 md:p-10 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="sticky top-0 float-right -mt-2 -mr-2 md:-mt-4 md:-mr-4 text-4xl md:text-5xl font-bold text-brand-dark hover:text-brand-lime transition-colors leading-none z-10 bg-brand-cream rounded-full w-12 h-12 flex items-center justify-center border-2 border-brand-dark hover:border-brand-lime"
              aria-label="Close"
            >
              ×
            </button>

            {/* Project Quick Preview */}
            <div className="inline-block bg-brand-lime px-3 py-1 text-sm font-bold mb-4 rounded">
              {selectedProject.category}
            </div>
            
            <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-dark mb-3 pr-8">
              {selectedProject.title}
            </h2>
            
            <p className="text-base md:text-lg text-brand-dark/80 mb-6">
              {selectedProject.description}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 pb-6 border-b-2 border-brand-dark/10">
              <div>
                <h4 className="font-display font-bold text-brand-dark mb-1 text-xs md:text-sm">Client</h4>
                <p className="text-brand-dark/70 text-xs md:text-sm">{selectedProject.client}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-dark mb-1 text-xs md:text-sm">Year</h4>
                <p className="text-brand-dark/70 text-xs md:text-sm">{selectedProject.year}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-dark mb-1 text-xs md:text-sm">Duration</h4>
                <p className="text-brand-dark/70 text-xs md:text-sm">{selectedProject.duration}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-dark mb-1 text-xs md:text-sm">Services</h4>
                <p className="text-brand-dark/70 text-xs md:text-sm">{selectedProject.services.length} Services</p>
              </div>
            </div>

            {/* Short Summary */}
            <div className="mb-6">
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-brand-dark">Quick Overview</h3>
              <p className="text-brand-dark/70 text-sm md:text-base mb-3 line-clamp-2">
                <strong>Challenge:</strong> {selectedProject.challenge.substring(0, 150)}...
              </p>
              <p className="text-brand-dark/70 text-sm md:text-base line-clamp-2">
                <strong>Solution:</strong> {selectedProject.solution.substring(0, 150)}...
              </p>
            </div>

            {/* Visual Preview */}
            <div className={`${selectedProject.color} aspect-video rounded-xl border-2 border-brand-dark mb-6 flex items-center justify-center`}>
              <span className="font-display text-3xl md:text-5xl text-brand-dark/20 font-bold">
                {String(selectedProject.id).padStart(2, '0')}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sticky bottom-0 bg-brand-cream pt-4 -mx-6 md:-mx-10 px-6 md:px-10 pb-2">
              <Link 
                href={`/portfolio/${selectedProject.slug}`}
                className="flex-1 bg-brand-lime text-brand-dark px-6 py-3 font-bold text-base md:text-lg text-center hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark rounded-lg"
                onClick={() => setSelectedProject(null)}
              >
                VIEW FULL CASE STUDY →
              </Link>
              <Link 
                href="/contact"
                className="flex-1 bg-transparent text-brand-dark px-6 py-3 font-bold text-base md:text-lg text-center hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark rounded-lg"
              >
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let's create something amazing for your brand too.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cream transition-all duration-300 border-2 border-brand-lime rounded-lg"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
