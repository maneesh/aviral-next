// Training.tsx
import React from 'react';

import CoursePage from './Course';
import FAQSection from './FAQSection';
import TBanner from './TBanner';
import Footer from '../home/Footer';

interface TrainingProps {
  sections: {
    bannerSection: any[];
    courseSection: any[];
    faqSection: any[];
  };
}

const Training: React.FC<TrainingProps> = ({ sections }) => {
  return (
    <>
      <TBanner data={sections.bannerSection} />
      <CoursePage data={sections.courseSection} />
      <FAQSection data={sections.faqSection} />
      <Footer />
    </>
  );
};

export default Training;
