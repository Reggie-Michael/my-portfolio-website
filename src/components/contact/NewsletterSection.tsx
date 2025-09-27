'use client';

import React, { useState } from 'react';
import { Bell, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useSupabaseForm } from '../../hooks/useSupabaseForm';

const NewsletterSection: React.FC = () => {
  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-950'>
      <div className='mx-auto max-w-4xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Bell className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Stay Updated
            </span>
          </div>

          <h2 className='section-title'>
            Project <span className='font-light italic'>Updates</span>
          </h2>

          <p className='section-subtitle mb-12'>
            Be the first to know when I release new projects, share insights, or
            announce opportunities
          </p>
        </div>

        <div className='card p-12 text-center'>
          <NewsLetterForm />
          <p className='mt-4 text-xs font-light tracking-wide text-slate-500 dark:text-slate-400'>
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>

        {/* Benefits */}
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='text-center'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-slate-200 dark:border-slate-600'>
              <Bell className='h-6 w-6 text-slate-600 dark:text-slate-400' />
            </div>
            <h4 className='font-display mb-2 text-lg font-light tracking-tight text-slate-900 dark:text-slate-100'>
              Project Updates
            </h4>
            <p className='text-sm font-light tracking-wide text-slate-600 dark:text-slate-400'>
              Get notified when new projects go live
            </p>
          </div>

          <div className='text-center'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-slate-200 dark:border-slate-600'>
              <Send className='h-6 w-6 text-slate-600 dark:text-slate-400' />
            </div>
            <h4 className='font-display mb-2 text-lg font-light tracking-tight text-slate-900 dark:text-slate-100'>
              Technical Insights
            </h4>
            <p className='text-sm font-light tracking-wide text-slate-600 dark:text-slate-400'>
              Behind-the-scenes development stories
            </p>
          </div>

          <div className='text-center'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-slate-200 dark:border-slate-600'>
              <Bell className='h-6 w-6 text-slate-600 dark:text-slate-400' />
            </div>
            <h4 className='font-display mb-2 text-lg font-light tracking-tight text-slate-900 dark:text-slate-100'>
              Opportunities
            </h4>
            <p className='text-sm font-light tracking-wide text-slate-600 dark:text-slate-400'>
              Early access to collaboration opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const NewsLetterForm = ({}) => {
  const [email, setEmail] = useState('');
  const { submitForm, isSubmitting, error, success } = useSupabaseForm({
    table: 'newsletter_subscriptions',
    emailType: 'newsletter',
    onSuccess: () => {
      setEmail('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm({ email });
  };
  return (
    <>
      {/* Success/Error Messages */}
      {success && (
        <div className='mx-auto mb-8 flex max-w-md items-center space-x-3 border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20'>
          <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400' />
          <div>
            <p className='font-medium text-green-800 dark:text-green-200'>
              Successfully subscribed!
            </p>
            <p className='text-sm text-green-600 dark:text-green-300'>
              Welcome to the updates list.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className='mx-auto mb-8 flex max-w-md items-center space-x-3 border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20'>
          <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400' />
          <div>
            <p className='font-medium text-red-800 dark:text-red-200'>
              Subscription failed
            </p>
            <p className='text-sm text-red-600 dark:text-red-300'>{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className='mx-auto max-w-md'>
        <div className='flex space-x-4'>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className='flex-1 border border-slate-200 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-slate-500'
            placeholder='your@email.com'
          />
          <button
            type='submit'
            disabled={isSubmitting}
            className='flex items-center space-x-2 bg-slate-900 px-6 py-3 font-light text-slate-100 transition-colors duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
          >
            <Send className='h-4 w-4' />
            <span className='hidden sm:inline'>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};
export default NewsletterSection;
