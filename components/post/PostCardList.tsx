import { PostCard } from '@/components/post/PostCard'
import { post } from '@/interface/post'
import { useRouter } from 'next/router';

interface PostCardListProps {
	postList: post[];
}

export const PostCardList = (props: PostCardListProps) => {
	const { postList } = props;
	const router = useRouter();

	const handleDetailPage = (postId: string) => {
		router.push(`/post/detail/${postId}`);
	}

	const postListElement = (list: post[]) => {
		return list && list.map((item: post) => (
			<>
				<PostCard 
					key={item.id} 
					post={item} 
					onClick={() => handleDetailPage(item.id)}
				/>
			</>
		))
	}

	return (
		<>
			{postListElement(postList)}
		</>
	)
}
