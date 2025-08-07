import { useState, useEffect, useCallback } from 'react';

export const useTypingEffect = (
  texts: string[],
  typingSpeed = 100,
  eraseSpeed = 100,
  delayBeforeErase = 1500,
  loop = true,
) => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const selectRandomText = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setText(texts[randomIndex]);
  }, [texts]);

  useEffect(() => {
    selectRandomText();
  }, [selectRandomText]);

  useEffect(() => {
    let typingTimeout: number | undefined;
    const cursorBlinkInterval = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 800);

    if (isTyping) {
      if (displayText.length < text.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => setIsTyping(false), delayBeforeErase);
      }
    } else {
      if (displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, eraseSpeed);
      } else if (loop) {
        selectRandomText();
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorBlinkInterval);
    };
  }, [
    displayText,
    isTyping,
    text,
    typingSpeed,
    eraseSpeed,
    delayBeforeErase,
    loop,
    selectRandomText,
  ]);

  return `${displayText}${cursorVisible ? '|' : ''}`;
};
