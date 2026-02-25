// app/[lang]/portfolio/page.tsx
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import PortfolioClient from '@/components/PortfolioClient';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Metadata } from 'next';

// Helper: bikin path dengan locale prefix
const path = (lang: string, segment: string) => `/${lang}${segment}`;

// ✅ Dynamic Metadata per locale
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  const t = await getTranslations(lang as Locale, 'portfolio');
  
  return {
    title: `${t?.seo?.title || 'Portfolio'} | Baradé Studio`,
    description: t?.seo?.description || 'Explore our recent work in branding, web development, and digital design.',
    openGraph: {
      title: `${t?.seo?.title || 'Portfolio'} | Baradé Studio`,
      description: t?.seo?.description || 'Explore our recent work in branding, web development, and digital design.',
      type: 'website',
    },
  };
}

export default async function PortfolioPage({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const { lang } = params;

  // ✅ Validasi locale
  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load translations (server-side)
  const t = {
    common: await getTranslations(lang as Locale, 'common'),
    portfolio: await getTranslations(lang as Locale, 'portfolio'),
  };

  // ✅ Get projects (tetap sama)
  const projects = getAllProjects(lang);

  return (
    <>
      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[var(--text-primary)]">{t.portfolio?.hero?.title_part1 || 'OUR '}</span>
            <span className="text-brand-dark dark:text-brand-lime">{t.portfolio?.hero?.title_part2 || 'PORTFOLIO'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl animate-slide-in">
            {t.portfolio?.hero?.subtitle || 'Explore our recent work and see how we\'ve helped brands stand out and succeed.'}
          </p>
        </div>
      </section>

      {/* Client Component - handles filter + modal */}
      {projects.length > 0 ? (
        // ✅ Pass translations + lang ke client component
        <PortfolioClient 
          projects={projects} 
          lang={lang}
          t={t.portfolio}
        />
      ) : (
        <section className="py-20 px-4 text-center">
          <p className="text-xl text-[var(--text-muted)]/60">
            {t.portfolio?.empty_state || 'No projects available yet. Check back soon!'}
          </p>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            {t.portfolio?.cta?.title_part1 || 'LIKE WHAT YOU SEE?'}
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-8">
            {t.portfolio?.cta?.subtitle || 'Let\'s create something amazing for your brand too.'}
          </p>
          <Link
            href={path(lang, '/contact')}
            className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
          >
            {t.common?.buttons?.start_project || 'START YOUR PROJECT'}
          </Link>
        </div>
      </section>

      {/* ✅ JANGAN tambah <Footer /> - udah ada di layout */}
    </>
  );
}

// ✅ Generate static params untuk SSG
export async function generateStaticParams() {
  return [
    { lang: 'id' },
    { lang: 'en' },
  ]
}