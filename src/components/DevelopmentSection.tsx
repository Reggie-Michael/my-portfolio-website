'use client';
import React, { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
} from 'lucide-react';
import Image from 'next/image';

const DevelopmentSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      features: [
        'Payment Integration',
        'Admin Dashboard',
        'Inventory Management',
        'Mobile Responsive',
      ],
      type: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Real-time collaboration tool with live updates and team features',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time Updates',
        'Team Collaboration',
        'File Sharing',
        'Progress Tracking',
      ],
      type: 'Web App',
    },
    {
      id: 3,
      title: 'API Management System',
      description: 'Microservices architecture with Docker containerization',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      technologies: ['Docker', 'Kubernetes', 'Redis', 'GraphQL'],
      features: [
        'Microservices',
        'Auto-scaling',
        'Monitoring',
        'Load Balancing',
      ],
      type: 'Backend',
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
          <div className='mb-6 flex items-center justify-center'>
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
                  {projects[activeProject].title
                    .toLowerCase()
                    .replace(/\s+/g, '')}
                  .app
                </div>
              </div>

              {/* Project Image */}
              <div className='relative h-48 sm:h-64 md:h-80 lg:h-96'>
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  objectFit='cover'
                  layout='fill'
                  className='w-full object-cover'
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
                <button className='flex items-center space-x-2 bg-gray-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'>
                  <ExternalLink className='h-4 w-4' />
                  <span>Live Demo</span>
                </button>
                <button className='flex items-center space-x-2 border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500'>
                  <Github className='h-4 w-4' />
                  <span>View Code</span>
                </button>
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
