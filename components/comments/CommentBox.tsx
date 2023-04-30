import { Avatar, Button, Card, Textarea } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

export const CommentBox = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const loginCheck = () => {
		if(!session) {
			router.push('/login');
		}
	}

	return (
		<Card variant='bordered' onFocus={loginCheck} aria-label='comment-box'>
			{
				session ? 
				<>
				<Card.Header className='gap-2 font-bold'>
					<Avatar src={session?.user.image}/>
					<span>{session?.user.name}</span>
				</Card.Header>
				<Card.Body css={{ padding: '0'}}>
					<Textarea css={{ padding: '0 10px'}} rows={3}/>
				</Card.Body>
				<Card.Footer className='justify-end gap-1'>
					<Button size='sm' auto shadow color='gradient'>제출</Button>
					<Button size='sm' auto light>취소</Button>
				</Card.Footer>
				</>
				:
				<Card.Body>
					<Textarea css={{ padding: '0 10px'}} rows={2}/>
				</Card.Body>
			}
		</Card>
	)
}