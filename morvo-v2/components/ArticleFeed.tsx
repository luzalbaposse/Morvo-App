// components/ArticleFeed.tsx

import React from 'react';
import ArticlePlaceholder from './ArticlePlaceholder';
import Button from '@/components/button';

const ArticleFeed: React.FC = () => {
  const articles: any[] = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    title: `Defending the Fourth Estate: The Unyielding Mission of Periodistas Sin Fronteras ${index + 1}`,
    content: 'This is a story that will blow your mind..',
    date: 'January 1, 2023',
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id}>
          {article.id % 2 === 0 ? (
            // Render actual article
            <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-black">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <p className="text-gray-400 text-sm mb-4">{article.date}</p>
             <Button text="Claim with Lens" redirectUrl={"/"} ></Button>
            </div>
          ) : (
            // Render placeholder
            <ArticlePlaceholder />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleFeed;
