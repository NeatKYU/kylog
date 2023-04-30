import { post } from '@/interface/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { dateToHowover, calculateReadingTime } from '@/lib/helper';
import { RemoteControler } from '@/components/common/RemoteControler';
import ReactMarkdown from 'react-markdown'
import prisma from '@/pages/api/prismaClient'
import { Avatar } from '@nextui-org/react';

interface detailProps {
	post: post
}
// TODO post 디테일 스타일 변경해야함
export default function Detail({ post }: detailProps) {

	const createdAt = dateToHowover(post.createdAt);

	return (
		<div className='w-full h-auto max-w-screen-lg px-[20px] lg:px-0'>
			<div className='flex mb-[20px] w-full gap-2 items-center'>
				<Avatar src={post.author!.image}/>
				<div className='flex flex-col'>
					<div className='font-bold text-xl'>{post.author!.name}</div>
					<div>{createdAt} · {calculateReadingTime(post.content)} min read</div>
				</div>
			</div>
			<div className='w-10/12 mb-8 font-bold text-4xl'>
				{post.title}
			</div>
			<div className='w-full'>
				<ReactMarkdown>
					{post.content}
				</ReactMarkdown>
			</div>
			<RemoteControler
				postId={post.id} 
				likes={post.likes.length} 
				comments={post.comments}
			/>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking' //indicates the type of fallback
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	if(context.params?.postId) {
		const postId = context.params.postId.toString();
		const post = await prisma.post.findUnique({
			where: {
				id: postId
			},
			include: {
				author: true,
				likes: true,
				comments: true,
			}
		})

		return {
			props: {
				post: JSON.parse(JSON.stringify(post)),
			}
		}
	}
	return {
		props: {
			post: ''
		}
	}
}