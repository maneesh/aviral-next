import React from 'react';

import Training from '@/components/training/Training';

interface ContentItem {
    type: 'text' | 'image';
    data: string;
    name?: string;
}

interface SectionItem {
    name: string;
    contents: ContentItem[];
}

interface TrainingPageProps {
    bannerSection: ContentItem[];
    courseSection: ContentItem[];
    faqSection: ContentItem[];
}


async function getData(): Promise<TrainingPageProps> {
    const domain = 'aviralai.com';
    const page = 'training';

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch page data');
    }

    const data: { sections: SectionItem[] } = await res.json();
    const all = data?.sections ?? [];

    return {
        bannerSection: all.find((s) => s.name === 'TBanner')?.contents || [],
        courseSection: all.find((s) => s.name === 'CoursePage')?.contents || [],
        faqSection: all.find((s) => s.name === 'FAQSection')?.contents || [],
    };
}

export default async function ArivalaiTrainingPage() {
    const sections = await getData();
    return (
        <Training sections={sections} />
    );
}