import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCardList } from '@/components/post/PostCardList'
import { post } from '@/interface/post';
import { posts } from '@/lib/db/post';

interface homeProps extends common{
	posts: post[]
}

export default function Home({posts}: homeProps) {

	return (
		<Container className='fcenter'>
			<PostCardList postList={posts}/>
		</Container>
	)
}

export const getStaticProps = async () => {
		const resultPosts = await posts();
		const convertPosts = JSON.parse(JSON.stringify(resultPosts));
		return {
			props: {
				posts: convertPosts,
			}
		};
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`