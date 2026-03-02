'use client';

import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: number; // seberapa miring (derajat)
  scale?: number; // seberapa besar saat hover
}

export default function TiltCard({
  children,
  className = '',
  intensity = 8,
  scale = 1.02,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isFinePointer =
      window.matchMedia &&
      window.matchMedia('(pointer: fine)').matches;

    // Untuk user yang sensitif motion atau device touch, jangan pakai tilt JS
    if (prefersReducedMotion || !isFinePointer) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const px = x / rect.width - 0.5; // -0.5 .. 0.5
      const py = y / rect.height - 0.5;

      const rotateX = -py * intensity * 2;
      const rotateY = px * intensity * 2;

      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }

      frame.current = window.requestAnimationFrame(() => {
        el.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-6px)
          scale(${scale})
        `;
      });
    };

    const reset = () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }

      frame.current = window.requestAnimationFrame(() => {
        el.style.transform =
          'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', reset);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', reset);
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [intensity, scale]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

