import styled from 'styled-components'
import { PostCardList } from '@/components/post/PostCardList'
import prisma from '@/pages/api/prismaClient'

// interface homeProps extends common{
// 	posts: 
// }

export default function Home({posts}: {posts: any}) {

	return (
		<div className='flex-center w-full'>
			<PostCardList postList={posts}/>
		</div>
	)
}

export const getStaticProps = async () => {
	// const prisma = new PrismaClient()
	const posts = await prisma.post.findMany({
		include: {
			author: true,
		}
	})
	// console.log(posts)
	
	return {
		// props: { }
		props : { posts: JSON.parse(JSON.stringify(posts)) }
	}
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`