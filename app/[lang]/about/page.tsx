// app/[lang]/about/page.tsx
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

// Helper: bikin path dengan locale prefix
const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function AboutPage({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const { lang } = params;

  // ✅ Validasi locale
  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load translations
  const t = {
    common: await getTranslations(lang as Locale, 'common'),
    about: await getTranslations(lang as Locale, 'about'),
  };

  return (
    <>
      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[var(--text-primary)]">{t.about?.hero?.title_part1 || 'ABOUT'}</span>
            <br />
            <span className="text-brand-dark dark:text-brand-lime">{t.about?.hero?.title_part2 || 'BARADE STUDIO'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl animate-slide-in">
            {t.about?.hero?.subtitle || 'We are a creative studio passionate about transforming ideas into visual masterpieces...'}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6 text-brand-dark dark:text-brand-lime">
              {t.about?.story?.title || 'OUR STORY'}
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              {t.about?.story?.p1 || 'Founded in 2020, BARADE STUDIO emerged from a passion to create meaningful design...'}
            </p>
            <p className="text-[var(--text-muted)] mb-4">
              {t.about?.story?.p2 || 'We believe in the power of great design to transform businesses...'}
            </p>
            <p className="text-[var(--text-muted)]">
              {t.about?.story?.p3 || 'Today, we\'re proud to work with clients across Indonesia and beyond...'}
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
            {t.about?.values?.title_part1 || 'OUR'} <span className="text-brand-dark dark:text-brand-lime">{t.about?.values?.title_part2 || 'VALUES'}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', key: 'excellence' },
              { icon: '🤝', key: 'collaboration' },
              { icon: '💡', key: 'innovation' },
            ].map((value, i) => {
              const val = t.about?.values?.[value.key as keyof typeof t.about.values] as any;
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
            {t.about?.cta?.title || 'LET\'S WORK TOGETHER'}
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            {t.about?.cta?.subtitle || 'Ready to bring your vision to life?'}
          </p>
          <Link 
            href={path(lang, '/contact')} 
            className="inline-block bg-brand-dark text-brand-cream px-4 py-2 font-medium text-lg hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg"
          >
            {t.common?.buttons?.contact_now || 'CONTACT US NOW'}
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