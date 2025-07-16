'use client';

import HowItWorksBanner from "./HowItWorksBanner";
import MentorBottom from "./MentorBottom";
import MentorSection from "./MentorSection";
import Pathtoai from "./Pathtoai";
import Footer from "../home/Footer";

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name: string;
}

interface SectionProps {
  sections: {
    howItWorks: ContentItem[];
    pathtoai: ContentItem[];
    mentorSection: ContentItem[];
    mentorBottom: ContentItem[];
  };
}

export default function HowItWorks({ sections }: SectionProps) {
  return (
    <>
      <HowItWorksBanner howItWorks={sections.howItWorks} />
      <Pathtoai pathtoai={sections.pathtoai} />
      <MentorSection mentorSection={sections.mentorSection} />
      <MentorBottom mentorBottom={sections.mentorBottom} />
      <Footer />
    </>
  );
}
