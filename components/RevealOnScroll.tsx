// components/RevealOnScroll.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  threshold?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  animation = 'up',
  threshold = 0.1,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px',
    amount: threshold,
  });

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'up' ? 40 : animation === 'down' ? -40 : 0,
      x: animation === 'left' ? 40 : animation === 'right' ? -40 : 0,
      scale: animation === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Premium easing
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}