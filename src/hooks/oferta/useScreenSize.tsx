import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 1024 : true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        isDesktop: width >= 1024,
        isMobile: width < 1024,
      });
    };

    // Force initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    
    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return screenSize;
};
