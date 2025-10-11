'use client';
import { Briefcase, Building, Calendar, MapPin, Users } from 'lucide-react';
import React, { useState } from 'react';
import CountUpOnView from './CountUpView';

const ExperienceSection: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const workExperience = [
    {
      id: 1,
      company: 'ITi Training Institution',
      role: 'Software Development Instructor',
      type: 'Full-time',
      duration: 'July 2023 - September 2024',
      location: 'On-site',
      description:
        'Taught students the fundamentals of web development and assisted in building practical projects.',
      achievements: [
        'Taught 15+ students the basics of HTML and CSS',
        'Assisted students in developing company-level projects and presentation skills',
      ],
      technologies: ['HTML', 'CSS', 'PowerPoint'],
      status: 'Completed',
    },
    {
      id: 2,
      company: 'CoffeBet',
      role: 'Frontend Developer (Contract)',
      type: 'Contract',
      duration: 'April 2024 - September 2024',
      location: 'Hybrid',
      description:
        'Worked alongside a Java developer to develop a betting platform with modern frontend technologies.',
      achievements: [
        'Completed contract successfully delivering all frontend requirements',
        'Collaborated effectively in a hybrid team environment',
      ],
      technologies: ['React', 'Next.js', 'TailwindCSS'],
      status: 'Completed',
    },
    {
      id: 3,
      company: 'AfRipul Group',
      role: 'Head of Software Department',
      type: 'Full-time',
      duration: 'September 2023 - Present',
      location: 'Hybrid',
      description:
        'Leading software development for internal projects and client solutions, mentoring team members, and overseeing all technical operations.',
      achievements: [
        'Developed multiple client websites',
        'Delivered 5+ internal projects across web, automation, and AI workflows',
        'Implemented scalable solutions using modern tech stack',
      ],
      technologies: ['React', 'TypeScript', 'SQL', 'Node.js', 'Git'],
      status: 'Current',
    },
  ];

  const collaborations = [
    {
      partner: 'Close Friends / Personal Projects',
      type: 'Contributor',
      description:
        'Contributed to personal or close friends’ public projects, enhancing features or fixing issues',
      impact: '10+ contributions across various projects',
    },
    {
      partner: 'Local Media Team',
      type: 'Volunteer',
      description:
        'Assisted in organizing and managing media coverage for a local event',
      impact: 'Supported successful execution of event media coverage',
    },
    {
      partner: 'Freelance Clients',
      type: 'Independent Contractor',
      description:
        'Providing development, automation, and website solutions for small businesses',
      impact: 'Completed 10+ projects independently',
    },
    {
      partner: 'Content Platforms',
      type: 'Technical Content Creator',
      description:
        'Creating content about software development, automation, AI, and brand storytelling',
      impact: '500+ total content views across platforms',
    },
  ];

  // const accreditations = [
  //   {
  //     title: 'AWS Certified Developer',
  //     issuer: 'Amazon Web Services',
  //     year: '2023',
  //   },
  //   {
  //     title: 'Google Cloud Professional',
  //     issuer: 'Google Cloud',
  //     year: '2023',
  //   },
  //   {
  //     title: 'Docker Certified Associate',
  //     issuer: 'Docker Inc.',
  //     year: '2022',
  //   },
  //   { title: 'Scrum Master Certified', issuer: 'Scrum Alliance', year: '2022' },
  // ];

  return (
    <section id='experience' className='bg-white py-32 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-24 text-center'>
          <div className='mb-8 flex items-center justify-center'>
            <div className='mr-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
            <Briefcase className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Professional Experience
            </span>
            <div className='ml-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
          </div>
          <h2 className='mb-6 text-5xl font-extralight tracking-tight text-slate-900 md:text-6xl dark:text-slate-100'>
            Professional <span className='font-light italic'>Journey</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
            A chronicle of professional growth, meaningful collaborations, and
            impactful contributions across diverse projects and partnerships.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
          {/* Work Experience */}
          <div className='space-y-12'>
            <div className='text-center'>
              <h3 className='mb-2 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                Work Experience
              </h3>
              <div className='mx-auto h-px w-12 bg-slate-300 dark:bg-slate-600'></div>
            </div>

            {/* Experience Navigation */}
            <div className='flex flex-wrap justify-center gap-2'>
              {workExperience.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`px-4 py-2 text-sm font-light transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Active Experience Details */}
            <div className='border border-slate-100 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-6 flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='mb-2 flex items-center space-x-3'>
                    <Building className='h-4 w-4 text-slate-500 dark:text-slate-400' />
                    <h4 className='text-xl font-light tracking-wide text-slate-900 dark:text-slate-100'>
                      {workExperience[activeExperience].company}
                    </h4>
                  </div>
                  <p className='mb-1 text-lg font-extralight tracking-wide text-slate-700 dark:text-slate-300'>
                    {workExperience[activeExperience].role}
                  </p>
                  <div className='flex items-center space-x-4 text-sm font-light text-slate-500 dark:text-slate-400'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='h-3 w-3' />
                      <span>{workExperience[activeExperience].duration}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <MapPin className='h-3 w-3' />
                      <span>{workExperience[activeExperience].location}</span>
                    </div>
                  </div>
                </div>
                <div className='text-right'>
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-light tracking-wider ${
                      workExperience[activeExperience].status === 'Current'
                        ? 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {workExperience[activeExperience].status}
                  </span>
                  <div className='mt-2 text-xs font-extralight text-slate-400 dark:text-slate-500'>
                    {workExperience[activeExperience].type}
                  </div>
                </div>
              </div>

              <p className='mb-6 leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
                {workExperience[activeExperience].description}
              </p>

              {/* Key Achievements */}
              <div className='mb-6'>
                <h5 className='mb-3 text-sm font-medium tracking-wide text-slate-900 dark:text-slate-100'>
                  Key Achievements
                </h5>
                <div className='space-y-2'>
                  {workExperience[activeExperience].achievements.map(
                    (achievement, index) => (
                      <div key={index} className='flex items-start space-x-3'>
                        <div className='mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-500'></div>
                        <span className='text-sm leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
                          {achievement}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h5 className='mb-3 text-sm font-medium tracking-wide text-slate-900 dark:text-slate-100'>
                  Technologies Used
                </h5>
                <div className='flex flex-wrap gap-2'>
                  {workExperience[activeExperience].technologies.map(tech => (
                    <span
                      key={tech}
                      className='bg-slate-200 px-3 py-1 text-xs font-light tracking-wider text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Professional Summary */}
            <div className='bg-slate-900 p-8 text-slate-100 dark:bg-slate-950'>
              <h4 className='mb-4 text-lg font-light tracking-wide text-slate-100'>
                Professional Impact
              </h4>
              <div className='mb-6 grid grid-cols-2 gap-6 text-center'>
                <div>
                  <div className='mb-1 text-2xl font-extralight tracking-tight'>
                    <CountUpOnView value={4} />+
                  </div>
                  <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className='mb-1 text-2xl font-extralight tracking-tight'>
                    <CountUpOnView value={20} />+
                  </div>
                  <div className='text-xs font-light tracking-wider text-slate-400 uppercase'>
                    Projects Delivered
                  </div>
                </div>
              </div>
              <p className='text-sm leading-relaxed font-light tracking-wide text-slate-300'>
                Building meaningful professional relationships while delivering
                exceptional results across diverse industries and project
                scales.
              </p>
            </div>
          </div>

          {/* Collaborations & Accreditations */}
          <div className='space-y-12'>
            {/* Collaborations */}
            <div>
              <div className='mb-8 text-center'>
                <h3 className='mb-2 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                  Collaborations
                </h3>
                <div className='mx-auto h-px w-12 bg-slate-300 dark:bg-slate-600'></div>
              </div>

              <div className='space-y-6'>
                {collaborations.map((collab, index) => (
                  <div
                    key={index}
                    className='border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
                  >
                    <div className='flex items-start space-x-4'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center border border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-700'>
                        <Users className='h-4 w-4 text-slate-500 dark:text-slate-400' />
                      </div>
                      <div className='flex-1'>
                        <div className='mb-2 flex items-center justify-between'>
                          <h4 className='text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                            {collab.partner}
                          </h4>
                        </div>
                        <p className='mb-2 text-sm font-extralight tracking-wider text-slate-600 dark:text-slate-400'>
                          {collab.type}
                        </p>
                        <p className='mb-3 text-sm leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-400'>
                          {collab.description}
                        </p>
                        <div className='text-xs font-light tracking-wide text-slate-500 dark:text-slate-500'>
                          Impact: {collab.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations */}
            {/* <div>
              <div className='mb-8 text-center'>
                <h3 className='mb-2 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                  Accreditations
                </h3>
                <div className='mx-auto h-px w-12 bg-slate-300 dark:bg-slate-600'></div>
              </div>

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {accreditations.map((cert, index) => (
                  <div
                    key={index}
                    className='border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
                  >
                    <div className='flex items-start space-x-3'>
                      <Award className='mt-1 h-4 w-4 flex-shrink-0 text-slate-500 dark:text-slate-400' />
                      <div>
                        <h4 className='mb-1 text-sm font-medium tracking-wide text-slate-900 dark:text-slate-100'>
                          {cert.title}
                        </h4>
                        <p className='mb-1 text-xs font-light tracking-wider text-slate-600 dark:text-slate-400'>
                          {cert.issuer}
                        </p>
                        <p className='text-xs font-extralight tracking-wider text-slate-500 dark:text-slate-500'>
                          {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
