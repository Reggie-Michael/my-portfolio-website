'use client';
import React, { useEffect, useRef } from 'react';

interface CountUpOnViewProps {
  value: number; // Target number to count to
  duration?: number; // Animation duration in ms
  userRef?: React.RefObject<HTMLElement | null>; // Optional external ref
  className?: string; // Optional span styling
}

const CountUpOnView: React.FC<CountUpOnViewProps> = ({
  value,
  duration = 1200,
  userRef,
  className,
}) => {
  const internalRef = useRef<HTMLSpanElement>(null);
  const elementRef = userRef || internalRef;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const el = elementRef.current;
    if (!el) return;

    const animateCountUp = () => {
      const startTime = Date.now();
      let currentValue = 0;

      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        currentValue = Math.floor((elapsedTime / duration) * value);
        el.textContent = currentValue.toString();

        if (currentValue >= value) {
          clearInterval(interval);
          el.textContent = value.toString();
        }
      }, 10);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCountUp();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      if (observer) observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [value, duration, elementRef]);

  return <span ref={internalRef} className={className}></span>;
};

export default CountUpOnView;
