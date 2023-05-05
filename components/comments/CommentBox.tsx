import { useState, ChangeEvent } from 'react'
import { Avatar, Button, Card, Textarea, useInput } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { comment } from '@/interface/post'
import { CAvatar, CButton, CCard } from '@/components/common'

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
		<CCard className='min-h-[204px]'>
			{
				session ? 
				<>
				<CCard.Header className='gap-2 font-bold'>
					<CAvatar src={session?.user.image || '/defaultUser.jpeg'}/>
					<span>{session?.user.name}</span>
				</CCard.Header>
				<CCard.Body>
					{/* TODO FIX 인풋값 초기화하면 깜빡거리는 문제와 한글이 깨지는 문제가 있음 */}
					<Textarea 
						placeholder='내용을 입력하세요.'
						rows={3}
						onInput={handleContent}
						css={{width: '100%'}}
					/>
				</CCard.Body>
				<CCard.Footer className='justify-end gap-1'>
					<CButton 
						size='sm' 
						onClick={() => submitComment(session?.user.id, postId, content)}
					>
						제출
					</CButton>
					<CButton size='sm'>취소</CButton>
				</CCard.Footer>
				</>
				:
				<CCard.Body>
					<Textarea css={{ padding: '0 10px'}} rows={2}/>
				</CCard.Body>
			}
		</CCard>
	)
}