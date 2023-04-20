import styled from 'styled-components'
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
			<PostCardList postList={posts}/>
		</Container>
	)
}

export const getStaticProps = async () => {
	const prisma = new PrismaClient()
	const posts = await prisma.post.findMany({
		include: {
			author: true,
		}
	})
	console.log(posts)
	
	return {
		// props: { }
		props : { posts: JSON.parse(JSON.stringify(posts)) }
	}
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`