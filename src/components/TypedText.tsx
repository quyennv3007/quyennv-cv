import React, { useEffect, useRef } from 'react';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings = [],
  typeSpeed = 100,
  backSpeed = 100,
  backDelay = 1000,
  loop = true,
  className = ""
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const currentStringIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingTimeout = useRef<number | null>(null);

  const clear = () => {
    if (typingTimeout.current !== null) {
      clearTimeout(typingTimeout.current);
    }
  };

  useEffect(() => {
    const type = () => {
      if (!elementRef.current || strings.length === 0) return;

      const currentString = strings[currentStringIndex.current];
      const fullText = currentString;
      let currentText = fullText.substring(0, currentCharIndex.current);

      elementRef.current.innerHTML = currentText + '<span class="cursor">|</span>';

      if (isDeleting.current) {
        currentCharIndex.current -= 1;
      } else {
        currentCharIndex.current += 1;
      }

      let delay = isDeleting.current ? backSpeed : typeSpeed;

      // Word fully typed
      if (!isDeleting.current && currentCharIndex.current === fullText.length + 1) {
        isDeleting.current = true;
        delay = backDelay;
      }

      // Word fully deleted
      if (isDeleting.current && currentCharIndex.current === 0) {
        isDeleting.current = false;
        currentStringIndex.current++;

        if (!loop && currentStringIndex.current >= strings.length) {
          return;
        }

        currentStringIndex.current %= strings.length;
        delay = 500;
      }

      typingTimeout.current = window.setTimeout(type, delay);
    };

    type();

    return () => {
      clear();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return (
    <span
      ref={elementRef}
      className={className}
      style={{ display: 'inline-block' }}
    />
  );
};

export default TypedText;
