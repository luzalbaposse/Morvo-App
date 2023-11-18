'use client'
import {
  useExplorePublications,
  ExplorePublicationsOrderByType,
  ExplorePublicationType,
  LimitType,
  Post,
} from '@lens-protocol/react-web'

import {
  Loader2,
} from "lucide-react"
import { ArticleCard } from '@/components/ArticleCard'

enum PublicationMetadataMainFocusType {
  Article = "ARTICLE",
  Audio = "AUDIO",
  CheckingIn = "CHECKING_IN",
  Embed = "EMBED",
  Event = "EVENT",
  Image = "IMAGE",
  Link = "LINK",
  Livestream = "LIVESTREAM",
  Mint = "MINT",
  ShortVideo = "SHORT_VIDEO",
  Space = "SPACE",
  Story = "STORY",
  TextOnly = "TEXT_ONLY",
  ThreeD = "THREE_D",
  Transaction = "TRANSACTION",
  Video = "VIDEO"
}

/**
 * This is a shared components for listing articles
 */
function BaseArticles({ articles }: { articles: Post[]; }) {
    if (!articles) {
        return (
            <Loader2 className="h-12 w-12 animate-spin" />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {
            articles.map((article: Post) => (
                <ArticleCard
                    key={`article-${article.id}`}
                    article={article}
                />
            ))
        }
        </div>
    )
}

/**
 * This will be list of articles that is owned by Journalist user
 */
function JournalistArticles() {

  const { data: articles } = useExplorePublications({
    limit: LimitType.TwentyFive,
    orderBy: ExplorePublicationsOrderByType.LensCurated,
    where: {
      publicationTypes: [ExplorePublicationType.Post],   // TODO: add a filter
    }
  }) as any

  return (
    <BaseArticles articles={articles} />
  )
}


/**
 * This will be list of articles that is followed / liked / paid by current Media user
 */
function MediaArticles() {

    const { data: articles } = useExplorePublications({
      limit: LimitType.TwentyFive,
      orderBy: ExplorePublicationsOrderByType.LensCurated,
      where: {
        publicationTypes: [ExplorePublicationType.Post],  // TODO: add a filter
      }
    }) as any

    return (
        <BaseArticles articles={articles} />
    )
  }
  
  
export default function Articles() {
    // TODO: decide if user is Journalist or Media
    return (<JournalistArticles />)
}