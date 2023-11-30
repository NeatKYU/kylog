import { CAvatar, CCard, CButton } from '@/components/common';
import { comment } from '@/interface/post';
import { dateToHowover } from '@/lib/helper';
import { useState } from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';

interface CommentProps {
    comment: comment;
}
// TODO FIX 댓글 줄바꿈이 재대로 안나옴
// TODO FIX more버튼 눌렀을 때 카드 자체가 늘어나도록 해야함
export const Comment = (props: CommentProps) => {
    const { comment } = props;
    const [isMore, setIsMore] = useState<boolean>(false);

    const lengthOver = () => {
        return comment.content.length > 150 ? true : false;
    };

    return (
        <CCard className="h-auto">
            <CCard.Header className="gap-2">
                <CAvatar src={comment.author?.image || '/deafultUser.jpeg'} />
                <div className="flex flex-col justify-center">
                    <span className="font-bold">{comment.author?.name}</span>
                    <span className="font-light text-sm">
                        {dateToHowover(comment.createdAt)}
                    </span>
                </div>
            </CCard.Header>
            <CCard.Body>
                <div className={`${isMore ? '' : 'line-clamp-2'}`}>
                    {comment.content}
                </div>
            </CCard.Body>
            <CCard.Footer>
                {/* TODO FIX read more 일단 막아둠 */}
                {/* {isMore || !lengthOver() ? <></> : <Button auto light size='sm' onPress={() => setIsMore(!isMore)}>read more..</Button> } */}
                <CButton
                    size="sm"
                    leftIcon={<HandThumbUpIcon className="w-5" />}
                    className="ml-auto"
                >
                    {/* TODO 댓글의 좋아요 기능 */}
                </CButton>
            </CCard.Footer>
        </CCard>
    );
};
