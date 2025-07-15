import Training from '@/components/training/Training';
import React from 'react';


async function getData() {
    const domain = 'aviralai.com';
    const page = 'Training';

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch page data');
    }

    const data = await res.json();
    const all = data?.sections ?? [];



    return {
    bannerSection: all.find((s: any) => s.name === 'TBanner')?.contents || [],
    courseSection: all.find((s: any) => s.name === 'CoursePage')?.contents || [],
    faqSection: all.find((s: any) => s.name === 'FAQSection')?.contents || [],
    };
}

export default async function ArivalaiTrainingPage() {
    const sections = await getData();
    return (
        <Training sections={sections} />
    );
}