import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

export type IBreakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface WindowDimensions {
  width: number;
  height: number;
  breakpoint: IBreakpoint;
}

// Hook
export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  const [breakpoint, setBreakpoint] = useState<IBreakpoint>('mobile');

  const getBreakpoint = () => {
    const w = window.innerWidth;

    if (w <= 420) return 'mobile';
    if (w > 420 && w <= 768) return 'tablet';
    if (w > 768 && w < 1024) return 'desktop';
    else return 'wide';
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      setBreakpoint(v => getBreakpoint());
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width: windowSize.width, height: windowSize.height, breakpoint };
}
