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
  const [validationError, setValidationError] = useState('');
  const [touched, setTouched] = useState(false);

  const { submitForm, isSubmitting, error, success } = useSupabaseForm({
    table: 'newsletter_subscriptions',
    emailType: 'newsletter',
    onSuccess: () => {
      setEmail('');
      setValidationError('');
      setTouched(false);
    },
  });

  // Email validation function
  const validateEmail = (email: string): string => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }

    const trimmedEmail = email.trim();

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return 'Please enter a valid email address';
    }

    // Length validation
    if (trimmedEmail.length > 100) {
      return 'Email must be less than 100 characters';
    }

    // Check for common invalid patterns
    if (
      trimmedEmail.includes('..') ||
      trimmedEmail.startsWith('.') ||
      trimmedEmail.endsWith('.')
    ) {
      return 'Please enter a valid email address';
    }

    // Check for valid domain structure
    const parts = trimmedEmail.split('@');
    if (parts.length !== 2) {
      return 'Please enter a valid email address';
    }

    const [localPart, domain] = parts;

    if (localPart.length === 0 || localPart.length > 64) {
      return 'Email address format is invalid';
    }

    if (domain.length === 0 || domain.length > 63) {
      return 'Email domain is invalid';
    }

    // Check domain has at least one dot and valid characters
    if (
      !domain.includes('.') ||
      domain.startsWith('.') ||
      domain.endsWith('.')
    ) {
      return 'Please enter a valid email domain';
    }

    return '';
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Clear validation error when user starts typing
    if (validationError && touched) {
      setValidationError('');
    }

    // Real-time validation for touched field
    if (touched && newEmail.length > 0) {
      const error = validateEmail(newEmail);
      setValidationError(error);
    }
  };

  // Handle field blur
  const handleBlur = () => {
    setTouched(true);
    const error = validateEmail(email);
    setValidationError(error);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched(true);
    const error = validateEmail(email);
    setValidationError(error);

    if (!error) {
      submitForm({ email: email.trim().toLowerCase() });
    }
  };

  // Get input field classes based on validation state
  const getInputClassName = () => {
    const baseClasses =
      'flex-1 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400';

    if (touched && validationError) {
      return `${baseClasses} border border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400`;
    }

    if (touched && !validationError && email.length > 0) {
      return `${baseClasses} border border-green-500 focus:border-green-500 dark:border-green-400 dark:focus:border-green-400`;
    }

    return `${baseClasses} border border-slate-200 focus:border-slate-400 dark:border-slate-600 dark:focus:border-slate-500`;
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
        <div className='space-y-2'>
          <div className='flex space-x-4'>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              required
              className={getInputClassName()}
              placeholder='your@email.com'
              aria-invalid={touched && validationError ? 'true' : 'false'}
              aria-describedby={
                touched && validationError ? 'email-error' : undefined
              }
            />
            <button
              type='submit'
              disabled={isSubmitting || (touched && !!validationError)}
              className='flex items-center space-x-2 bg-slate-900 px-6 py-3 font-light text-slate-100 transition-colors duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            >
              <Send className='h-4 w-4' />
              <span className='hidden sm:inline'>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </span>
            </button>
          </div>

          {/* Validation Error Display */}
          {touched && validationError && (
            <div
              className='flex items-center space-x-1 text-sm text-red-600 dark:text-red-400'
              id='email-error'
            >
              <AlertCircle className='h-4 w-4' />
              <span>{validationError}</span>
            </div>
          )}

          {/* Success Validation Indicator */}
          {touched && !validationError && email.length > 0 && (
            <div className='flex items-center space-x-1 text-sm text-green-600 dark:text-green-400'>
              <CheckCircle className='h-4 w-4' />
              <span>Valid email address</span>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default NewsletterSection;
