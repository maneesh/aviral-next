'use client';

import HowItWorksBanner from "./HowItWorksBanner";
import MentorBottom from "./MentorBottom";
import MentorSection from "./MentorSection";
import Pathtoai from "./Pathtoai";
import Footer from "../home/Footer";

interface SectionProps {
  sections: {
    howItWorks: any[];
    pathtoai: any[];
    mentorSection: any[];
    mentorBottom: any[];
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
