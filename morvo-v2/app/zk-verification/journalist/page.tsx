/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Head from 'next/head';
import Button from '@/components/button';

import ConnectButton from '@/components/W3m';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function Journalist() {
  return (
    <>
    <div className="flex-col justify-start items-start gap-[17px] inline-flex">
    <div className="text-center text-neutral-700 text-[90px] font-medium font-poppins">HEY JOURNALIST</div>
    <div className="text-red-500 text-2xl font-normal font-poppins">Let's prove that you are a real journalist!</div>
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer text-black p-5">Connect your public wallet</AccordionTrigger>
        <AccordionContent className="text-black p-5">
        <div className="flex flex-col">
  <p className="text-black">Connect the wallet that will be used for signing the message.</p>
  <ConnectButton />
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Sign message</AccordionTrigger>
        <AccordionContent className="text-black p-5 font-poppins">
        <div className="flex flex-col">
  <p className="text-black">By signing this, we are checking you are elegible for the platform!</p>
  <Button text="Sign message" redirectUrl="/" />
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Switch to the anonymous wallet</AccordionTrigger>
        <AccordionContent className="text-black p-2 font-poppins">
        <div className="flex flex-col">
            <p className="text-black mb-5">Now you should change to your anonymous account.</p>
            <ConnectButton />
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Prove ownership</AccordionTrigger>
        <AccordionContent className="text-black p-2 font-poppins">
        <div className="flex flex-col">
  <p className="text-black">Generate proof to withdraw your tokens to! It may take 3-5 minutes to generate the proof (and longer if there is a queue).</p>
  <Button text={"Generate proof"} redirectUrl={"/"}></Button>
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Claim credential</AccordionTrigger>
        <AccordionContent className="text-black p-2 font-poppins">
        <div className="flex flex-col">
  <p className="text-black"> Claim your credential by submitting a transaction containing the ZK proof to the ERC-20 contract on-chain.        
</p>
<Button text={"Get my credential"} redirectUrl={"/"}></Button>
</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    <Button text={"Go to Morvo"} redirectUrl={"/articles"} ></Button>
    </>
  );
}