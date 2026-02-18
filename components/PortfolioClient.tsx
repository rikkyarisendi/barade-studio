'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/lib/projects';

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => 
        project.category === activeFilter || project.tags?.includes(activeFilter)
      );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(6);
  };

  return (
    <>
      {/* Filter Tabs */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-3 py-1 text-sm sm:px-4 sm:py-1 sm:text-base font-bold border-2 transition-all duration-300 rounded-lg ${
                  activeFilter === category
                    ? 'bg-brand-lime text-brand-dark border-brand-dark'
                    : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-[var(--accent-lime)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[var(--text-muted)] mb-8 font-medium">
            Showing {displayedProjects.length} of {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.slug}
                className="group cursor-pointer hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* ✅ Card Thumbnail - FIX: Explicit background untuk kontras */}
                <div className={`${project.color} aspect-square rounded-xl mb-3 border-2 border-[var(--border-color)] overflow-hidden relative flex items-center justify-center bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]`}>
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="font-display text-6xl font-bold text-[var(--text-muted)]">
                      {String(project.id || index + 1).padStart(2, '0')}
                    </span>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 bg-brand-lime text-brand-dark px-2 py-0.5 rounded text-xs font-bold z-0">
                    {project.category}
                  </div>

                  {/* ✅ Quick View Overlay - FIX: Pakai black biar kontras di both modes */}
                  <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-brand-lime font-display text-2xl font-bold">Quick View</span>
                  </div>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-[var(--border-color)]/10 text-[var(--text-muted)] px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="bg-[var(--border-color)]/5 text-[var(--text-muted)]/50 px-2 py-0.5 rounded text-[10px] sm:text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold mb-2 text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-[var(--text-muted)]/50 font-display">
                No projects found for this filter
              </p>
            </div>
          )}

          {/* Load More Button */}
          {displayedProjects.length < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="inline-block bg-[var(--border-color)] text-brand-lime px-2 py-1 font-normal text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                LOAD MORE PROJECTS →
              </button>
            </div>
          )}

          {/* View All Button */}
          {activeFilter !== 'All' && filteredProjects.length > 0 && (
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                onClick={() => {
                  setActiveFilter('All');
                  setVisibleCount(6);
                }}
                className="inline-block bg-transparent text-[var(--text-primary)] px-8 py-4 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Modal Preview */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 dark:bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[var(--bg-primary)] max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border-4 border-brand-lime p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-3xl md:text-4xl font-bold text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors leading-none z-10 bg-[var(--bg-primary)] hover:bg-brand-lime rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[var(--border-color)]"
              aria-label="Close"
            >
              ×
            </button>

            <div className="inline-block bg-brand-lime text-brand-dark px-3 py-1 text-sm font-bold mb-4 rounded">
              {selectedProject.category}
            </div>

            <h2 className="font-display text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-3 pr-12">
              {selectedProject.title}
            </h2>

            <p className="text-base md:text-lg text-[var(--text-muted)] mb-6">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 pb-6 border-b-2 border-[var(--border-color)]/10">
              <div>
                <h4 className="font-display font-bold text-[var(--text-primary)] mb-1 text-xs md:text-sm">Client</h4>
                <p className="text-[var(--text-muted)] text-xs md:text-sm">{selectedProject.client}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-[var(--text-primary)] mb-1 text-xs md:text-sm">Year</h4>
                <p className="text-[var(--text-muted)] text-xs md:text-sm">{selectedProject.year}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-[var(--text-primary)] mb-1 text-xs md:text-sm">Duration</h4>
                <p className="text-[var(--text-muted)] text-xs md:text-sm">{selectedProject.duration}</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-[var(--text-primary)] mb-1 text-xs md:text-sm">Services</h4>
                <p className="text-[var(--text-muted)] text-xs md:text-sm">{selectedProject.services.length} Services</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-[var(--text-primary)]">Quick Overview</h3>
              <p className="text-[var(--text-muted)] text-sm md:text-base mb-3">
                <strong>Challenge:</strong> {selectedProject.challenge.substring(0, 200)}...
              </p>
              <p className="text-[var(--text-muted)] text-sm md:text-base">
                <strong>Solution:</strong> {selectedProject.solution.substring(0, 200)}...
              </p>
            </div>

            {/* Modal Visual Preview */}
            <div className="mb-6">
              <div className="relative aspect-video rounded-xl border-4 border-[var(--border-color)] overflow-hidden">
                {selectedProject.quickViewImage ? (
                  <Image
                    src={selectedProject.quickViewImage}
                    alt={selectedProject.title}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : selectedProject.projectShowcase ? (
                  <Image
                    src={selectedProject.projectShowcase}
                    alt={selectedProject.title}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : selectedProject.thumbnail ? (
                  <Image
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className={`${selectedProject.color} w-full aspect-video flex items-center justify-center`}>
                    <span className="font-display text-3xl md:text-5xl text-[var(--text-muted)] font-bold">
                      {String(selectedProject.id || 0).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/portfolio/${selectedProject.slug}`}
                className="flex-1 bg-brand-lime text-brand-dark px-6 py-3 font-bold text-base md:text-lg text-center hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
                onClick={() => setSelectedProject(null)}
              >
                VIEW FULL CASE STUDY →
              </Link>
              <Link
                href="/contact"
                className="flex-1 bg-transparent text-[var(--text-primary)] px-6 py-3 font-bold text-base md:text-lg text-center hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}