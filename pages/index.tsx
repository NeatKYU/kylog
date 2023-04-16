import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCardList } from '@/components/post/PostCardList'
import { post } from '@/interface/post';
// import { posts } from '@/lib/db/post';
import { PrismaClient } from '@prisma/client'

// interface homeProps extends common{
// 	posts: 
// }

export default function Home({posts}: {posts: any}) {

	return (
		<Container className='fcenter'>
			{posts}
			{/* <PostCardList postList={posts}/> */}
		</Container>
	)
}

export const getStaticProps = async () => {
	const prisma = new PrismaClient()
	const posts = await prisma.post.findMany()
	
	return {
		props : { posts }
	}
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`