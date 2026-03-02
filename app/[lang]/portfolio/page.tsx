// app/[lang]/portfolio/page.tsx

import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import PortfolioClient from '@/components/PortfolioClient';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';

const path = (lang: string, segment: string) => `/${lang}${segment}`;

// ✅ Dynamic Metadata per locale
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  const t = await getTranslations(lang as Locale);
  
  return {
    title: `${t.portfolio?.seo?.title || 'Portfolio'} | Baradé Studio`,
    description: t.portfolio?.seo?.description || 'Explore our recent work in branding, web development, and digital design.',
    openGraph: {
      title: `${t.portfolio?.seo?.title || 'Portfolio'} | Baradé Studio`,
      description: t.portfolio?.seo?.description || 'Explore our recent work in branding, web development, and digital design.',
      type: 'website',
    },
  };
}

export default async function PortfolioPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load ALL translations (flat structure - no namespace)
  const t = await getTranslations(lang as Locale);

  // ✅ Get projects (tetap sama)
  const projects = getAllProjects(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-36 pb-20 px-4 sm:px-6 lg:px-8 -mt-20 mb-20 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Blobs - hero */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-28 left-[-8%] w-80 h-80 bg-[var(--accent-lime)]/18" />
          <div className="blob-base blob-float-b absolute bottom-[-8rem] right-[-6rem] w-96 h-96 bg-[var(--bg-primary)]/20" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll animation="up" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">{t.portfolio?.hero?.title_part1}</span>
              <span className="text-brand-dark dark:text-brand-lime">{t.portfolio?.hero?.title_part2}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.25}>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl">
              {t.portfolio?.hero?.subtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Client Component - handles filter + modal */}
      {projects.length > 0 ? (
        <RevealOnScroll animation="up" delay={0.15}>
          <PortfolioClient 
            projects={projects} 
            lang={lang}
            t={t.portfolio}
          />
        </RevealOnScroll>
      ) : (
        <section className="py-20 px-4 text-center">
          <p className="text-xl text-[var(--text-muted)]/60">
            {t.portfolio?.empty_state}
          </p>
        </section>
      )}

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Blobs - CTA */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-24 right-[-10%] w-80 h-80 bg-[var(--accent-lime)]/18" />
          <div className="blob-base blob-float-b absolute bottom-[-10rem] left-[-6rem] w-96 h-96 bg-[var(--bg-primary)]/22" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll animation="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              {t.portfolio?.cta?.title_part1}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.2}>
            <p className="text-xl text-[var(--text-muted)] mb-8">
              {t.portfolio?.cta?.subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.3}>
            <Link
              href={path(lang, '/contact')}
              className="btn-cta-dark group"
            >
              {t.common?.buttons?.start_project}
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}
