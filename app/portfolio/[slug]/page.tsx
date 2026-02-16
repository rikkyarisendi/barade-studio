import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getRelatedProjects } from '@/lib/projects';

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
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
          </Link>
          
          <div className="inline-block bg-brand-dark text-brand-lime px-4 py-2 text-sm font-bold mb-6 rounded-lg">
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

      {/* Project Info Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-lime uppercase tracking-wide">Client</h3>
            <p className="text-brand-gray text-sm md:text-base">{project.client}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-lime uppercase tracking-wide">Year</h3>
            <p className="text-brand-gray text-sm md:text-base">{project.year}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-lime uppercase tracking-wide">Duration</h3>
            <p className="text-brand-gray text-sm md:text-base">{project.duration}</p>
          </div>
          <div>
            <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-lime uppercase tracking-wide">Category</h3>
            <p className="text-brand-gray text-sm md:text-base">{project.category}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Services Provided */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark">
              Services Provided
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-4 bg-brand-cream border-2 border-brand-dark rounded-xl hover:border-brand-lime transition-colors duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-brand-dark font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
              The Challenge
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Visual Placeholder 1 */}
          <div className={`${project.color} aspect-video rounded-2xl border-4 border-brand-dark flex flex-col items-center justify-center relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-transparent"></div>
            <span className="font-display text-6xl md:text-8xl text-brand-dark/10 font-bold relative z-10">01</span>
            <span className="text-brand-dark/40 font-bold mt-2 relative z-10">Project Showcase</span>
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
              Our Solution
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Visual Grid Placeholder */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${project.color} aspect-square rounded-2xl border-4 border-brand-dark flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-transparent"></div>
              <span className="font-display text-6xl md:text-7xl text-brand-dark/10 font-bold relative z-10">02</span>
              <span className="text-brand-dark/40 font-bold mt-2 relative z-10 text-sm">Design Detail</span>
            </div>
            <div className={`${project.color} aspect-square rounded-2xl border-4 border-brand-dark flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-transparent"></div>
              <span className="font-display text-6xl md:text-7xl text-brand-dark/10 font-bold relative z-10">03</span>
              <span className="text-brand-dark/40 font-bold mt-2 relative z-10 text-sm">Implementation</span>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="bg-brand-lime p-8 md:p-12 rounded-2xl border-4 border-brand-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl"></div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark relative z-10">
              Results & Impact
            </h2>
            <p className="text-brand-dark/90 text-lg leading-relaxed relative z-10">
              {project.results}
            </p>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="bg-brand-dark p-8 md:p-12 rounded-2xl border-4 border-brand-lime text-brand-cream relative">
              <div className="absolute top-8 left-8 text-brand-lime/20 text-9xl font-display leading-none">"</div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                  {project.testimonial.quote}
                </p>
                <div className="border-t-2 border-brand-lime/30 pt-6">
                  <p className="font-display text-xl font-bold text-brand-lime">{project.testimonial.author}</p>
                  <p className="text-brand-gray">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}

          {/* External Links Section */}
          {project.externalLinks && Object.keys(project.externalLinks).length > 0 && (
            <div className="border-t-4 border-brand-dark/10 pt-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-dark">
                View on Other Platforms
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.externalLinks.behance && (
                  <a 
                    href={project.externalLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-brand-dark text-brand-cream font-bold rounded-xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark hover:scale-105"
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
                    className="inline-flex items-center gap-3 px-6 py-4 bg-brand-dark text-brand-cream font-bold rounded-xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark hover:scale-105"
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
                    className="inline-flex items-center gap-3 px-6 py-4 bg-brand-dark text-brand-cream font-bold rounded-xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark hover:scale-105"
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
                    className="inline-flex items-center gap-3 px-6 py-4 bg-brand-dark text-brand-cream font-bold rounded-xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark hover:scale-105"
                  >
                    <span className="text-2xl">💻</span> 
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Navigation */}
          <div className="border-t-4 border-brand-dark/10 pt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-lime font-bold text-lg transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-brand-dark">
              More <span className="text-brand-lime">{project.category}</span> Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group cursor-pointer hover-lift block"
                >
                  <div className={`${relatedProject.color} aspect-square rounded-xl mb-4 flex items-center justify-center border-2 border-brand-dark overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-brand-lime font-display text-xl font-bold">View Project</span>
                    </div>
                    <span className="font-display text-5xl font-bold text-brand-dark/20">
                      {String(relatedProject.id).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="inline-block bg-brand-lime px-3 py-1 text-xs font-bold mb-2 rounded">
                    {relatedProject.category}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-brand-dark group-hover:text-brand-lime transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-brand-dark/70 text-sm">
                    {relatedProject.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            INTERESTED IN <span className="text-brand-lime">WORKING TOGETHER?</span>
          </h2>
          <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your brand. Whether you need branding, web development, or design services, we're here to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cream transition-all duration-300 border-2 border-brand-lime rounded-lg hover:scale-105"
          >
            START YOUR PROJECT →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
