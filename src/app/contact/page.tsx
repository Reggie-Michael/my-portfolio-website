import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import NewsletterSection from '@/components/contact/NewsletterSection';
import ReviewsSection from '@/components/contact/ReviewsSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHero />
      <div className='grid grid-cols-1 gap-0 lg:grid-cols-2'>
        <ContactForm />
        <ContactInfo />
      </div>
      <NewsletterSection />
      <ReviewsSection />
    </>
  );
};

export default ContactPage;
