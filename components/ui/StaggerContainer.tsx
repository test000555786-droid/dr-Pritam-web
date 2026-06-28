'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={
        prefersReducedMotion
          ? { hidden: {}, visible: {} }
          : { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? { hidden: {}, visible: {} }
          : {
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
