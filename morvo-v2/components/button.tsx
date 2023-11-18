
import React from 'react';

const Button = ({ text, redirectUrl }) => {
  return (
<a href={redirectUrl} className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle">      {text}
    </a>
  );
};

export default Button;