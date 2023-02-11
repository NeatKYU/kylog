import { PostCard } from '@/components/post/PostCard'
import { Divider } from '@chakra-ui/react';
import { post } from '@/interface/post'

interface PostCardListProps {
	postList: post[];
}

export const PostCardList = (props: PostCardListProps) => {
	const { postList } = props;

	const postListElement = (list: post[]) => {
		return list.map((item: post) => (
			<>
				<PostCard key={item.postId} post={item}/>
				<Divider/>
			</>
		))
	}

	return (
		<>
			<Divider/>
			{postListElement(postList)}
		</>
	)
}
