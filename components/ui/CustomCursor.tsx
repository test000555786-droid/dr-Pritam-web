'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    let cx = 0;
    let cy = 0;
    let mx = 0;
    let my = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const enter = () => el.classList.add('cursor--hover');
    const leave = () => el.classList.remove('cursor--hover');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-cursor]').forEach((node) => {
      node.addEventListener('mouseenter', enter);
      node.addEventListener('mouseleave', leave);
    });

    const tick = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      el.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
