import React from 'react';
import { useScrollEffects, useParallaxEffect } from '../hooks/useScrollEffects';

const ScrollEffects = ({ children, className = '', effect = 'parallax' }) => {
  const { scrollY, scrollDirection, isScrolling } = useScrollEffects();
  const parallaxOffset = useParallaxEffect(0.8);

  const getEffectStyles = () => {
    switch (effect) {
      case 'parallax':
        return {
          transform: `translateY(${parallaxOffset}px)`,
          transition: isScrolling ? 'none' : 'transform 0.3s ease-out'
        };
      
      case 'fade':
        const opacity = Math.max(0.1, 1 - scrollY / 400);
        return {
          opacity,
          transition: isScrolling ? 'none' : 'opacity 0.3s ease-out'
        };

      case 'scale':
        const scale = Math.max(0.5, 1 - scrollY / 800);
        return {
          transform: `scale(${scale})`,
          transition: isScrolling ? 'none' : 'transform 0.3s ease-out'
        };

      case 'slide':
        const slideOffset = scrollDirection === 'down' ? scrollY * 0.3 : -scrollY * 0.3;
        return {
          transform: `translateX(${slideOffset}px)`,
          transition: isScrolling ? 'none' : 'transform 0.3s ease-out'
        };

      case 'rotate':
        const rotation = scrollY * 0.3;
        return {
          transform: `rotate(${rotation}deg)`,
          transition: isScrolling ? 'none' : 'transform 0.3s ease-out'
        };

      case 'blur':
        const blurAmount = Math.min(8, scrollY / 100);
        return {
          filter: `blur(${blurAmount}px)`,
          transition: isScrolling ? 'none' : 'filter 0.3s ease-out'
        };
      
      default:
        return {};
    }
  };

  return (
    <div
      className={`${className} ${isScrolling ? 'scrolling' : ''}`}
      style={getEffectStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollEffects;
