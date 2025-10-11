import React from 'react';
import { Code2, Bot, Film, Cloud, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Modern web applications built with React, Node.js, and cloud technologies',
      features: ['Responsive Design', 'API Development', 'Database Design'],
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description:
        'Intelligent automation solutions that streamline business processes',
      features: [
        'Workflow Automation',
        'AI Integration',
        'Process Optimization',
      ],
    },
    {
      icon: Film,
      title: 'Content Creation',
      description:
        'Compelling visual narratives that captivate audiences and drive results',
      features: ['Video Production', 'Brand Stories', 'Social Content'],
    },
    {
      icon: Cloud,
      title: 'DevOps Solutions',
      description:
        'Scalable infrastructure and deployment pipelines for modern applications',
      features: ['CI/CD Pipelines', 'Cloud Architecture', 'Monitoring'],
    },
  ];

  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mb-24 text-center'>
          <div className='section-header-line'>
            <Briefcase className='mr-3 h-6 w-6 text-gray-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Services
            </span>
          </div>
          <h2 className='font-display mb-6 text-5xl font-extralight tracking-tight text-slate-900 md:text-6xl dark:text-slate-100'>
            What I <span className='font-light italic'>Offer</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
            Comprehensive solutions spanning development, automation, content
            creation, and infrastructure
          </p>
        </div>

        <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group border border-slate-200 p-8 transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'
            >
              <div className='mb-6 flex h-12 w-12 items-center justify-center border border-slate-600 transition-colors duration-300 group-hover:border-slate-500'>
                <service.icon className='h-6 w-6 text-slate-600 dark:text-slate-400' />
              </div>

              <h3 className='font-display mb-4 text-xl font-light tracking-tight text-slate-900 dark:text-slate-100'>
                {service.title}
              </h3>

              <p className='mb-6 leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
                {service.description}
              </p>

              <div className='space-y-2'>
                {service.features.map(feature => (
                  <div key={feature} className='flex items-center space-x-2'>
                    <div className='h-1 w-1 rounded-full bg-slate-500'></div>
                    <span className='text-sm font-light tracking-wide text-slate-600 dark:text-slate-400'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Link
            href='/services'
            className='group inline-flex items-center space-x-2 bg-slate-900 px-8 py-4 font-light tracking-wide text-slate-100 transition-all duration-300 hover:bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
          >
            <span>Explore All Services</span>
            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
