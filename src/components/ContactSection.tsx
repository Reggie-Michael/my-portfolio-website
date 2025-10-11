'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Calendar,
  Bot,
  Star,
  MessageCircle,
  Bell,
  Users,
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    rating: 0,
    project: '',
    review: '',
  });

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  // Demo testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      rating: 5,
      review:
        'Exceptional work on our e-commerce platform. The automation solutions reduced our processing time by 75%.',
      project: 'E-Commerce Platform',
      date: '2024-01-15',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupLab',
      rating: 5,
      review:
        'Outstanding technical expertise and communication. Delivered beyond expectations on every milestone.',
      project: 'Task Management App',
      date: '2023-12-08',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Agency',
      rating: 4,
      review:
        'Creative problem-solving and attention to detail. The content automation system transformed our workflow.',
      project: 'Content Automation',
      date: '2023-11-22',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription:', subscriptionEmail);
    setSubscriptionEmail('');
    // Add success message logic here
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewData);
    setReviewData({ name: '', email: '', rating: 0, project: '', review: '' });
    setShowReviewForm(false);
    // Add review to testimonials logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('review-')) {
      const field = name.replace('review-', '');
      setReviewData(prev => ({ ...prev, [field]: value }));
    } else if (name === 'subscription') {
      setSubscriptionEmail(value);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleScheduleSession = () => {
    // This will trigger Voiceflow assistant later
    console.log('Schedule session clicked - Voiceflow integration pending');
    alert(
      'Schedule session feature will be integrated with Voiceflow assistant'
    );
  };

  const handleLearnMore = () => {
    // This will open AI customer support later
    console.log('Learn more clicked - AI customer support integration pending');
    alert('AI customer support feature will be integrated');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@portfolio.dev',
      href: 'mailto:hello@portfolio.dev',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote • Global',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Calendar, href: '#', label: 'Schedule Call' },
  ];



  const renderStars = (
    rating: number,
    interactive = false,
    size = 'w-4 h-4'
  ) => {
    return (
      <div className='flex space-x-1'>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-colors duration-200 ${
              star <= (interactive ? hoveredStar || reviewData.rating : rating)
                ? 'fill-current text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
            onClick={
              interactive
                ? () => setReviewData(prev => ({ ...prev, rating: star }))
                : undefined
            }
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section id='contact' className='bg-white py-24 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Let&apos;s <span className='font-medium'>Connect</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Ready to transform your ideas into reality? Let&apos;s discuss how
            we can work together to create something amazing.
          </p>
        </div>

        {/* AI-Powered Actions */}
        <div className='mb-16 border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-slate-800'>
          <div className='mb-8 text-center'>
            <div className='mb-4 flex items-center justify-center'>
              <Bot className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
              <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
                AI-Powered Assistance
              </span>
            </div>
            <h3 className='mb-4 text-2xl font-light text-gray-900 dark:text-white'>
              Get Instant Help
            </h3>
            <p className='mb-8 font-light text-gray-600 dark:text-gray-300'>
              Experience my AI & Automation expertise firsthand with intelligent
              assistance
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <button
              onClick={handleScheduleSession}
              className='group flex items-center justify-center space-x-3 bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
            >
              <Calendar className='h-5 w-5' />
              <span>Schedule a Session</span>
            </button>

            <button
              onClick={handleLearnMore}
              className='group flex items-center justify-center space-x-3 border border-gray-300 px-8 py-4 font-medium text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-slate-700'
            >
              <MessageCircle className='h-5 w-5' />
              <span>Ask AI Assistant</span>
            </button>
          </div>
        </div>

        <div className='mb-16 grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Contact Information */}
          <div className='space-y-12'>
            <div>
              <h3 className='mb-6 text-2xl font-light text-gray-900 dark:text-white'>
                Get in Touch
              </h3>
              <p className='mb-8 leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you need development work, automation
                solutions, or creative content, let&apos;s explore how we can
                collaborate.
              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <div key={index} className='group flex items-center space-x-4'>
                  <div className='flex h-10 w-10 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-gray-300 dark:border-gray-600 dark:group-hover:border-gray-500'>
                    <info.icon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
                  </div>
                  <div>
                    <div className='text-sm font-light tracking-wide text-gray-500 uppercase dark:text-gray-400'>
                      {info.title}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className='text-lg font-medium text-gray-900 transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className='text-lg font-medium text-gray-900 dark:text-white'>
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='pt-8'>
              <h4 className='mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                Connect Online
              </h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='group flex h-10 w-10 items-center justify-center border border-gray-200 transition-all duration-300 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
                    aria-label={social.label}
                  >
                    <social.icon className='h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='border border-gray-100 bg-gray-50 p-12 dark:border-gray-700 dark:bg-slate-800'>
            <h3 className='mb-8 text-2xl font-light text-gray-900 dark:text-white'>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
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
                    className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500'
                    placeholder='John Doe'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
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
                    className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500'
                    placeholder='john@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
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
                  className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500'
                  placeholder='Project Inquiry'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'
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
                  className='w-full resize-none border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500'
                  placeholder='Tell me about your project...'
                />
              </div>

              <button
                type='submit'
                className='group flex w-full items-center justify-center space-x-2 bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
              >
                <Send className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Subscription Section */}
        <div className='mb-16 border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-slate-800'>
          <div className='mb-8 text-center'>
            <div className='mb-4 flex items-center justify-center'>
              <Bell className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
              <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
                Stay Updated
              </span>
            </div>
            <h3 className='mb-4 text-2xl font-light text-gray-900 dark:text-white'>
              Project Updates
            </h3>
            <p className='mb-8 font-light text-gray-600 dark:text-gray-300'>
              Be the first to know when I release new projects, products, or
              share insights
            </p>
          </div>

          <form onSubmit={handleSubscription} className='mx-auto max-w-md'>
            <div className='flex space-x-4'>
              <input
                type='email'
                name='subscription'
                value={subscriptionEmail}
                onChange={handleChange}
                required
                className='flex-1 border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500'
                placeholder='your@email.com'
              />
              <button
                type='submit'
                className='bg-gray-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials & Reviews */}
        <div className='mb-16'>
          <div className='mb-12 text-center'>
            <div className='mb-4 flex items-center justify-center'>
              <Users className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
              <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
                Client Feedback
              </span>
            </div>
            <h3 className='mb-4 text-2xl font-light text-gray-900 dark:text-white'>
              What People Say
            </h3>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className='border border-gray-300 px-6 py-2 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500'
            >
              Leave a Review
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className='mb-12 border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-slate-800'>
              <h4 className='mb-6 text-lg font-medium text-gray-900 dark:text-white'>
                Share Your Experience
              </h4>

              <form onSubmit={handleReviewSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      name='review-name'
                      value={reviewData.name}
                      onChange={handleChange}
                      required
                      className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:focus:border-gray-500'
                    />
                  </div>

                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='review-email'
                      value={reviewData.email}
                      onChange={handleChange}
                      required
                      className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:focus:border-gray-500'
                    />
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Project/Service
                  </label>
                  <select
                    name='review-project'
                    value={reviewData.project}
                    onChange={handleChange}
                    required
                    className='w-full border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:focus:border-gray-500'
                  >
                    <option value=''>Select a project or service</option>
                    <option value='E-Commerce Platform'>
                      E-Commerce Platform
                    </option>
                    <option value='Task Management App'>
                      Task Management App
                    </option>
                    <option value='API Management System'>
                      API Management System
                    </option>
                    <option value='Content Creation'>Content Creation</option>
                    <option value='Automation Solutions'>
                      Automation Solutions
                    </option>
                    <option value='DevOps Services'>DevOps Services</option>
                    <option value='This Website'>This Website</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Rating
                  </label>
                  <div className='flex items-center space-x-2'>
                    {renderStars(reviewData.rating, true, 'w-6 h-6')}
                    <span className='ml-4 text-sm text-gray-600 dark:text-gray-300'>
                      {reviewData.rating > 0
                        ? `${reviewData.rating} star${reviewData.rating > 1 ? 's' : ''}`
                        : 'Click to rate'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Your Review
                  </label>
                  <textarea
                    name='review-review'
                    value={reviewData.review}
                    onChange={handleChange}
                    required
                    rows={4}
                    className='w-full resize-none border border-gray-200 bg-white px-4 py-3 font-light text-gray-900 transition-colors duration-200 focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:focus:border-gray-500'
                    placeholder='Share your experience working with me...'
                  />
                </div>

                <div className='flex space-x-4'>
                  <button
                    type='submit'
                    className='bg-gray-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  >
                    Submit Review
                  </button>
                  <button
                    type='button'
                    onClick={() => setShowReviewForm(false)}
                    className='border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Testimonials Display */}
          {testimonials.length > 0 ? (
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className='border border-gray-100 bg-white p-6 transition-shadow duration-300 hover:shadow-sm dark:border-gray-700 dark:bg-slate-800'
                >
                  <div className='mb-4 flex items-center justify-between'>
                    {renderStars(testimonial.rating)}
                    <span className='text-xs font-light text-gray-500 dark:text-gray-400'>
                      {new Date(testimonial.date).toLocaleDateString()}
                    </span>
                  </div>

                  <p className='mb-4 text-sm leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                    &quot;{testimonial.review}&quot;
                  </p>

                  <div className='border-t border-gray-100 pt-4 dark:border-gray-700'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <div className='text-sm font-medium text-gray-900 dark:text-white'>
                          {testimonial.name}
                        </div>
                        <div className='text-xs font-light text-gray-500 dark:text-gray-400'>
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                      <div className='text-xs font-light text-gray-500 dark:text-gray-400'>
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='border border-gray-100 bg-gray-50 py-12 text-center dark:border-gray-700 dark:bg-slate-800'>
              <MessageCircle className='mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500' />
              <h4 className='mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                No Reviews Yet
              </h4>
              <p className='font-light text-gray-600 dark:text-gray-300'>
                Be the first to share your experience working with me
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className='mt-20 border-t border-gray-100 pt-8 text-center dark:border-gray-700'>
          <p className='font-light text-gray-500 dark:text-gray-400'>
            © 2025 Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
