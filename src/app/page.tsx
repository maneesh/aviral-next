import * as React from 'react';
import '@/lib/env';

import Career from '@/components/home/Career';
import Hero from '@/components/home/Hero';
import Industry from '@/components/home/Industry';
import Program from '@/components/home/Programs';
import Testimonials from '@/components/home/Testimonials';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface SectionItem {
  name: string;
  contents: ContentItem[];
}

interface HomePageProps {
  hero: ContentItem[];
  program: ContentItem[];
  industry: ContentItem[];
  chooseUs: ContentItem[];
  career: ContentItem[];
  testimonials: ContentItem[];
}

// ✅ Use the Metadata API (new way to define <head> content)
export const metadata = {
  title: 'Aviral AI - Home',
  description: 'Welcome to Aviral AI – Your future in AI starts here.',
};

async function getData(): Promise<HomePageProps> {
  const domain = 'aviralai.com';
  const page = 'Home';

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
    hero: all.find((s) => s.name === 'Hero')?.contents || [],
    program: all.find((s) => s.name === 'Program')?.contents || [],
    industry: all.find((s) => s.name === 'IndustryExpert')?.contents || [],
    chooseUs: all.find((s) => s.name === 'ChooseUs')?.contents || [],
    career: all.find((s) => s.name === 'Career')?.contents || [],
    testimonials: all.find((s) => s.name === 'Testimonials')?.contents || [],
  };
}

export default async function HomePage() {
  const sections = await getData();

  return (
    <main>
      <Hero data={sections.hero} />
      <Program data={sections.program} />
      <Industry data={sections.industry} chooseUsData={sections.chooseUs} />
      <Career data={sections.career} />
      <Testimonials data={sections.testimonials} />
    </main>
  );
}
