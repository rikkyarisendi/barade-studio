// app/[lang]/services/page.tsx
import Link from 'next/link';
import { getTranslations, Locale } from '@/lib/i18n';

// Helper: bikin path dengan locale prefix
const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function ServicesPage({ 
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
    services: await getTranslations(lang as Locale, 'services'),
  };

  return (
    <>
      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Hero */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-brand-dark">
            {t.services?.hero?.title || 'OUR SERVICES'}
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto animate-slide-in">
            {t.services?.hero?.subtitle || 'Comprehensive creative solutions tailored to elevate your brand and drive results.'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Graphic Design */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">01</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  {t.services?.graphic_design?.title || 'GRAPHIC DESIGN'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">🎨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.graphic_design?.description || 'Create a lasting impression with stunning visual designs...'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.graphic_design?.features || [
                  'Logo Design & Brand Identity',
                  'Print Design (Brochures, Flyers, Business Cards)',
                  'Social Media Graphics',
                  'Packaging Design',
                  'Illustration & Custom Graphics'
                ]).map((feature: string, idx: number) => (
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
                className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'GET STARTED'}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">🎨</span>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">02</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  {t.services?.web_development?.title || 'WEB DEVELOPMENT'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">💻</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.web_development?.description || 'Build your online presence with modern, responsive websites...'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.web_development?.features || [
                  'Custom Website Development',
                  'E-commerce Solutions',
                  'Responsive Design',
                  'CMS Integration',
                  'Website Maintenance & Support'
                ]).map((feature: string, idx: number) => (
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
                className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'GET STARTED'}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2 md:order-1">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">💻</span>
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">03</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  {t.services?.brand_strategy?.title || 'BRAND STRATEGY'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">✨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.brand_strategy?.description || 'Define and strengthen your brand identity...'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.brand_strategy?.features || [
                  'Brand Discovery & Research',
                  'Brand Positioning & Messaging',
                  'Visual Identity System',
                  'Brand Guidelines',
                  'Brand Refresh & Rebranding'
                ]).map((feature: string, idx: number) => (
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
                className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'GET STARTED'}
              </Link>
            </div>
            
            {/* Image Placeholder - Desktop */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">✨</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
            {t.services?.process?.title_part1 || 'OUR'} <span className="text-brand-lime">{t.services?.process?.title_part2 || 'PROCESS'}</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {(t.services?.process?.steps || [
              { num: 1, title: 'Discovery', desc: 'We learn about your business, goals, and target audience.' },
              { num: 2, title: 'Strategy', desc: 'We develop a creative strategy tailored to your needs.' },
              { num: 3, title: 'Design', desc: 'We bring your vision to life with stunning visuals.' },
              { num: 4, title: 'Launch', desc: 'We deliver and support your project\'s success.' },
            ]).map((step: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">{step.title}</h3>
                <p className="text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
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