import { useCallback, useEffect, useRef, useState } from 'react';

export const useWindowWidth = () => {
  const [ width, setWidth ] = useState(0);
  const debouncer = useRef(null);

  const handleChangeWidth = useCallback(() => {
    clearTimeout(debouncer.current);

    debouncer.current = setTimeout(() => {
      setWidth(window.innerWidth);
    }, 200);
  }, [ setWidth, debouncer ]);

  useEffect(() => {
    handleChangeWidth();

    window.addEventListener('resize', handleChangeWidth);

    return () => window.removeEventListener('resize', handleChangeWidth);
  }, []);

  return { width };
};
