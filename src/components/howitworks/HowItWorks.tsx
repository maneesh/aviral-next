import Footer from "../home/Footer";
import HowItWorksBanner from "./HowItWorksBanner";
import MentorBottom from "./MentorBottom";
import MentorSection from "./MentorSection";
import Pathtoai from "./Pathtoai";

async function getData() {
  const domain = 'aviralai.com';
  const page = 'HowItWorks';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API error response:', errorText);
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];

  console.log('All Data of how it work Response:', all);

  return {
    howItWorks: all.find((s: any) => s.name === 'HowItWorksBanner')?.contents || [],
    pathtoai: all.find((s: any) => s.name === 'Pathtoai')?.contents || [],
    mentorSection: all.find((s: any) => s.name === 'MentorSection')?.contents || [],
    mentorBottom: all.find((s: any) => s.name === 'MentorBottom')?.contents || []
  };
}


async function HowItWorks(){
    const sections = await getData();
    return(
        <>
        <HowItWorksBanner howItWorks = {sections.howItWorks}/>
        <Pathtoai pathtoai = {sections.pathtoai} />
        <MentorSection mentorSection = {sections.mentorSection} />
        <MentorBottom mentorBottom = {sections.mentorBottom} />
        <Footer />
        </>
       
    );
};

export default HowItWorks;