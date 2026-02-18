'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgScheme, setBgScheme] = useState<'light' | 'dark' | 'lime'>('light');
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

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
          if (bgColor.includes('220, 249, 0')) {
            setBgScheme('lime');
            return;
          } else if (
            bgColor.includes('26, 26, 26') ||
            bgColor.includes('32, 32, 32') ||
            bgColor.includes('42, 42, 42')
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

  useEffect(() => {
    const handleCloseOnScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleCloseOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleCloseOnScroll);
  }, [isOpen]);

  const isOverBrightBg = bgScheme === 'lime';
  const isDarkMode = bgScheme === 'dark';
  
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

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

      <nav className={`fixed w-full top-0 z-50 border-b-2 transition-all duration-300 ${
        isOverBrightBg
          ? 'bg-brand-lime/95 backdrop-blur-md border-brand-dark' 
          : isDarkMode
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-[var(--border-color)]'
            : 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-[var(--border-color)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <Logo 
                className={`h-10 sm:h-12 w-auto transition-colors duration-300 ${
                  isOverBrightBg ? 'text-brand-dark' : 'text-[var(--text-primary)]'
                }`} 
              />
              <div className="relative">
                <span className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                  isOverBrightBg ? 'text-brand-dark' : 'text-[var(--text-primary)]'
                }`}>
                  BARADE STUDIO
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 ${
                  isOverBrightBg ? 'bg-brand-dark' : 'bg-brand-lime'
                } w-0 group-hover:w-full transition-all duration-300`}></div>
              </div>
            </Link>

            {/* Desktop Menu - FIXED: Active = dark (light/lime bg) or lime (dark bg) */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`transition-colors duration-300 ${
                    isActive(item.href) 
                      ? `font-bold ${isDarkMode ? 'text-brand-lime' : 'text-brand-dark'}`  // ✅ Active: dark atau lime sesuai bg
                      : `font-medium ${
                          isOverBrightBg 
                            ? 'text-brand-dark hover:text-brand-dark/70' 
                            : 'text-[var(--text-primary)] hover:text-brand-lime'
                        }`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                className={`px-2 py-1 font-bold transition-all duration-300 border-2 rounded-lg ${
                  isOverBrightBg
                    ? 'bg-brand-dark text-brand-lime border-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                    : 'bg-brand-lime text-brand-dark border-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-brand-lime'
                }`}
              >
                Contact
              </Link>
              
              <ThemeToggle bgScheme={bgScheme} />
            </div>

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle bgScheme={bgScheme} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 transition-transform duration-200 active:scale-90 ${
                  isOverBrightBg ? 'text-brand-dark' : 'text-[var(--text-primary)]'
                }`}
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-brand-dark' : 'bg-[var(--text-primary)]'
                } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-brand-dark' : 'bg-[var(--text-primary)]'
                } ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isOverBrightBg ? 'bg-brand-dark' : 'bg-[var(--text-primary)]'
                } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu - FIXED: Active = dark (light/lime bg) or lime (dark bg) */}
          {isOpen && (
            <div 
              className={`md:hidden px-4 pb-4 border-t-2 overflow-hidden ${
                isOverBrightBg 
                  ? 'bg-brand-lime/95 backdrop-blur-md border-brand-dark' 
                  : 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-[var(--border-color)]'
              } menu-open`}
            >
              <div className="space-y-1 pt-3">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`menu-item block py-3 pl-2 font-medium transition-colors duration-200 border-l-2 border-transparent hover:border-brand-lime ${
                      isActive(item.href)
                        ? `font-bold ${isDarkMode ? 'text-brand-lime border-brand-lime' : 'text-brand-dark border-brand-dark'}`  // ✅ Active: dark atau lime sesuai bg
                        : `${
                            isOverBrightBg 
                              ? 'text-brand-dark hover:text-brand-dark/70' 
                              : 'text-[var(--text-primary)] hover:text-brand-lime'
                          }`
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="menu-item pt-2" style={{ animationDelay: '0.25s' }}>
                  <Link 
                    href="/contact" 
                    className={`block w-full px-6 py-3 font-bold text-center rounded-lg transition-all duration-300 border-2 ${
                      isOverBrightBg
                        ? 'bg-brand-dark text-brand-lime border-brand-dark'
                        : 'bg-brand-lime text-brand-dark border-[var(--border-color)]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}