'use client';

import { PostCard } from '@/components/post/PostCard';
import { post } from '@/interface/post';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const PostCardList = () => {
    const router = useRouter();
    const { data, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get('/api/post');
            return response.data;
        },
    });

    const handleDetailPage = (postId: string) => {
        router.push(`/post/detail/${postId}`);
    };

    const postListElement = (list: post[]) => {
        return (
            list &&
            list.map((item: post) => <PostCard key={item.id} post={item} onClick={() => handleDetailPage(item.id)} />)
        );
    };

    return <div className="flex flex-wrap">{isLoading ? 'loading...' : postListElement(data)}</div>;
};
