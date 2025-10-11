'use client';
import { Globe, Languages, MessageSquare, Mic, Users } from 'lucide-react';
import React from 'react';
import { AnimatedSkillBar } from './AnimatedSkillBar';

const LanguagesSection: React.FC = () => {
  const languages = [
    {
      language: 'English',
      level: 'Native',
      proficiency: 100,
      description:
        'Primary language for professional communication and technical documentation',
      flag: '🇺🇸',
      icon: MessageSquare,
    },
    {
      language: 'Yoruba',
      level: 'Native',
      proficiency: 100,
      description:
        'Cultural heritage language, fluent in speaking and understanding',
      flag: '🇳🇬',
      icon: Users,
    },
    {
      language: 'French',
      level: 'Learning',
      proficiency: 35,
      description:
        'Currently developing conversational skills and business French',
      flag: '🇫🇷',
      icon: Mic,
    },
    {
      language: 'Chinese',
      level: 'Learning',
      proficiency: 25,
      description:
        'Beginning Mandarin studies for global business opportunities',
      flag: '🇨🇳',
      icon: Globe,
    },
  ];

  const communicationSkills = [
    { skill: 'Technical Writing', level: 'Intermediate' },
    { skill: 'Client Presentations', level: 'Advanced' },
    { skill: 'Cross-cultural Communication', level: 'Intermediate' },
    { skill: 'Documentation', level: 'Intermediate' },
  ];

  return (
    <section id='languages' className='bg-gray-50 py-24 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='section-header-line'>
            <Languages className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
            <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
              Languages
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Global <span className='font-medium'>Communication</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Bridging cultures through language, enabling effective communication
            in diverse global environments and expanding opportunities for
            collaboration.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Language Proficiency */}
          <div className='space-y-8'>
            <h3 className='mb-8 text-2xl font-light text-gray-900 dark:text-white'>
              Language Proficiency
            </h3>

            <div className='space-y-6'>
              {languages.map(lang => (
                <AnimatedSkillBar
                  key={lang.language}
                  label={lang.language}
                  icon={lang.icon}
                  flag={lang.flag}
                  level={lang.level}
                  proficiency={lang.proficiency}
                  description={lang.description}
                />
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div className='space-y-8'>
            <h3 className='mb-8 text-2xl font-light text-gray-900 dark:text-white'>
              Communication Skills
            </h3>

            <div className='border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
              <div className='mb-6 flex items-start space-x-4'>
                <MessageSquare className='mt-1 h-6 w-6 flex-shrink-0 text-gray-600 dark:text-gray-400' />
                <div className='w-full'>
                  <h4 className='mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                    Professional Communication
                  </h4>
                  <div className='space-y-4'>
                    {communicationSkills.map((skill, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-between border border-gray-100 bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700'
                      >
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {skill.skill}
                        </span>
                        <span className='bg-gray-200 px-3 py-1 text-sm font-light text-gray-700 dark:bg-gray-700 dark:text-gray-300'>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Global Perspective */}
            <div className='bg-gray-900 p-8 text-white dark:bg-slate-950'>
              <h4 className='mb-4 text-lg font-medium text-white'>
                Global Perspective
              </h4>
              <p className='mb-6 leading-relaxed font-light text-gray-300 dark:text-gray-400'>
                &quot;Language is the bridge to understanding. My multilingual
                journey reflects a commitment to connecting with diverse
                communities and expanding my ability to collaborate across
                cultural boundaries.&quot;
              </p>
              <div className='grid grid-cols-2 gap-6 text-center'>
                <div>
                  <div className='mb-1 text-2xl font-light'>4</div>
                  <div className='text-sm font-light text-gray-400'>
                    Languages
                  </div>
                </div>
                <div>
                  <div className='mb-1 text-2xl font-light'>Global</div>
                  <div className='text-sm font-light text-gray-400'>Reach</div>
                </div>
              </div>
            </div>

            {/* Learning Progress */}
            <div className='border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
              <h4 className='mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                Current Learning Goals
              </h4>
              <div className='space-y-3'>
                <div className='flex items-center space-x-2'>
                  <div className='h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                  <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                    French: Business conversation level by Mid-2026
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                  <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                    Chinese: Basic communication skills
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                  <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                    Technical vocabulary expansion in all known languages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
