import { calculateReadingTime, dateToHowover } from '@/lib/helper'
import { post } from '@/interface/post'
import { HeartIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { CCard, CAvatar } from '@/components/common'
// import { useSession } from 'next-auth/react'
// import usePostLike from '@/hooks/usePostLike'

interface postCardProps {
    post: post
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const PostCard = ({ post, onClick }: postCardProps) => {
    // const { data: session } = useSession()
    // const { like, handleLike } = usePostLike(post.likes.length)

    // const handleLikeNoneEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.stopPropagation()
    //     handleLike(session?.user.id, post.id)
    // }

    return (
        <CCard
            className="
				relative 
				rounded
				h-56
				cursor-pointer
			"
            onClick={onClick}
        >
            <CCard.Header>
                <CAvatar size="lg" src={post.author!.image} />
                <div className="mr-3" />
                <div className="flex flex-col gap-1">
                    <div>{post.author!.name}</div>
                    <div className="text-xs mt-auto">
                        {dateToHowover(post.createdAt)} · {calculateReadingTime(post.content)} min read
                    </div>
                </div>
            </CCard.Header>
            <CCard.Body className="p-0">
                <div className="flex w-full gap-8 justify-between">
                    <section className="flex flex-col line-clamp-1">
                        <div className="truncate font-bold my-1 text-2xl">{post.title}</div>
                        <div className="line-clamp-2 my-1">{post.content}</div>
                    </section>
                    <div className="w-44 min-w-[11rem] h-full relative">
                        <img
                            src={'/example.jpeg'}
                            alt="CCard image background"
                            className="absolute top-0 left-0 w-full h-full rounded"
                        />
                    </div>
                    {/* {!!post.thumbnail && (
                        <div className="w-44 h-full relative">
                            <img
                                src={post.thumbnail}
                                alt="CCard image background"
                                className="absolute top-0 left-0 w-full h-full rounded"
                            />
                        </div>
                    )} */}
                </div>
            </CCard.Body>
            <CCard.Footer>
                <div className="flex items-center w-full">
                    <div className="flex gap-1">
                        <HeartIcon className="w-5" />
                        {post.likes.length}
                        <div className="mr-2" />
                        <ChatBubbleBottomCenterTextIcon className="w-5" />
                        {post.comments ? post.comments.length : 0}
                    </div>
                </div>
            </CCard.Footer>
        </CCard>
    )
}
