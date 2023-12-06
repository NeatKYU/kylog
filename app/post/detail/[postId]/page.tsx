'use client'
import { dateToHowover, calculateReadingTime } from '@/lib/helper'
import { RemoteControler } from '@/components/common/RemoteControler'
import ReactMarkdown from 'react-markdown'
import { CAvatar } from '@/components/common/CustomAvatar'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

// TODO post 디테일 스타일 변경해야함
export default function Detail() {
    const prarms = useParams()
    const { data, isLoading } = useQuery({
        queryKey: ['getPost'],
        queryFn: async () => {
            const response = await axios.get(`/api/post?id=${prarms.postId}`)
            return response.data
        },
    })
    if (isLoading) return <div>loading...</div>
    else {
        const createdAt = dateToHowover(data.createdAt)
        return (
            <div className="w-full h-auto max-w-screen-lg px-[20px] lg:px-0">
                <div className="flex mb-[20px] w-full gap-2 items-center">
                    <CAvatar src={data.author!.image} size="lg" />
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">{data.author!.name}</div>
                        <div>
                            {createdAt} · {calculateReadingTime(data.content)} min read
                        </div>
                    </div>
                </div>
                <div className="w-10/12 mb-8 font-bold text-4xl">{data.title}</div>
                <div className="prose dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {data.content}
                    </ReactMarkdown>
                </div>
                <RemoteControler postId={data.id} likes={data.likes.length} comments={data.comments} />
            </div>
        )
    }
}
