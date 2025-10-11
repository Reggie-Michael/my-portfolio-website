'use client';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSkillBarProps {
  label: string;
  icon: React.ElementType;
  flag?: string;
  level: string;
  proficiency: number; // target value
  description: string;
  start?: boolean; // optional external trigger
}

export function AnimatedSkillBar({
  label,
  icon: Icon,
  flag,
  level,
  proficiency,
  description,
  start = true, // defaults to auto-start
}: AnimatedSkillBarProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Observe visibility
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate the count-up
  useEffect(() => {
    if (!inView || !start) return;
    let startTime: number | null = null;
    const duration = 1500; // ms

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * proficiency);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(proficiency);
    };

    requestAnimationFrame(animate);
  }, [inView, start, proficiency]);

  return (
    <div
      ref={ref}
      className='group border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-slate-900'
    >
      <div className='flex items-start space-x-4'>
        <div className='flex h-12 w-12 items-center justify-center border border-gray-200 bg-gray-50 transition-colors duration-300 group-hover:border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:group-hover:border-gray-500'>
          <Icon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
        </div>

        <div className='flex-1'>
          <div className='mb-3 flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              {flag && <span className='text-2xl'>{flag}</span>}
              <div>
                <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                  {label}
                </h4>
                <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                  {level}
                </span>
              </div>
            </div>

            <div className='text-right'>
              <div className='text-lg font-light text-gray-900 dark:text-white'>
                {value}%
              </div>
            </div>
          </div>

          <div className='mb-3 h-2 w-full bg-gray-200 dark:bg-gray-700'>
            <div
              className='h-2 bg-gray-900 transition-[width] duration-75 ease-linear dark:bg-white'
              style={{ width: `${value}%` }}
            />
          </div>

          <p className='text-sm leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
