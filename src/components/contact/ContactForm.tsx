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

  const { submitForm, isSubmitting, error, success } = useSupabaseForm({
    table: 'contact_submissions',
    emailType: 'contact',
    onSuccess: () => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full border border-slate-200 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-slate-500'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full border border-slate-200 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-slate-500'
                  placeholder='john@example.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full border border-slate-200 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-slate-500'
                placeholder='Project Inquiry'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className='w-full resize-none border border-slate-200 bg-white px-4 py-3 font-light text-slate-900 placeholder-slate-500 transition-colors duration-300 focus:border-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-slate-500'
                placeholder='Tell me about your project...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
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
