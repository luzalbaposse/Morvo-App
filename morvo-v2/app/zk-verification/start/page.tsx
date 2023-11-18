import Image from 'next/image';
import Head from 'next/head';
import ConnectButton from '@/components/W3m.jsx';
import Button
 from '@/components/button';
export default function Start() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-[#FDF6EE] bg-[url('/bg-2.png')]" >
      <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      </div>
        <div className=" w-1/2 text-red-500 text-3xl font-normal text-center font-poppins mb-10">
          
        You are about to start a journey that will allow you to <span className="font-bold">preserve your privacy </span>while mantaning the <span className="font-bold">benefits</span> of publishing in the most relevant newspapers in the world. <br></br>
        <br></br>
        Leverage Zero Knowledge Proofs technology to protect your identity while <span className="font-bold">unlocking new monetization possibilities.</span>
        </div>
        <ConnectButton></ConnectButton>
        <Button text={"Verify myself"} redirectUrl={"/zk-verification"}></Button>
    </main>
  );
}