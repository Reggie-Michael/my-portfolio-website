'use client';
import { AlertCircle, MessageCircle, Star } from 'lucide-react';
import { useReviews } from '../hooks/useReviews';

const Testimonial = () => {
  const {
    reviews: testimonials,
    loading: reviewsLoading,
    error: reviewsError,
  } = useReviews();

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return (
      <div className='flex space-x-1'>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-colors duration-200 ${
              star <= rating
                ? 'fill-current text-yellow-400'
                : 'text-slate-300 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {reviewsLoading ? (
        <div className='py-12 text-center'>
          <div className='font-light text-slate-500 dark:text-slate-400'>
            Loading reviews...
          </div>
        </div>
      ) : reviewsError ? (
        <div className='border border-red-200 bg-red-50 py-12 text-center dark:border-red-800 dark:bg-red-900/20'>
          <AlertCircle className='mx-auto mb-4 h-12 w-12 text-red-400' />
          <h4 className='mb-2 text-lg font-medium text-red-800 dark:text-red-200'>
            Failed to load reviews
          </h4>
          <p className='font-light text-red-600 dark:text-red-300'>
            {reviewsError}
          </p>
        </div>
      ) : testimonials.length > 0 ? (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className='card p-8 transition-all duration-300'
            >
              <div className='mb-4 flex items-center justify-between'>
                {renderStars(testimonial.rating)}
                <span className='text-xs font-light tracking-wide text-slate-400 dark:text-slate-500'>
                  {new Date(testimonial.created_at || '').toLocaleDateString()}
                </span>
              </div>

              <p className='dark:text-slate-300e mb-6 max-h-28 overflow-y-auto text-sm leading-relaxed font-light tracking-wide text-slate-600 italic lg:max-h-48'>
                &quot;{testimonial.review}&quot;
              </p>

              <div className='border-t border-slate-700/50 pt-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-sm font-light tracking-wide text-slate-700 dark:text-slate-100'>
                      {testimonial.name}
                    </div>
                  </div>
                  <div className='text-xs font-light tracking-wide text-slate-400 dark:text-slate-500'>
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='border border-slate-700/50 bg-white py-12 text-center dark:bg-slate-800/30'>
          <MessageCircle className='mx-auto mb-4 h-12 w-12 text-slate-500' />
          <h4 className='mb-2 text-lg font-medium text-slate-700 dark:text-slate-100'>
            No Reviews Yet
          </h4>
          <p className='font-light text-slate-500 dark:text-slate-400'>
            Be the first to share your experience working with me
          </p>
        </div>
      )}
    </>
  );
};

export default Testimonial;
