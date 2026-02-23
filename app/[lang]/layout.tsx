// app/[lang]/layout.tsx
import { Syne, Space_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getTranslations, Locale } from '@/lib/i18n'  // ✅ Import getTranslations

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

// ✅ Layout harus async karena load translations
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = params

  // ✅ Load translations di server (hanya sekali per request)
  const t = {
    common: await getTranslations(lang as Locale, 'common'),
  }

  return (
    <div className={`${syne.variable} ${spaceMono.variable} min-h-screen flex flex-col bg-[var(--bg-primary)]`}>
      {/* ✅ Pass lang & translations ke Navbar */}
      <Navbar lang={lang} t={t.common} />
      
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* ✅ Pass lang & translations ke Footer */}
      <Footer lang={lang} t={t.common} />
    </div>
  )
}