"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

export interface SmallCarrouselType {
  tag: string;
  title: string;
  label?: string;
  from?: string;
  to?: string;
}

const carouselItemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } as Transition },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeInOut' } as Transition },
};

const SmallCarrousel: React.FC<{ items: SmallCarrouselType[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isNavigating = useRef(false);

  // Responsive visible count based on screen width
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3; // Default for SSR
    if (window.innerWidth >= 1280) return 5; // xl
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3; // md
    if (window.innerWidth >= 640) return 2; // sm
    return 1; // xs
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visible = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, i) => items[(index + i) % items.length]),
    [index, visibleCount, items]
  );

  const handleNext = useCallback(() => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => (isNavigating.current = false), 500);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => (isNavigating.current = false), 500);
  }, [items.length]);

  const handleDotClick = useCallback((i: number) => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setIndex(i);
    setTimeout(() => (isNavigating.current = false), 500);
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(handleNext, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, handleNext]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden min-h-[140px] sm:min-h-40 md:min-h-[180px] flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project carousel"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }}
    >
      <span className="sr-only" aria-live="polite">
        Showing slide {index + 1} of {items.length}
      </span>

      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-2 sm:px-4 pointer-events-none z-10">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          ▶
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full">
        <AnimatePresence initial={false}>
          {visible.map((item, i) => {
            const scale = visibleCount === 1 ? 1 : 1 - (Math.abs(i - Math.floor(visibleCount / 2)) * 0.1);
            const opacity = visibleCount === 1 ? 1 : 1 - (Math.abs(i - Math.floor(visibleCount / 2)) * 0.15);
            const zIndex = visibleCount === 1 ? 1 : visibleCount - Math.abs(i - Math.floor(visibleCount / 2));
            const width = (() => {
              if (visibleCount === 1) return 'w-full max-w-[240px]';
              if (visibleCount === 2) return i === 0 || i === 1 ? 'w-[45vw] sm:w-[40vw] md:w-[30vw] max-w-[200px]' : 'w-[35vw] sm:w-[30vw] md:w-[25vw] max-w-[180px]';
              if (visibleCount === 3) return ['w-[30vw] sm:w-[25vw] md:w-[20vw] max-w-[160px]', 'w-[35vw] sm:w-[30vw] md:w-[25vw] max-w-[200px]', 'w-[30vw] sm:w-[25vw] md:w-[20vw] max-w-[160px]'][i];
              if (visibleCount === 4) return ['w-[25vw] sm:w-[20vw] md:w-[18vw] max-w-[140px]', 'w-[30vw] sm:w-[25vw] md:w-[22vw] max-w-[180px]', 'w-[30vw] sm:w-[25vw] md:w-[22vw] max-w-[180px]', 'w-[25vw] sm:w-[20vw] md:w-[18vw] max-w-[140px]'][i];
              return ['w-[20vw] sm:w-[18vw] md:w-[15vw] max-w-[120px]', 'w-[25vw] sm:w-[20vw] md:w-[18vw] max-w-[160px]', 'w-[25vw] sm:w-[22vw] md:w-[20vw] max-w-[180px]', 'w-[25vw] sm:w-[20vw] md:w-[18vw] max-w-[160px]', 'w-[20vw] sm:w-[18vw] md:w-[15vw] max-w-[120px]'][i];
            })();

            return (
              <motion.div
                key={item.title}
                variants={carouselItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex }}
                className={`shrink-0 flex flex-col justify-center items-center ${width} min-w-[100px] h-[120px] sm:h-[140px] md:h-[160px] bg-gradient-to-b from-white/20 to-white/10 border border-white/30 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50`}
                tabIndex={0}
                aria-label={`${item.title} project, ${item.tag}${item.label ? `, ${item.label}` : ''}`}
                aria-current={i === Math.floor(visibleCount / 2) ? 'true' : undefined}
              >
                <span className="text-violet-300 text-xs uppercase tracking-wide font-medium">
                  {item.tag}
                </span>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white mt-1 text-center px-2">
                  {item.title}
                </h3>
                {item.label && (
                  <span className="text-[10px] sm:text-xs text-white/70 mt-1">{item.label}</span>
                )}
                {(item.from || item.to) && (
                  <span className="text-[10px] sm:text-xs text-white/70 mt-1">
                    {item.from} {item.to && ` - ${item.to}`}
                  </span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 sm:gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              i === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SmallCarrousel);
