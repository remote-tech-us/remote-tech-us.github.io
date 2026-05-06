// src/hooks/useAutoScroll.jsx

import { useEffect, useRef } from 'react';

export function useAutoScroll(options = {}) {
  const {
    step = 1,            // Pixels per interval
    intervalTime = 30,   // Milliseconds *higher number delays movement
    direction = 'left',  // 'left', 'right', 'top', 'bottom'
    pauseOnHover = true, // Sometimes you may want a marquee effect that never stops, even when user interacts with it
    isEnabled = true,    // This allows you to pause the scrolling dynamically
  } = options;           // Instead of a long list of arguments, options allows: useAutoScroll({ direction: 'top' }) without having to pass step or interval

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isEnabled) return;

    const startScrolling = () => {
      return setInterval(() => {
        // Handle Horizontal vs Vertical
        if (direction === 'left' || direction === 'right') {
          // Safety: Only scroll if there is content to scroll
          if (container.scrollWidth <= container.clientWidth) return;

          const move = direction === 'left' ? step : -step;
          container.scrollLeft += move;

          // Infinite Loop Logic (Horizontal)
          if (direction === 'left' && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          } else if (direction === 'right' && container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
          }
        } else {
          const move = direction === 'top' ? step : -step;
          container.scrollTop += move;

          // Infinite Loop Logic (Vertical)
          if (direction === 'top' && container.scrollTop >= container.scrollHeight - container.clientHeight) {
            container.scrollTop = 0;
          } else if (direction === 'bottom' && container.scrollTop <= 0) {
            container.scrollTop = container.scrollHeight - container.clientHeight;
          }
        }
      }, intervalTime);
    };

    let autoScroll = startScrolling();

    const pause = () => { if (pauseOnHover) clearInterval(autoScroll); };
    const resume = () => { if (pauseOnHover) autoScroll = startScrolling(); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(autoScroll);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [step, intervalTime, direction, pauseOnHover, isEnabled]);

  return scrollRef;
}
