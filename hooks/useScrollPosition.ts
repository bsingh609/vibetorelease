'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
