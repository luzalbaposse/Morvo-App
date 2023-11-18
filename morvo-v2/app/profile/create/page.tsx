'use client'
import { LensClient, development } from "@lens-protocol/client";
import { LensLocalStorageProvider } from '@/lib/LensLocalStorageProvider';
import { Input } from "@/components/ui/input"
import { useCallback, useEffect, useState } from 'react';
import { MonvoButton } from '@/components/ui/button';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'


const lensClient = new LensClient({
  environment: development,
  storage: new LensLocalStorageProvider()
});

export default function ProfileCreationPage() {

    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const [handle, setHandle] = useState('');
    

    useEffect(() => {
        lensClient.authentication.isAuthenticated().then(value => {
            console.log(`--> isAuthenticated ${value}`);
        })
        .catch(err => {
            console.error(`--> isAuthenticated ${err.message}`, err.stack);
        })
    }, [])

    const createProfile = useCallback(() => {
        
        lensClient.wallet.createProfile({
            handle,
            to: (address as string),
        })
        .then((resp: any) => {
            console.log(`txHash: ${resp?.txHash} txId: ${resp?.txId}`);
            // TODO: redirect user after successful creation ?
        })
        .catch(err => {
            console.error(`--> err during profile creation ${err.message}`, err.stack);
            // TODO: show error to user
        })
        
    }, [address, handle]);

    return (
    <div>
        {
            isConnected && address
            ? (<span>Connected to {address.slice(0,5)}...{address.slice(-5)} </span>)
            : (<MonvoButton text="Connect Wallet" onClick={open} />)
        }
        
        <Input type="handle" placeholder="Enter a handle for your new Lens account" disabled={!isConnected} onChange={(e) => setHandle(e.target.value)} />

        <MonvoButton text="Create" disabled={!isConnected || !handle} onClick={createProfile} />
    </div>
    )
}