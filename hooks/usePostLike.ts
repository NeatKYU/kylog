'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function usePostLike(initLike: number) {
    const rotuer = useRouter()
    const [like, setLike] = useState(initLike)

    const handleLike = async (userId: string, postId: string) => {
        if (!userId) {
            // 로그인 안한 상태임
            // TODO 라우터 이동 말고 로그인 하라는 토스트 띄워주기
            rotuer.push('/login')
            return
        }

        const likeCount = await axios.post('/api/post/like', {
            userId,
            postId,
        })
        if (likeCount.status === 200) {
            setLike((prev) => prev + likeCount.data.like)
        }
    }

    return {
        like,
        handleLike,
    }
}

export default usePostLike
