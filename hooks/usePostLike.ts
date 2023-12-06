'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

function usePostLike(initLike: number) {
    const rotuer = useRouter()
    const [like, setLike] = useState(initLike)
    const likeMutation = useMutation({
        mutationFn: async (data: { userId: string; postId: string }) => {
            const response = await axios.post('/api/post/like', {
                uesrId: data.userId,
                postId: data.postId,
            })
            return response.data
        },
        onSuccess(data) {
            setLike((prev) => prev + data.like)
        },
    })

    const handleLike = async (userId: string, postId: string) => {
        if (!userId) {
            // 로그인 안한 상태임
            // TODO 라우터 이동 말고 로그인 하라는 토스트 띄워주기
            rotuer.push('/login')
            return
        }
        likeMutation.mutate({ userId, postId })
    }

    return {
        like,
        handleLike,
    }
}

export default usePostLike
