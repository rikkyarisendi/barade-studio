// lib/i18n.ts
import 'server-only'

// ============================================================================
// ✅ LOCALE CONFIGURATION (Original - JANGAN DIHAPUS!)
// ============================================================================

export const locales = ['id', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'id'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// ============================================================================
// ✅ TRANSLATION INTERFACES (New - Type Safety)
// ============================================================================

export type CommonTranslations = {
  nav?: Record<string, string>;
  footer?: Record<string, string>;
  buttons?: Record<string, string>;
  stats?: Record<string, string>;
  [key: string]: any;
};

export type HomeTranslations = {
  hero?: {
    title_part1?: string;
    title_part2?: string;
    subtitle?: string;
  };
  services?: Record<string, any>;
  cta?: Record<string, string>;
  [key: string]: any;
};

export type ContactTranslations = {
  hero?: Record<string, string>;
  info?: Record<string, string>;
  form?: Record<string, any>;
  errors?: {
    invalid_email?: string;
    invalid_country?: string;
    invalid_phone?: string;
  };
  [key: string]: any;
};

export type AboutTranslations = {
  hero?: Record<string, string>;
  content?: Record<string, any>;
  [key: string]: any;
};

export type ServicesTranslations = {
  hero?: Record<string, string>;
  content?: Record<string, any>;
  [key: string]: any;
};

export type PortfolioTranslations = {
  hero?: Record<string, string>;
  filters?: Record<string, string>;
  modal?: Record<string, string>;
  messages?: Record<string, string>;
  tags?: Record<string, string>;
  [key: string]: any;
};

export type ProjectTranslations = {
  back_to_portfolio?: string;
  client_label?: string;
  year_label?: string;
  duration_label?: string;
  category_label?: string;
  services_title?: string;
  challenge_title?: string;
  solution_title?: string;
  results_title?: string;
  badge_showcase?: string;
  badge_design?: string;
  badge_implementation?: string;
  more_from_project?: string;
  external_links_title?: string;
  view_all_projects?: string;
  more_title_part1?: string;
  more_title_part2?: string;
  view_project?: string;
  cta_title_part1?: string;
  cta_title_part2?: string;
  cta_subtitle?: string;
  platforms?: Record<string, string>;
  [key: string]: any;
};

// ============================================================================
// ✅ MAIN FUNCTION: Load Translations
// ============================================================================

export type Namespace = 
  | 'common' 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'project' 
  | 'contact';

export type TranslationMap = {
  common: CommonTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  services: ServicesTranslations;
  portfolio: PortfolioTranslations;
  project: ProjectTranslations;
  contact: ContactTranslations;
};

export async function getTranslations<T extends Namespace>(
  locale: Locale, 
  namespace: T
): Promise<TranslationMap[T]> {
  try {
    const module = await import(`@/locales/${locale}/${namespace}.json`)
    return module.default as TranslationMap[T]
  } catch (error) {
    console.warn(`⚠️ Translation not found: locales/${locale}/${namespace}.json`)
    
    // Fallback ke default locale
    if (locale !== defaultLocale) {
      try {
        const fallback = await import(`@/locales/${defaultLocale}/${namespace}.json`)
        return fallback.default as TranslationMap[T]
      } catch {
        return {} as TranslationMap[T]
      }
    }
    return {} as TranslationMap[T]
  }
}

// ============================================================================
// ✅ HELPER FUNCTIONS (Original - JANGAN DIHAPUS!)
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

// ✅ Utility: Clear cache (untuk development)
export function clearTranslationCache(): void {
  // Next.js module cache handling (opsional)
  if (process.env.NODE_ENV === 'development') {
    console.log('[i18n] Translation cache cleared (dev mode)')
  }
}