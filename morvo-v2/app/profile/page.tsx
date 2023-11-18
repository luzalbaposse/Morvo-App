'use client'

import { useAccount } from 'wagmi'
import { useProfiles } from '@lens-protocol/react-web'

export default function ProfileWrapper() {
  const { address } = useAccount()
  
  if (!address) return null

  return (
    <Profile
      address={address}
    />
  )
}

function Profile({ address }) {
  const { data } = useProfiles({
    where: {
      ownedBy: [address],
    },
  })

  if (!data?.length) return null
  const profile = data[data.length - 1]
  if (!profile) return null

  console.log('profile', profile)

  return (
      <div>
        <a
          rel='no-opener'
          target='_blank'
        href={`https://share.lens.xyz/u/${profile.handle?.localName}.${profile.handle?.namespace}`}>
          <div className='border rounded-lg p-10'>
            <div>
              {
                profile.metadata?.picture?.__typename === 'ImageSet' && (
                  <img
                    src={profile?.metadata?.picture?.optimized?.uri}
                    className='rounded w-[200px]'
                  />
                )
              }
            </div>
            <div className='mt-4'>
              <p className='text-lg'>
                {profile?.metadata?.displayName}
              </p>
              <p className='text-muted-foreground font-medium'>
                {profile?.handle?.localName}
              </p>
            </div>
          </div>
        </a>
     </div>
  )
}