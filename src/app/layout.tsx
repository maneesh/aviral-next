import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

interface SectionItemComponent {
  type :"text" | "image",
  data : string,
  name:string
}

interface SectionItem {
  name: string;
  contents: SectionItemComponent[];
}
async function getData() {
  const domain = 'aviralai.com';
  const page = 'Layout';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all:SectionItem[] = data?.sections ?? [];

  return {
    navbarDetailsData: all.find((s) => s.name === 'Navbar')?.contents || [],
    footerDetails: all.find((s) => s.name === 'Footer')?.contents || [],
  };
  
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = await getData()
  return (
    <html>
      <body>
        <Navbar navbarData = {sections.navbarDetailsData}/>
        {children}
        <Footer footerDetails={sections.footerDetails}/>
        </body> 
    </html>
  );
}
