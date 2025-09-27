'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Settings, Bot, BarChart3, Clock } from 'lucide-react';

const AutomationSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const workflowNodes = [
    { id: 1, label: 'Trigger', icon: Settings, position: { x: 10, y: 50 } },
    { id: 2, label: 'Process', icon: BarChart3, position: { x: 35, y: 30 } },
    { id: 3, label: 'Analyze', icon: Bot, position: { x: 35, y: 70 } },
    { id: 4, label: 'Execute', icon: Clock, position: { x: 60, y: 50 } },
    { id: 5, label: 'Monitor', icon: ArrowRight, position: { x: 85, y: 50 } },
  ];

  const automationServices = [
    {
      title: 'AI Customer Support',
      description:
        'Intelligent chatbots that handle 80% of customer queries automatically',
      features: [
        '24/7 Availability',
        'Multi-language Support',
        'Learning Capabilities',
      ],
      icon: Bot,
    },
    {
      title: 'Lead Generation',
      description: 'Automated outreach systems that qualify and nurture leads',
      features: [
        'Smart Targeting',
        'Personalized Messaging',
        'CRM Integration',
      ],
      icon: BarChart3,
    },
    {
      title: 'Business Process Automation',
      description: 'Streamline operations with custom workflow automation',
      features: ['Data Processing', 'Report Generation', 'Task Scheduling'],
      icon: Settings,
    },
  ];

  return (
    <section id='automation' className='bg-gray-50 py-24 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='mb-6 flex items-center justify-center'>
            <Settings className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
            <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
              AI & Automation
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Intelligent <span className='font-medium'>Automation</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Transform your business with AI-powered automation solutions that
            work 24/7, reducing costs while improving efficiency and customer
            satisfaction.
          </p>
        </div>

        {/* Interactive Workflow Visualization */}
        <div className='mb-20 border border-gray-100 bg-white p-12 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
          <h3 className='mb-12 text-center text-2xl font-light text-gray-900 dark:text-white'>
            Automation Workflow
          </h3>

          <div className='relative h-64'>
            <svg
              className='absolute inset-0 h-full w-full'
              viewBox='0 0 100 100'
            >
              {/* Connection Lines */}
              <line
                x1='15'
                y1='50'
                x2='30'
                y2='30'
                stroke='#d1d5db'
                strokeWidth='1'
                className={
                  animationStep >= 0 ? 'stroke-gray-900 dark:stroke-white' : ''
                }
              />
              <line
                x1='15'
                y1='50'
                x2='30'
                y2='70'
                stroke='#d1d5db'
                strokeWidth='1'
                className={
                  animationStep >= 0 ? 'stroke-gray-900 dark:stroke-white' : ''
                }
              />
              <line
                x1='40'
                y1='30'
                x2='55'
                y2='50'
                stroke='#d1d5db'
                strokeWidth='1'
                className={
                  animationStep >= 1 ? 'stroke-gray-900 dark:stroke-white' : ''
                }
              />
              <line
                x1='40'
                y1='70'
                x2='55'
                y2='50'
                stroke='#d1d5db'
                strokeWidth='1'
                className={
                  animationStep >= 1 ? 'stroke-gray-900 dark:stroke-white' : ''
                }
              />
              <line
                x1='65'
                y1='50'
                x2='80'
                y2='50'
                stroke='#d1d5db'
                strokeWidth='1'
                className={
                  animationStep >= 2 ? 'stroke-gray-900 dark:stroke-white' : ''
                }
              />
            </svg>

            {workflowNodes.map(node => (
              <div
                key={node.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer transition-all duration-300 ${
                  activeNode === node.id ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
                onClick={() =>
                  setActiveNode(activeNode === node.id ? null : node.id)
                }
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center border-2 border-gray-200 bg-white transition-all duration-300 dark:border-gray-600 dark:bg-slate-800 ${
                    animationStep >= node.id - 1
                      ? 'border-gray-900 bg-gray-50 dark:border-white dark:bg-slate-700'
                      : ''
                  }`}
                >
                  <node.icon className='h-5 w-5 text-gray-600 dark:text-gray-400' />
                </div>
                <div className='mt-3 text-center'>
                  <span className='text-xs font-light text-gray-600 dark:text-gray-400'>
                    {node.label}
                  </span>
                </div>

                {activeNode === node.id && (
                  <div className='absolute top-16 left-1/2 z-20 -translate-x-1/2 transform bg-gray-900 p-3 text-xs whitespace-nowrap text-white dark:bg-white dark:text-gray-900'>
                    <div className='font-medium'>{node.label} Stage</div>
                    <div className='mt-1 text-gray-300 dark:text-gray-600'>
                      {node.id === 1 && 'Event detection & initiation'}
                      {node.id === 2 && 'Data processing & validation'}
                      {node.id === 3 && 'AI analysis & decision making'}
                      {node.id === 4 && 'Action execution & response'}
                      {node.id === 5 && 'Performance monitoring'}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='mt-8 text-center'>
            <div className='flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400'>
              <div className='h-1.5 w-1.5 animate-pulse rounded-full bg-gray-400 dark:bg-gray-500'></div>
              <span className='font-light'>Live automation workflow</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className='mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {automationServices.map((service, index) => (
            <div
              key={index}
              className='group overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-slate-900'
            >
              <div className='p-8'>
                <div className='mb-6 flex h-12 w-12 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-gray-300 dark:border-gray-600 dark:group-hover:border-gray-500'>
                  <service.icon className='h-6 w-6 text-gray-600 dark:text-gray-400' />
                </div>

                <h3 className='mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  {service.title}
                </h3>
                <p className='mb-6 leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                  {service.description}
                </p>

                <div className='mb-6 space-y-2'>
                  {service.features.map(feature => (
                    <div key={feature} className='flex items-center space-x-2'>
                      <div className='h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                      <span className='text-sm font-light text-gray-600 dark:text-gray-300'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className='group flex w-full items-center justify-center space-x-2 bg-gray-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'>
                  <span>Learn More</span>
                  <ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className='bg-gray-900 p-12 text-center text-white dark:bg-slate-950'>
          <h3 className='mb-8 text-2xl font-light text-white'>
            Automation Results
          </h3>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div>
              <div className='mb-2 text-3xl font-light'>75%</div>
              <div className='font-light text-gray-300 dark:text-gray-400'>
                Cost Reduction
              </div>
            </div>
            <div>
              <div className='mb-2 text-3xl font-light'>90%</div>
              <div className='font-light text-gray-300 dark:text-gray-400'>
                Time Savings
              </div>
            </div>
            <div>
              <div className='mb-2 text-3xl font-light'>24/7</div>
              <div className='font-light text-gray-300 dark:text-gray-400'>
                Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
