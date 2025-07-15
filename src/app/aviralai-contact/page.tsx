
import ContactBanner from "@/components/contact/ContactBanner";
import ContactInformation from "@/components/contact/ContactInformation";
import GetInTouchSection from "@/components/contact/GetInTouchSection";
import Footer from "@/components/home/Footer";

async function getData() {
  const domain = 'aviralai.com';
  const page = 'Contact';
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];
  //console.log("this is all data",all)

  

  return {
    bannerSection: all.find((s: any) => s.name === 'ContactBanner')?.contents || [],
    getInTouch: all.find((s: any) => s.name === 'GetInTouchSection')?.contents || [],
    contactInfo: all.find((s: any) => s.name === 'ContactInformation')?.contents || [],
  };
}

export default async function Contact(){
    const sections = await getData();
    return(
     <><ContactBanner bannerSectionData = {sections.bannerSection}/>
     <GetInTouchSection getInTouchData = {sections.getInTouch}/>
     <ContactInformation info = {sections.contactInfo} />
     <Footer />
     </>
    );
};

