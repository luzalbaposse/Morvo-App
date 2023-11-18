import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar'
import Button from '@/components/button';

export default function Home() {

  return (
    <>
    <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
    </div>
      <div className="text-center mb-12 space-y-0 z-10">
      <Image
              src="/Morvo_Logo.svg"
              alt="Morvo Logo"
              width={700}
              height={193}
              priority
            />
    </div>  
    <Button text={"Protect your identity"} redirectUrl={"zk-verification/start"}></Button>
    </>
  
  )
}