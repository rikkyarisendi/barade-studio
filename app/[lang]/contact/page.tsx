// app/[lang]/contact/page.tsx

import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import ContactForm from './ContactForm';
import RevealOnScroll from '@/components/RevealOnScroll';

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!['id', 'en'].includes(lang)) {
    return <div>Locale not supported</div>;
  }

  // ✅ Load ALL translations (flat structure - no namespace)
  const t = await getTranslations(lang as Locale);

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Blobs - contact */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-base blob-float-a absolute -top-24 -left-10 w-80 h-80 bg-[var(--accent-lime)]/18" />
        <div className="blob-base blob-float-b absolute bottom-[-10rem] right-[-6rem] w-96 h-96 bg-[var(--bg-secondary)]/22" />
      </div>

      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Render Client Component dengan translations sebagai props */}
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll animation="up" delay={0.1}>
          <ContactForm lang={lang} t={t} />
        </RevealOnScroll>
      </div>

      {/* ✅ JANGAN tambah <Footer /> - udah ada di layout */}
    </main>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}