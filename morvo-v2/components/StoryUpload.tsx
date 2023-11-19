import React, { useState } from 'react';

const StoryForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show the loading modal
    setIsLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      // Hide the loading modal after 5 seconds
      setIsLoading(false);

      // Handle form submission logic here
      console.log('Title:', title);
      console.log('Story:', story);

      window.location.replace('/profile_journalist');
    }, 5000);
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
      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default StoryForm;
