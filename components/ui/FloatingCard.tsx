'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
      transition={
        prefersReducedMotion
          ? {}
          : { duration: 3.5 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay }
      }
      className={`bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 flex items-center gap-2 ${className}`}
      data-cursor
    >
      {children}
    </motion.div>
  );
}
