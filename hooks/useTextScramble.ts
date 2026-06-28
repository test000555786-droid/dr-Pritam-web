import { useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useTextScramble(ref: React.RefObject<HTMLElement | null>, finalText: string) {
  return useCallback(() => {
    const el = ref.current;
    if (!el) return;
    let iteration = 0;
    const interval = setInterval(() => {
      el.innerText = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iteration) return finalText[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 0.5;
    }, 35);
  }, [ref, finalText]);
}
