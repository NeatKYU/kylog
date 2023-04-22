import styled from 'styled-components'
import { dateToHowover, toRem } from '@/lib/helper'
import { post } from '@/interface/post';
import { AiTwotoneLike, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'
import { Avatar, Button, Card, Row, Spacer } from '@nextui-org/react'

interface postCardProps{
	post: post;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const PostCard = ({
		post,
		onClick,
	}: postCardProps
) => {
	return (
		// <div className={'w-64 h-80 inline-flex m-2 border rounded border-black border-solid'} onClick={onClick}>
		<Card variant='flat' className='w-64 h-80 relative m-2 rounded'>
			{/* <div className='w-full h-1/2 flex flex-col relative'> */}
			{/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }} className='bg-white/80'>
				{post.title}
			</Card.Header> */}
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
				// style={{blur}}
				css={{
					zIndex: 1,
				}}
			>
				<Row align='center'>
					<Avatar size='xs' src={post.author!.image}></Avatar>
					<Spacer x={0.3}/>
					<div>{post.author!.name}</div>
					<Row justify='flex-end'>
						<Button auto size='xs' icon={<AiTwotoneLike/>}>
							{post.likes}
						</Button>
						<Spacer x={0.3}/>
						<Button auto size='xs' icon={<AiOutlineComment/>}>
							{post.comments ? post.comments.length : 0 }
						</Button>
					</Row>
				</Row>
			</Card.Footer>
			{/* </div> */}
			{/* <ImageContainer className='fcenter'>
				<Image 	
					src={post.thumbnail === '' ? '/example.jpeg' : post.thumbnail} 
					alt='' 
					width={100}
					height={100}
				/>
			</ImageContainer> */}
			{/* <Contents className='fcol'>
				<TitleContainer className='font-20'>
					{post.title}
				</TitleContainer>
				<DescContainer>
					{post.content}
				</DescContainer>
				<Avatar size='md' src={post.author!.image ?? 'https://bit.ly/broken-link'}/>
				<span className='font-18 f ai-center'>{post.author!.name}</span>
				<span className='font-12 f ai-center'>{dateToHowover(post.createdAt)}</span>
				<Button auto icon={<AiTwotoneLike/>}>
					{post.likes}
				</Button>
				<Button auto icon={<AiOutlineComment/>}>
				</Button>
			</Contents> */}
		</Card>
	)
}

const Contents = styled.div`
	height: 100%;

	flex-grow: 1;

	padding-left: 20px;
`

const ImageContainer = styled.div`
	width: ${toRem(250)};
	height: 100%;
	background-color: aliceblue;
	border-radius: 10px;

	img {
		width: 100%;
		height: 100%;

		/* border-radius: 10px; */
	}
`

const TitleContainer = styled.div`
	width: 100%;
	height: ${toRem(40)};
	margin-bottom: 10px;
`

const DescContainer = styled.div`
	width: 100%;
	height: ${toRem(90)};
	margin-bottom: 10px;
`

const EtcContainer = styled.div`
	width: 100%;
	height: ${toRem(40)};
`