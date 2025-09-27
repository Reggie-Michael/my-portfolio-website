import React from 'react';
import { Code, Database, Cloud, Palette, Bot, BarChart } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'GraphQL', level: 82 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS Services', level: 85 },
        { name: 'Docker & Kubernetes', level: 88 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'Infrastructure as Code', level: 80 },
      ],
    },
    {
      category: 'AI & Automation',
      icon: Bot,
      skills: [
        { name: 'Make.com', level: 95 },
        { name: 'OpenAI Integration', level: 88 },
        { name: 'Zapier', level: 90 },
        { name: 'Python Automation', level: 85 },
      ],
    },
    {
      category: 'Content Creation',
      icon: Palette,
      skills: [
        { name: 'Video Editing', level: 85 },
        { name: 'Motion Graphics', level: 80 },
        { name: 'Brand Design', level: 75 },
        { name: 'Storytelling', level: 90 },
      ],
    },
    {
      category: 'Analytics & Monitoring',
      icon: BarChart,
      skills: [
        { name: 'Grafana & Prometheus', level: 85 },
        { name: 'Google Analytics', level: 80 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'A/B Testing', level: 75 },
      ],
    },
  ];

  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-950'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <span className='text-xs font-light tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Technical Skills
            </span>
          </div>
          <h2 className='section-title'>
            Expertise <span className='font-light italic'>Areas</span>
          </h2>
          <p className='section-subtitle'>
            A comprehensive skill set built through years of hands-on experience
            and continuous learning
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skillCategories.map((category, index) => (
            <div key={index} className='card group p-8'>
              <div className='mb-6 flex h-12 w-12 items-center justify-center border border-slate-200 transition-colors duration-300 group-hover:border-slate-300 dark:border-slate-600 dark:group-hover:border-slate-500'>
                <category.icon className='h-6 w-6 text-slate-600 dark:text-slate-400' />
              </div>

              <h3 className='font-display mb-6 text-lg font-light tracking-tight text-slate-900 dark:text-slate-100'>
                {category.category}
              </h3>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='mb-2 flex items-center justify-between'>
                      <span className='text-sm font-light tracking-wide text-slate-700 dark:text-slate-300'>
                        {skill.name}
                      </span>
                      <span className='text-xs font-light text-slate-500 dark:text-slate-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='h-1 w-full bg-slate-200 dark:bg-slate-700'>
                      <div
                        className='h-1 bg-slate-900 transition-all duration-1000 ease-out dark:bg-slate-300'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
