// app/[lang]/page.tsx

import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { getSiteConfig, getServices } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function HomePage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load ALL translations (flat structure - no namespace)
  const t = await getTranslations(lang as Locale);

  const site = getSiteConfig();
  const services = getServices(lang as Locale);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-36 md:pt-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-lime/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--border-color)]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-[var(--text-primary)]">{t.home.hero.title_part1}</span>
              <br />
              <span className="text-brand-lime">{t.home.hero.title_part2}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] mb-8 max-w-3xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href={path(lang, '/portfolio')} 
                className="bg-brand-lime text-brand-dark px-4 py-2 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover-lift w-full sm:w-auto text-center rounded-lg"
              >
                {t.common.buttons.view_work}
              </Link>
              <Link 
                href={path(lang, '/contact')} 
                className="bg-transparent text-[var(--text-primary)] px-4 py-2 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] hover-lift w-full sm:w-auto text-center rounded-lg"
              >
                {t.common.buttons.get_in_touch}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pb-16 animate-slide-in">
            {site.stats.filter(s => s.show).sort((a, b) => a.order - b.order).map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">{stat.number}</p>
                <p className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-brand-dark dark:text-brand-lime px-1 py-1 mt-2 border-2 border-[var(--border-color)] rounded-lg">
                  {t.common.stats[stat.key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
            <span className="text-brand-dark dark:text-brand-lime">{t.home.services.title}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.filter(s => s.featured).sort((a, b) => a.order - b.order).map((service, i) => (
              <div key={i} className="group p-8 border-2 border-brand-dark/30 dark:border-brand-lime/30 hover:border-brand-lime transition-all duration-300 hover-lift rounded-xl bg-[var(--bg-primary)] dark:bg-[#1a1a1a]">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-4 text-brand-dark dark:text-brand-lime">{service.title}</h3>
                <p className="text-[var(--text-muted)] mb-4">{service.description}</p>
                <Link href={path(lang, '/services')} className="text-brand-dark dark:text-brand-lime hover:underline font-bold">
                  {t.common.buttons.learn_more} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            {t.home.cta.title}
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            {t.home.cta.subtitle}
          </p>
          <Link 
            href={path(lang, '/contact')} 
            className="inline-block bg-brand-dark text-brand-cream px-4 py-2 font-medium text-lg hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg"
          >
            {t.common.buttons.contact_now}
          </Link>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}