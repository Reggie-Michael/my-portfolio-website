'use client';
import React, { useState } from 'react';
import {
  Send,
  Calendar,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useSupabaseForm } from '../../hooks/useSupabaseForm';
import toast from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { submitForm, isSubmitting, error, success } = useSupabaseForm({
    table: 'contact_submissions',
    emailType: 'contact',
    onSuccess: () => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidationErrors({});
      setTouched({});
    },
  });

  // Validation rules
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        if (!value || value.trim().length === 0) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (value.trim().length > 50) {
          return 'Name must be less than 50 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';

      case 'email':
        if (!value || value.trim().length === 0) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        if (value.length > 100) {
          return 'Email must be less than 100 characters';
        }
        return '';

      case 'subject':
        if (!value || value.trim().length === 0) {
          return 'Subject is required';
        }
        if (value.trim().length < 5) {
          return 'Subject must be at least 5 characters';
        }
        if (value.trim().length > 100) {
          return 'Subject must be less than 100 characters';
        }
        return '';

      case 'message':
        if (!value || value.trim().length === 0) {
          return 'Message is required';
        }
        if (value.trim().length < 20) {
          return 'Message must be at least 20 characters';
        }
        if (value.trim().length > 2000) {
          return 'Message must be less than 2000 characters';
        }
        return '';

      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    Object.keys(formData).forEach(field => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      if (error) {
        errors[field] = error;
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle field blur for real-time validation
  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(
      field,
      formData[field as keyof typeof formData]
    );
    setValidationErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
    setTouched(allTouched);

    if (validateForm()) {
      // Trim and clean data before submission
      const cleanData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };
      submitForm(cleanData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setValidationErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const renderFieldError = (field: string) => {
    if (touched[field] && validationErrors[field]) {
      return (
        <p className='mt-1 flex items-center text-sm text-red-600 dark:text-red-400'>
          <AlertCircle className='mr-1 h-4 w-4' />
          {validationErrors[field]}
        </p>
      );
    }
    return null;
  };

  const getFieldClassName = (field: string, baseClassName: string) => {
    const hasError = touched[field] && validationErrors[field];
    const isValid =
      touched[field] &&
      !validationErrors[field] &&
      formData[field as keyof typeof formData].length > 0;

    if (hasError) {
      return `${baseClassName} border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400`;
    }

    if (isValid) {
      return `${baseClassName} border-green-500 focus:border-green-500 dark:border-green-400 dark:focus:border-green-400`;
    }

    return `${baseClassName} border-slate-200 focus:border-slate-400 dark:border-slate-600 dark:focus:border-slate-500`;
  };

  const handleScheduleSession = () => {
    console.log('Schedule session clicked - Voiceflow integration pending');
    toast('Schedule session feature under development', {
      position: 'top-center',
    });
  };

  const handleAIAssistant = () => {
    console.log(
      'AI Assistant clicked - AI customer support integration pending'
    );
    toast('AI customer support feature under development', {
      position: 'top-center',
    });
  };

  const isFormValid =
    Object.values(validationErrors).every(error => error === '') &&
    Object.values(formData).every(value => value.trim().length > 0);

  return (
    <section className='bg-section-light py-16'>
      <div className='mx-auto max-w-2xl px-6 lg:px-8'>
        {/* AI-Powered Actions */}
        <div className='mb-12'>
          <div className='section-header-line mb-8 justify-center'>
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              AI-Powered Assistance
            </span>
          </div>

          <div className='mb-12 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <button
              onClick={handleScheduleSession}
              className='flex items-center justify-center space-x-3 bg-slate-900 px-6 py-4 font-light tracking-wide text-slate-100 transition-all duration-300 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            >
              <Calendar className='h-5 w-5' />
              <span>Schedule a Session</span>
            </button>

            <button
              onClick={handleAIAssistant}
              className='flex items-center justify-center space-x-3 border border-slate-300 px-6 py-4 font-light tracking-wide text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700'
            >
              <MessageCircle className='h-5 w-5' />
              <span>Ask AI Assistant</span>
            </button>
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className='mb-8 flex items-center space-x-3 border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400' />
            <div>
              <p className='font-medium text-green-800 dark:text-green-200'>
                Message sent successfully!
              </p>
              <p className='text-sm text-green-600 dark:text-green-300'>
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className='mb-8 flex items-center space-x-3 border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20'>
            <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400' />
            <div>
              <p className='font-medium text-red-800 dark:text-red-200'>
                Failed to send message
              </p>
              <p className='text-sm text-red-600 dark:text-red-300'>{error}</p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className='card p-12'>
          <h3 className='font-display mb-8 text-center text-2xl font-light tracking-tight text-slate-900 dark:text-slate-100'>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
                >
                  Your Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  required
                  className={getFieldClassName(
                    'name',
                    'w-full bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400'
                  )}
                  placeholder='John Doe'
                  aria-invalid={
                    touched.name && validationErrors.name ? 'true' : 'false'
                  }
                  aria-describedby={
                    touched.name && validationErrors.name
                      ? 'name-error'
                      : undefined
                  }
                />
                {renderFieldError('name')}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
                >
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  required
                  className={getFieldClassName(
                    'email',
                    'w-full bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400'
                  )}
                  placeholder='john@example.com'
                  aria-invalid={
                    touched.email && validationErrors.email ? 'true' : 'false'
                  }
                  aria-describedby={
                    touched.email && validationErrors.email
                      ? 'email-error'
                      : undefined
                  }
                />
                {renderFieldError('email')}
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
              >
                Subject <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                onBlur={() => handleBlur('subject')}
                required
                className={getFieldClassName(
                  'subject',
                  'w-full bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400'
                )}
                placeholder='Project Inquiry'
                aria-invalid={
                  touched.subject && validationErrors.subject ? 'true' : 'false'
                }
                aria-describedby={
                  touched.subject && validationErrors.subject
                    ? 'subject-error'
                    : undefined
                }
              />
              {renderFieldError('subject')}
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
              >
                Message <span className='text-red-500'>*</span>
                <span className='ml-2 text-xs text-slate-400'>
                  ({formData.message.length}/2000)
                </span>
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                required
                rows={6}
                maxLength={2000}
                className={getFieldClassName(
                  'message',
                  'w-full resize-none bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400'
                )}
                placeholder='Tell me about your project...'
                aria-invalid={
                  touched.message && validationErrors.message ? 'true' : 'false'
                }
                aria-describedby={
                  touched.message && validationErrors.message
                    ? 'message-error'
                    : undefined
                }
              />
              {renderFieldError('message')}
            </div>

            <button
              type='submit'
              disabled={isSubmitting || !isFormValid}
              className='group flex w-full items-center justify-center space-x-2 bg-slate-900 px-8 py-4 font-light tracking-wide text-slate-100 transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            >
              <Send className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
