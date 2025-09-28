'use client';
import React, { useState } from 'react';
import { Star, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useSupabaseForm } from '../../hooks/useSupabaseForm';
import Testimonial from '../TestimonialSection';

const ReviewsSection: React.FC = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    rating: 0,
    project: '',
    review: '',
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { submitForm, isSubmitting, error, success } = useSupabaseForm({
    table: 'reviews',
    emailType: 'review',
    onSuccess: () => {
      setReviewData({
        name: '',
        email: '',
        rating: 0,
        project: '',
        review: '',
      });
      setValidationErrors({});
      setTouched({});
      setShowReviewForm(false);
    },
  });

  // Validation rules
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateField = (field: string, value: any): string => {
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

      case 'rating':
        if (!value || value === 0) {
          return 'Please select a rating';
        }
        if (value < 1 || value > 5) {
          return 'Rating must be between 1 and 5 stars';
        }
        return '';

      case 'project':
        if (!value || value.trim().length === 0) {
          return 'Please select a project or service';
        }
        return '';

      case 'review':
        if (!value || value.trim().length === 0) {
          return 'Review is required';
        }
        if (value.trim().length < 10) {
          return 'Review must be at least 10 characters';
        }
        if (value.trim().length > 1000) {
          return 'Review must be less than 1000 characters';
        }
        return '';

      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    Object.keys(reviewData).forEach(field => {
      const error = validateField(
        field,
        reviewData[field as keyof typeof reviewData]
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
      reviewData[field as keyof typeof reviewData]
    );
    setValidationErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(reviewData).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
    setTouched(allTouched);

    if (validateForm()) {
      submitForm(reviewData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const field = name.replace('review-', '');

    setReviewData(prev => ({ ...prev, [field]: value }));

    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Real-time validation for touched fields
    if (touched[field]) {
      const error = validateField(field, value);
      setValidationErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleRatingChange = (rating: number) => {
    setReviewData(prev => ({ ...prev, rating }));
    setTouched(prev => ({ ...prev, rating: true }));

    const error = validateField('rating', rating);
    setValidationErrors(prev => ({ ...prev, rating: error }));
  };

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
                : 'text-slate-300 dark:text-slate-600'
            }`}
            onClick={interactive ? () => handleRatingChange(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          />
        ))}
      </div>
    );
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
    const errorClasses = hasError
      ? 'border-red-500 focus:border-red-500 dark:border-red-400'
      : 'border-slate-600 focus:border-slate-500';

    return `${baseClassName} ${errorClasses}`;
  };

  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Users className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Client Feedback
            </span>
          </div>

          <h2 className='section-title'>
            What People <span className='font-light italic'>Say</span>
          </h2>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className='border border-slate-600 px-6 py-3 font-light tracking-wide text-slate-600 transition-colors duration-300 hover:border-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-100'
          >
            Leave a Review
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className='mb-16 border border-slate-700/50 bg-white p-12 dark:bg-slate-800/30'>
            {/* Success/Error Messages */}
            {success && (
              <div className='mb-8 flex items-center space-x-3 border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20'>
                <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400' />
                <div>
                  <p className='font-medium text-green-800 dark:text-green-200'>
                    Review submitted successfully!
                  </p>
                  <p className='text-sm text-green-600 dark:text-green-300'>
                    Thank you for your feedback. It will be reviewed before
                    publishing.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className='mb-8 flex items-center space-x-3 border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20'>
                <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400' />
                <div>
                  <p className='font-medium text-red-800 dark:text-red-200'>
                    Failed to submit review
                  </p>
                  <p className='text-sm text-red-600 dark:text-red-300'>
                    {error}
                  </p>
                </div>
              </div>
            )}

            <h4 className='section-title text-lg'>Share Your Experience</h4>

            <form onSubmit={handleReviewSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Your Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='review-name'
                    value={reviewData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder='Michael Emmanuel'
                    required
                    className={getFieldClassName(
                      'name',
                      'w-full bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                    )}
                  />
                  {renderFieldError('name')}
                </div>

                <div>
                  <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    name='review-email'
                    value={reviewData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    required
                    placeholder='michael@example.com'
                    className={getFieldClassName(
                      'email',
                      'w-full bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                    )}
                  />
                  {renderFieldError('email')}
                </div>
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Project/Service <span className='text-red-500'>*</span>
                </label>
                <select
                  name='review-project'
                  value={reviewData.project}
                  onChange={handleChange}
                  onBlur={() => handleBlur('project')}
                  required
                  className={getFieldClassName(
                    'project',
                    'w-full bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                  )}
                >
                  <option value='' disabled>
                    Select a project or service
                  </option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {renderFieldError('project')}
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Rating <span className='text-red-500'>*</span>
                </label>
                <div className='flex items-center space-x-2'>
                  {renderStars(reviewData.rating, true, 'w-6 h-6')}
                  <span className='ml-4 text-sm font-light tracking-wide text-slate-500 dark:text-slate-400'>
                    {reviewData.rating > 0
                      ? `${reviewData.rating} star${
                          reviewData.rating > 1 ? 's' : ''
                        }`
                      : 'Click to rate'}
                  </span>
                </div>
                {renderFieldError('rating')}
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Your Review <span className='text-red-500'>*</span>
                  <span className='ml-2 text-xs text-slate-400'>
                    ({reviewData.review.length}/1000)
                  </span>
                </label>
                <textarea
                  name='review-review'
                  value={reviewData.review}
                  onChange={handleChange}
                  onBlur={() => handleBlur('review')}
                  required
                  rows={4}
                  maxLength={1000}
                  className={getFieldClassName(
                    'review',
                    'w-full resize-none bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                  )}
                  placeholder='Share your experience working with me...'
                />
                {renderFieldError('review')}
              </div>

              <div className='flex space-x-4'>
                <button
                  type='submit'
                  disabled={
                    isSubmitting ||
                    Object.values(validationErrors).some(error => error !== '')
                  }
                  className='bg-slate-800 px-6 py-3 font-light tracking-wide text-slate-100 transition-colors duration-300 hover:bg-slate-800/90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setShowReviewForm(false);
                    setValidationErrors({});
                    setTouched({});
                  }}
                  className='border border-slate-600 px-6 py-3 font-light tracking-wide text-slate-600 transition-colors duration-300 hover:text-slate-500 dark:text-slate-300 dark:hover:border-slate-500'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Testimonials Display */}
        <Testimonial />
      </div>
    </section>
  );
};
const services = [
  { value: 'Website', label: 'My Portfolio Website/Me' },
  { value: 'Full-Stack Development', label: 'Full-Stack Development' },
  { value: 'AI & Automation', label: 'AI & Automation' },
  { value: 'Content Creation', label: 'Content Creation' },
  { value: 'DevOps Services', label: 'DevOps Services' },
  { value: 'Other', label: 'Other' },
];

export default ReviewsSection;
