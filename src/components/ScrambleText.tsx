import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = '!<>-_\\/[]{}—=+*^?#01X';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((current) => {
        return text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <motion.span ref={ref} className={`inline-block ${className}`}>
      {displayText}
    </motion.span>
  );
};
