import React from 'react';
import { Code2, Lightbulb } from 'lucide-react';

const ServicesHero: React.FC = () => {
  return (
    <section className='bg-section-light py-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Code2 className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Services & Expertise
            </span>
          </div>

          <h1 className='font-display mb-8 text-5xl font-extralight tracking-tight text-slate-900 md:text-6xl dark:text-slate-100'>
            Comprehensive <span className='font-light italic'>Solutions</span>
          </h1>

          <p className='mx-auto mb-16 max-w-4xl text-xl leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
            From concept to deployment, I provide end-to-end solutions that
            combine technical excellence with creative innovation. Every project
            is an opportunity to push boundaries and deliver exceptional
            results.
          </p>
        </div>

        {/* Philosophy */}
        <div className='mx-auto max-w-4xl'>
          <div className='border border-slate-700/50 bg-white p-12 dark:bg-slate-800/30'>
            <div className='mb-8 flex items-center justify-center'>
              <Lightbulb className='mr-3 h-6 w-6 text-slate-500 dark:text-slate-400' />
              <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
                Philosophy
              </span>
            </div>

            <blockquote className='font-display text-center text-xl leading-relaxed font-light tracking-wide text-slate-700 italic dark:text-slate-200'>
              &quot;Great technology should feel invisible—powerful yet
              intuitive, complex yet simple to use. I believe in creating
              solutions that not only solve problems but enhance the human
              experience.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
