import React from 'react';
import { User, ArrowRight, Award, Code, Users } from 'lucide-react';
import Link from 'next/link';

const AboutPreview: React.FC = () => {
  const highlights = [
    { icon: Code, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-20 lg:grid-cols-2'>
          {/* Content */}
          <div className='space-y-8'>
            <div className='mb-8 flex items-center justify-start'>
              <div className='mr-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
              <User className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
              <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
                About Michael
              </span>
              <div className='ml-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
            </div>

            <h2 className='font-display text-4xl font-extralight tracking-tight text-slate-900 md:text-5xl dark:text-slate-100'>
              Passionate <span className='font-light italic'>Developer</span>
            </h2>

            <div className='space-y-6 leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
              <p>
                I&apos;m Michael Emmanuel, a passionate developer who bridges
                the gap between creative vision and technical execution. My
                journey started with curiosity about how things work, leading me
                to master multiple disciplines from full-stack development to AI
                automation.
              </p>
              <p>
                Through continuous learning and hands-on experience, I&apos;ve
                developed expertise in modern technologies while maintaining a
                focus on creating meaningful solutions that enhance the human
                experience. Aradyst Codex represents my approach to
                development—methodical, innovative, and always evolving.
              </p>
            </div>

            <Link
              href='/about'
              className='group inline-flex items-center space-x-2 border border-slate-300 px-6 py-3 font-light tracking-wide text-slate-700 transition-all duration-300 hover:border-slate-400 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500'
            >
              <span>Learn More About Me</span>
              <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
          </div>

          {/* Stats */}
          <div className='space-y-8'>
            <div className='grid grid-cols-1 gap-8'>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className='group border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'
                >
                  <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-slate-200 transition-colors duration-300 group-hover:border-slate-300 dark:border-slate-600 dark:group-hover:border-slate-500'>
                    <highlight.icon className='h-6 w-6 text-slate-600 dark:text-slate-400' />
                  </div>
                  <div className='font-display mb-2 text-3xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                    {highlight.value}
                  </div>
                  <div className='font-light tracking-wide text-slate-600 dark:text-slate-400'>
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
