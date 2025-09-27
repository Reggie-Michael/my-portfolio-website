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
      setShowReviewForm(false);
    },
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(reviewData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const field = name.replace('review-', '');
    setReviewData(prev => ({ ...prev, [field]: value }));
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
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='review-name'
                    value={reviewData.name}
                    onChange={handleChange}
                    placeholder='Michael Emmanuel'
                    required
                    className='w-full border border-slate-600 bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:border-slate-500 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='review-email'
                    value={reviewData.email}
                    onChange={handleChange}
                    required
                    placeholder='michael@example.com'
                    className='w-full border border-slate-600 bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:border-slate-500 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                  />
                </div>
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Project/Service
                </label>
                <select
                  name='review-project'
                  value={reviewData.project}
                  onChange={handleChange}
                  required
                  className='w-full border border-slate-600 bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:border-slate-500 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
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
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Rating
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
              </div>

              <div>
                <label className='mb-2 block text-sm font-light tracking-wide text-slate-600 dark:text-slate-300'>
                  Your Review
                </label>
                <textarea
                  name='review-review'
                  value={reviewData.review}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='w-full resize-none border border-slate-600 bg-slate-100 px-4 py-3 font-light text-slate-700 transition-colors duration-300 focus:border-slate-500 focus:outline-none dark:bg-slate-700 dark:text-slate-100'
                  placeholder='Share your experience working with me...'
                />
              </div>

              <div className='flex space-x-4'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-slate-800 px-6 py-3 font-light tracking-wide text-slate-100 transition-colors duration-300 hover:bg-slate-800/90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
                <button
                  type='button'
                  onClick={() => setShowReviewForm(false)}
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
