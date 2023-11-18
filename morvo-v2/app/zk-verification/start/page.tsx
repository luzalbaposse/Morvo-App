import Image from 'next/image';
import Head from 'next/head';
import Button from '@/components/button';
export default function Start() {
  return (
    <>
     <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      </div>
        <div className=" w-1/2 text-red-500 text-3xl font-normal text-center font-poppins mb-10">
          
        You are about to start a journey that will allow you to <span className="font-bold">preserve your privacy </span>while mantaning the <span className="font-bold">benefits</span> of publishing in the most relevant newspapers in the world. <br></br>
        <br></br>
        Leverage Zero Knowledge Proofs technology to protect your identity while <span className="font-bold">unlocking new monetization possibilities.</span>
        </div>
        <div className="w-[700px] text-center text-red-500 text-3xl font-normal font-poppins">What’s your role in this story?</div>
        <div className="justify-start items-start gap-[26px] inline-flex">
    <Button text={"I am a journalist"} redirectUrl={"/zk-verification/journalist"}></Button>
    <Button text={"I am a media"} redirectUrl={"/zk-verification/media"}></Button>
    </div>
    </>
  );
}