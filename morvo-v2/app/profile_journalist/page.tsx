// pages/index.tsx

import React from 'react';
import Navbar from '@/components/navbar';
import ArticleFeed from '@/components/ArticleFeed';
import JournalistProfile from '@/components/JournalistProfile';

export default function Home() {
  const journalist = {
    name: 'Simon',
    bio: 'Covering at Gaza',
    imageUrl: '/team/simon.png',
  };

  return (
    <>
 <div className="min-h-screen w-full items-left justify-center bg-[#FDF6EE]">        
 <div>
          <h1 className="text-3xl font-semibold text-black font-poppins">Journalist Profile</h1>
          <JournalistProfile {...journalist} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-8">Latest Articles</h1>
          <ArticleFeed />
        </div>
      </div>
    </>
  );
}
