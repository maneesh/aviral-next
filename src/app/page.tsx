import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import Hero from '@/components/home/Hero';
import Program from '@/components/home/Programs';
import Industry from '@/components/home/Industry';
import Career from '@/components/home/Career';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';

async function getData() {
  const domain = 'aviralai.com';
  const page = 'Home';

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

  // console.log('All Data in Home Page Response:', JSON.stringify(all, null, 2));

  return {
    hero: all.find((s: any) => s.name === 'Hero')?.contents || [],
    program: all.find((s: any) => s.name === 'Program')?.contents || [],
    industry: all.find((s: any) => s.name === 'IndustryExpert')?.contents || [],
    chooseUs: all.find((s: any) => s.name === 'ChooseUs')?.contents || [],
    career: all.find((s: any) => s.name === 'Career')?.contents || [],
    testimonials: all.find((s: any) => s.name === 'Testimonials')?.contents || [],
  };
}

export default async function HomePage() {
  const sections = await getData();

  return (
    <main>
      <Head>
        <title>Aviral AI - Home</title>
      </Head>

      <Hero data={sections.hero} />
      <Program data={sections.program} />
      <Industry data={sections.industry} chooseUsData={sections.chooseUs} />
      <Career data={sections.career} />
      <Testimonials data={sections.testimonials} />
      <Footer />
    </main>
  );
}
