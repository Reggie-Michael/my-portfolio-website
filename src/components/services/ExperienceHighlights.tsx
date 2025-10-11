import { Award, Clock, TrendingUp, Users } from 'lucide-react';
import React from 'react';
import CountUpOnView from '../CountUpView';
import Testimonial from '../TestimonialSection';

const ExperienceHighlights: React.FC = () => {
  const metrics = [
    {
      icon: Award,
      value: '25',
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful project completions across various industries',
    },
    {
      icon: Users,
      value: '95',
      suffix: '%',
      label: 'Client Satisfaction',
      description:
        'Maintaining perfect client satisfaction through quality delivery',
    },
    {
      icon: TrendingUp,
      value: '55',
      suffix: '%',
      label: 'Efficiency Gain',
      description: 'Average improvement in client workflow efficiency',
    },
    {
      icon: Clock,
      value: '24',
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock support for critical projects',
    },
  ];

  return (
    <section className='bg-white py-32 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Clock className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-400 uppercase'>
              Experience
            </span>
          </div>
          <h2 className='section-title'>
            Proven <span className='font-light italic'>Results</span>
          </h2>
          <p className='section-subtitle'>
            Delivering measurable impact through technical excellence and
            strategic thinking
          </p>
        </div>

        {/* Metrics */}
        <div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {metrics.map((metric, index) => (
            <div
              key={index}
              className='card p-8 text-center transition-all duration-300 hover:border-slate-600/70'
            >
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-slate-600'>
                <metric.icon className='h-6 w-6 text-slate-500 dark:text-slate-400' />
              </div>
              <div className='font-display mb-2 text-3xl font-light tracking-tight text-slate-900 dark:text-slate-100'>
                <CountUpOnView value={+metric.value} />
                {metric.suffix}
              </div>
              <div className='mb-3 font-light tracking-wide text-slate-600 dark:text-slate-300'>
                {metric.label}
              </div>
              <div className='text-xs leading-relaxed font-light tracking-wide text-slate-500 dark:text-slate-400'>
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <Testimonial />
      </div>
    </section>
  );
};

export default ExperienceHighlights;
