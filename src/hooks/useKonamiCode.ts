import { useEffect, useState, useRef } from 'react';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

/**
 * Returns true when the Konami code is entered.
 * Resets after 3 seconds of inactivity.
 */
export function useKonamiCode(): boolean {
  const [activated, setActivated] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activated) return;

      clearTimeout(timerRef.current);

      if (e.key === KONAMI[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === KONAMI.length) {
          setActivated(true);
          indexRef.current = 0;
          // Auto-reset after 10 seconds
          setTimeout(() => setActivated(false), 10000);
        }
      } else {
        indexRef.current = 0;
      }

      // Reset progress after 3s of no input
      timerRef.current = setTimeout(() => {
        indexRef.current = 0;
      }, 3000);
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      clearTimeout(timerRef.current);
    };
  }, [activated]);

  return activated;
}
