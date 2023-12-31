"use client"
/* eslint-disable react/no-unescaped-entities */
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Head from 'next/head';
import Button from '@/components/button';
import { IDKitWidget } from '@worldcoin/idkit';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import ConnectButton from '@/components/W3m';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ethers } from 'ethers';
import AirdropABI from '@/contracts/Airdrop.json';
import JournalistABI from '@/contracts/Journalist.json';



export default function Journalist() {
  const [isNFTMinted, setIsNFTMinted] = useState(false);
  const mintNFT = async (address) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
      const signer = provider.getSigner();
      const contractAddress = '0x0674300acb2b7f9ff1645073b469eaceaae307eb'; 
      const contract = new ethers.Contract(contractAddress, JournalistABI, signer);
  
      // Call the safeMint function of the NFT contract to mint the NFT for the user
      const transaction = await contract.safeMint(address);
      await transaction.wait();
  
      console.log('NFT minted successfully!');
      setIsNFTMinted(true);

      
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };
  const { address } = useAccount();
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleVerify = async (response) => {
    if (response.address) {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
      const signer = provider.getSigner();
      const contractAddress = '0x7e6904463f5d1cfb54056fa4e37d56e79d7c4af6'; 
      const contract = new ethers.Contract(contractAddress, AirdropABI, signer);
  
      try {
        // Call the isEligible function of the smart contract to check if the provided public address is eligible for the airdrop
        const isEligible = await contract.isEligible(response.address);
  
        if (isEligible) {
          console.log('The provided public address is eligible for the airdrop!');
          // Perform additional actions if the address is eligible
        } else {
          console.log('The provided public address is not eligible for the airdrop!');
          // Perform additional actions if the address is not eligible
        }
      } catch (error) {
        console.error('Error occurred during verification:', error);
      }
    } else {
      console.error('Invalid address: The address is undefined');
    }
  };
  const handleGetCredential = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
  
        const contractAddress = '0x0674300acb2b7f9ff1645073b469eaceaae307eb';
        const contract = new ethers.Contract(contractAddress, JournalistABI, signer);
  
        const transaction = await contract.safeMint(address);
        await transaction.wait();
  
        console.log('NFT minted successfully!');
        setIsNFTMinted(true);
        toast.success('You have your credential! Go to Morvo :)');

      } else {
        console.error('MetaMask or similar provider not found.');
        toast.error('Error minting your credential');

      }
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };
  
  
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
      <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Prove ownership</AccordionTrigger>
        <AccordionContent className="text-black p-5 font-poppins">
        <div className="flex flex-col">
        <p className="text-black">Generate proof to withdraw your tokens to! It may take 3-5 minutes to generate the proof (and longer if there is a queue).</p>
  <div className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle">
  <IDKitWidget 
      action="public-adress"
      signal={address}
      onSuccess={response => console.log(response)}
      handleVerify={handleVerify} // Use the handleVerify callback function to interact with the Solidity smart contract
      app_id="app_staging_51d1b635afd37257e1afb7050d156967"
    >
      {({ open }) => <button onClick={open}>Sign in</button>}
    </IDKitWidget>
  </div>
  
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
      <AccordionItem value="item-6">
      <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">Claim credential</AccordionTrigger>
      <AccordionContent className="text-black p-2 font-poppins">
        <div className="flex flex-col">
          <p className="text-black">Claim your credential by submitting a transaction containing the ZK proof to the ERC-721 contract on-chain.</p>
          <div className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle" onClick={() => { console.log('Button clicked!'); handleGetCredential(); }}>Get my credential</div>
        </div>
      </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>
    {isNFTMinted ? (
        <Button text={"Go to Morvo"} redirectUrl={"/feed-articles"} />
      ) : (
        <p className="text-red-500">Complete the NFT minting process to unlock access to Morvo</p>
      )}
    </>
  );
}