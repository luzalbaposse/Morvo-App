'use client'
import axios from "axios"
import { useApolloClient, useCreatePost, useLogin, useProfiles } from '@lens-protocol/react-web';
import { useCallback, useEffect, useState } from 'react'
import { create } from '@web3-storage/w3up-client';
import { MonvoButton as Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { LensClient, development } from "@lens-protocol/client";
import { LensLocalStorageProvider } from '@/lib/LensLocalStorageProvider';
import { useAccount } from 'wagmi'

// const lensClient = new LensClient({
//   environment: development,
//   storage: new LensLocalStorageProvider()
// });


const uploadToPinata = async (title, content) => {

  const formData = new FormData();

  const blob = new Blob([content], { type: 'text/plain' });
  formData.append('file', blob)

  const metadata = JSON.stringify({
    name: (title ?? 'No name'),
  });
  formData.append('pinataMetadata', metadata);
  
  const options = JSON.stringify({
    cidVersion: 0,
  })
  formData.append('pinataOptions', options);

  try{
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: "Infinity",
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_SECRET}`
      }
    });
    console.log(res.data);
    return Promise.resolve(res.data.IpfsHash);

  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
  
}

const uploadToWeb3Storage = async (content) => {
    const client = await create();
    // const resp = await client.login('your-email-here')
    // console.debug(`login resp:`, resp);
    client.addSpace()
    
    console.log(`Setting current space...`);
    // await client.setCurrentSpace(process.env.NEXT_PUBLIC_WEB3_SPACE_ID);
    await client.setCurrentSpace('Y6Jlcm9vdHOC2CpYJQABcRIg0cz8c2HXdRRxIry32Fm8lpufZcg2rtHYz2bJecoDiXDYKlglAAFxEiDPSstAqO4LI32B6mjWunflENzsDuElIA_OX2iLfoYiKGd2ZXJzaW9uAYUEAXESINHM_HNh13UUcSK8t9hZvJabn2XINq7R2M9myXnKA4lwqGFzRICgAwBhdmUwLjkuMWNhdHSBomNjYW5hKmR3aXRoZnVjYW46KmNhdWRZARCFJDCCAQoCggEBALESAgSlEir8aSLAt');

    const blob = new Blob([content], { type: 'text/plain' });
    console.log(`Uploading the file...`)

    const root = await client.uploadFile(blob);
    return root.toString();
}

const lensClient = new LensClient({
    environment: development,
    storage: new LensLocalStorageProvider()
});

function ArticleCreate({ profileId, address }) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const { execute, error, loading } = useCreatePost();
    const { execute: loginExecute, data: loginProfile, error: loginError } = useLogin();
    useApolloClient();

    console.log(`profileId: <${profileId}> and address: <${address}>`)
    

    const createArticle = useCallback(async () => {
        try {
            // upload to IPFS
            console.log(`Uploading the file...`)
            // const client = await Client.create({ principal, store: new StoreMemory() })
            // const ipfsHash = await uploadToPinata(content);
            // console.log(`Uploaded the file with ipfsHash: <${ipfsHash}>, posting new Lens publication...`);
            
            const ipfsHash = 'QmQsA9q3TNJHYPxPCro1EwHgGUSCK6cXpftJeq7NZZrp5c';
            const contentURI = `ipfs://${ipfsHash}`

            // lensClient.authentication.authenticate()
           
              const isAuthn = await lensClient.authentication.isAuthenticated();
            console.log(`isAuthn <${isAuthn}>`);
            const lensResult = await lensClient.publication.postOnMomoka({
                contentURI,
            });
            console.log(`result of lens post:`, lensResult);

            if (lensResult?.error) {
                console.error(`:( Couln't publish in Lens => ${lensResult.error?.message}`, lensResult.error);
            }
            else {
                console.log(`Yay! Published in Lens too...`, lensResult);
            }

        }
        catch (err) {
            console.error(`Something is wrong :/ ${err.message}`, err.stack);
        }
    }, [content])
    

    // useEffect(() => {
    //     loginExecute({ address, profileId });
    // }, []);

    useEffect(() => {
        if (loginProfile) createArticle();
    }, [loginProfile]);
    

    // if (loginError) {
    //     return <p>Login error: {loginError}</p>
    // }

    // if (!loginProfile) {
    //     return <p>Logging in...</p>
    // }

    return (
        <>
        {
            error && <p>Error during post creation: {error}</p>
        }
            <Input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <Input type='text' placeholder='Subtitle' onChange={(e) => setSubtitle(e.target.value)} />
            <Textarea placeholder="Type your article here." onChange={(e) => setContent(e.target.value)} />
            <Button text={"Submit"} onClick={() => loginExecute({ address, profileId })} />
        </>
    )
}


function LoginWithProfile({ address }) {

    const { data: profiles } = useProfiles({
        where: {
          ownedBy: [address],
        },
    });
    
    if (!profiles?.length) return null
    
    const currentProfile = profiles ? profiles[profiles.length - 1] : undefined;
    console.log(`currentProfile`, currentProfile)

    return (
        <ArticleCreate profileId={currentProfile.id} address={address} />
    )
}


export default function ArticleCreationPage() {

    const { address } = useAccount();

    if (!address) {
        return null;
    }

    return (
        <LoginWithProfile address={address} />
    )
}