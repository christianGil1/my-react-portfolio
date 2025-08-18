import { useEffect, useState } from 'react';

export const useScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    let lastScrollY = window.pageYOffset;

    const updateScrollInfo = () => {
      const currentScrollY = window.pageYOffset;
      
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setIsScrolling(true);

      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Set scrolling to false after scrolling stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollInfo, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollInfo);
      clearTimeout(timeoutId);
    };
  }, []);

  return { scrollY, scrollDirection, isScrolling };
};

export const useParallaxEffect = (speed = 1.0) => {
  const { scrollY } = useScrollEffects();
  return scrollY * speed;
};
