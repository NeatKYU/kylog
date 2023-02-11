import { PostCard } from '@/components/post/PostCard'
import { Divider } from '@chakra-ui/react';

type Post = {
	postId: string;
	thumbnail: string;
	uesrName: string;
	uesrThumnail: string;
	createDate: string;
	desc: string;
	likes: number;
	comments: number;
	contents: string;
}

interface PostCardListProps {
	postList: Post[];
}

export const PostCardList = (props: PostCardListProps) => {
	const { postList } = props;

	const postListElement = (list: Post[]) => {
		return list.map((item: Post) => (
			<>
				<PostCard key={item.postId}/>
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
