// pages/index.tsx

import React from 'react';
import Navbar from '@/components/navbar';
import ArticleFeed from '@/components/ArticleFeed';
import JournalistProfile from '@/components/JournalistProfile';

export default function Home() {
  const journalist = {
    name: '0xPLEH.lens',
    bio: 'Covering at Gaza',
    imageUrl: '/avatar.png',
  };

  return (
    <>
 <div className="min-h-screen w-full items-left justify-center bg-[#FDF6EE]">        
 <div>
        <h1 className="text-3xl font-semibold text-black font-poppins">Journalist Profile</h1>
          <JournalistProfile {...journalist} />
        </div>
        <div className="mt-20">
          <h1 className="text-3xl font-semibold mb-8 text-black">Latest Articles</h1>
          <ArticleFeed />
        </div>
      </div>
    </>
  );
}
