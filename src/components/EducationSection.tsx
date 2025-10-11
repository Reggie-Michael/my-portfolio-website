import {
  BookOpen,
  Calendar,
  Code,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';
import React from 'react';
import CountUpOnView from './CountUpView';

const EducationSection: React.FC = () => {
  const education = [
    {
      institution: 'De-Pillars College School',
      degree: 'Art Student',
      year: '2016-2020',
      description:
        'Studied visual arts and creative expression, building foundational skills in design and aesthetics.',
      type: 'Formal Education',
    },
    {
      institution: 'IT Training Center',
      degree: 'Full-Stack Development Certification',
      year: '2023',
      description:
        'Comprehensive program covering modern web development technologies including React, Node.js, and database management.',
      type: 'Professional Training',
    },
    {
      institution: 'Udemy',
      degree: 'Advanced React',
      year: '2023',
      description:
        'Specialized courses focused on advanced React patterns, hooks, state management, and scalable application architecture.',
      type: 'Online Learning',
    },
    {
      institution: 'Udemy & Other Online Platforms',
      degree: 'Linux Management & Kali Tools',
      year: '2024',
      description:
        'Hands-on learning of Linux system administration, networking, and penetration testing with Kali Linux and essential networking tools.',
      type: 'Online Learning',
    },
    {
      institution: 'Udemy & Other Online Platforms',
      degree: 'DevOps & Vagrant',
      year: '2025',
      description:
        'Studying DevOps practices, containerization, and environment provisioning with Vagrant, alongside CI/CD workflow implementation.',
      type: 'Professional Training',
    },
    {
      institution: 'TRW',
      degree: 'Content Creation',
      year: '2025',
      description:
        'Learning video production, storytelling, and digital content strategies for impactful communication.',
      type: 'Professional Training',
    },
    {
      institution: 'TRW',
      degree: 'AI & Automation',
      year: '2025',
      description:
        'Exploring artificial intelligence applications and automation workflows to optimize business processes.',
      type: 'Professional Training',
    },
    {
      institution: 'Various Online Platforms',
      degree: 'Continuous Learning in AI, ML, and Emerging Skills',
      year: 'Ongoing',
      description:
        'Consistently upgrading skills in AI, machine learning, and other technology trends for professional growth.',
      type: 'Self-Directed Learning',
    },
  ];

  const skillTimeline = [
    // {
    //   year: '2016-2020',
    //   skills: [
    //     {
    //       name: 'Art & Design',
    //       source: 'De-Pillars P College',
    //       level: 'Foundation',
    //     },
    //   ],
    // },
    {
      year: '2021',
      skills: [
        {
          name: 'Video Editing',
          source: 'Personal Projects',
          level: 'Foundation',
        },
      ],
    },
    {
      year: '2022',
      skills: [
        {
          name: 'Video Production',
          source: 'Personal Projects',
          level: 'Intermediate',
        },
      ],
    },
    {
      year: '2023 (Early)',
      skills: [
        { name: 'HTML/CSS', source: 'IT Training Center', level: 'Foundation' },
        {
          name: 'JavaScript',
          source: 'Self Study',
          level: 'Intermediate',
        },
      ],
    },
    {
      year: '2023 (Mid)',
      skills: [
        {
          name: 'Git Version Control',
          source: 'Contributions & Udemy',
          level: 'Intermediate',
        },
        { name: 'Python', source: 'Personal Projects', level: 'Intermediate' },
      ],
    },
    {
      year: '2023 (Late)',
      skills: [
        {
          name: 'RESTful APIs',
          source: 'Personal/Company Projects',
          level: 'Intermediate',
        },
        { name: 'Node.js', source: 'Freelance Work', level: 'Intermediate' },
      ],
    },
    {
      year: '2024 (Early)',
      skills: [
        {
          name: 'React.js',
          source: 'Personal Projects',
          level: 'Intermediate',
        },
        { name: 'Node.js', source: 'Freelance Work', level: 'Intermediate' },
        {
          name: 'Linux Management & Kali Tools',
          source: 'Udemy & Online Platforms',
          level: 'Intermediate',
        },
      ],
    },
    {
      year: '2024 (Late)',
      skills: [
        {
          name: 'CI/CD Pipelines',
          source: 'Company Projects',
          level: 'Intermediate',
        },

        {
          name: 'Technical Leadership',
          source: 'Team Management',
          level: 'Advanced',
        },
        {
          name: 'Analytics',
          source: 'Company Projects',
          level: 'Intermediate',
        },
        {
          name: 'TypeScript',
          source: 'Professional Development',
          level: 'Advanced',
        },
        { name: 'Docker', source: 'DevOps Learning', level: 'Intermediate' },
      ],
    },
    {
      year: '2025',
      skills: [
        {
          name: 'Microservices Architecture',
          source: 'Company Projects',
          level: 'Beginner',
        },
        {
          name: 'AWS Services',
          source: 'Cloud Certification Path',
          level: 'Intermediate',
        },
        {
          name: 'DevOps & Vagrant',
          source: 'Professional Learning',
          level: 'Intermediate',
        },

        {
          name: 'Video Production',
          source: 'TRW',
          level: 'Advanced',
        },
        {
          name: 'Automation Tools',
          source: 'TRW',
          level: 'Advanced',
        },
        {
          name: 'AI & ML Integration',
          source: 'OpenAI Projects / Personal Learning',
          level: 'Advanced',
        },
      ],
    },
  ];

  // const certifications = [
  //   { name: 'AWS Certified Developer', year: '2023' },
  //   { name: 'Google Cloud Professional', year: '2023' },
  //   { name: 'Docker Certified Associate', year: '2022' },
  // ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-slate-900 dark:text-slate-100';
      case 'Advanced':
        return 'text-slate-700 dark:text-slate-300';
      case 'Intermediate':
        return 'text-slate-600 dark:text-slate-400';
      case 'Foundation':
        return 'text-slate-500 dark:text-slate-500';
      default:
        return 'text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <section id='education' className='bg-slate-50 py-32 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-24 text-center'>
          <div className='mb-8 flex items-center justify-center'>
            <div className='mr-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
            <GraduationCap className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Education & Growth
            </span>
            <div className='ml-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
          </div>
          <h2 className='mb-6 text-5xl font-extralight tracking-tight text-slate-900 md:text-6xl dark:text-slate-100'>
            Continuous <span className='font-light italic'>Learning</span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
            A journey of deliberate skill acquisition and intellectual
            curiosity, spanning formal education to hands-on mastery.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
          <div>
            {/* Academic Timeline */}
            <div className='space-y-12'>
              <div className='text-center'>
                <h3 className='mb-2 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                  Academic Foundation
                </h3>
                <div className='mx-auto h-px w-12 bg-slate-300 dark:bg-slate-600'></div>
              </div>

              <div className='relative'>
                {/* Subtle Timeline Line */}
                <div className='absolute top-0 bottom-0 left-8 w-px bg-slate-200 dark:bg-slate-700'></div>

                <div className='space-y-16'>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className='group relative flex items-start space-x-8'
                    >
                      {/* Minimal Timeline Dot */}
                      <div className='relative z-10 flex h-16 w-16 items-center justify-center border border-slate-200 bg-slate-50 transition-all duration-500 group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:group-hover:border-slate-600'>
                        <BookOpen className='h-4 w-4 text-slate-400 dark:text-slate-500' />
                      </div>

                      {/* Content */}
                      <div className='flex-1 pb-8'>
                        <div className='mb-4 flex items-start justify-between'>
                          <div>
                            <h4 className='mb-1 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                              {edu.degree}
                            </h4>
                            <p className='font-extralight tracking-wide text-slate-600 dark:text-slate-400'>
                              {edu.institution}
                            </p>
                          </div>
                          <div className='text-right'>
                            <span className='inline-flex items-center bg-slate-100 px-3 py-1 text-xs font-light tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-400'>
                              <Calendar className='mr-2 h-3 w-3' />
                              {edu.year}
                            </span>
                            <div className='mt-2'>
                              <span className='text-xs font-extralight tracking-wider text-slate-400 dark:text-slate-500'>
                                {edu.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className='text-sm leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {/* <div className='mt-24 text-center'>
                <div className='mx-auto max-w-2xl'>
                  <div className='mb-8 flex items-center justify-center'>
                    <div className='mr-3 h-6 w-px bg-slate-300 dark:bg-slate-600'></div>
                    <Award className='mr-2 h-4 w-4 text-slate-500 dark:text-slate-400' />
                    <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
                      Certifications
                    </span>
                    <div className='ml-3 h-6 w-px bg-slate-300 dark:bg-slate-600'></div>
                  </div>

                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className='border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
                      >
                        <div className='mb-2 text-sm font-light tracking-wide text-slate-900 dark:text-slate-100'>
                          {cert.name}
                        </div>
                        <div className='text-xs font-extralight tracking-wider text-slate-500 dark:text-slate-400'>
                          {cert.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Learning Philosophy */}
              <div className='mt-24 text-center'>
                <div className='mx-auto max-w-3xl bg-slate-900 p-12 text-slate-100 dark:bg-slate-950'>
                  <Lightbulb className='mx-auto mb-6 h-6 w-6 text-slate-400' />
                  <blockquote className='mb-6 text-lg leading-relaxed font-extralight tracking-wide italic'>
                    &quot;Show up everyday with the aim of becoming 1%
                    better.&quot;
                  </blockquote>
                  <div className='grid grid-cols-3 gap-8 text-center'>
                    <div>
                      <div className='mb-1 text-2xl font-extralight tracking-tight'>
                        <CountUpOnView value={4} />+
                      </div>
                      <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                        Years Learning
                      </div>
                    </div>
                    <div>
                      <div className='mb-1 text-2xl font-extralight tracking-tight'>
                        <CountUpOnView value={15} />+
                      </div>
                      <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                        Skills Mastered
                      </div>
                    </div>
                    <div>
                      <div className='mb-1 text-2xl font-extralight tracking-tight'>
                        ∞
                      </div>
                      <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                        Growth Mindset
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Development Timeline */}
          <div className='space-y-12'>
            <div className='text-center'>
              <h3 className='mb-2 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                Skill Evolution
              </h3>
              <div className='mx-auto h-px w-12 bg-slate-300 dark:bg-slate-600'></div>
            </div>

            <div className='space-y-12'>
              {skillTimeline.map(yearData => (
                <div key={yearData.year} className='group'>
                  {/* Year Header */}
                  <div className='mb-6 flex items-center'>
                    <div className='mr-4 flex h-12 w-18 items-center justify-center border border-slate-200 bg-slate-100 text-center transition-all duration-500 group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-slate-600'>
                      <span className='text-sm font-light tracking-wider text-slate-600 dark:text-slate-400'>
                        {yearData.year}
                      </span>
                    </div>
                    <div className='h-px flex-1 bg-slate-200 dark:bg-slate-700'></div>
                  </div>

                  {/* Skills Grid */}
                  <div className='ml-16 space-y-3'>
                    {yearData.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className='flex items-center justify-between border border-slate-100 bg-white px-4 py-2 transition-all duration-300 hover:border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
                      >
                        <div className='flex items-center space-x-3'>
                          <Code className='h-3 w-3 text-slate-400 dark:text-slate-500' />
                          <div>
                            <span className='text-sm font-light tracking-wide text-slate-900 dark:text-slate-100'>
                              {skill.name}
                            </span>
                            <div className='text-xs font-extralight tracking-wider text-slate-500 dark:text-slate-400'>
                              {skill.source}
                            </div>
                          </div>
                        </div>
                        <span
                          className={`text-xs font-light tracking-wider ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
