// lib/i18n.ts
import 'server-only'

// ✅ Define supported locales
export const locales = ['id', 'en'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'id'

// ✅ Validasi locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// ✅ Load translation JSON (server-side only)
export async function getTranslations(
  locale: Locale, 
  namespace: string
): Promise<Record<string, any>> {
  try {
    const module = await import(`@/locales/${locale}/${namespace}.json`)
    return module.default
  } catch (error) {
    console.warn(`⚠️ Translation not found: locales/${locale}/${namespace}.json`)
    // Fallback ke default locale kalau file tidak ditemukan
    if (locale !== defaultLocale) {
      try {
        const fallback = await import(`@/locales/${defaultLocale}/${namespace}.json`)
        return fallback.default
      } catch {
        return {}
      }
    }
    return {}
  }
}

// ✅ Helper: Format tanggal per locale
export function formatDate(date: Date | string, locale: Locale): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

// ✅ Helper: Format angka/currency per locale
export function formatNumber(num: number, locale: Locale, currency?: string): string {
  if (currency) {
    return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: currency,
    }).format(num)
  }
  return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(num)
}