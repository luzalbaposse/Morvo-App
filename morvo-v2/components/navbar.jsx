'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-1 px-5 py-[17px] bg-orange-50 rounded-lg border border-neutral-700 justify-between items-center inline-flex">
      <div className=" items-center gap-[90px] flex">
        <Link href="/" className={`text-center text-red-500 text-xl ${router.pathname === '/' ? 'font-bold' : 'font-light'} font-poppins tracking-tighter`}>
          home
        </Link>
        <Link href="/about-us" className={`text-center text-red-500 text-xl ${router.pathname === '/info/about-us' ? 'font-bold' : 'font-light'} font-poppins tracking-tighter`}>
          about us
        </Link>
        <Link href="/the-story-behind" className={`text-center text-red-500 text-xl ${router.pathname === '/info/the-story-behind' ? 'font-bold' : 'font-light'} font-poppins tracking-tighter`}>
          the story behind
        </Link>
      </div>
    </div>
  );
}

export default Navbar;