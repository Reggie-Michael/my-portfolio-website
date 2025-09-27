'use client';
import React, { useState } from 'react';
import {
  Cloud,
  Server,
  Shield,
  BarChart,
  Settings,
  CheckCircle,
} from 'lucide-react';

const DevOpsSection: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof devopsServices>('infrastructure');

  const devopsServices = {
    infrastructure: {
      title: 'Infrastructure as Code',
      description: 'Scalable, version-controlled infrastructure management',
      icon: Server,
      items: [
        { name: 'AWS/GCP/Azure', status: 'Expert' },
        { name: 'Terraform', status: 'Advanced' },
        { name: 'Docker & Kubernetes', status: 'Expert' },
        { name: 'Infrastructure Monitoring', status: 'Advanced' },
      ],
    },
    deployment: {
      title: 'CI/CD Pipelines',
      description: 'Automated testing, building, and deployment workflows',
      icon: Settings,
      items: [
        { name: 'GitHub Actions', status: 'Expert' },
        { name: 'Jenkins', status: 'Advanced' },
        { name: 'GitLab CI', status: 'Advanced' },
        { name: 'Automated Testing', status: 'Expert' },
      ],
    },
    monitoring: {
      title: 'Monitoring & Analytics',
      description: 'Real-time performance tracking and alerting systems',
      icon: BarChart,
      items: [
        { name: 'Prometheus & Grafana', status: 'Expert' },
        { name: 'ELK Stack', status: 'Advanced' },
        { name: 'Application Monitoring', status: 'Expert' },
        { name: 'Custom Dashboards', status: 'Advanced' },
      ],
    },
    security: {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance automation',
      icon: Shield,
      items: [
        { name: 'Security Scanning', status: 'Expert' },
        { name: 'Compliance Automation', status: 'Advanced' },
        { name: 'Vulnerability Management', status: 'Expert' },
        { name: 'Access Control', status: 'Advanced' },
      ],
    },
  };

  const metrics = [
    {
      label: 'Deployment Frequency',
      value: '50x',
      description: 'Faster deployments',
    },
    {
      label: 'Lead Time',
      value: '90%',
      description: 'Reduction in delivery time',
    },
    {
      label: 'Mean Time to Recovery',
      value: '75%',
      description: 'Faster incident resolution',
    },
    {
      label: 'Change Failure Rate',
      value: '60%',
      description: 'Fewer production issues',
    },
  ];

  const architectureLayers = [
    { name: 'Application Layer', technologies: ['React', 'Node.js', 'Python'] },
    { name: 'Container Layer', technologies: ['Docker', 'Kubernetes', 'Helm'] },
    { name: 'Infrastructure Layer', technologies: ['AWS', 'Terraform', 'VPC'] },
    {
      name: 'Monitoring Layer',
      technologies: ['Grafana', 'Prometheus', 'ELK'],
    },
  ];

  return (
    <section id='devops' className='bg-gray-50 py-24 dark:bg-slate-800'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='mb-6 flex items-center justify-center'>
            <Cloud className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
            <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
              DevOps & Cloud
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Cloud <span className='font-medium'>Infrastructure</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Building resilient, scalable cloud infrastructure with automated
            deployment pipelines, monitoring, and security best practices.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className='mb-20 border border-gray-100 bg-white p-12 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
          <h3 className='mb-12 text-center text-2xl font-light text-gray-900 dark:text-white'>
            Cloud Architecture
          </h3>

          <div className='space-y-6'>
            {architectureLayers.map((layer, index) => (
              <div
                key={layer.name}
                className='group p-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className='h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-500'></div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      {layer.name}
                    </h4>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {layer.technologies.map(tech => (
                      <span
                        key={tech}
                        className='border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-light text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {index < architectureLayers.length - 1 && (
                  <div className='mt-4 flex justify-center'>
                    <div className='h-6 w-px bg-gray-200 dark:bg-gray-600'></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Tabs */}
        <div className='mb-20'>
          {/* Tab Navigation */}
          <div className='mb-12 flex flex-wrap justify-center border border-gray-100 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
            {Object.entries(devopsServices).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof devopsServices)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
              >
                <service.icon className='h-4 w-4' />
                <span className='hidden sm:inline'>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='border border-gray-100 bg-white p-12 shadow-sm dark:border-gray-700 dark:bg-slate-900'>
            <div className='mb-12 text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-gray-200 dark:border-gray-600'>
                {React.createElement(devopsServices[activeTab].icon, {
                  className: 'w-6 h-6 text-gray-600 dark:text-gray-400',
                })}
              </div>
              <h3 className='mb-3 text-2xl font-light text-gray-900 dark:text-white'>
                {devopsServices[activeTab].title}
              </h3>
              <p className='font-light text-gray-600 dark:text-gray-300'>
                {devopsServices[activeTab].description}
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {devopsServices[activeTab].items.map(item => (
                <div
                  key={item.name}
                  className='flex items-center justify-between border border-gray-100 bg-gray-50 p-4 transition-colors duration-200 hover:bg-white dark:border-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700'
                >
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-4 w-4 text-gray-600 dark:text-gray-400' />
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {item.name}
                    </span>
                  </div>
                  <span className='bg-gray-200 px-3 py-1 text-sm font-light text-gray-700 dark:bg-gray-700 dark:text-gray-300'>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className='bg-gray-900 p-12 text-white dark:bg-slate-950'>
          <h3 className='mb-12 text-center text-2xl font-light text-white'>
            DevOps Impact Metrics
          </h3>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {metrics.map(metric => (
              <div key={metric.label} className='text-center'>
                <div className='h-full bg-white/10 p-6 transition-all duration-300 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10'>
                  <div className='mb-2 text-2xl font-light'>{metric.value}</div>
                  <div className='mb-1 text-lg font-medium'>{metric.label}</div>
                  <div className='text-sm font-light text-gray-300 dark:text-gray-400'>
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='font-light text-gray-300 dark:text-gray-400'>
              Delivering measurable improvements in deployment speed,
              reliability, and team productivity
            </p>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className='mt-20 text-center'>
          <h3 className='mb-12 text-2xl font-light text-gray-900 dark:text-white'>
            Tools & Technologies
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              'AWS',
              'Docker',
              'Kubernetes',
              'Terraform',
              'Jenkins',
              'Grafana',
              'Prometheus',
              'ELK Stack',
            ].map(tool => (
              <span
                key={tool}
                className='border border-gray-200 bg-white px-4 py-2 font-light text-gray-700 transition-all duration-200 hover:border-gray-300 hover:shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-gray-500'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;
