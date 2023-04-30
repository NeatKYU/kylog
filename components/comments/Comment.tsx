import { Avatar, Button, Card } from '@nextui-org/react'
import { comment } from '@/interface/post'
import { dateToHowover } from '@/lib/helper'
import { AiOutlineLike } from 'react-icons/ai'

interface CommentProps {
	comment: comment
}

export const Comment = (props: CommentProps) => {
	const { comment } = props;

	return (
		<Card variant='flat' className='bg-slate-50'>
			<Card.Header className='gap-2'>
				<Avatar src={comment.author?.image}/>
				<div className='flex flex-col justify-center'>
					<span className='font-bold'>{comment.author?.name}</span>
					<span className='font-light text-sm'>{dateToHowover(comment.createdAt)}</span>
				</div>
			</Card.Header>
			<Card.Body css={{padding: '0 20px'}}>
				{comment.content}
			</Card.Body>
			<Card.Footer className='justify-end'>
				<Button auto light size='xs' icon={<AiOutlineLike size={20}/>}>
					0
				</Button>
			</Card.Footer>
		</Card>
	)
}
