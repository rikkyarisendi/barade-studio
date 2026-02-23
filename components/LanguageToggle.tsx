// components/LanguageToggle.tsx (Globe Icon Version - Adaptive)
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface LanguageToggleProps {
  currentLang: string;
  bgScheme: 'light' | 'dark' | 'lime'; // ✅ Tambahin prop ini!
  className?: string;
}

export default function LanguageToggle({ currentLang, bgScheme, className = '' }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (newLang: string) => {
      if (newLang === currentLang) return;
      const pathWithoutLocale = pathname?.replace(/^\/(id|en)/, '') || '/';
      const newPath = `/${newLang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
      document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      router.push(newPath);
    },
    [currentLang, pathname, router]
  );

  // ✅ Adaptive colors based on bgScheme (SAME LOGIC AS NAVBAR ITEMS)
  const isOverBrightBg = bgScheme === 'lime';

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => switchLanguage(currentLang === 'id' ? 'en' : 'id')}
        className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          // ✅ Active state: filled with lime + dark text/border
          (currentLang === 'en' && !isOverBrightBg) || (currentLang === 'id' && isOverBrightBg)
            ? 'bg-brand-lime text-brand-dark border-brand-dark hover:bg-[var(--border-color)] hover:text-brand-lime'
            : // ✅ Inactive state: transparent + adaptive colors
              isOverBrightBg
              ? 'bg-transparent border-brand-dark text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
              : 'bg-transparent border-[var(--border-color)] text-[var(--text-primary)] hover:border-brand-lime hover:text-brand-lime'
        }`}
        aria-label={`Switch to ${currentLang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
        title={currentLang === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia'}
      >
        {/* Globe Icon - Adaptive stroke color */}
        <svg 
          className={`w-4 h-4 transition-colors duration-300 ${
            isOverBrightBg ? 'stroke-brand-dark' : 'stroke-current'
          }`}
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        
        {/* Language Text - Adaptive color */}
        <span className={`text-xs font-bold transition-colors duration-300 ${
          isOverBrightBg ? 'text-brand-dark' : 'text-current'
        }`}>
          {currentLang === 'id' ? 'ID' : 'EN'}
        </span>
      </button>
    </div>
  );
}