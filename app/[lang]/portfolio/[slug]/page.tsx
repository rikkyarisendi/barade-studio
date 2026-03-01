// app/[lang]/portfolio/[slug]/page.tsx
// ❌ JANGAN pakai 'use client' di sini!

import Link from 'next/link';
import Image from 'next/image';
import ImageWithLightbox from '@/components/ImageWithLightbox';  // ✅ Client component
import ProjectGallery from '@/components/ProjectGallery';  // ✅ Client component
import { notFound } from 'next/navigation';
import { 
  getProjectBySlug, 
  getRelatedProjects, 
  getAllProjectSlugs,
  AdditionalImage 
} from '@/lib/projects';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import RevealOnScroll from '@/components/RevealOnScroll';

const path = (lang: string, segment: string): string => {
  const cleanSegment = segment.startsWith('/') ? segment.slice(1) : segment;
  return `/${lang}/${cleanSegment}`;
};

// ✅ Server Component - boleh pakai generateStaticParams
export default async function ProjectDetailPage({ params }: { params: { slug: string; lang: string } }) {
  const { slug, lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  const project = getProjectBySlug(slug, lang);
  if (!project) notFound();

  const t = await getTranslations(lang as Locale);
  const relatedProjects = getRelatedProjects(project.slug, project.category, lang);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <RevealOnScroll animation="up" delay={0.05}>
            <Link 
              href={path(lang, 'portfolio')} 
              className="inline-flex items-center text-brand-dark hover:text-brand-dark/70 mb-6 font-bold transition-colors group"
              aria-label={t.project?.back_to_portfolio}
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span> 
              {t.project?.back_to_portfolio}
            </Link>
          </RevealOnScroll>
          
          <RevealOnScroll animation="up" delay={0.1}>
            <div className="ml-2 inline-block bg-brand-dark text-brand-lime px-2 py-1 text-sm font-bold mb-6 rounded-lg">
              {project.category}
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animation="up" delay={0.15}>
            <h1 className="font-display text-3xl md:text-6xl lg:text-5xl font-bold text-brand-dark mb-2 leading-tight">
              {project.title}
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll animation="up" delay={0.25}>
            <p className="text-xl md:text-2xl text-brand-dark/80 max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t.project?.client_label, value: project.client },
            { label: t.project?.year_label, value: project.year },
            { label: t.project?.duration_label, value: project.duration },
            { label: t.project?.category_label, value: project.category },
          ].map((item, idx) => (
            <RevealOnScroll key={idx} animation="up" delay={0.05 * idx}>
              <div>
                <h3 className="font-display text-sm md:text-lg font-bold mb-2 text-brand-dark dark:text-brand-lime uppercase tracking-wide">
                  {item.label}
                </h3>
                <p className="text-[var(--text-muted)] text-sm md:text-base">{item.value}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-8 py-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-6 md:space-y-18 lg:space-y-20">
          
          {/* Services Provided */}
          <RevealOnScroll animation="up" delay={0.1}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-[var(--text-primary)]">
                {t.project?.services_title}
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                {project.services.map((service, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-2 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] border-2 border-[var(--border-color)] rounded-xl hover:border-brand-lime transition-colors duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true">
                      <span className="text-brand-dark text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[var(--text-primary)] font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* The Challenge */}
          <RevealOnScroll animation="up" delay={0.15}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-[var(--text-primary)]">
                {t.project?.challenge_title}
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </RevealOnScroll>

          {/* ✅ Project Showcase - Client Component */}
          {project.projectShowcase && (
            <RevealOnScroll animation="up" delay={0.2}>
              <ImageWithLightbox
                src={project.projectShowcase}
                alt={`${project.title} - Showcase`}
                aspectRatio="aspect-video"
                priority
              />
            </RevealOnScroll>
          )}

          {/* Our Solution */}
          <RevealOnScroll animation="up" delay={0.25}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-[var(--text-primary)]">
                {t.project?.solution_title}
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </RevealOnScroll>

          {/* ✅ Design Detail + Implementation - Client Components */}
          {(project.designDetail || project.implementation) && (
            <RevealOnScroll animation="up" delay={0.3}>
              <div className="grid md:grid-cols-2 gap-6">
                {project.designDetail && (
                  <ImageWithLightbox
                    src={project.designDetail}
                    alt={`${project.title} - Design Detail`}
                    aspectRatio="aspect-square"
                  />
                )}
                {project.implementation && (
                  <ImageWithLightbox
                    src={project.implementation}
                    alt={`${project.title} - Implementation`}
                    aspectRatio="aspect-square"
                  />
                )}
              </div>
            </RevealOnScroll>
          )}

          {/* ✅ Additional Images - Client Component */}
          <RevealOnScroll animation="up" delay={0.35}>
            <ProjectGallery 
              images={project.additionalImages || []} 
              title={project.title}
              t={t.project}
            />
          </RevealOnScroll>

          {/* Results & Impact */}
          <RevealOnScroll animation="up" delay={0.4}>
            <div className="bg-brand-lime p-8 md:p-12 rounded-2xl border-2 border-brand-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl" aria-hidden="true"></div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-brand-dark relative z-10">
                {t.project?.results_title}
              </h2>
              <p className="text-brand-dark/90 text-lg leading-relaxed relative z-10">
                {project.results}
              </p>
            </div>
          </RevealOnScroll>

          {/* Client Testimonial */}
          {project.testimonial && (
            <RevealOnScroll animation="up" delay={0.45}>
              <blockquote className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 md:p-12 rounded-2xl border-2 border-brand-lime relative">
                <span className="absolute top-8 left-8 text-brand-dark/20 dark:text-brand-lime/20 text-9xl font-display leading-none" aria-hidden="true">&ldquo;</span>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl leading-relaxed mb-2 italic text-[var(--text-primary)]">
                    {project.testimonial.quote}
                  </p>
                  <footer className="border-t-2 border-brand-dark/30 dark:border-brand-lime/30 pt-2">
                    <p className="font-display text-xl font-bold text-brand-dark dark:text-brand-lime">{project.testimonial.author}</p>
                    <p className="text-[var(--text-muted)]">{project.testimonial.position}</p>
                  </footer>
                </div>
              </blockquote>
            </RevealOnScroll>
          )}

          {/* External Links */}
          {project.externalLinks && Object.keys(project.externalLinks).length > 0 && (
            <RevealOnScroll animation="up" delay={0.5}>
              <div className="border-t-2 border-[var(--border-color)]/10 pt-12">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-[var(--text-primary)]">
                  {t.project?.external_links_title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(project.externalLinks).map(([platform, url]) => {
                  if (platform.endsWith('_label') || typeof url !== 'string') return null;
                  
                  const platformLabels: Record<string, { icon: string; label: string }> = {
                    behance: { icon: '🎨', label: t.project?.platforms?.behance || 'View on Behance' },
                    dribbble: { icon: '🏀', label: t.project?.platforms?.dribbble || 'View on Dribbble' },
                    website: { icon: '🌐', label: t.project?.platforms?.website || 'Visit Live Website' },
                    github: { icon: '💻', label: t.project?.platforms?.github || 'View on GitHub' },
                    instagram: { icon: '📸', label: t.project?.platforms?.instagram || 'View on Instagram' },
                  };
                    const plat = platformLabels[platform];
                    if (!plat) return null;
                    
                    return (
                      <a 
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] font-medium rounded-xl hover:bg-brand-lime hover:dark:text-brand-lime transition-all duration-300 border-1 border-[var(--border-color)] hover:scale-105"
                        aria-label={plat.label}
                      >
                        <span className="text-1xl" aria-hidden="true">{plat.icon}</span> 
                        <span>{plat.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Project Navigation */}
          <RevealOnScroll animation="up" delay={0.55}>
            <nav className="border-t-4 border-[var(--border-color)]/10 pt-12" aria-label="Project navigation">
              <Link 
                href={path(lang, 'portfolio')}
                className="inline-flex items-center gap-2 text-[var(--text-primary)] hover:text-brand-lime font-bold text-lg transition-colors group"
              >
                <span className="group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
                {t.project?.view_all_projects}
              </Link>
            </nav>
          </RevealOnScroll>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]" aria-labelledby="related-projects-heading">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll animation="up" delay={0.1}>
              <h2 id="related-projects-heading" className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">
                {t.project?.more_title_part1} <span className="text-brand-dark dark:text-brand-lime">{project.category}</span> {t.project?.more_title_part2}
              </h2>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <RevealOnScroll key={relatedProject.id} animation="up" delay={0.1 * (index + 1)}>
                  <Link
                    href={path(lang, `portfolio/${relatedProject.slug}`)}
                    className="group cursor-pointer hover-lift block"
                  >
                    {relatedProject.thumbnail ? (
                      <div className="relative aspect-square rounded-xl mb-4 border-2 border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
                        <Image 
                          src={relatedProject.thumbnail} 
                          alt={relatedProject.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <span className="text-brand-lime font-display text-xl font-bold">
                            {t.project?.view_project}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={`${relatedProject.color} aspect-square rounded-xl mb-4 flex items-center justify-center border-2 border-[var(--border-color)] bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]`}>
                        <span className="font-display text-5xl font-bold text-[var(--text-muted)]" aria-hidden="true">
                          {String(relatedProject.id || 0).padStart(2, '0')}
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
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll animation="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              {t.project?.cta_title_part1} <br/><span className="text-brand-lime bg-brand-dark rounded-lg py-0 px-2 dark:text-brand-lime">{t.project?.cta_title_part2}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.2}>
            <p className="text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              {t.project?.cta_subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.3}>
            <Link 
              href={path(lang, 'contact')} 
              className="btn-premium btn-dark"
            >
              {t.common?.buttons?.start_project} →
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

// ✅ Generate static params - HANYA BISA DI SERVER COMPONENT
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  
  return ['id', 'en'].flatMap((locale) =>
    slugs.map((slug) => ({
      lang: locale,
      slug,
    }))
  );
}

// ✅ Metadata - HANYA BISA DI SERVER COMPONENT
export async function generateMetadata({ params }: { params: { slug: string; lang: string } }) {
  const { slug, lang } = params;
  
  const project = getProjectBySlug(slug, lang);
  const t = await getTranslations(lang as Locale);
  
  if (!project) {
    return { 
      title: 'Project Not Found | Baradé Studio',
      robots: 'noindex',
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const seoTitle = project.seo?.title || `${project.title} | Baradé Studio`;
  const seoDesc = project.seo?.description || project.description;
  const seoImage = project.seo?.image || project.projectShowcase;
  
  return {
    title: seoTitle,
    description: seoDesc,
    keywords: project.seo?.keywords,
    
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      type: 'website',
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      url: `${baseUrl}/${lang}/portfolio/${slug}`,
      siteName: 'Baradé Studio',
      images: seoImage ? [{ 
        url: `${baseUrl}${seoImage}`, 
        width: 1200, 
        height: 630, 
        alt: project.title 
      }] : undefined,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDesc,
      images: seoImage ? [`${baseUrl}${seoImage}`] : undefined,
    },
    
    alternates: {
      canonical: `${baseUrl}/${lang}/portfolio/${slug}`,
      languages: {
        'id': `/id/portfolio/${slug}`,
        'en': `/en/portfolio/${slug}`,
      },
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}