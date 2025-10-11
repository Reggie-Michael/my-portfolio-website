'use client';
import { Award, Eye, Film, Play, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CountUpOnView from './CountUpView';

const ContentSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videoProjects = [
    {
      id: 1,
      title: 'Brand Launch Prologue',
      description:
        'A cinematic introduction marking the launch of my brand — capturing the vision, emotion, and identity behind it.',
      thumbnail: '/images/Logo 2.gif',
      duration: '0:36',
      category: 'Launch',
      videoUrl: '/videos/brand-launch.mp4',
      link: 'https://youtu.be/Dad84IUdIww',
    },
    {
      id: 2,
      title: 'Brand Commercial',
      description:
        'A powerful brand commercial that increased audience engagement by 30% through storytelling and visual impact.',
      thumbnail: '/images/AfR-commercial.gif',
      duration: '0:23',
      category: 'Commercial',
      videoUrl: '/videos/brand-commercial.mp4',
      link: 'https://youtu.be/Lfd9I5RBQZI',
    },
    {
      id: 3,
      title: 'Company Story Video',
      description:
        'A storytelling piece that introduces who the company is — its purpose, people, and journey in an emotional narrative.',
      thumbnail: '/images/AfR-story.gif',

      duration: '0:39',
      category: 'Storytelling',
      videoUrl: '/videos/company-story.mp4',
    },
  ];

  const achievements = [
    { icon: Eye, value: '500', suffix: '+', label: 'Total Views' },
    { icon: Award, value: '5', suffix: '', label: 'Projects' },
    { icon: Film, value: '95', suffix: '%', label: 'Client Retention' },
  ];

  return (
    <section id='content' className='bg-white py-24 dark:bg-slate-900'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-20 text-center'>
          <div className='section-header-line'>
            <Film className='mr-3 h-6 w-6 text-gray-600 dark:text-gray-400' />
            <span className='text-sm font-light tracking-wider text-gray-600 uppercase dark:text-gray-400'>
              Content Creation
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-light text-gray-900 md:text-5xl dark:text-white'>
            Cinematic <span className='font-medium'>Storytelling</span>
          </h2>
          <p className='mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600 dark:text-gray-300'>
            Crafting compelling visual narratives that captivate audiences and
            drive results. From concept to final cut, every frame tells a story.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {achievements.map((achievement, index) => (
            <div key={index} className='group text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-gray-300 dark:border-gray-600 dark:group-hover:border-gray-500'>
                <achievement.icon className='h-6 w-6 text-gray-600 dark:text-gray-400' />
              </div>
              <div className='mb-2 text-2xl font-light text-gray-900 dark:text-white'>
                <CountUpOnView value={+achievement.value} />
                {achievement.suffix}
              </div>
              <div className='font-light text-gray-600 dark:text-gray-300'>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Video Portfolio */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {videoProjects.map(project => (
            <div
              key={project.id}
              className='group cursor-pointer'
              onClick={() =>
                setActiveVideo(activeVideo === project.id ? null : project.id)
              }
            >
              <div className='relative overflow-hidden border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-slate-800'>
                {/* Video Thumbnail */}
                <div className='relative aspect-video'>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    layout='fill'
                    // width={1000}
                    // height={400}
                    objectFit='cover'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10'></div>

                  {/* Play Button */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='flex h-12 w-12 items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white'>
                      <Play className='ml-0.5 h-5 w-5 text-gray-900 dark:text-gray-900' />
                    </div>
                  </div>

                  {/* Duration & Category */}
                  <div className='absolute top-4 left-4'>
                    <span className='bg-black/60 px-2 py-1 text-xs font-light text-white backdrop-blur-sm'>
                      {project.duration}
                    </span>
                  </div>
                  <div className='absolute top-4 right-4'>
                    <span className='bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm dark:text-gray-900'>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <h3 className='mb-2 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300'>
                    {project.title}
                  </h3>
                  <p className='text-sm leading-relaxed font-light text-gray-600 dark:text-gray-300'>
                    {project.description}
                  </p>
                </div>

                {/* Expanded Content */}
                {activeVideo === project.id && (
                  <div className='absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm dark:bg-slate-800/95'>
                    {project.videoUrl ? (
                      <div className='relative w-full max-w-3xl overflow-hidden rounded-xl shadow-lg'>
                        {/* <video
                          src={project.videoUrl}
                          controls
                          muted
                          loop
                          autoPlay
                          className='aspect-square size-full rounded-xl'
                        /> */}
                        <VideoPlayer
                          videoUrl={project.videoUrl}
                          active={activeVideo == project.id}
                        />
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            setActiveVideo(null);
                          }}
                          className='absolute top-1 right-4 cursor-pointer rounded-md bg-gray-900/80 px-3 py-1.5 text-sm text-white hover:bg-gray-800 dark:bg-white/80 dark:text-gray-900 dark:hover:bg-white'
                        >
                          Close
                        </button>
                        {project.link && (
                          <button
                            title='View on Youtube'
                            onClick={e => {
                              e.stopPropagation();
                              window.open(
                                project.link,
                                '_blank',
                                'noopener,noreferrer'
                              );
                            }}
                            className='absolute top-1 left-4 cursor-pointer rounded-md bg-gray-900/80 px-2 py-1 text-sm text-white hover:bg-gray-800 dark:bg-white/80 dark:text-gray-900 dark:hover:bg-white'
                          >
                            <YoutubeIcon className='size-6 fill-red-600 text-white' />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className='m-4 text-center'>
                        <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gray-300 dark:border-gray-600'>
                          <Play className='h-8 w-8 text-gray-600 dark:text-gray-400' />
                        </div>
                        <h4 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                          Coming Soon
                        </h4>
                        <p className='mb-6 font-light text-gray-600 dark:text-gray-300'>
                          Full video preview will be available here
                        </p>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            setActiveVideo(null);
                          }}
                          className='bg-gray-900 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                        >
                          Close Preview
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className='mt-24 text-center'>
          <h3 className='mb-12 text-2xl font-light text-gray-900 dark:text-white'>
            Content Services
          </h3>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {[
              'Video Ads',
              'Brand Stories',
              'Product Demos',
              'Social Content',
            ].map(service => (
              <div
                key={service}
                className='border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700'
              >
                <h4 className='mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                  {service}
                </h4>
                <p className='text-sm font-light text-gray-600 dark:text-gray-300'>
                  Professional {service.toLowerCase()} that convert
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoPlayer = ({
  videoUrl,
  active,
}: {
  videoUrl: string;
  active: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.play();
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      controls
      className='aspect-square size-full rounded-xl'
    />
  );
};

export default ContentSection;
