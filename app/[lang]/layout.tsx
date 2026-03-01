// app/[lang]/layout.tsx

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Footer from '@/components/Footer';
import '../globals.css';

// ✅ Fonts
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-sans',
  display: 'swap',
});

// ✅ Dynamic Import Navbar dengan ssr: false
const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false,
  loading: () => (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[var(--bg-primary)] border-b-2 border-[var(--border-color)] z-50" />
  )
});

// ✅ Metadata
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  const t = await getTranslations(lang as Locale);
  
  return {
    title: {
      template: `%s | Baradé Studio`,
      default: t.common?.labels?.brand || 'Baradé Studio',
    },
    description: t.common?.labels?.description || 'Product design and visual identity studio based in Bandung, Indonesia.',
    alternates: {
      languages: {
        'id': '/id',
        'en': '/en',
      },
    },
  };
}

// ✅ Root Layout
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const t = await getTranslations(lang as Locale);

  return (
    <html lang={lang} className={`${syne.variable} ${jakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)]">  
        
        {/* ✅ Kirim FULL t object, biar component bisa akses t.nav, t.footer, dll */}
        <Navbar lang={lang} t={t} />
        
        <main className="flex-1 pt-20 mt-0">{children}</main>
        
        {/* ✅ Kirim FULL t object juga */}
        <Footer lang={lang} t={t} />
        
      </body>
    </html>
  );
}