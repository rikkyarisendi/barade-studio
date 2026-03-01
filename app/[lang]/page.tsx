// app/[lang]/page.tsx
// ❌ NO 'use client' - Tetap Server Component!

import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { getSiteConfig, getServices } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import RevealOnScroll from '@/components/RevealOnScroll';  // ✅ Import
import Section from '@/components/Section';  // ✅ Import

const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function HomePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const t = await getTranslations(lang as Locale);
  const site = getSiteConfig();
  const services = getServices(lang as Locale);

  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-20">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <RevealOnScroll animation="scale" duration={2} delay={0}>
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-lime)]/20 rounded-full blur-3xl" />
          </RevealOnScroll>
          <RevealOnScroll animation="scale" duration={2} delay={0.5}>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--border-color)]/20 rounded-full blur-3xl" />
          </RevealOnScroll>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Title */}
          <RevealOnScroll animation="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-[var(--text-primary)]">
                {t.home?.hero?.title_part1}
              </span>
              <span className="block text-gradient bg-[length:200%_auto] animate-gradient-x">
                {t.home?.hero?.title_part2}
              </span>
            </h1>
          </RevealOnScroll>
          
          {/* Subtitle */}
          <RevealOnScroll animation="up" delay={0.3}>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto font-body leading-relaxed">
              {t.home?.hero?.subtitle}
            </p>
          </RevealOnScroll>
          
          {/* Buttons */}
          <RevealOnScroll animation="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                href={path(lang, '/portfolio')} 
                className="btn-premium rounded-lg group"
              >
                {t.common?.buttons?.view_work}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href={path(lang, '/contact')} 
                className="btn-premium btn-outline group rounded-lg"
              >
                {t.common?.buttons?.get_in_touch}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>

          {/* Stats */}
          <RevealOnScroll animation="up" delay={0.7}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 md:mt-32 pb-16">
              {site.stats.filter(s => s.show).sort((a, b) => a.order - b.order).map((stat, i) => (
                <RevealOnScroll key={stat.key} animation="up" delay={0.1 * i}>
                  <div className="text-center group">
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                      {stat.number}
                    </p>
                    <p className="text-[var(--text-muted)] text-sm md:text-base mt-3 font-medium uppercase tracking-wider">
                      {t.common?.stats?.[stat.key]}
                    </p>
                    <div className="h-px w-0 group-hover:w-full mx-auto mt-3 bg-[var(--accent-lime)] transition-all duration-500" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          
          <RevealOnScroll animation="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
                SERVICES
              </h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.filter(s => s.featured).sort((a, b) => a.order - b.order).map((service, i) => (
              <RevealOnScroll key={service.slug} animation="up" delay={0.15 * i}>
                <div className="group card card--hoverable h-full flex flex-col">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] flex-grow mb-6 font-body leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={path(lang, '/services')} 
                    className="inline-flex items-center gap-2 text-[var(--text-primary)] font-semibold group/link mt-auto"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-lime)] group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section - Adaptive dengan Guaranteed Contrast */}
<Section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--accent-lime)] relative overflow-hidden">
  {/* Pattern Overlay - Adaptive */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, var(--text-on-lime) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />
  </div>
  
  <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-10">
    <RevealOnScroll animation="up" delay={0}>
      {/* Title - Always dark text on lime */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--text-on-lime)]">
        {t.home?.cta?.title}
      </h2>
      
      {/* Description - Always dark text on lime dengan opacity yang bener */}
      <p className="text-lg md:text-xl text-[var(--text-on-lime)]/90 dark:text-[var(--text-on-lime)] mb-10 max-w-2xl mx-auto font-body">
        {t.home?.cta?.subtitle}
      </p>
      
      {/* Button - Dark background dengan light text, hover yang bener */}
      <Link 
        href={path(lang, '/contact')} 
        className="btn-cta-lime group"
      >
        {t.common?.buttons?.contact_now}
        <svg 
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </RevealOnScroll>
  </div>
</Section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}