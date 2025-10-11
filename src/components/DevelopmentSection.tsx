'use client';
import {
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Smartphone,
} from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const DevelopmentSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'School Contact & Feedback System',
      description:
        'A communication platform built for schools to streamline interactions between students, parents, staff, and administrators. It allows users to send feedback, complaints, or suggestions directly to the school, with automated email responses for every submission.',
      image: '/images/school-website-preview.png',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Supabase'],
      features: [
        'Feedback & Complaint Management',
        'Automated Email Responses',
        'Role-based User Communication (Students, Parents, Staff)',
        'Admin Dashboard for Message Tracking',
      ],
      type: 'Full Stack',
      websiteLink: 'https://rv-contact-form.vercel.app/', // add link if live
      githubLink: 'https://github.com/Reggie-Michael/RV-Contact-Form',
    },
    {
      id: 2,
      title: 'Construction Company Form Sales Platform',
      description:
        'A custom platform for a construction company to sell online application forms for available spaces in ongoing building projects. It includes an affiliate system where agents can register and earn from shared referral links when buyers purchase forms.',
      image: '/images/tido-website-preview.png',
      technologies: ['Next.js', 'Material UI', 'MongoDB', 'Paystack'],
      features: [
        'Online Form Sales & Payment Integration',
        'Agent Referral & Commission Tracking',
        'Secure Buyer Registration',
        'Responsive Design for All Devices',
      ],
      type: 'Web App',
      websiteLink: 'https://www.tidbuilds.net',
    },
    {
      id: 3,
      title: 'AfRipul Group Company Website',
      description:
        'Official company website for AfRipul Group — designed to showcase the brand, highlight its departments, and present company details in a professional, responsive layout.',
      image: '/images/afr-website-preview.png',
      technologies: ['Next.js', 'TailwindCSS', 'TypeScript'],
      features: [
        'Company Overview & Team Section',
        'Department Pages',
        'Responsive Design',
        'SEO-Optimized Structure',
      ],
      type: 'Frontend',
      websiteLink: 'https://www.afripulgroup.com',
    },
    {
      id: 4,
      title: 'Finance Tracker Backend',
      description:
        'A backend API built for a finance tracking application that helps users manage their income, expenses, and analytics. Includes advanced transaction locking, automated summaries, and secure JWT-based authentication.',
      image: '/images/finance-website-preview.png',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      features: [
        'Transaction Analytics & Auto Locking',
        'User Authentication & Authorization',
        'Expense & Income Management',
        'RESTful API with Secure Endpoints',
      ],
      type: 'Backend',
      websiteLink: 'https://real-finance-font-end-nfpu.vercel.app/',
    },
  ];

  const technologies = [
    {
      name: 'Frontend',
      icon: Globe,
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    },
    {
      name: 'Backend',
      icon: Database,
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      items: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      name: 'DevOps',
      icon: Code2,
      items: ['Docker', 'AWS', 'CI/CD', 'Monitoring'],
    },
  ];

  const codeSnippet = `// Real-time collaboration example
const useRealTimeUpdates = (projectId) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const socket = io('/projects');

    socket.on(\`project:\${projectId}:update\`, (data) => {
      setUpdates(prev => [...prev, data]);
    });

    return () => socket.disconnect();
  }, [projectId]);

  return updates;
};`;

  return (
    <section id='development' className='bg-white py-24 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='section-header-line'>
            <Code2 className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
            <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
              Development
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Software <span className='font-medium'>Development</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Building scalable, maintainable applications with modern
            technologies. From concept to deployment, creating solutions that
            drive business growth.
          </p>
        </div>

        {/* Project Showcase */}
        <div className='mb-20 grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Project Display */}
          <div className='space-y-6'>
            <div className='overflow-hidden bg-gray-900 shadow-sm dark:bg-slate-950'>
              {/* Browser Header */}
              <div className='flex items-center space-x-2 bg-gray-800 p-4 dark:bg-slate-800'>
                <div className='flex space-x-2'>
                  <div className='h-2.5 w-2.5 rounded-full bg-red-500'></div>
                  <div className='h-2.5 w-2.5 rounded-full bg-yellow-500'></div>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500'></div>
                </div>
                <div className='ml-4 bg-gray-700 px-3 py-1 font-mono text-xs text-gray-300 dark:bg-slate-700'>
                  {projects[activeProject].websiteLink}
                </div>
              </div>

              {/* Project Image */}
              <div className='relative h-48 sm:h-64 md:h-80 lg:h-96'>
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  key={`Image-${projects[activeProject].image}-${activeProject}`}
                  objectFit='cover'
                  layout='fill'
                  className='animate-fade-in-up w-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent'></div>
                <div className='absolute bottom-4 left-4'>
                  <span className='bg-white/90 px-2 py-1 text-xs font-medium text-gray-900'>
                    {projects[activeProject].type}
                  </span>
                </div>
              </div>
            </div>

            {/* Code Preview */}
            <div className='relative max-h-36 overflow-x-auto overflow-y-auto bg-gray-900 p-6 font-mono text-sm dark:bg-slate-950'>
              <div className='mb-4 flex items-center backdrop-blur-xs'>
                <div className='mr-4 flex space-x-2'>
                  <div className='h-2.5 w-2.5 rounded-full bg-red-500'></div>
                  <div className='h-2.5 w-2.5 rounded-full bg-yellow-500'></div>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500'></div>
                </div>
                <span className='text-xs text-gray-400 dark:text-gray-500'>
                  hooks/useRealTimeUpdates.js
                </span>
              </div>
              <pre className='text-xs leading-relaxed text-green-400'>
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Project Details */}
          <div className='flex flex-col space-y-8'>
            {/* Project Navigation */}
            <div className='flex space-x-2'>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeProject === index
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Project {index + 1}
                </button>
              ))}
            </div>

            {/* Active Project Info */}
            <div className='max-h-[540px] flex-1 overflow-y-auto border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-slate-800'>
              <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                {projects[activeProject].title}
              </h3>
              <p className='mb-6 leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                {projects[activeProject].description}
              </p>

              {/* Technologies */}
              <div className='mb-6'>
                <h4 className='mb-3 text-lg font-medium text-gray-900 dark:text-white'>
                  Technologies Used
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {projects[activeProject].technologies.map(tech => (
                    <span
                      key={tech}
                      className='bg-gray-200 px-3 py-1 text-sm font-light text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Features */}
              <div className='mb-8'>
                <h4 className='mb-3 text-lg font-medium text-gray-900 dark:text-white'>
                  Key Features
                </h4>
                <div className='space-y-2'>
                  {projects[activeProject].features.map(feature => (
                    <div key={feature} className='flex items-center space-x-2'>
                      <div className='h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                      <span className='font-light text-gray-600 dark:text-gray-300'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex space-x-4'>
                <button
                  className='flex cursor-pointer items-center space-x-2 bg-gray-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  onClick={e => {
                    e.stopPropagation();
                    window.open(
                      projects[activeProject].websiteLink,
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }}
                >
                  <ExternalLink className='h-4 w-4' />
                  <span>Live Demo</span>
                </button>
                {projects[activeProject].githubLink && (
                  <button
                    className='flex cursor-pointer items-center space-x-2 border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500'
                    onClick={e => {
                      e.stopPropagation();
                      window.open(
                        projects[activeProject].githubLink,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    <Github className='h-4 w-4' />
                    <span>View Code</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {technologies.map(tech => (
            <div
              key={tech.name}
              className='border border-gray-100 bg-white p-6 transition-shadow duration-300 hover:shadow-sm dark:border-gray-700 dark:bg-slate-800'
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center border border-gray-200 dark:border-gray-600'>
                <tech.icon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
              </div>
              <h3 className='mb-3 text-lg font-medium text-gray-900 dark:text-white'>
                {tech.name}
              </h3>
              <div className='space-y-2'>
                {tech.items.map(item => (
                  <div
                    key={item}
                    className='flex items-center space-x-2 text-sm font-light text-gray-600 dark:text-gray-300'
                  >
                    <div className='h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                    <span>{item}</span>
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

export default DevelopmentSection;
