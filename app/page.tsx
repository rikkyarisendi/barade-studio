// app/page.tsx
import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export const metadata = {
  robots: 'noindex, follow', // ✅ Jangan index root page, cukup locale pages
};

export default function RootPage() {
  // ✅ Redirect ke default locale (/id)
  redirect(`/${defaultLocale}`);
}