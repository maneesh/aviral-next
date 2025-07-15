'use client';

import Footer from "../home/Footer";
import HowItWorksBanner from "./HowItWorksBanner";
import MentorBottom from "./MentorBottom";
import MentorSection from "./MentorSection";
import Pathtoai from "./Pathtoai";

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
