"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';

const Accordion = ({ index, title, content })=> {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
    // You can add additional logic here, such as navigating to a specific route
    // Example: router.push('/your-route');
  };

  return (
    <div className="w-[640px] h-20 py-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-[114px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div
        className="w-[640px] px-6 py-3 justify-start items-start gap-8 inline-flex cursor-pointer"
        onClick={handleAccordionClick}
      >
        <div className="w-6 h-6 text-center text-red-500 text-[19px] font-light font-poppins leading-normal">{index}</div>
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-8 inline-flex">
          <div className="self-stretch h-6 flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch h-6 justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-neutral-700 text-base font-medium font-poppins leading-[18.56px]">{title}</div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-[640px] px-6 py-3 justify-start items-start gap-8 inline-flex">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
