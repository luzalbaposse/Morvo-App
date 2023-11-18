'use client'
import {
    useExploreProfiles,
    ExploreProfilesOrderByType,
    LimitType,
} from '@lens-protocol/react-web'

import {
  Loader2,
} from "lucide-react"


/**
 * This will be list of journalist profiles that is followed / liked / paid by current Media user
 */
export function Journalists() {

    const { data: profiles, error: profileError, loading: loadingProfiles } = useExploreProfiles({
      limit: LimitType.TwentyFive,
      orderBy: ExploreProfilesOrderByType.MostFollowers
    }) as any

    return (
        <div className="flex flex-1 flex-wrap p-4">
        {
          !profiles && (
            <div className="
              flex flex-1 justify-center items-center
            ">
              <Loader2 className="h-12 w-12 animate-spin" />
            </div>
          )
        }
        {
          profiles?.map((profile: any) => ( // This is ProfileFields type
            <a
              key={profile.id}
              className="
              lg:w-1/4 sm:w-1/2 p-4 cursor-pointer"
              rel="no-opener"
              target="_blank"
              href={`https://share.lens.xyz/u/${profile.handle.namespace}/${profile.handle.localName}`}>
              <div className="space-y-3">
                  <div className="overflow-hidden rounded-md">
                    <img
                      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                      src={profile.metadata?.picture?.optimized?.uri
                    } />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-medium leading-none">{profile.handle.localName}.{profile.handle.namespace}</h3>
                    <p className="text-xs text-muted-foreground">{profile.metadata?.displayName}</p>
                  </div>
              </div>
            </a>
          ))
        }
      </div>
    )
}

