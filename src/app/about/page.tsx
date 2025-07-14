
import AboutBanner from "@/components/about/AboutBanner"
import UpperSection from "@/components/about/UpperSection";
import TeamSection from "@/components/about/TeamSection";
import BottomUpSection from "@/components/about/BottomUpSection";
import BottomDownSection from "@/components/about/BottomDownSection";
import Footer from "@/components/home/Footer"

async function getData() {
  const domain = 'aviralai.com';
  const page = 'About';
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API error response:', errorText);
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];
  console.log("this is all data",all)

  

  return {
    bannerSection: all.find((s: any) => s.name === 'AboutBanner')?.contents || [],
    upperSection: all.find((s: any) => s.name === 'UpperSection')?.contents || [],
    team: all.find((s: any) => s.name === 'TeamSection')?.contents || [],
    bottomUp: all.find((s: any) => s.name === 'BottomUpSection')?.contents || [],
    bottomDown: all.find((s: any) => s.name === 'BottomDownSection')?.contents || [],
  };
}



 export default async function About () {
     const sections = await getData();
    return (
        
        
        <>
        <AboutBanner bannerData = {sections.bannerSection}/>
        <UpperSection upperSectionData ={sections.upperSection} />
        <TeamSection  teamData = {sections.team}/>
        <BottomUpSection bottomUpData = {sections.bottomUp}/>
        <BottomDownSection bottomDownData = {sections.bottomDown} />
        <Footer />
        </>

    )



}