'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionClick }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(
    () => [
      'Full-Stack Developer',
      'Content Creator',
      'AI Automation Specialist',
      'DevOps Engineer',
    ],
    []
  ); // memoized, only created once

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText.length < currentRole.length) {
      // typing
      timer = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 80);
    } else if (isDeleting && typedText.length > 0) {
      // deleting
      timer = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      }, 40);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      // pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText.length === 0) {
      // move to next role
      setIsDeleting(false);
      setCurrentIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting, roles]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-slate-900'
    >
      {/* Subtle background pattern */}
      <div className='absolute inset-0 opacity-[0.015] dark:opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #475569 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Minimal floating elements */}
      <div className='animate-subtle-float absolute top-1/4 right-1/4 h-1 w-1 rounded-full bg-slate-300 opacity-20 dark:bg-slate-600'></div>
      <div
        className='animate-subtle-float absolute bottom-1/3 left-1/5 h-0.5 w-0.5 rounded-full bg-slate-400 opacity-30 dark:bg-slate-500'
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className='animate-subtle-float absolute top-1/2 right-1/5 h-1 w-1 rounded-full bg-slate-300 opacity-15 dark:bg-slate-600'
        style={{ animationDelay: '4s' }}
      ></div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8'>
        <div className='max-w-4xl'>
          {/* Main Heading */}
          <div className='mb-12'>
            <h1 className='font-display mb-6 text-6xl leading-none font-extralight tracking-tight md:text-8xl'>
              <span className='text-slate-900 dark:text-slate-100'>
                Michael
              </span>
              <br />
              <span className='font-light text-slate-700 italic dark:text-slate-300'>
                Emmanuel
              </span>
            </h1>

            <div className='mb-8 h-8 text-xl font-light tracking-wide text-slate-600 md:text-2xl dark:text-slate-400'>
              I&apos;m a{' '}
              <span className='font-mono font-light text-slate-900 dark:text-slate-100'>
                {typedText}
                <span
                  className={`${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } text-slate-400 dark:text-slate-500`}
                >
                  |
                </span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className='mb-12 max-w-2xl text-lg leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
            Crafting digital experiences through clean code, intelligent
            automation, and compelling visual narratives. Transforming complex
            ideas into elegant solutions through the lens of Aradyst Codex.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col gap-4 sm:flex-row'>
            <button
              onClick={() => onSectionClick('services')}
              className='transform bg-slate-900 px-8 py-3 font-light tracking-wide text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            >
              View My Work
            </button>
            <button
              onClick={() => onSectionClick('contact')}
              className='border border-slate-300 px-8 py-3 font-light tracking-wide text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-100 dark:hover:text-slate-100'
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 transform'>
        <div className='animate-bounce'>
          <ChevronDown className='h-6 w-6 text-slate-400 dark:text-slate-500' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
