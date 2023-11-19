// components/ArticlePlaceholder.tsx
'use client'
import React from 'react';

const ArticlePlaceholder: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md animate-pulse">
      <div className="h-4 bg-gray-300 mb-4 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 mb-6 rounded w-full"></div>
      <div className="h-20 bg-gray-300 mb-6 rounded w-full"></div>
      <div className="h-4 bg-gray-300 mb-4 rounded w-1/2"></div>
    </div>
  );
};

export default ArticlePlaceholder;
