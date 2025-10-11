'use client';
import { useEffect, useRef, useState } from 'react';

type Skill = {
  name: string;
  level: number; // 0-100
};

type SkillProgressProps = {
  skill: Skill;
  start?: boolean; // default true
};

export default function SkillProgress({
  skill,
  start = true,
}: SkillProgressProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Observe when the element enters the viewport
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

  // Animate the count-up when in view
  useEffect(() => {
    if (!inView || !start) return;
    let startTime: number | null = null;
    const duration = 1500;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * skill.level);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(skill.level);
    };

    requestAnimationFrame(animate);
  }, [inView, start, skill.level]);

  return (
    <div ref={ref}>
      <div className='mb-2 flex items-center justify-between'>
        <span className='text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'>
          {skill.name}
        </span>
        <span className='text-xs font-light text-slate-500 dark:text-slate-400'>
          {value}%
        </span>
      </div>
      <div className='h-1 w-full bg-slate-200 dark:bg-slate-700'>
        <div
          className='h-1 bg-slate-900 transition-all duration-1000 ease-out dark:bg-slate-300'
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
