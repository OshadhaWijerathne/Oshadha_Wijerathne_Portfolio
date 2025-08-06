
import React, { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  titles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  titles,
  className = '',
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDelay = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Kept as per original, updated alongside loopNum
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0); 

  useEffect(() => {
    if (!titles || titles.length === 0) return;

    let timeoutId: number | undefined;
    const currentTitle = titles[loopNum % titles.length];

    if (!isDeleting && currentText.length === currentTitle.length) {
      // Finished typing current word, now pause before deleting
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentText.length === 0) {
      // Finished deleting, switch to next word
      // No timeout needed here, state change triggers re-run of useEffect, which starts typing new word.
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length); // Sync currentIndex as in original
    } else {
      // Still typing or still deleting
      timeoutId = window.setTimeout(() => {
        if (isDeleting) {
          setCurrentText(prev => prev.substring(0, prev.length - 1));
        } else {
          setCurrentText(prev => currentTitle.substring(0, prev.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [currentText, isDeleting, loopNum, titles, typingSpeed, deletingSpeed, pauseDelay, setCurrentIndex]);

  return (
    <span className={`${className} typing-cursor relative`}>
      {currentText || '\u00A0'} {/* Use non-breaking space to maintain height */}
    </span>
  );
};
