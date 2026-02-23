// app/[lang]/contact/page.tsx
import { getTranslations, Locale } from '@/lib/i18n';
import ContactForm from './ContactForm'; // Import client component

// Helper: bikin path dengan locale prefix
const path = (lang: string, segment: string) => `/${lang}${segment}`;

export default async function ContactPage({ 
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
    contact: await getTranslations(lang as Locale, 'contact'),
  };

  return (
    <>
      {/* ✅ JANGAN tambah <Navbar /> - udah ada di layout */}
      
      {/* Render Client Component dengan translations sebagai props */}
      <ContactForm lang={lang} t={t.contact} />
      
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