'use client'
import {
  useExplorePublications,
  ExplorePublicationsOrderByType,
  ExplorePublicationType,
  LimitType,
} from '@lens-protocol/react-web'

import {
  Loader2,
} from "lucide-react"

/**
 * This will be list of articles that is followed / liked / paid by current Media user
 */
export default function ArticleDetails() {

    const { data: article } = useExplorePublications({ // TODO: fetch single one wiht details
      limit: LimitType.TwentyFive,
      orderBy: ExplorePublicationsOrderByType.LensCurated,
      where: {
        publicationTypes: [ExplorePublicationType.Post],
      }
    }) as any

    if (!article) {
        return (
            <Loader2 className="h-12 w-12 animate-spin" />
        );
    }

    return (
        <span>Article details here</span>
    )
}
