// components/RevealOnMount.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface RevealOnMountProps {
  children: ReactNode;
  /**
   * Animation direction
   * @default 'up'
   */
  animation?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
  /**
   * Animation duration (in seconds)
   * @default 0.8
   */
  duration?: number;
  /**
   * Additional className for the wrapper div
   */
  className?: string;
  /**
   * Stagger children animation (applies delay incrementally to direct children)
   * @default false
   */
  stagger?: boolean;
  /**
   * Delay increment for staggered children (in seconds)
   * @default 0.1
   */
  staggerDelay?: number;
}

export default function RevealOnMount({
  children,
  animation = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
}: RevealOnMountProps) {
  // Animation variants based on direction
  const getInitialVariant = () => {
    const variants = {
      up: { opacity: 0, y: 24 },
      down: { opacity: 0, y: -24 },
      left: { opacity: 0, x: 24 },
      right: { opacity: 0, x: -24 },
      scale: { opacity: 0, scale: 0.95 },
      fade: { opacity: 0 },
    };
    return variants[animation];
  };

  return (
    <motion.div
      initial={getInitialVariant()}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {stagger && Array.isArray(children)
        ? // Apply stagger to direct children
          (children as ReactNode[]).map((child, index) => (
            <motion.div
              key={index}
              initial={getInitialVariant()}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{
                delay: delay + index * staggerDelay,
                duration: duration * 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}