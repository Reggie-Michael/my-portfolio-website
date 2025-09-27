import React from 'react';
import { Globe, MessageSquare, Users, Mic } from 'lucide-react';

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
    { skill: 'Technical Writing', level: 'Expert' },
    { skill: 'Client Presentations', level: 'Advanced' },
    { skill: 'Cross-cultural Communication', level: 'Advanced' },
    { skill: 'Documentation', level: 'Expert' },
  ];

  return (
    <section id='languages' className='bg-gray-50 py-24 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='mb-6 flex items-center justify-center'>
            <Globe className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
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
                <div
                  key={lang.language}
                  className='group border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-slate-900'
                >
                  <div className='flex items-start space-x-4'>
                    {/* Language Icon */}
                    <div className='flex h-12 w-12 items-center justify-center border border-gray-200 bg-gray-50 transition-colors duration-300 group-hover:border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:group-hover:border-gray-500'>
                      <lang.icon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
                    </div>

                    <div className='flex-1'>
                      <div className='mb-3 flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                          <span className='text-2xl'>{lang.flag}</span>
                          <div>
                            <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                              {lang.language}
                            </h4>
                            <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                              {lang.level}
                            </span>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-lg font-light text-gray-900 dark:text-white'>
                            {lang.proficiency}%
                          </div>
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className='mb-3 h-2 w-full bg-gray-200 dark:bg-gray-700'>
                        <div
                          className='h-2 bg-gray-900 transition-all duration-1000 ease-out dark:bg-white'
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>

                      <p className='text-sm leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                        {lang.description}
                      </p>
                    </div>
                  </div>
                </div>
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
                    French: Business conversation level by 2025
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
                    Technical vocabulary expansion in all languages
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
