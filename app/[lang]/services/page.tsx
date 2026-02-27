// app/[lang]/services/page.tsx
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

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
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-brand-dark">
            {t.services?.hero?.title || 'SERVICES'}
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto animate-slide-in">
            {t.services?.hero?.subtitle || 'Product design and digital development solutions focused on results and business effectiveness.'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-20">
          
          {/* Graphic Design */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">01</div>
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.graphic_design?.title || 'VISUAL IDENTITY'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">🎨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.graphic_design?.description || 'Building consistent impressions through robust design systems. From brand identity to marketing assets, every element is crafted to strengthen your message.'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.graphic_design?.features || [
                  'Logo Design & Brand Identity',
                  'Typography & Color Systems',
                  'Social Media Assets',
                  'Packaging Design',
                  'Custom Graphics & Illustration'
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
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'Get Started'}
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
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.web_development?.title || 'WEB DEVELOPMENT'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">💻</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.web_development?.description || 'Building a digital presence with modern, responsive websites. Focusing on speed, security, and user experience.'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.web_development?.features || [
                  'Custom Website Development',
                  'E-commerce Solutions',
                  'Responsive & Mobile-First Design',
                  'System & CMS Integration',
                  'Maintenance & Technical Support'
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
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'Get Started'}
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
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {t.services?.brand_strategy?.title || 'PRODUCT DESIGN (UI/UX)'}
                </h2>
              </div>
              
              {/* Image Placeholder - Mobile */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">✨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                {t.services?.brand_strategy?.description || 'Designing efficient digital flows. I help businesses define user experiences that facilitate conversion and customer interaction.'}
              </p>
              <ul className="space-y-3 mb-8">
                {(t.services?.brand_strategy?.features || [
                  'User Research & Analysis',
                  'User Flow & Wireframing',
                  'High-Fidelity Prototyping',
                  'Interactive Interface Design',
                  'UX Audit & Optimization'
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
                className="inline-block bg-brand-lime text-brand-dark px-4 py-2 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
              >
                {t.common?.buttons?.get_started || 'Get Started'}
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
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
            {t.services?.process?.title_part1 || 'WORK'} <span className="text-brand-dark dark:text-brand-lime">{t.services?.process?.title_part2 || 'FLOW'}</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {(t.services?.process?.steps || [
              { num: 1, title: 'Analysis', desc: 'Dissecting business needs, target audience, and existing technical constraints.' },
              { num: 2, title: 'Architecture', desc: 'Organizing information structure and visual strategy before moving to execution.' },
              { num: 3, title: 'Execution', desc: 'Designing and developing the system with strictly maintained quality standards.' },
              { num: 4, title: 'Deployment', desc: 'Product launch and monitoring to ensure optimal performance.' },
            ]).map((step: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-brand-dark dark:bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-lime dark:text-brand-dark">
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