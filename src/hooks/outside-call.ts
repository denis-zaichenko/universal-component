import { useRef, useEffect } from 'react';

/**
 * Hook call if click outside of element
 * @param callback - function what call if clicked outside of this element
 */
export const useOutsideCall = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref?.current?.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return { ref };
};
