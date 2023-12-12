'use client'

import { PostCard } from '@/components/post/PostCard'
import { post } from '@/interface/post'
import { usePathname, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const PostCardList = () => {
    const router = useRouter()
    const path = usePathname()
    const isHome = path === '/'

    const { data: post, isFetching } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get('/api/posts')
            return response.data
        },
        enabled: isHome,
    })

    const handleDetailPage = (postId: string) => {
        router.push(`/post/detail/${postId}`)
    }

    const postListElement = (list: post[]) => {
        return (
            list &&
            list.map((item: post) => <PostCard key={item.id} post={item} onClick={() => handleDetailPage(item.id)} />)
        )
    }

    return isHome ? (
        <div className="flex flex-col w-full gap-2">{isFetching ? <div>loading...</div> : postListElement(post)}</div>
    ) : null
}
