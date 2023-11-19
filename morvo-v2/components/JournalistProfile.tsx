// components/JournalistProfile.tsx

import React from 'react';

interface JournalistProfileProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const JournalistProfile: React.FC<JournalistProfileProps> = ({ name, bio, imageUrl }) => {
  return (
    <div className="max-w-[200px] max-h-[200px] rounded-md shadow-md">
      <div className="mb-4 mt-4">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-black">{name}</h2>
        <p className="text-gray-600 mb-4">{bio}</p>
      </div>
    </div>
  );
};

export default JournalistProfile;
