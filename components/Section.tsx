// components/Section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export default function Section({ 
  children, 
  className = '', 
  delay = 0 
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<any>(null);
  
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  return (
    // @ts-ignore - Bypass type conflict framer-motion v12
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}