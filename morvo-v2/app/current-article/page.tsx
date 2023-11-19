// pages/news/[id].tsx
'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';

const NewsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  // Simulate fetching news data based on the ID
  const newsData = {
    title: `News Title ${id}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et luctus urna, id tristique elit.',
    date: 'December 1, 2023',
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">{newsData.title}</h1>
        <p className="text-gray-600 mb-4">{newsData.date}</p>
        <p className="text-gray-700">{newsData.content}</p>
      </div>
    </>
  );
};

export default NewsPage;
