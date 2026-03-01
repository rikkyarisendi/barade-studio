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
    <>
      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Render Client Component dengan translations sebagai props */}
      <RevealOnScroll animation="up" delay={0.1}>
        <ContactForm lang={lang} t={t} />
      </RevealOnScroll>
      
      {/* ✅ JANGAN tambah <Footer /> - udah ada di layout */}
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}