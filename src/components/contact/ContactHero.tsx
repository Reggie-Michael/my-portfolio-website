import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className='bg-section-light py-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Mail className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Get In Touch
            </span>
          </div>

          <h1 className='section-title'>
            Let&apos;s <span className='font-light italic'>Connect</span>
          </h1>

          <p className='mx-auto mb-16 max-w-4xl text-xl leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
            Ready to transform your ideas into reality? Whether you need
            development work, automation solutions, or creative content,
            let&apos;s explore how we can work together to create something
            amazing.
          </p>
        </div>

        {/* Contact Methods */}
        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='border border-slate-700/50 bg-white p-8 text-center transition-all duration-300 hover:border-slate-600/70 dark:bg-slate-800/30'>
            <MessageCircle className='mx-auto mb-4 h-8 w-8 text-slate-500 dark:text-slate-400' />
            <h3 className='font-display mb-3 text-lg font-light tracking-tight text-slate-700 dark:text-slate-100'>
              Quick Response
            </h3>
            <p className='font-light tracking-wide text-slate-600 dark:text-slate-300'>
              Get a response within 24 hours for all inquiries
            </p>
          </div>

          <div className='border border-slate-700/50 bg-white p-8 text-center transition-all duration-300 hover:border-slate-600/70 dark:bg-slate-800/30'>
            <Mail className='mx-auto mb-4 h-8 w-8 text-slate-500 dark:text-slate-400' />
            <h3 className='font-display mb-3 text-lg font-light tracking-tight text-slate-700 dark:text-slate-100'>
              Direct Communication
            </h3>
            <p className='font-light tracking-wide text-slate-600 dark:text-slate-300'>
              Clear, honest communication throughout the project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
