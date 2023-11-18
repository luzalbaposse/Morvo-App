'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ConnectButton from '../components/W3m.jsx';
 
const Navbar4App = () => {
  const router = useRouter();

  return (
    <div className="w-[1878px] h-[60px] px-5 py-[17px] bg-orange-50 rounded-lg border border-neutral-700 justify-between items-center inline-flex">
      <div className=" items-center gap-[90px] flex">
        <ConnectButton></ConnectButton>
      </div>
    </div>
  );
}

export default Navbar4App;