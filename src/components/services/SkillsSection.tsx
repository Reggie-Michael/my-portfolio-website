import {
  BarChart,
  Bot,
  Cloud,
  Code,
  Database,
  Layers,
  Palette,
} from 'lucide-react';
import React from 'react';
import SkillProgress from './SkillCategoryAnimate';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'React & Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJs', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'REST API Design', level: 80 },
        { name: 'SQL (general)', level: 75 },
        { name: 'Authentication & Authorization', level: 70 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS Services', level: 70 },
        { name: 'Linux Server Management', level: 60 },
        { name: 'Docker & Kubernetes', level: 48 },
        { name: 'CI/CD Pipelines', level: 40 },
        { name: 'Infrastructure as Code', level: 35 },
        { name: 'Azure (basic)', level: 30 },
        { name: 'Networking (pfSense, DNS, VLANs)', level: 25 },
      ],
    },
    {
      category: 'AI & Automation',
      icon: Bot,
      skills: [
        { name: 'Make.com', level: 95 },
        { name: 'Voiceflow', level: 92 },
        { name: 'Vapi.ai', level: 80 },
        { name: 'Instantly.ai', level: 70 },
        { name: 'OpenAI Integration', level: 85 },
        { name: 'Python Automation', level: 82 },
      ],
    },
    {
      category: 'Content Creation',
      icon: Palette,
      skills: [
        { name: 'Video Editing (Premiere Pro, CapCut)', level: 85 },
        { name: 'After Effects (Learning)', level: 60 },
        { name: 'AI Content Tools (MidJourney, etc.)', level: 75 },
        { name: 'Scriptwriting', level: 80 },
        { name: 'Storyboarding', level: 78 },
      ],
    },
    {
      category: 'Analytics & Monitoring',
      icon: BarChart,
      skills: [
        { name: 'Performance Optimization', level: 70 },
        { name: 'Security Monitoring & Logging', level: 65 },
      ],
    },
  ];

  return (
    <section className='bg-slate-50 py-32 dark:bg-slate-950'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='section-header'>
          <div className='section-header-line'>
            <Layers className='mr-3 h-5 w-5 text-slate-500 dark:text-slate-400' />

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

              <div className='max-h-48 space-y-4 overflow-y-auto lg:max-h-72'>
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress key={skillIndex} skill={skill} />
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
