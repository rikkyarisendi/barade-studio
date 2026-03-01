// app/[lang]/services/page.tsx

import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import RevealOnScroll from '@/components/RevealOnScroll';

const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function ServicesPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load ALL translations (flat structure - no namespace)
  const t = await getTranslations(lang as Locale);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll animation="up" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-brand-dark">
              {t.services?.hero?.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="up" delay={0.25}>
            <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto">
              {t.services?.hero?.subtitle}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-20">
          
          {/* Graphic Design */}
          <RevealOnScroll animation="up" delay={0.1} className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">01</div>
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.graphic_design?.title}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">🎨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.graphic_design?.description}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.graphic_design?.features || []).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-dark text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={path(lang, '/contact')} 
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">🎨</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Web Development */}
          <RevealOnScroll animation="up" delay={0.15} className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">02</div>
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.web_development?.title}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">💻</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.web_development?.description}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.web_development?.features || []).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-dark text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={path(lang, '/contact')} 
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2 md:order-1">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">💻</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Branding */}
          <RevealOnScroll animation="up" delay={0.2} className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">03</div>
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.brand_strategy?.title}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">✨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.brand_strategy?.description}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.brand_strategy?.features || []).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-dark text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={path(lang, '/contact')} 
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">✨</span>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <RevealOnScroll animation="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
              {t.services?.process?.title_part1} <span className="text-brand-dark dark:text-brand-lime">{t.services?.process?.title_part2}</span>
            </h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-4 gap-8">
            {(t.services?.process?.steps || []).map((step: any, idx: number) => (
              <RevealOnScroll key={idx} animation="up" delay={0.1 * idx}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-dark dark:bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-lime dark:text-brand-dark">
                    {step.num}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">{step.title}</h3>
                  <p className="text-[var(--text-muted)]">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}