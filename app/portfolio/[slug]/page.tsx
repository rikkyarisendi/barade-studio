import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getRelatedProjects, AdditionalImage } from '@/lib/projects';

// ✅ Component untuk Additional Images (Grid Layout - Opsional)
function AdditionalImagesGrid({ images, title }: { images: AdditionalImage[]; title: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
        More From This Project
      </h2>
      
      {/* Grid: Auto adjust 1-3 columns based on screen size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="relative aspect-square rounded-2xl border-4 border-[var(--border-color)] overflow-hidden group hover:scale-[1.02] transition-transform duration-300 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]"
          >
            <Image
              src={img.path}
              alt={img.alt || `${title} - Image ${idx + 1}`}
              fill
              className="object-cover"
            />
            {/* Caption on Hover */}
            {img.alt && (
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="text-brand-lime font-bold text-center text-sm">{img.alt}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, project.category);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-brand-dark hover:text-brand-dark/70 mb-6 font-bold transition-colors group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio | 
          </Link>
          
          <div className="ml-2 inline-block bg-brand-dark text-brand-lime px-2 py-1 text-sm font-bold mb-6 rounded-lg">
            {project.category}
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Info Bar - Dark Mode Support */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-dark dark:text-brand-lime uppercase tracking-wide">Client</h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base">{project.client}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-dark dark:text-brand-lime uppercase tracking-wide">Year</h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base">{project.year}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-dark dark:text-brand-lime uppercase tracking-wide">Duration</h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base">{project.duration}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-dark dark:text-brand-lime uppercase tracking-wide">Category</h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base">{project.category}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Services Provided */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
              Services Provided
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] border-2 border-[var(--border-color)] rounded-xl hover:border-brand-lime transition-colors duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)] font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              The Challenge
            </h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* ✅ 1. PROJECT SHOWCASE (16:9) - Badge hover, tipis */}
          {project.projectShowcase && (
            <div className="relative aspect-video rounded-2xl border-4 border-[var(--border-color)] overflow-hidden group bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
              <Image
                src={project.projectShowcase}
                alt={`${project.title} - Showcase`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* ✅ Badge - Bottom Left, Lime, Tipis, Hover Only */}
              <div className="absolute bottom-4 left-4 bg-brand-lime text-brand-dark px-2 py-0.5 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                Project Showcase
              </div>
            </div>
          )}

          {/* Our Solution */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Our Solution
            </h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* ✅ 2 & 3. DESIGN DETAIL + IMPLEMENTATION (1:1) - Badge hover, tipis */}
          {(project.designDetail || project.implementation) && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Design Detail */}
              {project.designDetail && (
                <div className="relative aspect-square rounded-2xl border-4 border-[var(--border-color)] overflow-hidden group hover:scale-[1.02] transition-transform duration-300 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
                  <Image
                    src={project.designDetail}
                    alt={`${project.title} - Design Detail`}
                    fill
                    className="object-cover"
                  />
                  {/* ✅ Badge - Bottom Left, Lime, Tipis, Hover Only */}
                  <div className="absolute bottom-4 left-4 bg-brand-lime text-brand-dark px-2 py-0.5 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                    Design Detail
                  </div>
                </div>
              )}

              {/* Implementation */}
              {project.implementation && (
                <div className="relative aspect-square rounded-2xl border-4 border-[var(--border-color)] overflow-hidden group hover:scale-[1.02] transition-transform duration-300 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
                  <Image
                    src={project.implementation}
                    alt={`${project.title} - Implementation`}
                    fill
                    className="object-cover"
                  />
                  {/* ✅ Badge - Bottom Left, Lime, Tipis, Hover Only */}
                  <div className="absolute bottom-4 left-4 bg-brand-lime text-brand-dark px-2 py-0.5 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                    Implementation
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ✅ 4. ADDITIONAL IMAGES (Auto Grid - Optional) */}
          <AdditionalImagesGrid 
            images={project.additionalImages || []} 
            title={project.title} 
          />

          {/* Results & Impact - Lime Background */}
          <div className="bg-brand-lime p-8 md:p-12 rounded-2xl border-4 border-brand-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl"></div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark relative z-10">
              Results & Impact
            </h2>
            <p className="text-brand-dark/90 text-lg leading-relaxed relative z-10">
              {project.results}
            </p>
          </div>

          {/* Client Testimonial - Dark Mode Support */}
          {project.testimonial && (
            <div className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 md:p-12 rounded-2xl border-4 border-brand-lime relative">
              <div className="absolute top-8 left-8 text-brand-dark/20 dark:text-brand-lime/20 text-9xl font-display leading-none">"</div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 italic text-[var(--text-primary)]">
                  {project.testimonial.quote}
                </p>
                <div className="border-t-2 border-brand-dark/30 dark:border-brand-lime/30 pt-6">
                  <p className="font-display text-xl font-bold text-brand-dark dark:text-brand-lime">{project.testimonial.author}</p>
                  <p className="text-[var(--text-muted)]">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}

          {/* External Links Section */}
          {project.externalLinks && Object.keys(project.externalLinks).length > 0 && (
            <div className="border-t-4 border-[var(--border-color)]/10 pt-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-[var(--text-primary)]">
                View on Other Platforms
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.externalLinks.behance && (
                  <a 
                    href={project.externalLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-bold rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover:scale-105"
                  >
                    <span className="text-2xl">🎨</span> 
                    <span>View on Behance</span>
                  </a>
                )}
                {project.externalLinks.dribbble && (
                  <a 
                    href={project.externalLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-bold rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover:scale-105"
                  >
                    <span className="text-2xl">🏀</span> 
                    <span>View on Dribbble</span>
                  </a>
                )}
                {project.externalLinks.website && (
                  <a 
                    href={project.externalLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-bold rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover:scale-105"
                  >
                    <span className="text-2xl">🌐</span> 
                    <span>Visit Live Website</span>
                  </a>
                )}
                {project.externalLinks.github && (
                  <a 
                    href={project.externalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-bold rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover:scale-105"
                  >
                    <span className="text-2xl">💻</span> 
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.externalLinks.instagram && (
                  <a 
                    href={project.externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-bold rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover:scale-105"
                  >
                    <span className="text-2xl">📸</span> 
                    <span>View on Instagram</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Navigation */}
          <div className="border-t-4 border-[var(--border-color)]/10 pt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[var(--text-primary)] hover:text-brand-lime font-bold text-lg transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects - Dark Mode Support */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">
              More <span className="text-brand-lime">{project.category}</span> Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group cursor-pointer hover-lift block"
                >
                  {/* Related Project Thumbnail */}
                  {relatedProject.thumbnail ? (
                    <div className="relative aspect-square rounded-xl mb-4 border-2 border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
                      <Image
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <span className="text-brand-lime font-display text-xl font-bold">View Project</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`${relatedProject.color} aspect-square rounded-xl mb-4 flex items-center justify-center border-2 border-[var(--border-color)] bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]`}>
                      <span className="font-display text-5xl font-bold text-[var(--text-muted)]">
                        {String(relatedProject.id).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                  
                  <div className="inline-block bg-brand-lime px-3 py-1 text-xs font-bold mb-2 rounded dark:text-brand-dark">
                    {relatedProject.category}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-brand-lime transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    {relatedProject.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Dark Mode Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            INTERESTED IN <span className="text-brand-lime">WORKING TOGETHER?</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your brand. Whether you need branding, web development, or design services, we're here to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg hover:scale-105"
          >
            START YOUR PROJECT →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}