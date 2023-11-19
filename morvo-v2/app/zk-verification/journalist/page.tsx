"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/button";

import ConnectButton from "@/components/W3m";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect, useMemo, useContext } from "react";

import { toast } from "react-toastify";
import React from "react";

import { fromHex, hashMessage, recoverPublicKey, toHex } from "viem";

import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { Noir } from "@noir-lang/noir_js";
import { CompiledCircuit, ProofData } from "@noir-lang/types";
import {
  createConfig,
  useContractWrite,
  usePrepareContractWrite,
  useWalletClient,
} from "wagmi";
import { MerkleTreeContext } from "../../backend/merkleTree";

import circuit from "../../../../noir/circuits/target/stealthdrop.json";
import { Fr } from "@aztec/bb.js";
import addresses from "../../utils/addresses.json";
import credNftJson from "../../../../noir/artifacts/contracts/CredentialNft.sol/CredentialNft.json";
import { useAccount, useConnect, useEnsName } from "wagmi";

function useProver({ inputs }) {
  const [proof, setProof] = useState<ProofData>();
  const noir = useMemo(() => {
    const backend = new BarretenbergBackend(
      circuit as unknown as CompiledCircuit,
      { threads: 12 }
    );
    return new Noir(circuit as unknown as CompiledCircuit, backend);
  }, [circuit]);

  /*
    useEffect(() => {
      if (!proof) return;
  
      const verify = async () => {
        const verification = await toast.promise(noir.verifyFinalProof(proof), {
          pending: 'Verifying proof off-chain...',
          success: 'Proof verified off-chain!',
          error: 'Error verifying proof',
        })
        return verification
      }
  
      verify();
    }, [proof])
    */

  useEffect(() => {
    if (!inputs) return;

    const prove = async () => {
      console.log(inputs);
      const proof = await toast.promise(noir.generateFinalProof(inputs), {
        pending: "Calculating proof...",
        success: "Proof calculated!",
        error: "Error calculating proof",
      });
      console.log(proof);
      setProof(proof);
      return proof;
    };

    prove();
  }, [inputs]);

  return proof;
}

export default function Journalist() {
  // stored signature
  const [storedSignature, setStoredSignature] = useState<{
    account: string;
    signature: string | undefined;
  }>();
  // addresses
  const [availableAddresses, setAvailableAddresses] = useState<`0x${string}`[]>(
    []
  );
  // merkle tree
  const merkleTree = useContext(MerkleTreeContext);

  // inputs
  const [inputs, setInputs] = useState<any>();

  // wallet client
  const { data: walletClient, status: walletConnStatus } = useWalletClient();

  // credential nft abi, proof & inputs for ContractWrite
  const credentialNftAbi = credNftJson.abi;
  const proof = useProver({ inputs });

  const { config } = usePrepareContractWrite({
    address: addresses.credentialNft,
    abi: credentialNftAbi,
    functionName: "claim",
  });

  const {
    data: writeData,
    isLoading: writeLoading,
    write,
  } = useContractWrite(config);

  // account
  const { address, isConnected } = useAccount();

  let messageToHash =
    "0xabfd76608112cc843dca3a31931f3974da5f9f5d32833e7817bc7e5c50c7821e";

  // signData
  const signData = async (acc: string) => {
    const signature = await walletClient?.signMessage({
      account: acc as `0x${string}`,
      message: messageToHash,
    });
    setStoredSignature({ signature, account: acc });
  };

  // claim
  const claim = async (acc: string) => {
    const hashedMessage = hashMessage(messageToHash, "hex"); // keccak of "signthis"
    const { account, signature } = storedSignature!;
    const index = merkleTree!.getIndex(Fr.fromString(account));
    const pedersenBB = await merkleTree!.getBB();
    const signatureBuffer = fromHex(signature as `0x${string}`, "bytes").slice(
      0,
      64
    );
    const frArray: Fr[] = Array.from(signatureBuffer).map(
      (byte) => new Fr(BigInt(byte))
    );ConnectButton
    const inputs = {
      pub_key: [...fromHex(pubKey, "bytes").slice(1)],
      signature: [...fromHex(signature as `0x${string}`, "bytes").slice(0, 64)],
      hashed_message: [...fromHex(hashedMessage, "bytes")],
      nullifier: nullifier.toString(),
      merkle_path: merkleProof.pathElements.map((x) => x.toString()),
      index: index,
      merkle_root: merkleTree!.root().toString() as `0x${string}`,
      claimer_priv: acc,
      claimer_pub: acc,
    };

    setInputs(inputs);
  };

  // initAddresses
  const initAddresses = async () => {
    const addresses = await walletClient?.getAddresses();
    setAvailableAddresses(addresses || []);
  };

  useEffect(() => {
    if (isConnected) {
      initAddresses();
    }
  }, [walletConnStatus]);

  return (
    <>
      <div className="flex-col justify-start items-start gap-[17px] inline-flex">
        <div className="text-center text-neutral-700 text-[90px] font-medium font-poppins">
          HEY JOURNALIST
        </div>
        <div className="text-red-500 text-2xl font-normal font-poppins">
          Let's prove that you are a real journalist!
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer text-black p-5">
              Connect your public wallet
            </AccordionTrigger>
            <AccordionContent className="text-black p-5">
              <div className="flex flex-col">
                <p className="text-black">
                  Connect the wallet that will be used for signing the message.
                </p>
                <ConnectButton />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">
              Sign message
            </AccordionTrigger>
            <AccordionContent className="text-black p-5 font-poppins">
              <div className="flex flex-col">
                <p className="text-black">
                  By signing this, we are checking you are elegible for the
                  platform!
                </p>
                <button
                  className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle"
                  onClick={() => signData(availableAddresses[0])}
                >
                  Sign message
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">
              Switch to the anonymous wallet
            </AccordionTrigger>
            <AccordionContent className="text-black p-2 font-poppins">
              <div className="flex flex-col">
                <p className="text-black mb-5">
                  Now you should change to your anonymous account.
                </p>
                <ConnectButton />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">
              Prove ownership
            </AccordionTrigger>
            <AccordionContent className="text-black p-2 font-poppins">
              <div className="flex flex-col">
                <p className="text-black">
                  Generate proof to withdraw your tokens to! It may take 3-5
                  minutes to generate the proof (and longer if there is a
                  queue).
                </p>

                <button
                  className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle"
                  onClick={() => claim(availableAddresses[0])}
                >
                  Generate Proof
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="cursor-pointer text-black p-5 font-poppins">
              Claim credential
            </AccordionTrigger>
            <AccordionContent className="text-black p-2 font-poppins">
              <div className="flex flex-col">
                <p className="text-black">
                  {" "}
                  Claim your credential by submitting a transaction containing
                  the ZK proof to the ERC-20 contract on-chain.
                </p>
                {!writeLoading && (
                  <button
                    className="bg-[#E5374C] hover:bg-[#FF5368] text-white py-2 px-4 rounded-lg my-5 w-[300px] h-[50px] text-center align-middle"
                    disabled={!write}
                    onClick={() =>
                      write({ args: [proof, inputs.nullifier, ""] })
                    }
                  >
                    Get my credential
                  </button>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button text={"Go to Morvo"} redirectUrl={"/articles"}></Button>
    </>
  );
}
