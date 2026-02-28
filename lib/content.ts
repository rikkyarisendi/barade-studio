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

export function getServices(locale?: Locale): Service[] {
  const services = servicesData as Service[];
  
  if (!locale) return services;
  
  return services.map(service => ({
    ...service,
    title: typeof service.title === 'object' 
      ? (service.title as TranslatedString)[locale] 
      : service.title as string,
    description: typeof service.description === 'object' 
      ? (service.description as TranslatedString)[locale] 
      : service.description as string,
    pricing: typeof service.pricing === 'object' 
      ? (service.pricing as TranslatedString)[locale] 
      : service.pricing as string,
    deliveryTime: typeof service.deliveryTime === 'object' 
      ? (service.deliveryTime as TranslatedString)[locale] 
      : service.deliveryTime as string,
  }));
}

export function getServiceBySlug(slug: string, locale?: Locale): Service | null {
  const service = servicesData.find((s: any) => s.slug === slug);
  if (!service) return null;
  
  if (!locale) return service as Service;
  
  return {
    ...service,
    title: typeof service.title === 'object' 
      ? (service.title as TranslatedString)[locale] 
      : service.title as string,
    description: typeof service.description === 'object' 
      ? (service.description as TranslatedString)[locale] 
      : service.description as string,
    pricing: typeof service.pricing === 'object' 
      ? (service.pricing as TranslatedString)[locale] 
      : service.pricing as string,
    deliveryTime: typeof service.deliveryTime === 'object' 
      ? (service.deliveryTime as TranslatedString)[locale] 
      : service.deliveryTime as string,
  } as Service;
}

// ============================================================================
// TRANSLATIONS
// ============================================================================

export async function getTranslations(locale: Locale, namespace?: string) {
  const module = await import(`@/locales/${locale}.json`);
  const translations = module.default;
  
  if (namespace) {
    return translations[namespace];
  }
  
  return translations;
}