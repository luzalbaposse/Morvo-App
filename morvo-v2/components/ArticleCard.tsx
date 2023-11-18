'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArticleMetadataV3 } from "@lens-protocol/api-bindings"
import { Post } from "@lens-protocol/react-web"
import ReactMarkdown from 'react-markdown'

export function ArticleCard({ article }: Readonly<{ article: Post; }>) { // TODO type is unclear here? Ask for help
    
    // const articleMetadata: ArticleMetadataV3 = article.metadata;
    const articleMetadata: any = article.metadata;

    return (
        <div
              className=""
            >
            <Card className={cn(`
                    border-b
                    max-h-full sm:max-w-[500px] sm:max-h-[500px]
                    rounded-2xl h-auto object-cover transition-all hover:scale-105
                    `)}
                onClick={() => window.open(`https://share.lens.xyz/p/${article.id}`, '_blank')}
                >
                <CardHeader>
                    <CardTitle>{ articleMetadata.title || 'Title' }</CardTitle>
                    <CardDescription>Subtitle</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                    <ReactMarkdown className="
                        mt-4 break-words sm:max-w-[300px]
                        ">
                            {articleMetadata.content?.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '[LINK]($1)')}
                    </ReactMarkdown>
                    </div>
                    </form>
                </CardContent>
                {/* <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter> */}
            </Card>
        </div>
    )
}
