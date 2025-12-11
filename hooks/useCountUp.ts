'use client';

import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const delayTimeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(start + (end - start) * easeOut);

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration, delay, enabled]);

  return count;
}

export default useCountUp;
