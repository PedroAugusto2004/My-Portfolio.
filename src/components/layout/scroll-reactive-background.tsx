
'use client';

import { useEffect, useCallback } from 'react';

// Simple throttle function that executes on the leading edge and then waits for delay
const throttle = (func: () => void, delay: number) => {
  let canRun = true;
  let timeoutId: NodeJS.Timeout | null = null;

  const throttled = () => {
    if (canRun) {
      func();
      canRun = false;
      if (timeoutId) clearTimeout(timeoutId); // Clear any pending timeout
      timeoutId = setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };

  // Add a cancel method to clear timeout if component unmounts
  (throttled as any).cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  
  return throttled;
};


const ScrollReactiveBackground = () => {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // Ensure we don't divide by zero if docHeight is 0 (e.g., content shorter than viewport)
    const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollPercent = Math.min(scrollY / docHeight, 1);

    // Change gradient angle from 100deg to 260deg based on scroll (160deg range)
    const newAngle = 100 + scrollPercent * 160;
    document.documentElement.style.setProperty('--futuristic-bg-angle-scroll', `${newAngle}deg`);
  }, []);

  const throttledScrollHandler = useCallback(throttle(handleScroll, 50), [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler);
    handleScroll(); // Initial call to set angle based on initial scroll position (usually 0)
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      // Cancel any pending throttled execution if the component unmounts
      if (typeof (throttledScrollHandler as any).cancel === 'function') {
        (throttledScrollHandler as any).cancel();
      }
    };
  }, [throttledScrollHandler, handleScroll]);

  return null; // This component does not render any visible DOM elements
};

export default ScrollReactiveBackground;
