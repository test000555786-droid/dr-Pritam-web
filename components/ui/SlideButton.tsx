'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import Link from 'next/link';

interface SlideButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  target?: string;
  rel?: string;
}

export function SlideButton({ href, onClick, children, variant = 'primary', className = '', type = 'button', target, rel }: SlideButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement | HTMLButtonElement>(0.25);

  const base = `relative overflow-hidden rounded-full px-8 py-4 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer ${variant === 'primary' ? 'bg-teal-600 text-white border-2 border-teal-600' : 'bg-transparent text-teal-600 border-2 border-teal-600'} ${className}`;

  const inner = (
    <>
      <span className="slide-fill" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href && (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:'))) {
    return (
      <a
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={base}
        target={target}
        rel={rel}
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={base}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      type={type}
      className={base}
    >
      {inner}
    </button>
  );
}
