
import React from 'react';
import Navbar from '@/components/navbar';
import Button from '@/components/button';
import ArticleFeed from '@/components/ArticleFeed';

export default function Home() {
  return (
    <>
    <div className="h-full w-full items-center justify-center bg-[#FDF6EE]">
      <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      </div>
      <div className="mt-20 p-6">
      <h1 className="text-4xl font-semibold mb-8 font-poppins text-black">Hey mate! Lets free the press</h1>
        <h1 className="text-3xl font-semibold mb-8 font-poppins text-black">Your latests articles...</h1>
        <Button text="Write an article" redirectUrl={"/submition-article"}></Button>
        <ArticleFeed />
      </div></div>
  </>
  );
}
