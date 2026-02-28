// app/[lang]/about/page.tsx

import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function AboutPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load ALL translations (flat structure - no namespace)
  const t = await getTranslations(lang as Locale);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[var(--text-primary)]">{t.about?.hero?.title_part1}</span>
            <br />
            <span className="text-brand-dark dark:text-brand-lime">{t.about?.hero?.title_part2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl animate-slide-in">
            {t.about?.hero?.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6 text-brand-dark dark:text-brand-lime">
              {t.about?.story?.title}
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              {t.about?.story?.p1}
            </p>
            <p className="text-[var(--text-muted)] mb-4">
              {t.about?.story?.p2}
            </p>
            <p className="text-[var(--text-muted)]">
              {t.about?.story?.p3}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[var(--bg-primary)] dark:bg-[#1a1a1a] border-2 border-[var(--border-color)] rounded-lg flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-brand-lime/30">B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
            {t.about?.values?.title_part1} <span className="text-brand-dark dark:text-brand-lime">{t.about?.values?.title_part2}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', key: 'excellence' },
              { icon: '🤝', key: 'collaboration' },
              { icon: '💡', key: 'innovation' },
            ].map((value, i) => {
              const val = (t.about?.values as any)?.[value.key];
              return (
                <div key={i} className="text-center p-8 border-2 border-[var(--border-color)] hover-lift rounded-xl bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-[var(--text-primary)]">{val?.title}</h3>
                  <p className="text-[var(--text-muted)]">{val?.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-brand-dark">
            {t.about?.cta?.title}
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            {t.about?.cta?.subtitle}
          </p>
          <Link 
            href={path(lang, '/contact')} 
            className="inline-block bg-brand-dark text-brand-cream px-4 py-2 font-medium text-lg hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg"
          >
            {t.common?.buttons?.contact_now}
          </Link>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}