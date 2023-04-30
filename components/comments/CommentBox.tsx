import { useState, ChangeEvent } from 'react'
import { Avatar, Button, Card, Textarea, useInput } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { comment } from '@/interface/post'

interface commentBoxProps {
	postId: string;
	comments: comment[];
	setComments: (comments: comment[]) => void;
}

export const CommentBox = (props: commentBoxProps) => {
	const { postId, comments, setComments } = props;
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
		const comment = await axios.post('/api/comment', { authorId, postId, content });
		comment.data = {
			...comment.data,
			author: {
				name: session?.user.name,
				image: session?.user.image,
			}
		}
		setComments([comment.data, ...comments]);
		setContent('');
	}

	return (
		<Card variant='bordered' onFocus={loginCheck} aria-label='comment-box' className='min-h-[204px]'>
			{
				session ? 
				<>
				<Card.Header className='gap-2 font-bold'>
					<Avatar src={session?.user.image}/>
					<span>{session?.user.name}</span>
				</Card.Header>
				<Card.Body css={{ padding: '0'}}>
					{/* TODO FIX 인풋값 초기화하면 깜빡거리는 문제와 한글이 깨지는 문제가 있음 */}
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