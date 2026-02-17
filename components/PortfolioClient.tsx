'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/lib/projects';

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ✅ Limit cards based on screen size (mobile vs desktop)
  const [visibleCount, setVisibleCount] = useState(6); // Default desktop

  // ✅ Filter tabs = Categories ONLY (no tags)
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  // ✅ Filter logic: match category OR tags
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => 
        project.category === activeFilter || project.tags?.includes(activeFilter)
      );

  // ✅ Slice projects based on visibleCount
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // ✅ Handle "Load More" button
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  // ✅ Reset visibleCount when filter changes
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(6); // Reset to 6 when filter changes
  };

  return (
    <>
      {/* Filter Tabs - Categories ONLY */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-3 py-1 text-sm sm:px-4 sm:py-1 sm:text-base font-bold border-2 border-brand-dark transition-all duration-300 rounded-lg ${
                  activeFilter === category
                    ? 'bg-brand-lime text-brand-dark'
                    : 'bg-brand-cream text-brand-dark hover:bg-brand-dark hover:text-brand-lime'
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
          <p className="text-center text-brand-dark/70 mb-8 font-medium">
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
                {/* ✅ Card Thumbnail - Category Badge INSIDE Image */}
                <div className={`${project.color} aspect-square rounded-xl mb-3 border-2 border-brand-dark overflow-hidden relative flex items-center justify-center`}>
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="font-display text-6xl font-bold text-brand-dark/20">
                      {String(project.id || index + 1).padStart(2, '0')}
                    </span>
                  )}
                  
                  {/* ✅ Category Badge - Inside Image (Bottom Left) */}
                  <div className="absolute bottom-3 left-3 bg-brand-lime text-brand-dark px-2 py-0.5 rounded text-xs font-bold">
                    {project.category}
                  </div>

                  {/* ✅ Quick View Overlay - z-10 supaya di atas badge */}
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-brand-lime font-display text-2xl font-bold">Quick View</span>
                  </div>
                </div>

                {/* ✅ Tags - Badge style (soft color) di bawah gambar */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-brand-dark/10 text-brand-dark/70 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="bg-brand-dark/5 text-brand-dark/50 px-2 py-0.5 rounded text-[10px] sm:text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold mb-2 text-brand-dark">
                  {project.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-brand-dark/50 font-display">
                No projects found for this filter
              </p>
            </div>
          )}

          {/* ✅ Load More Button - Show if there are more projects */}
          {displayedProjects.length < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="inline-block bg-brand-dark text-brand-lime px-2 py-1 font-normal text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg"
              >
                LOAD MORE PROJECTS →
              </button>
            </div>
          )}

          {/* ✅ View All Button - Show if filtered and there are more */}
          {activeFilter !== 'All' && filteredProjects.length > 0 && (
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                onClick={() => {
                  setActiveFilter('All');
                  setVisibleCount(6);
                }}
                className="inline-block bg-transparent text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark rounded-lg"
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ✅ Modal Preview - 16:9 Landscape */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-brand-dark/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-brand-cream max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border-4 border-brand-lime p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-3xl md:text-4xl font-bold text-brand-dark hover:text-brand-dark/70 transition-colors leading-none z-10 bg-brand-cream hover:bg-brand-lime rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-brand-dark"
              aria-label="Close"
            >
              ×
            </button>

            <div className="inline-block bg-brand-lime px-3 py-1 text-sm font-bold mb-4 rounded">
              {selectedProject.category}
            </div>

            <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-dark mb-3 pr-12">
              {selectedProject.title}
            </h2>

            <p className="text-base md:text-lg text-brand-dark/80 mb-6">
              {selectedProject.description}
            </p>

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

            <div className="mb-6">
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-brand-dark">Quick Overview</h3>
              <p className="text-brand-dark/70 text-sm md:text-base mb-3">
                <strong>Challenge:</strong> {selectedProject.challenge.substring(0, 200)}...
              </p>
              <p className="text-brand-dark/70 text-sm md:text-base">
                <strong>Solution:</strong> {selectedProject.solution.substring(0, 200)}...
              </p>
            </div>

            {/* Modal Visual Preview - 16:9 Landscape */}
            <div className="mb-6">
              <div className="relative aspect-video rounded-xl border-4 border-brand-dark overflow-hidden">
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
                    <span className="font-display text-3xl md:text-5xl text-brand-dark/20 font-bold">
                      {String(selectedProject.id || 0).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
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
    </>
  );
}