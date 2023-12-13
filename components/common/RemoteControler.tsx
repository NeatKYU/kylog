'use client'

import { useEffect, useState } from 'react'
import { HeartIcon, ChatBubbleBottomCenterTextIcon, ShareIcon } from '@heroicons/react/24/outline'
import usePostLike from '@/hooks/usePostLike'
import { useSession } from 'next-auth/react'
import { Sidebar } from '@/components/common/Sidebar'
import { CommentBox } from '@/components/comments/CommentBox'
import { Comment } from '@/components/comments/Comment'
import { comment } from '@/interface/post'
import { CIconButton } from './CustomIconButton'

interface RemoteControlerProps {
    likes: number
    comments: comment[]
    postId: string
}

export const RemoteControler = ({ likes = 0, comments = [], postId }: RemoteControlerProps) => {
    const { data: session } = useSession()
    const { like, handleLike } = usePostLike(likes)
    const [isOpen, setIsOpen] = useState(false)
    const [currentComments, setCurrentComment] = useState<comment[]>(comments)

    useEffect(() => {
        setCurrentComment(comments)
    }, [comments])

    const handleShared = () => {
        // TODO
    }

    const handleComment = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex fixed bottom-0 left-1/2 translate-center p-2 rounded-lg bg-slate-100 dark:bg-indigo-500 border dark:border-indigo-500">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <CIconButton
                            icon={<HeartIcon className="w-6" />}
                            onClick={() => handleLike(session?.user.id, postId)}
                        />
                        <div className="mr-1">{like}</div>
                    </div>
                    <div className="w-[1px] h-full flex items-center mx-2">
                        <div className="w-full h-1/2 bg-black dark:bg-indigo-300"></div>
                    </div>
                    <CIconButton icon={<ChatBubbleBottomCenterTextIcon className="w-6" />} onClick={handleComment} />
                    <div className="w-[1px] h-full flex items-center mx-2">
                        <div className="w-full h-1/2 bg-black dark:bg-indigo-300"></div>
                    </div>
                    <CIconButton icon={<ShareIcon className="w-6" />} />
                </div>
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
                <CommentBox postId={postId} comments={currentComments} setComments={setCurrentComment} />
                {currentComments.map((commentObj: comment, index) => {
                    return (
                        <div key={commentObj.id}>
                            <div className="w-full mt-4" />
                            <Comment comment={commentObj} />
                        </div>
                    )
                })}
            </Sidebar>
        </>
    )
}
