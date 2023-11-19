// pages/index.tsx
'use client'
import React from 'react';
import StoryForm from '@/components/StoryUpload';
import Button from '@/components/button';
const SubmitionArticle: React.FC = () => {
  return (
    <>
    <div className="min-h-screen w-full items-center justify-center bg-[#FDF6EE]">
          <StoryForm />
          </div>
      </>
  );
};
export default SubmitionArticle;
