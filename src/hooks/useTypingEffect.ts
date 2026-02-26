import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(
  texts: string[],
  typeSpeed = 80,
  eraseSpeed = 40,
  pause = 2500,
  loop = true,
): string {
  const [current, setCurrent] = useState('');
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  const pickRandom = useCallback(() => {
    setText(texts[Math.floor(Math.random() * texts.length)]);
  }, [texts]);

  useEffect(() => {
    pickRandom();
  }, [pickRandom]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (current.length < text.length) {
        timer = setTimeout(() => setCurrent(text.slice(0, current.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (current.length > 0) {
        timer = setTimeout(() => setCurrent(text.slice(0, current.length - 1)), eraseSpeed);
      } else if (loop) {
        pickRandom();
        setTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [current, typing, text, typeSpeed, eraseSpeed, pause, loop, pickRandom]);

  return current;
}
