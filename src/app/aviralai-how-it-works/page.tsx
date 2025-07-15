import HowItWorks from "@/components/howitworks/HowItWorks";

async function getData() {
  const domain = 'aviralai.com';
  const page = 'HowItWorks';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];


  return {
    howItWorks: all.find((s: any) => s.name === 'HowItWorksBanner')?.contents || [],
    pathtoai: all.find((s: any) => s.name === 'Pathtoai')?.contents || [],
    mentorSection: all.find((s: any) => s.name === 'MentorSection')?.contents || [],
    mentorBottom: all.find((s: any) => s.name === 'MentorBottom')?.contents || []
  };
}

export default async function HowItWorksPage() {
  const sections = await getData();

  return <HowItWorks sections={sections} />;
}
