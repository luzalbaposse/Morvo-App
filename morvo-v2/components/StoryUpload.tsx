// components/StoryForm.tsx
'use client'

import React, { useState } from 'react';

const StoryForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [story, setStory] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Story:', story);
  };

  return (
    <div className="mt-8 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 font-poppins text-black">Share Your Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Which is the title of your story?"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="story" className="block text-sm font-medium text-gray-600">
            Story
          </label>
          <textarea
            id="story"
            name="story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={4}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none"
            placeholder="Share your story..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#E5374C] text-white p-3 rounded-md hover:bg[#E5374E] focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default StoryForm;
