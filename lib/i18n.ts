// lib/i18n.ts
import 'server-only'
import type { Locale, Translations } from '@/types/content'

// ============================================================================
// ✅ LOCALE CONFIGURATION
// ============================================================================

export const locales = ['id', 'en'] as const
export type { Locale }
export const defaultLocale: Locale = 'id'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// ============================================================================
// ✅ MAIN FUNCTION: Load Translations (FLAT STRUCTURE)
// ============================================================================

export async function getTranslations(locale: Locale): Promise<Translations> {
  try {
    const module = await import(`@/locales/${locale}.json`)
    return module.default as Translations
  } catch (error) {
    console.warn(`⚠️ Translation not found: locales/${locale}.json`)
    
    // Fallback ke default locale
    if (locale !== defaultLocale) {
      try {
        const fallback = await import(`@/locales/${defaultLocale}.json`)
        return fallback.default as Translations
      } catch {
        return {} as Translations
      }
    }
    return {} as Translations
  }
}

// ============================================================================
// ✅ HELPER FUNCTIONS
// ============================================================================

export function formatDate(date: Date | string, locale: Locale): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

export function formatNumber(num: number, locale: Locale, currency?: string): string {
  if (currency) {
    return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: currency,
    }).format(num)
  }
  return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(num)
}

export function clearTranslationCache(): void {
  if (process.env.NODE_ENV === 'development') {
    console.log('[i18n] Translation cache cleared (dev mode)')
  }
}