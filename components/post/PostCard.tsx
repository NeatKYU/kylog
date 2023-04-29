import { dateToHowover } from '@/lib/helper'
import { post } from '@/interface/post';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'
import { Avatar, Button, Card, Row, Spacer } from '@nextui-org/react'
import { useSession } from 'next-auth/react';
import usePostLike from '@/hooks/usePostLike';

interface postCardProps{
	post: post;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const PostCard = ({
		post,
		onClick,
	}: postCardProps
) => {

	const { data: session } = useSession();
	const { like, handleLike } = usePostLike(post.likes.length);

	return (
		<Card 
			isPressable
			variant='bordered'
			className='
				relative 
				rounded
				w-[calc(33.3%-10px)]
				lg:w-[270px]
				h-80 
				m-[5px]
			' 
			style={{ backgroundColor: '#fff'}} 
			onClick={onClick}
		>
			<Card.Body className='p-0'>
				<Card.Image
					src={post.thumbnail === '' ? '/example.jpeg' : post.thumbnail} 
					objectFit="fill"
					width="100%"
					height="55%"
					alt="Card image background"
				/>
				<section className='px-3 mt-1 grow flex flex-col'>
					<div className='truncate font-bold my-1'>
						{post.title}
					</div>
					<div className='line-clamp-2 my-1'>
						{post.content}
					</div>
					<div className='text-xs text-right mt-auto mb-2'>
						{dateToHowover(post.createdAt)}
					</div>
				</section>
			</Card.Body>
			<Card.Divider/>
			<Card.Footer
				className='py-3'
				css={{
					zIndex: 1,
				}}
			>
				<Row align='center'>
					<Avatar size='xs' src={post.author!.image}></Avatar>
					<Spacer x={0.3}/>
					<div>{post.author!.name}</div>
					<Row justify='flex-end'>
						<Button 
							auto 
							bordered 
							color='gradient' 
							size='xs' 
							icon={<AiOutlineLike/>} 
							onPress={() => handleLike(session?.user.id, post.id)}
						>
							{like}
						</Button>
						<Spacer x={0.3}/>
						<Button 
							auto 
							bordered 
							color='gradient' 
							size='xs' 
							icon={<AiOutlineComment/>}
						>
							{post.comments ? post.comments.length : 0 }
						</Button>
					</Row>
				</Row>
			</Card.Footer>
		</Card>
	)
}