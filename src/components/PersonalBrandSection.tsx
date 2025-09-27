import React from 'react';
import { BookOpen, Code, Users, TrendingUp, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { LogoTransparent } from '@/app/assets';

const PersonalBrandSection: React.FC = () => {
  const pillars = [
    {
      title: 'The Record',
      icon: BookOpen,
      description:
        'Documenting every step of the development journey, from first lines of code to complex architectures.',
    },
    {
      title: 'The Logs',
      icon: Code,
      description:
        'Technical insights, problem-solving approaches, and lessons learned through real-world challenges.',
    },
    {
      title: 'The Network',
      icon: Users,
      description:
        'Building meaningful connections, sharing knowledge, and growing together with the developer community.',
    },
    {
      title: 'The Growth',
      icon: TrendingUp,
      description:
        'Continuously evolving skills, embracing new technologies, and pushing creative boundaries.',
    },
  ];

  return (
    <section
      id='brand'
      className='relative overflow-hidden bg-slate-50 py-32 text-slate-900 dark:bg-slate-950 dark:text-slate-100'
    >
      {/* Subtle background pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #475569 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className='relative z-10 mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-24 text-center'>
          <div className='mb-8 flex items-center justify-center'>
            <div className='mr-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Personal Brand
            </span>
            <div className='ml-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
          </div>

          {/* Brand Logo */}
          <div className='mb-12'>
            <Image
              src={LogoTransparent}
              alt='Aradyst Codex Logo'
              className='mx-auto mb-8 h-16 w-16 opacity-90'
            />
            <h2 className='mb-6 text-5xl font-extralight tracking-tight md:text-6xl'>
              Aradyst <span className='font-light italic'>Codex</span>
            </h2>
          </div>

          <p className='mx-auto mb-8 max-w-4xl text-lg leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
            The codex of a developer — a living record of growth, challenges,
            and discoveries. More than documentation, it&apos;s the essence of
            continuous evolution.
          </p>

          <div className='mx-auto mb-12 h-px w-16 bg-slate-300 dark:bg-slate-600'></div>

          <blockquote className='mx-auto mb-12 max-w-4xl text-xl leading-relaxed font-extralight tracking-wide text-slate-700 italic dark:text-slate-200'>
            &quot;The journey is the brand. Every challenge accepted, every
            skill developed, every connection made becomes part of the codex — a
            testament to growth through action.&quot;
          </blockquote>
        </div>

        <div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
          {/* Philosophy */}
          <div className='space-y-12'>
            <div>
              <h3 className='mb-8 text-2xl font-extralight tracking-tight'>
                The Philosophy
              </h3>
              <div className='space-y-6 leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
                <p>
                  Aradyst Codex represents the intersection of technical mastery
                  and human connection. It&apos;s where code meets creativity,
                  where problems become opportunities, and where individual
                  growth contributes to collective knowledge.
                </p>
                <p>
                  This brand embodies the belief that true expertise comes not
                  from isolation, but from engaging with challenges, sharing
                  discoveries, and building bridges between ideas and people.
                </p>
                <p>
                  Every project undertaken, every skill acquired, every
                  relationship built adds another entry to the codex — creating
                  a comprehensive record of professional and personal evolution.
                </p>
              </div>
            </div>

            {/* Brand Metrics */}
            <div className='grid grid-cols-2 gap-8'>
              <div className='border border-slate-700/50 bg-white p-8 text-center dark:bg-slate-800/30'>
                <div className='mb-2 text-3xl font-extralight tracking-tight'>
                  ∞
                </div>
                <div className='text-xs font-light tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                  Learning
                </div>
              </div>
              <div className='border border-slate-700/50 bg-white p-8 text-center dark:bg-slate-800/30'>
                <div className='mb-2 text-3xl font-extralight tracking-tight'>
                  +1%
                </div>
                <div className='text-xs font-light tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                  Daily
                </div>
              </div>
            </div>
          </div>

          {/* The Four Pillars */}
          <div className='space-y-12'>
            <div>
              <h3 className='mb-8 text-2xl font-extralight tracking-tight'>
                The Four Pillars
              </h3>
              <div className='space-y-6'>
                {pillars.map(pillar => (
                  <div
                    key={pillar.title}
                    className='group border border-slate-700/30 bg-white p-6 transition-all duration-500 hover:border-slate-600/50 dark:bg-slate-800/20'
                  >
                    <div className='flex items-start space-x-4'>
                      <div className='flex h-10 w-10 items-center justify-center border border-slate-600/50 bg-white transition-all duration-500 group-hover:border-slate-500/70 dark:bg-slate-800/50'>
                        <pillar.icon className='h-4 w-4 text-slate-500 dark:text-slate-400' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='mb-3 text-lg font-light tracking-wide text-slate-700 dark:text-slate-100'>
                          {pillar.title}
                        </h4>
                        <p className='text-sm leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-24 text-center'>
          <div className='mx-auto max-w-2xl'>
            <h3 className='mb-8 text-2xl font-extralight tracking-tight'>
              Join the Journey
            </h3>
            <p className='mb-12 leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
              Follow the evolution, connect with the community, and be part of
              the ongoing codex.
            </p>

            <a
              href='https://linktr.ee/aradyst_codex'
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center space-x-3 bg-slate-900 px-8 py-4 font-medium text-slate-100 transition-all duration-300 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            >
              <span>Explore Aradyst Codex</span>
              <ExternalLink className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandSection;
