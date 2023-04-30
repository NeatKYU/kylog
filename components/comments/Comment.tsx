import { Avatar, Card } from '@nextui-org/react'
import { comment } from '@/interface/post'
import { dateToHowover } from '@/lib/helper'

interface CommentProps {
	comment: comment
}

export const Comment = (props: CommentProps) => {
	const { comment } = props;

	return (
		<Card variant='flat' className='bg-slate-50'>
			<Card.Header>
				<Avatar src={comment.author?.image}></Avatar>
				<div className='flex flex-col justify-center items-center'>
					<span className='font-bold'>{comment.author?.name}</span>
					<span className='font-light'>{dateToHowover(comment.createdAt)}</span>
				</div>
			</Card.Header>
			<Card.Body>
				{comment.content}
			</Card.Body>
		</Card>
	)
}
