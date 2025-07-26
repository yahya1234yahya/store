'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  delay?: number;
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  words, 
  delay = 100,
  className = "" 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay / 2);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentWordIndex, words, delay]);

  return (
    <span className={`typewriter ${className}`}>
      {currentText}
    </span>
  );
};

export default TypewriterEffect;
