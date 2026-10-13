import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay execution until the DOM stabilizes
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); 

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};