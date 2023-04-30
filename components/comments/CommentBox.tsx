import { useState, ChangeEvent } from 'react'
import { Avatar, Button, Card, Textarea } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

interface commentBoxProps {
	postId: string;
}

export const CommentBox = (props: commentBoxProps) => {
	const { postId } = props;
	const { data: session } = useSession();
	const router = useRouter();
	const [content, setContent] = useState<string>('');

	// 댓글 기능은 로그인 후 사용 가능
	const loginCheck = () => {
		if(!session) {
			router.push('/login');
		}
	}

	const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value)
	}

	const submitComment = async (authorId: string, postId: string, content: string) => {
		if(!content) {
			return;
		}
		await axios.post('/api/comment', { authorId, postId, content });
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
					<Textarea 
						placeholder='내용을 입력하세요.' 
						css={{ padding: '0 10px'}} 
						rows={3}
						onInput={handleContent}
					/>
				</Card.Body>
				<Card.Footer className='justify-end gap-1'>
					<Button 
					auto 
					shadow 
					size='sm' 
					color='gradient' 
					onPress={() => submitComment(session?.user.id, postId, content)}
					>제출</Button>
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