// src/hooks/useAutoScroll.js
import { useEffect, useRef } from 'react';

export function useAutoScroll(step = 1, intervalTime = 30) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startScrolling = () => {
      return setInterval(() => {
        container.scrollLeft += step;
        
        // Reset to start if we've reached the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }, intervalTime);
    };

    let autoScroll = startScrolling();

    const pause = () => clearInterval(autoScroll);
    const resume = () => { autoScroll = startScrolling(); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(autoScroll);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [step, intervalTime]);

  return scrollRef;
}
