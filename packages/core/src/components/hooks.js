import { useState, useEffect } from 'react';

//  A collection of React Hooks

// React hook for subscribing to window size
const getSize = () => {
  if (typeof window === 'undefined') {
    return {
      innerHeight: 200,
      innerWidth: 200,
      outerHeight: 200,
      outerWidth: 200
    };
  }
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    setWindowSize(getSize());
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {};
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
