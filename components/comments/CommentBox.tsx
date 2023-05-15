'use client'

import { useState, ChangeEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { comment } from '@/interface/post'
import { CAvatar, CButton, CCard, CTextarea } from '@/components/common'
import { useMutation } from '@tanstack/react-query'

interface commentBoxProps {
    postId: string
    comments: comment[]
    setComments: (comments: comment[]) => void
}

export const CommentBox = (props: commentBoxProps) => {
    const { postId, comments, setComments } = props
    const router = useRouter()
    const { data: session } = useSession()
    const [content, setContent] = useState<string>('')
    const submitCommentMutation = useMutation({
        mutationFn: async () => {
            const comment = await axios.post('/api/post/comment', {
                authorId: session?.user.id,
                postId,
                content,
            })
            return comment
        },
        onSuccess(comment) {
            const tempData = {
                ...comment.data,
                author: {
                    name: session?.user.name,
                    image: session?.user.image,
                },
            }
            setComments([tempData, ...comments])
            setContent('')
        },
    })

    // 댓글 기능은 로그인 후 사용 가능
    const loginCheck = () => {
        if (!session) {
            router.push('/login')
        }
    }

    const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    return (
        <CCard className={`${session ? 'min-h-[204px]' : 'min-h-[110px]'}`}>
            {session ? (
                <>
                    <CCard.Header className="gap-2 font-bold">
                        <CAvatar src={session?.user.image || '/defaultUser.jpeg'} />
                        <span>{session?.user.name}</span>
                    </CCard.Header>
                    <CCard.Body>
                        <CTextarea
                            rows={3}
                            value={content}
                            className="w-full"
                            onChange={handleContent}
                            placeHolder="내용을 입력하세요."
                        />
                    </CCard.Body>
                    <CCard.Footer className="justify-end gap-1">
                        <CButton bordered size="sm" onClick={() => submitCommentMutation.mutate()}>
                            제출
                        </CButton>
                        <CButton bordered size="sm">
                            취소
                        </CButton>
                    </CCard.Footer>
                </>
            ) : (
                <div onClick={() => router.push('/login')}>
                    <CCard.Header>
                        <span>댓글</span>
                    </CCard.Header>
                    <CCard.Body>
                        <CTextarea className="px-[20px] w-full" rows={1} placeHolder="로그인이 필요한 서비스입니다." />
                    </CCard.Body>
                </div>
            )}
        </CCard>
    )
}
