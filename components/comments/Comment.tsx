import { Avatar, Button, Card, Textarea } from '@nextui-org/react'
import { comment } from '@/interface/post'
import { dateToHowover } from '@/lib/helper'
import { AiOutlineLike } from 'react-icons/ai'
import { useState } from 'react'

interface CommentProps {
	comment: comment
}
// TODO FIX 댓글 줄바꿈이 재대로 안나옴
// TODO FIX more버튼 눌렀을 때 카드 자체가 늘어나도록 해야함
export const Comment = (props: CommentProps) => {
	const { comment } = props;
	const [isMore, setIsMore] = useState<boolean>(false);

	const lengthOver = () => {
		return comment.content.length > 150 ? true : false
	}

	return (
		<Card variant='flat' className='bg-slate-50 min-h-[10rem]'>
			<Card.Header className='gap-2'>
				<Avatar src={comment.author?.image}/>
				<div className='flex flex-col justify-center'>
					<span className='font-bold'>{comment.author?.name}</span>
					<span className='font-light text-sm'>{dateToHowover(comment.createdAt)}</span>
				</div>
			</Card.Header>
			<Card.Body css={{padding: '0 20px'}}>
				<div className={`${isMore ? '' : 'line-clamp-2'}`}>
					{comment.content}
				</div>
			</Card.Body>
			<Card.Footer>
				{isMore || !lengthOver() ? <></> : <Button auto light size='sm' onPress={() => setIsMore(!isMore)}>read more..</Button> }
				<Button auto light size='xs' icon={<AiOutlineLike size={20}/>} className='ml-auto'>
					{/* TODO 댓글의 좋아요 기능 */}
					0
				</Button>
			</Card.Footer>
		</Card>
	)
}
