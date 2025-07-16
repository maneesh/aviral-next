import HowItWorks from "@/components/howitworks/HowItWorks";

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name: string;
}

interface SectionItem {
  name: string;
  contents: ContentItem[];
}

interface HowItWorksPageProps {
  howItWorks: ContentItem[];
  pathtoai: ContentItem[];
  mentorSection: ContentItem[];
  mentorBottom: ContentItem[];
}



async function getData(): Promise<HowItWorksPageProps> {
  const domain = 'aviralai.com';
  const page = 'HowItWorks';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: { sections: SectionItem[] } = await res.json();
  const all = data?.sections ?? [];


 return {
  howItWorks: (all.find((s) => s.name === 'HowItWorksBanner')?.contents || []).map(
    item => ({ ...item, name: typeof item.name === 'string' ? item.name : '' })
  ),
  pathtoai: (all.find((s) => s.name === 'Pathtoai')?.contents || []).map(
    item => ({ ...item, name: typeof item.name === 'string' ? item.name : '' })
  ),
  mentorSection: (all.find((s) => s.name === 'MentorSection')?.contents || []).map(
    item => ({ ...item, name: typeof item.name === 'string' ? item.name : '' })
  ),
  mentorBottom: (all.find((s) => s.name === 'MentorBottom')?.contents || []).map(
    item => ({ ...item, name: typeof item.name === 'string' ? item.name : '' })
  ),
};

}

export default async function HowItWorksPage() {
  const sections = await getData();

  return <HowItWorks sections={sections} />;
}
