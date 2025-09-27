'use client';
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import LanguagesSection from '@/components/LanguagesSection';
import ContentSection from '@/components/ContentSection';
import AutomationSection from '@/components/AutomationSection';
import DevelopmentSection from '@/components/DevelopmentSection';
import DevOpsSection from '@/components/DevOpsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection onSectionClick={section => console.log(section)} />
      <AboutPreview />
      <ServicesPreview />
      <LanguagesSection />
      <ContentSection />
      <AutomationSection />
      <DevelopmentSection />
      <DevOpsSection />
    </>
  );
};

export default HomePage;
