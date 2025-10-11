import {
  Award,
  Code,
  GraduationCap,
  Heart,
  MapPin,
  User,
  Users,
} from 'lucide-react';
import React from 'react';
import CountUpOnView from './CountUpView';

const AboutSection: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    },
    { category: 'DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    {
      category: 'AI & Automation',
      items: ['Make.com', 'OpenAI', 'Zapier', 'Python Scripts'],
    },
    {
      category: 'Content Creation',
      items: [
        'Video Editing',
        'Motion Graphics',
        'Brand Design',
        'Storytelling',
      ],
    },
  ];

  return (
    <section id='about' className='bg-section-light py-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mb-24 text-center'>
          <div className='mb-8 flex items-center justify-center'>
            <div className='mr-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
            <User className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              About Michael
            </span>
            <div className='ml-4 h-8 w-px bg-slate-300 dark:bg-slate-600'></div>
          </div>
          <h2 className='font-display mb-6 text-5xl font-extralight tracking-tight text-slate-900 md:text-6xl dark:text-slate-100'>
            About <span className='font-light italic'>Me</span>
          </h2>
          <div className='mx-auto h-px w-16 bg-slate-300 dark:bg-slate-600'></div>
        </div>

        <div className='grid grid-cols-1 items-start gap-20 lg:grid-cols-2'>
          {/* Profile Section */}
          <div className='space-y-8'>
            <div className='border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'>
              <div className='mb-8 flex items-start space-x-4'>
                <User className='mt-1 h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400' />
                <div>
                  <h3 className='font-display mb-3 text-xl font-light tracking-tight text-slate-900 dark:text-slate-100'>
                    My Journey
                  </h3>
                  <p className='leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    I&apos;m Michael Emmanuel, a passionate developer who
                    bridges the gap between creative vision and technical
                    execution. My journey started with curiosity about how
                    things work, leading me to master multiple disciplines from
                    full-stack development to AI automation.
                  </p>
                </div>
              </div>

              <div className='mb-8 flex items-start space-x-4'>
                <MapPin className='mt-1 h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400' />
                <div>
                  <h4 className='mb-1 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                    Based in
                  </h4>
                  <p className='font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Remote • Global Collaboration
                  </p>
                </div>
              </div>

              <div className='mb-8 flex items-start space-x-4'>
                <GraduationCap className='mt-1 h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400' />
                <div>
                  <h4 className='mb-1 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                    Continuous Learning
                  </h4>
                  <p className='font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Educated through IT training centers, Udemy, and various
                    online platforms. Always exploring new technologies and
                    methodologies.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <Heart className='mt-1 h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400' />
                <div>
                  <h4 className='mb-1 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                    When I&apos;m Not Coding
                  </h4>
                  <p className='font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    Experimenting with new recipes, exploring photography, and
                    finding inspiration in everyday moments
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Philosophy */}
            <div className='border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'>
              <div className='flex items-start space-x-4'>
                <Heart className='mt-1 h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400' />
                <div>
                  <h4 className='mb-3 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                    Philosophy
                  </h4>
                  <p className='leading-relaxed font-light tracking-wide text-slate-600 dark:text-slate-300'>
                    &quot;Great technology should feel invisible—powerful yet
                    intuitive, complex yet simple to use. I believe in creating
                    solutions that not only solve problems but enhance the human
                    experience.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className='space-y-7'>
            <h3 className='font-display -mt-3 mb-6 text-2xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
              Technical Expertise
            </h3>

            {skills.map(skillGroup => (
              <div
                key={skillGroup.category}
                className='border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'
              >
                <h4 className='mb-4 text-lg font-light tracking-wide text-slate-900 dark:text-slate-100'>
                  {skillGroup.category}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {skillGroup.items.map(skill => (
                    <span
                      key={skill}
                      className='border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-light tracking-wide text-slate-700 transition-colors duration-200 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Experience Stats */}
            <div className='mt-4 grid grid-cols-3 gap-6'>
              {AboutHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className='group border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600'
                >
                  <div className='font-display mb-2 text-3xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'>
                    <CountUpOnView value={+highlight.value} />
                    {highlight.suffix}
                  </div>
                  <div className='font-light tracking-wide text-slate-600 dark:text-slate-400'>
                    {highlight.label}
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

export const AboutHighlights = [
  { icon: Code, value: 4, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 20, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 89, suffix: '%', label: 'Client Satisfaction' },
];

export default AboutSection;
