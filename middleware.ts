// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configuration
const locales = ['id', 'en'] as const
type Locale = typeof locales[number]
const defaultLocale: Locale = 'id'

// Helper untuk validasi locale
function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Helper untuk extract locale dari Accept-Language header
function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    // Parse Accept-Language header
    const languages = acceptLanguage.split(',')
    for (const lang of languages) {
      const locale = lang.split(';')[0].trim().toLowerCase()
      // Cek exact match (e.g., 'id' or 'en')
      if (isValidLocale(locale)) {
        return locale
      }
      // Cek prefix match (e.g., 'id-ID' -> 'id')
      const shortLocale = locale.split('-')[0] as Locale
      if (isValidLocale(shortLocale)) {
        return shortLocale
      }
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip untuk static files, API routes, dan Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // Files with extensions (images, fonts, etc.)
  ) {
    return NextResponse.next()
  }

  // Normalize pathname
  const pathnameHasLeadingSlash = pathname.startsWith('/')
  const pathnameWithoutTrailingSlash = pathname.endsWith('/') 
    ? pathname.slice(0, -1) 
    : pathname
  const normalizedPathname = pathnameHasLeadingSlash
    ? pathnameWithoutTrailingSlash
    : `/${pathnameWithoutTrailingSlash}`

  // Ambil segment pertama dari pathname
  const firstSegment = normalizedPathname.split('/')[1]

  // Cek apakah pathname sudah memiliki locale
  const pathnameHasLocale = isValidLocale(firstSegment)

  // Jika belum ada locale, redirect ke default atau preferred locale
  if (!pathnameHasLocale) {
    const preferredLocale = getPreferredLocale(request)
    const redirectUrl = new URL(
      `/${preferredLocale}${normalizedPathname}`,
      request.url
    )
    
    // Set cookie untuk remember locale preference
    const response = NextResponse.redirect(redirectUrl)
    response.cookies.set('NEXT_LOCALE', preferredLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    })
    
    return response
  }

  // Jika locale tidak valid, redirect ke default locale
  if (firstSegment && !isValidLocale(firstSegment)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${normalizedPathname}`, request.url)
    )
  }

  // Allow request to continue
  return NextResponse.next()
}

// Matcher configuration - routes yang akan di-process oleh middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes (kecuali yang butuh i18n)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/webhook).*)',
  ],
}