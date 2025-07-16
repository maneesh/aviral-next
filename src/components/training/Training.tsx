import React from 'react';

import CoursePage from './Course';
import FAQSection from './FAQSection';
import TBanner from './TBanner';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface TrainingProps {
  sections: {
    bannerSection: ContentItem[];
    courseSection: ContentItem[];
    faqSection: ContentItem[];
  };
}

const Training: React.FC<TrainingProps> = ({ sections }) => {
  return (
    <>
      <TBanner data={sections.bannerSection} />
      <CoursePage data={sections.courseSection} />
      <FAQSection data={sections.faqSection} />
    </>
  );
};

export default Training;
