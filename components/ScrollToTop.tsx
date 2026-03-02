'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (typeof window === 'undefined') return;
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > 320);

       const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight || 1;
      const ratio = Math.min(Math.max(y / docHeight, 0), 1);
      setProgress(ratio);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reset visibility on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'auto' });
    setVisible(false);
  }, [pathname]);

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`
        fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-[60]
        inline-flex items-center justify-center
        h-10 w-10 sm:h-11 sm:w-11
        bg-transparent
        text-[var(--text-primary)]
        transition-all duration-300
        hover:-translate-y-1
        group
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}
      `}
    >
      <svg
        viewBox="0 0 24 24"
        className="scrolltop-arrow h-8 w-8 text-[var(--text-primary)] group-hover:text-brand-lime transition-colors duration-300 drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]"
        aria-hidden="true"
      >
        {/* Progress ring */}
        <circle
          cx="12"
          cy="12"
          r="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={2 * Math.PI * 7.5}
          strokeDashoffset={(1 - progress) * 2 * Math.PI * 7.5}
          className="origin-center -rotate-90 transition-[stroke-dashoffset] duration-200 ease-out"
        />
        {/* Arrow (chevron), slightly inset from ring */}
        <path
          d="M8.5 14l3.5-3.5L15.5 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

