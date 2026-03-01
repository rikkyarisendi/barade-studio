// components/Footer.tsx
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';

interface FooterProps {
  lang: string;
  t: any; // Full translation object
}

export default function Footer({ lang, t }: FooterProps) {
  const site = getSiteConfig();
  const currentYear = new Date().getFullYear();

  const path = (segment: string) => {
    if (segment === '/') return `/${lang}`;
    return `/${lang}${segment}`;
  };

  const socialLinks = Object.entries(site.social)
    .filter(([_, data]) => data.show && data.url)
    .map(([name, data]) => ({
      name,
      url: data.url!,
      icon: getSocialIcon(name),
    }));

  const quickLinks = site.nav.items
    .filter(item => item.show)
    .sort((a, b) => a.order - b.order)
    .map(item => ({
      href: path(item.path),
      label: t.nav?.[item.key] || item.key,
    }));

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-t-4 border-[var(--accent-lime)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand - Kolom 1 */}
          <div>
            <Link href={path('/')} className="flex items-center gap-2 group">
              <h3 className="font-display text-2xl font-bold mb-2">
                <span className="text-[var(--accent-lime)]">BARADE</span>
                <span className="text-[var(--text-primary)]"> STUDIO</span>
              </h3>
            </Link>
            <p className="text-sm mb-4 text-[var(--text-muted)]">
              {t.footer?.tagline || 'Focusing on functional product design and visual identity to help businesses maintain a consistent and professional digital presence.'}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--text-muted)] hover:text-[var(--accent-lime)] transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Kolom 2 */}
          <div>
            <h4 className="font-display text-lg font-bold mb-2 text-[var(--accent-lime)]">
              {t.footer?.quick_links || 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--text-muted)] hover:text-[var(--accent-lime)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Kolom 3 */}
          <div>
            <h4 className="font-display text-lg font-bold mb-2 text-[var(--accent-lime)]">
              {t.footer?.contact_info || 'Contact'}
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li>
                Email: <a href={`mailto:${site.contact.email}`} className="hover:text-[var(--accent-lime)] transition-colors">{site.contact.email}</a>
              </li>
              <li>
                Phone: <a href={`tel:${site.contact.phone}`} className="hover:text-[var(--accent-lime)] transition-colors">{site.contact.phoneDisplay}</a>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border-color)]/30 mt-8 pt-8 text-center text-sm text-[var(--text-muted)]">
          <p>
            {(t.footer?.copyright || '© {{year}} Barade Studio. All rights reserved.')
            .replace('{{year}}', currentYear.toString())}
          </p>
          {t.footer?.made_with && (
            <p className="mt-2 text-xs opacity-70">
             {t.footer.made_with.replace('{{developer}}', site.brand.developer || 'Rikky Arisendi')}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

function getSocialIcon(name: string) {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    tiktok: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    behance: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.479-2.219-1.466 0-2.277.78-2.486 2.219zm-9.886-3.613c-1.435 0-2.172.84-2.172 2.28v5.333h-3.028v-11.375h3.028v2.28c.612-.75 1.48-1.18 2.605-1.18 2.22 0 3.548 1.79 3.548 4.79 0 3.023-1.74 4.805-3.981 4.805zm-.686-2.227c-1.297 0-2.135.817-2.135 2.38 0 1.56.84 2.39 2.135 2.39 1.276 0 2.115-.84 2.115-2.39 0-1.553-.84-2.38-2.115-2.38z"/>
      </svg>
    ),
    github: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    dribbble: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12 12-5.373 12-12S18.627 0 12 0zm7.844 5.594c1.425 1.748 2.294 3.966 2.347 6.378-.355-.074-3.916-.78-7.516-.34-.076-.175-.15-.35-.227-.524-.237-.533-.486-1.06-.745-1.578 3.966-1.622 5.778-3.93 5.93-4.135.073-.1.14-.203.211-.307zm-1.14-1.08c-.13.175-1.81 2.34-5.625 3.834-1.76-3.26-3.71-5.95-3.79-6.06 2.04-.85 4.38-1.12 6.76-.66 1.02.87 1.94 1.85 2.655 2.886zm-8.97-2.15c.08.11 1.92 2.68 3.66 5.85-4.42 1.17-8.31 1.13-8.68 1.12.61-2.88 2.42-5.34 5.02-6.97zm-7.92 8.18c.44.01 5.03.06 9.68-1.32.21.41.41.83.6 1.25-.11.04-.22.08-.33.12-4.88 1.57-7.46 5.82-7.82 6.43-1.4-1.74-2.28-3.92-2.33-6.31.06-.06.13-.11.2-.17zm2.07 7.02c.24-.41 2.43-4.06 7.03-5.72.02-.01.04-.01.06-.02 1.26 3.45 1.79 6.38 1.89 6.97-3.37.93-6.88.22-8.98-1.23zm11.02 1.65c-.11-.65-.58-3.28-1.76-6.56 3.43-.55 6.44.35 6.79.46-.47 2.6-1.9 4.88-3.91 6.52-.38-.15-.75-.3-1.12-.42z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}