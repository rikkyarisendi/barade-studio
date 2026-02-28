// app/[lang]/layout.tsx

import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n';
import { getSiteConfig } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { Metadata } from 'next';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'BARADE STUDIO - Creative Design & Web Development',
    template: '%s | BARADE STUDIO',
  },
  description: 'Professional graphic design and web development services.',
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const site = getSiteConfig();
  const t = await getTranslations(lang as Locale);

  return (
    <div className={`${syne.variable} ${jakartaSans.variable} min-h-screen flex flex-col bg-[var(--bg-primary)]`}>
      <Navbar lang={lang} t={t.nav} site={site} />
      <main className="flex-1 pt-20 mt-0">{children}</main>
      <Footer lang={lang} t={t.common} site={site} />
    </div>
  );
}