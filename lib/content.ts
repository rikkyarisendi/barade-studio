// lib/content.ts

import siteData from '@/data/site.json';
import servicesData from '@/data/services.json';

import type { 
  Locale, 
  SiteConfig, 
  Service, 
  TranslatedString 
} from '@/types/content';

// ============================================================================
// SITE CONFIG
// ============================================================================

export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

// ============================================================================
// SERVICES
// ============================================================================

// ✅ Helper: Get translated string from object or return as-is
function getTranslatedValue(
  value: string | TranslatedString | undefined,
  locale: Locale,
  fallback: string = ''
): string {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value[locale] || value.en || fallback;
}

// ✅ Selalu return Service[] yang udah di-translate (pake default 'en' kalau locale kosong)
export function getServices(locale: Locale = 'en'): Service[] {
  return servicesData.map((service: any) => {
    const title = getTranslatedValue(service.title, locale, service.slug);
    const description = getTranslatedValue(service.description, locale, '');
    
    const features = (service.features || []).map((f: any) => {
      if (typeof f === 'object' && f !== null) {
        return getTranslatedValue(f, locale, '');
      }
      return String(f);
    });

    return {
      slug: service.slug,
      category: service.category,
      icon: service.icon,
      featured: service.featured,
      order: service.order,
      title,
      description,
      features,
    };
  });
}

export function getServiceBySlug(slug: string, locale: Locale = 'en'): Service | null {
  const service = servicesData.find((s: any) => s.slug === slug);
  if (!service) return null;
  
  const title = getTranslatedValue(service.title, locale, service.slug);
  const description = getTranslatedValue(service.description, locale, '');
  
  const features = (service.features || []).map((f: any) => {
    if (typeof f === 'object' && f !== null) {
      return getTranslatedValue(f, locale, '');
    }
    return String(f);
  });

  return {
    slug: service.slug,
    category: service.category,
    icon: service.icon,
    featured: service.featured,
    order: service.order,
    title,
    description,
    features,
  };
}

// ============================================================================
// TRANSLATIONS (dengan cache sederhana)
// ============================================================================

const translationCache = new Map<string, any>();

export async function getTranslations(locale: Locale, namespace?: string) {
  const cacheKey = `${locale}:${namespace || 'all'}`;
  
  // Return dari cache kalau ada
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  try {
    const module = await import(`@/locales/${locale}.json`);
    const translations = module.default;
    
    const result = namespace ? translations[namespace] : translations;
    
    // Simpan ke cache
    translationCache.set(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error(`[Translation Error] Failed to load ${locale}.json:`, error);
    
    // Fallback ke English kalau locale nggak ditemukan
    if (locale !== 'en') {
      return getTranslations('en', namespace);
    }
    return namespace ? {} : {};
  }
}

// ✅ Helper: Akses nested translation key dengan aman
export function getTranslationKey(
  translations: any,
  keyPath: string,
  fallback: string = ''
): string {
  const keys = keyPath.split('.');
  let value: any = translations;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return fallback;
    }
  }
  
  return typeof value === 'string' ? value : fallback;
}