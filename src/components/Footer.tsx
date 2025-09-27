import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { NewsLetterForm } from './contact/NewsletterSection';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    pages: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Full-Stack Development', path: '/services#development' },
      { name: 'AI & Automation', path: '/services#automation' },
      { name: 'Content Creation', path: '/services#content' },
      { name: 'DevOps Solutions', path: '/services#devops' },
    ],
    social: [
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
      // { name: "Email", icon: Mail, href: "mailto:codexmyst@gmail.com" },
    ],
  };

  return (
    <footer className='bg-slate-900 text-slate-300 dark:bg-slate-950'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <div className='mb-6'>
              <h3 className='font-display mb-4 text-2xl font-extralight tracking-tight text-slate-100'>
                Michael Emmanuel
              </h3>
              <p className='max-w-md leading-relaxed font-light tracking-wide text-slate-400'>
                A passionate developer crafting digital experiences through
                clean code, intelligent automation, and compelling visual
                narratives. Building meaningful solutions through Aradyst Codex.
              </p>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {footerLinks.social.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className='group flex h-10 w-10 items-center justify-center border border-slate-700 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800'
                  aria-label={social.name}
                >
                  <social.icon className='h-4 w-4 text-slate-400 transition-colors duration-300 group-hover:text-slate-300' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-display mb-6 text-lg font-light tracking-tight text-slate-100'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              {footerLinks.pages.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className='font-light tracking-wide text-slate-400 transition-colors duration-300 hover:text-slate-300'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-display mb-6 text-lg font-light tracking-tight text-slate-100'>
              Services
            </h4>
            <ul className='space-y-3'>
              {footerLinks.services.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className='text-sm font-light tracking-wide text-slate-400 transition-colors duration-300 hover:text-slate-300'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className='border-t border-slate-800 py-8'>
          <div className='text-center'>
            <h4 className='font-display mb-4 text-lg font-light tracking-tight text-slate-100'>
              Stay Updated
            </h4>
            <p className='mb-6 font-light tracking-wide text-slate-400'>
              Get notified about new projects, insights, and opportunities
            </p>
            <NewsLetterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col items-center justify-between border-t border-slate-800 py-6 md:flex-row'>
          <div className='flex items-center space-x-2 text-sm font-light tracking-wide text-slate-400'>
            <span>© {currentYear} Michael Emmanuel. Made by</span>
            {/* <Heart className="w-4 h-4 text-red-400" /> */}
            <span className='font-semibold italic'>Aradyst Codex</span>
          </div>

          <div className='mt-4 flex items-center space-x-6 md:mt-0'>
            <Link
              href='/privacy'
              className='text-sm font-light tracking-wide text-slate-400 transition-colors duration-300 hover:text-slate-300'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-sm font-light tracking-wide text-slate-400 transition-colors duration-300 hover:text-slate-300'
            >
              Terms of Service
            </Link>
            <a
              href='https://linktr.ee/aradyst_codex'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-1 text-sm font-light tracking-wide text-slate-400 transition-colors duration-300 hover:text-slate-300'
            >
              <span>Aradyst Codex</span>
              <ExternalLink className='h-3 w-3' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
