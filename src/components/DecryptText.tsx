import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

interface Props {
  text: string;
  className?: string;
  /** Speed in ms per character reveal */
  speed?: number;
  /** Only decrypt when in viewport */
  onScroll?: boolean;
}

/**
 * Text that starts scrambled and "decrypts" character-by-character.
 * Triggers when the element enters the viewport.
 */
export default function DecryptText({ text, className = '', speed = 30, onScroll = true }: Props) {
  const [display, setDisplay] = useState('');
  const [started, setStarted] = useState(!onScroll);
  const ref = useRef<HTMLSpanElement>(null);
  const revealedRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  /* Intersection observer to trigger on scroll */
  useEffect(() => {
    if (!onScroll) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onScroll]);

  /* Initialize with scrambled text */
  useEffect(() => {
    const scrambled = text
      .split('')
      .map((c) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join('');
    setDisplay(scrambled);
    revealedRef.current = 0;
  }, [text]);

  /* Decrypt animation */
  useEffect(() => {
    if (!started) return;

    const animate = (time: number) => {
      if (time - lastTimeRef.current >= speed) {
        lastTimeRef.current = time;
        revealedRef.current++;

        if (revealedRef.current > text.length) {
          setDisplay(text);
          return;
        }

        const result = text
          .split('')
          .map((c, i) => {
            if (i < revealedRef.current) return c;
            if (c === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
        setDisplay(result);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
