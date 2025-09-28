import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircleMore,
} from 'lucide-react';
import Link from 'next/link';

const ContactInfo: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'codexmyst@gmail.com',
      href: 'mailto:codexmyst@gmail.com',
    },
    {
      icon: MessageCircleMore,
      title: 'Chat',
      value: '+234 8075 253 823 | WhatsApp',
      href: 'https://wa.link/sjm89l',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+228 71 74 99 74',
      href: 'tel:+22871749974',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote • Global',
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Reggie-Michael',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/emmanuel-michael-6b8942273/',
    },
    // { icon: Calendar, href: '#', label: 'Schedule Call' },
  ];

  return (
    <section className='bg-section-dark py-16'>
      <div className='mx-auto max-w-2xl px-6 lg:px-8'>
        <div className='space-y-12'>
          <div>
            <div className='section-header-line mb-8 justify-center'>
              <span className='text-xs font-light tracking-[0.2em] text-slate-400 uppercase'>
                Contact Information
              </span>
            </div>

            <h3 className='font-display mb-8 text-center text-2xl font-light tracking-tight text-slate-100'>
              Get in Touch
            </h3>

            <p className='mb-8 text-center leading-relaxed font-light tracking-wide text-slate-300'>
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you need development work, automation solutions,
              or creative content, let&apos;s explore how we can collaborate.
            </p>
          </div>

          {/* Contact Details */}
          <div className='space-y-6'>
            {contactInfo.map((info, index) => (
              <div key={index} className='group flex items-center space-x-4'>
                <div className='flex h-12 w-12 items-center justify-center border border-slate-600 transition-colors duration-300 group-hover:border-slate-500'>
                  <info.icon className='h-5 w-5 text-slate-400' />
                </div>
                <div>
                  <div className='text-sm font-light tracking-wide text-slate-500 uppercase'>
                    {info.title}
                  </div>
                  {info.href ? (
                    <Link
                      href={info.href}
                      target={info.title == 'Chat' ? '_blank' : undefined}
                      rel='noopener noreferrer'
                      className='text-lg font-light tracking-wide text-slate-100 transition-colors duration-300 hover:text-slate-300'
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <div className='text-lg font-light tracking-wide text-slate-100'>
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className='pt-8'>
            <h4 className='font-display mb-4 text-lg font-light tracking-tight text-slate-100'>
              Connect Online
            </h4>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='group flex h-12 w-12 items-center justify-center border border-slate-600 transition-all duration-300 hover:border-slate-500'
                  aria-label={social.label}
                >
                  <social.icon className='h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-300' />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className='border border-slate-700/50 bg-slate-800/30 p-8'>
            <h4 className='font-display mb-4 text-lg font-light tracking-tight text-slate-100'>
              Availability
            </h4>
            <div className='space-y-3'>
              <div className='flex items-center space-x-2'>
                <div className='h-2 w-2 rounded-full bg-green-400'></div>
                <span className='text-sm font-light tracking-wide text-slate-300'>
                  Available for new projects
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='h-2 w-2 rounded-full bg-blue-400'></div>
                <span className='text-sm font-light tracking-wide text-slate-300'>
                  Response time: Within 24 hours
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='h-2 w-2 rounded-full bg-purple-400'></div>
                <span className='text-sm font-light tracking-wide text-slate-300'>
                  Timezone: UTC (GMT)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
