'use client';

import { useState } from 'react';
// import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
// import { BiShareAlt } from 'react-icons/bi'
import { HandThumbUpIcon, ChatBubbleLeftRightIcon, ShareIcon } from '@heroicons/react/24/solid';
import usePostLike from '@/hooks/usePostLike';
import { useSession } from 'next-auth/react';
import { Sidebar } from '@/components/common/Sidebar';
import { CommentBox } from '@/components/comments/CommentBox';
import { Comment } from '@/components/comments/Comment';
import { comment } from '@/interface/post';
import { CButton } from './CustomButton';
import { CIconButton } from './CustomIconButton';

interface RemoteControlerProps {
    likes: number;
    comments: comment[];
    postId: string;
}

export const RemoteControler = ({ likes = 0, comments = [], postId }: RemoteControlerProps) => {
    const { data: session } = useSession();
    const { like, handleLike } = usePostLike(likes);
    const [isOpen, setIsOpen] = useState(false);
    const [currentComments, setCurrentComment] = useState<comment[]>(comments);

    const handleShared = () => {
        // TODO
    };

    const handleComment = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex fixed bottom-0 left-1/2 translate-center p-2 rounded-lg bg-slate-200 dark:bg-gray-600 shadow-2xl">
                <div className="flex justify-center items-center">
                    <CButton
                        onClick={() => handleLike(session?.user.id, postId)}
                        leftIcon={<HandThumbUpIcon className="w-5" />}
                    >
                        {like}
                    </CButton>
                    <div className="w-[1px] h-full flex items-center mx-1">
                        <div className="w-full h-1/2 bg-black"></div>
                    </div>
                    <CButton onClick={handleComment} leftIcon={<ChatBubbleLeftRightIcon className="w-5" />}>
                        {currentComments.length}
                    </CButton>
                    <div className="w-[1px] h-full flex items-center mx-1">
                        <div className="w-full h-1/2 bg-black"></div>
                    </div>
                    <CIconButton icon={<ShareIcon className="w-5" />} />
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
                    );
                })}
            </Sidebar>
        </>
    );
};
