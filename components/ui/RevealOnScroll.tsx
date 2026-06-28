'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, direction = 'up', className }: Props) {
  const prefersReducedMotion = useReducedMotion();

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
