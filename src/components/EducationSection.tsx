import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Code,
  Lightbulb,
} from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      institution: 'University of Lagos',
      degree: 'Bachelor of Science in Computer Science',
      year: '2018-2022',
      description:
        'Foundation in computer science principles, algorithms, and software engineering',
      type: 'Formal Education',
    },
    {
      institution: 'IT Training Center',
      degree: 'Full-Stack Development Certification',
      year: '2022',
      description:
        'Intensive program covering modern web development technologies and best practices',
      type: 'Professional Training',
    },
    {
      institution: 'Udemy',
      degree: 'Advanced React & Node.js',
      year: '2023',
      description:
        'Specialized courses in advanced React patterns and scalable Node.js applications',
      type: 'Online Learning',
    },
    {
      institution: 'Various Online Platforms',
      degree: 'Continuous Learning in AI/ML',
      year: 'Ongoing',
      description:
        'Staying current with artificial intelligence and machine learning technologies',
      type: 'Self-Directed Learning',
    },
  ];

  const skillTimeline = [
    {
      year: '2018',
      skills: [
        {
          name: 'HTML/CSS',
          source: 'University Coursework',
          level: 'Foundation',
        },
        { name: 'JavaScript Basics', source: 'Self-Study', level: 'Beginner' },
      ],
    },
    {
      year: '2019',
      skills: [
        {
          name: 'Python',
          source: 'University Projects',
          level: 'Intermediate',
        },
        {
          name: 'Database Design',
          source: 'Academic Curriculum',
          level: 'Foundation',
        },
        {
          name: 'Git Version Control',
          source: 'Open Source Contributions',
          level: 'Intermediate',
        },
      ],
    },
    {
      year: '2020',
      skills: [
        {
          name: 'React.js',
          source: 'Personal Projects',
          level: 'Intermediate',
        },
        { name: 'Node.js', source: 'Freelance Work', level: 'Intermediate' },
        {
          name: 'RESTful APIs',
          source: 'Industry Practice',
          level: 'Advanced',
        },
      ],
    },
    {
      year: '2021',
      skills: [
        {
          name: 'TypeScript',
          source: 'Professional Development',
          level: 'Advanced',
        },
        { name: 'Docker', source: 'DevOps Learning', level: 'Intermediate' },
        {
          name: 'AWS Services',
          source: 'Cloud Certification Path',
          level: 'Intermediate',
        },
      ],
    },
    {
      year: '2022',
      skills: [
        {
          name: 'Kubernetes',
          source: 'Enterprise Projects',
          level: 'Advanced',
        },
        {
          name: 'GraphQL',
          source: 'Modern API Development',
          level: 'Advanced',
        },
        {
          name: 'CI/CD Pipelines',
          source: 'Production Deployment',
          level: 'Expert',
        },
      ],
    },
    {
      year: '2023',
      skills: [
        {
          name: 'AI/ML Integration',
          source: 'OpenAI API Projects',
          level: 'Advanced',
        },
        {
          name: 'Automation Tools',
          source: 'Make.com & Zapier',
          level: 'Expert',
        },
        {
          name: 'Video Production',
          source: 'Content Creation',
          level: 'Advanced',
        },
      ],
    },
    {
      year: '2024',
      skills: [
        {
          name: 'Advanced AI Workflows',
          source: 'Custom Automation',
          level: 'Expert',
        },
        {
          name: 'Microservices Architecture',
          source: 'Scalable Systems',
          level: 'Expert',
        },
        {
          name: 'Technical Leadership',
          source: 'Team Management',
          level: 'Advanced',
        },
      ],
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', year: '2023' },
    { name: 'Google Cloud Professional', year: '2023' },
    { name: 'Docker Certified Associate', year: '2022' },
  ];

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
              <div className='mt-24 text-center'>
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
              </div>

              {/* Learning Philosophy */}
              <div className='mt-24 text-center'>
                <div className='mx-auto max-w-3xl bg-slate-900 p-12 text-slate-100 dark:bg-slate-950'>
                  <Lightbulb className='mx-auto mb-6 h-6 w-6 text-slate-400' />
                  <blockquote className='mb-6 text-lg leading-relaxed font-extralight tracking-wide italic'>
                    &quot;Mastery is not a destination but a continuous journey
                    of deliberate practice, intellectual curiosity, and the
                    courage to embrace complexity.&quot;
                  </blockquote>
                  <div className='grid grid-cols-3 gap-8 text-center'>
                    <div>
                      <div className='mb-1 text-2xl font-extralight tracking-tight'>
                        7+
                      </div>
                      <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                        Years Learning
                      </div>
                    </div>
                    <div>
                      <div className='mb-1 text-2xl font-extralight tracking-tight'>
                        25+
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
                    <div className='mr-4 flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-100 transition-all duration-500 group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-slate-600'>
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
