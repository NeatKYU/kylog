import { dateToHowover } from '@/lib/helper'
import { post } from '@/interface/post'
// import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { HandThumbUpIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { CCard, CButton, CAvatar } from '@/components/common'
import { useSession } from 'next-auth/react'
import usePostLike from '@/hooks/usePostLike'

interface postCardProps {
    post: post
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const PostCard = ({ post, onClick }: postCardProps) => {
    const { data: session } = useSession()
    const { like, handleLike } = usePostLike(post.likes.length)

    const handleLikeNoneEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        handleLike(session?.user.id, post.id)
    }

    return (
        <CCard
            className="
				relative 
				rounded
				w-[calc(33.3%-10px)]
				lg:w-[270px]
				h-80 
				m-[5px]
				cursor-pointer
			"
            onClick={onClick}
        >
            <CCard.Image>
                <img
                    src={post.thumbnail === '' ? '/example.jpeg' : post.thumbnail}
                    alt="CCard image background"
                    className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                />
            </CCard.Image>
            <CCard.Body className="p-0">
                <section className="grow flex flex-col line-clamp-1">
                    <div className="truncate font-bold my-1">{post.title}</div>
                    <div className="line-clamp-2 my-1">{post.content}</div>
                    <div className="text-xs text-right mt-auto">{dateToHowover(post.createdAt)}</div>
                </section>
            </CCard.Body>
            <CCard.Footer>
                <div className="flex items-center w-full">
                    <CAvatar size="sm" src={post.author!.image} />
                    <div className="mr-1" />
                    <div>{post.author!.name}</div>
                    <div className="flex justify-end ml-auto gap-1">
                        <CButton
                            size="sm"
                            className="dark:bg-zinc-800"
                            leftIcon={<HandThumbUpIcon className="w-5" />}
                            onClick={handleLikeNoneEvent}
                        >
                            {like}
                        </CButton>
                        <CButton
                            size="sm"
                            className="dark:bg-zinc-800"
                            leftIcon={<ChatBubbleLeftRightIcon className="w-5" />}
                        >
                            {post.comments ? post.comments.length : 0}
                        </CButton>
                    </div>
                </div>
            </CCard.Footer>
        </CCard>
    )
}
