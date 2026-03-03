// app/[lang]/about/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import RevealOnScroll from '@/components/RevealOnScroll';
import TiltCard from '@/components/TiltCard';

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
      <section className="min-h-screen flex items-center pt-36 pb-20 px-4 sm:px-6 lg:px-8 -mt-20 relative overflow-hidden">
        {/* Blurred blobs - hero */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-24 -left-16 w-72 h-72 bg-[var(--accent-lime)]/34" />
          <div className="blob-base blob-float-b absolute bottom-[-6rem] right-[-4rem] w-96 h-96 bg-[var(--border-color)]/24" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll animation="up" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">{t.about?.hero?.title_part1}</span>
              <br />
              <span className="text-brand-dark dark:text-brand-lime">{t.about?.hero?.title_part2}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.25}>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl">
              {t.about?.hero?.subtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story Section */}
      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Blurred blobs - story */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-32 -left-24 w-80 h-80 bg-[var(--accent-lime)]/30" />
          <div className="blob-base blob-float-b absolute bottom-[-6rem] right-[-4rem] w-96 h-96 bg-[var(--bg-primary)]/26" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* ✅ TEXT - order-2 di mobile (bawah), order-1 di desktop (kiri) */}
          <RevealOnScroll animation="left" delay={0.1} className="order-2 md:order-1">
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
          </RevealOnScroll>
          
          {/* ✅ IMAGE - order-1 di mobile (atas), order-2 di desktop (kanan) */}
          <RevealOnScroll animation="right" delay={0.15} className="order-1 md:order-2 relative">
          <TiltCard className="rounded-xl bg-[var(--bg-secondary)] dark:--bg-secondary">
            <div className=" aspect-square md:block relative bg-[var(--bg-primary)] dark:bg-[#1a1a1a] rounded-2xl border-2 border-[var(--border-color)] overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Working Approach - Baradé Studio"
                fill
                className="object-cover"
                priority
              />
            </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Blurred blobs - values */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-24 right-[-10%] w-72 h-72 bg-[var(--accent-lime)]/30" />
          <div className="blob-base blob-float-b absolute bottom-[-8rem] left-[-6rem] w-96 h-96 bg-[var(--bg-secondary)]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll animation="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
              {t.about?.values?.title_part1} <span className="text-brand-dark dark:text-brand-lime">{t.about?.values?.title_part2}</span>
            </h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', key: 'excellence' },
              { icon: '🤝', key: 'collaboration' },
              { icon: '💡', key: 'innovation' },
            ].map((value, i) => {
              const val = (t.about?.values as any)?.[value.key];
              return (
                <RevealOnScroll key={i} animation="up" delay={0.1 * i}>
                  <TiltCard className="text-center p-8 hover-lift card--hoverable rounded-xl bg-[var(--bg-secondary)] dark:--bg-secondary">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-[var(--text-primary)]">
                      {val?.title}
                    </h3>
                    <p className="text-[var(--text-muted)]">{val?.desc}</p>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-brand-lime relative overflow-hidden">
        {/* Blurred blobs - CTA */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob-base blob-float-a absolute -top-24 left-[-10%] w-80 h-80 bg-[var(--bg-primary)]/30" />
          <div className="blob-base blob-float-b absolute bottom-[-20%] right-[-5%] w-96 h-96 bg-[var(--border-color)]/34" />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll animation="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-brand-dark">
              {t.about?.cta?.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.2}>
            <p className="text-xl text-brand-dark mb-8">
              {t.about?.cta?.subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.3}>
            <Link 
              href={path(lang, '/contact')} 
              className="btn-cta-lime group"
            >
              {t.common?.buttons?.contact_now}
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