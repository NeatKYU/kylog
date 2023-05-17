import { PostCardList } from '@/components/post/PostCardList'
import prisma from '@/pages/api/prismaClient'
import { post } from '@/interface/post'

interface homeProps{
	posts: post[]
}

export default function Home({posts}: homeProps) {

	return (
		<div className='w-full'>
			<PostCardList postList={posts}/>
		</div>
	)
}

export const getServerSideProps = async () => {
	const posts = await prisma.post.findMany({
		include: {
			author: true,
			comments: true,
			likes: true,
		}
	})
	
	return {
		props : { posts: JSON.parse(JSON.stringify(posts)) }
	}
}
