'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  bgScheme: 'light' | 'dark' | 'lime';
}

export default function ThemeToggle({ bgScheme }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Determine if over bright background
  const isOverBrightBg = bgScheme === 'lime';
  
  // ✅ Icon color class: dark when over lime, adaptive otherwise
  const iconColorClass = isOverBrightBg 
    ? 'stroke-brand-dark' 
    : 'stroke-[var(--text-primary)]';

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-full border-2 border-[var(--border-color)] flex items-center justify-center transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 bg-[var(--border-color)]/20 rounded-full" />
      </button>
    );
  }

  return (
    <>
      {/* ✅ Animasi Keyframes - Subtle Left/Right Rotation */}
      <style jsx global>{`
        @keyframes idleRotate {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        
        @keyframes hoverGlow {
          0%, 100% {
            filter: drop-shadow(0 0 0 rgba(220, 249, 0, 0));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(220, 249, 0, 0.5));
          }
        }
      `}</style>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`group w-9 h-9 rounded-full border-2 flex items-center justify-center hover:bg-brand-lime transition-all duration-300 active:scale-90 ${
          isOverBrightBg ? 'border-brand-dark' : 'border-[var(--border-color)]'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          // ☀️ Sun icon - Adaptive color + subtle rotate + hover to black
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={`${iconColorClass} group-hover:stroke-brand-dark transition-all duration-300 group-hover:animate-[hoverGlow_1.5s_ease-in-out_infinite]`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: 'idleRotate 2s ease-in-out infinite',
            }}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          // 🌙 Moon icon - Adaptive color + subtle rotate + hover to black
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={`${iconColorClass} group-hover:stroke-brand-dark transition-all duration-300 group-hover:animate-[hoverGlow_1.5s_ease-in-out_infinite]`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: 'idleRotate 2s ease-in-out infinite',
            }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </>
  );
}