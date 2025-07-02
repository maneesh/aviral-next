

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Program from '@/components/home/Programs';
import Industry from '@/components/home/Industry';
import Career from '@/components/home/Career';



/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Hero />
      <Program />
      <Industry />
      <Career />
    </main>
  );
}
