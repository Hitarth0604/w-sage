import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Detect element hover attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('button, a, input, textarea, [role="button"]');
      const projectCard = target.closest('#work .group');
      const serviceRow = target.closest('#services .group');

      if (projectCard) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else if (serviceRow) {
        setIsHovered(true);
        setCursorText('EXPLORE');
      } else if (clickable) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? 'w-16 h-16 bg-accent text-canvas font-mono font-bold text-[10px] tracking-widest shadow-xl scale-100'
            : isHovered
            ? 'w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/40 scale-125'
            : 'w-3 h-3 bg-accent/90 shadow-sm'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
};
