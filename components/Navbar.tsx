// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import LanguageToggle from '@/components/LanguageToggle';
import { getSiteConfig } from '@/lib/content';

interface NavbarProps {
  lang: string;
  t: any;
}

export default function Navbar({ lang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bgScheme, setBgScheme] = useState<'light' | 'dark' | 'lime'>('light');
  const pathname = usePathname();
  const site = getSiteConfig();

  const path = (segment: string) => {
    if (segment === '/') return `/${lang}`;
    return `/${lang}${segment}`;
  };

  const isActive = (href: string) => {
    const homePath = `/${lang}`;
    if (href === homePath) {
      return pathname === homePath || pathname === `${homePath}/` || pathname === '/';
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  const menuItems = site.nav.items
    .filter(item => item.show && item.key !== 'contact')
    .sort((a, b) => a.order - b.order)
    .map(item => ({
      href: path(item.path),
      label: t.nav?.[item.key] || item.key,
    }));

  const contactItem = site.nav.items.find(item => item.key === 'contact' && item.show);

  // Background detection for navbar styling
  useEffect(() => {
    const detectBackground = () => {
      const navbarHeight = 80;
      const elementBelow = document.elementFromPoint(
        window.innerWidth / 2,
        navbarHeight + 10
      );

      if (!elementBelow) {
        setBgScheme('light');
        return;
      }

      let targetElement: Element | null = elementBelow;
      let maxDepth = 10;
      let depth = 0;

      while (targetElement && depth < maxDepth) {
        const bgColor = window.getComputedStyle(targetElement).backgroundColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          // ✅ Check for lime background (adaptive)
          if (bgColor.includes('220, 249, 0') || bgColor.includes('184, 230, 0')) {
            setBgScheme('lime');
            return;
          } else if (
            bgColor.includes('26, 26, 26') ||
            bgColor.includes('32, 32, 32') ||
            bgColor.includes('42, 42, 42') ||
            bgColor.includes('10, 10, 10')
          ) {
            setBgScheme('dark');
            return;
          } else {
            setBgScheme('light');
            return;
          }
        }
        targetElement = targetElement.parentElement;
        depth++;
      }
      setBgScheme('light');
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          detectBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectBackground);
    detectBackground();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectBackground);
    };
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleCloseOnScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleCloseOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleCloseOnScroll);
  }, [isOpen]);

  const isOverBrightBg = bgScheme === 'lime';
  const isDarkMode = bgScheme === 'dark';
  
  return (
    <>
      <style jsx global>{`
        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-10px) scaleY(0.95); transform-origin: top; }
          to { opacity: 1; transform: translateY(0) scaleY(1); transform-origin: top; }
        }
        @keyframes menuSlideUp {
          from { opacity: 1; transform: translateY(0) scaleY(1); transform-origin: top; }
          to { opacity: 0; transform: translateY(-10px) scaleY(0.95); transform-origin: top; }
        }
        @keyframes menuItemFadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .menu-open { animation: menuSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .menu-close { animation: menuSlideUp 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .menu-item { opacity: 0; animation: menuItemFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .menu-item:nth-child(1) { animation-delay: 0.05s; }
        .menu-item:nth-child(2) { animation-delay: 0.1s; }
        .menu-item:nth-child(3) { animation-delay: 0.15s; }
        .menu-item:nth-child(4) { animation-delay: 0.2s; }
        .menu-item:nth-child(5) { animation-delay: 0.25s; }
      `}</style>

      {/* ✅ Navbar: 100% Adaptive Colors */}
      <nav className={`fixed w-full top-0 z-50 border-b-2 transition-all duration-300 ${
        isOverBrightBg
          ? 'bg-[var(--accent-lime)]/80 backdrop-blur-lg border-[var(--border-color)]' 
          : 'bg-[var(--bg-primary)]/80 backdrop-blur-lg border-[var(--border-color)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo - Adaptive Colors */}
            <Link href={path('/')} className="flex items-center gap-2 sm:gap-3 group">
              <Logo 
                className={`h-10 sm:h-11 w-auto transition-colors duration-300 ${
                  isOverBrightBg ? 'text-[var(--text-on-lime)]' : 'text-[var(--text-primary)]'
                }`} 
              />
              <div className="relative">
                <span className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                  isOverBrightBg ? 'text-[var(--text-on-lime)]' : 'text-[var(--text-primary)]'
                }`}>
                  BARADE STUDIO
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 ${
                  isOverBrightBg ? 'bg-[var(--text-on-lime)]' : 'bg-[var(--accent-lime)]'
                } w-0 group-hover:w-full transition-all duration-300`}></div>
              </div>
            </Link>

            {/* Desktop Menu - Adaptive Colors */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`transition-colors duration-300 ${
                    isActive(item.href) 
                      ? `font-bold ${isOverBrightBg ? 'text-[var(--text-on-lime)]' : 'text-[var(--accent-lime)]'}`
                      : `${
                          isOverBrightBg 
                            ? 'text-[var(--text-on-lime)] hover:text-[var(--text-on-lime)]/70' 
                            : 'text-[var(--text-primary)] hover:text-[var(--accent-lime)]'
                        }`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Contact Button - Adaptive Colors with Guaranteed Contrast */}
              {contactItem && (
                <Link 
                  href={path(contactItem.path)} 
                  className={`px-3 py-1.5 font-medium transition-all duration-300 border-2 rounded-lg ${
                    isOverBrightBg
                      ? 'bg-[var(--text-on-lime)] text-[var(--accent-lime)] border-[var(--text-on-lime)] hover:bg-[var(--accent-lime)] hover:text-[var(--text-on-lime)]'
                      : 'bg-[var(--accent-lime)] text-[var(--text-on-lime)] border-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-[var(--accent-lime)]'
                  }`}
                >
                  {t.nav?.contact || 'Contact'}
                </Link>
              )}
              
              {/* Language Toggle + Theme Toggle */}
              <div className="flex items-center gap-2 pl-3 border-l border-[var(--border-color)]/30">
                <LanguageToggle currentLang={lang} bgScheme={bgScheme} />
                <ThemeToggle bgScheme={bgScheme} />
              </div>
            </div>

            {/* Mobile: Theme Toggle + Hamburger - Adaptive Colors */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle bgScheme={bgScheme} />
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 transition-transform duration-200 active:scale-90 ${
                  isOverBrightBg ? 'text-[var(--text-on-lime)]' : 'text-[var(--text-primary)]'
                }`}
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-[var(--text-on-lime)]' : 'bg-[var(--text-primary)]'
                } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-[var(--text-on-lime)]' : 'bg-[var(--text-primary)]'
                } ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-[var(--text-on-lime)]' : 'bg-[var(--text-primary)]'
                } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Adaptive Colors */}
          {isOpen && (
            <div 
              className={`md:hidden px-4 pb-4 border-t-2 overflow-hidden ${
                isOverBrightBg 
                  ? 'bg-[var(--accent-lime)]/95 backdrop-blur-md border-[var(--border-color)]' 
                  : 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-[var(--border-color)]'
              } menu-open`}
            >
              <div className="space-y-1 pt-3">
                {menuItems.map((item, index) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`menu-item block py-3 pl-2 font-medium transition-colors duration-200 border-l-2 border-transparent hover:border-[var(--accent-lime)] ${
                      isActive(item.href)
                        ? `font-bold ${isOverBrightBg ? 'text-[var(--text-on-lime)] border-[var(--text-on-lime)]' : 'text-[var(--accent-lime)] border-[var(--accent-lime)]'}`
                        : `${
                            isOverBrightBg 
                              ? 'text-[var(--text-on-lime)] hover:text-[var(--text-on-lime)]/70' 
                              : 'text-[var(--text-primary)] hover:text-[var(--accent-lime)]'
                          }`
                    }`}
                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Language Toggle in Mobile Menu */}
                <div className="menu-item pt-3 pb-2" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-center gap-3 py-2">
                    <span className="text-xs text-[var(--text-muted)] font-medium">Language:</span>
                    <LanguageToggle currentLang={lang} bgScheme={bgScheme} />
                  </div>
                </div>
                
                {/* Contact Button in Mobile Menu - Adaptive */}
                {contactItem && (
                  <div className="menu-item pt-2" style={{ animationDelay: '0.25s' }}>
                    <Link 
                      href={path(contactItem.path)} 
                      className={`block w-full px-4 py-2 font-bold text-center rounded-lg transition-all duration-300 border-2 ${
                        isOverBrightBg
                          ? 'bg-[var(--text-on-lime)] text-[var(--accent-lime)] border-[var(--text-on-lime)]'
                          : 'bg-[var(--accent-lime)] text-[var(--text-on-lime)] border-[var(--border-color)]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t.nav?.contact || 'Contact'}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}