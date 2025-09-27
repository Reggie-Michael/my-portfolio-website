import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import SkillsSection from '@/components/services/SkillsSection';
import ExperienceHighlights from '@/components/services/ExperienceHighlights';
import ContentSection from '@/components/ContentSection';
import AutomationSection from '@/components/AutomationSection';
import DevelopmentSection from '@/components/DevelopmentSection';
import DevOpsSection from '@/components/DevOpsSection';

const ServicesPage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <SkillsSection />
      <DevelopmentSection />
      <AutomationSection />
      <DevOpsSection />
      <ContentSection />
      <ExperienceHighlights />
    </>
  );
};

export default ServicesPage;
