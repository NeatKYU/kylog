import styled from 'styled-components'
import { dateToHowover, toRem } from '@/lib/helper'
import { post } from '@/interface/post';
import { AiTwotoneLike, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'
import { Avatar, Button } from '@nextui-org/react'

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
		<div className={'w-full h-24'} onClick={onClick}>
			sdf
			{/* <ImageContainer className='fcenter'>
				<Image 
					src={post.thumbnail === '' ? '/example.jpeg' : post.thumbnail} 
					alt='' 
					width={100}
					height={100}
				/>
			</ImageContainer>
			<Contents className='fcol'>
				<TitleContainer className='font-20'>
					{post.title}
				</TitleContainer>
				<DescContainer>
					{post.content}
				</DescContainer>
				<Stack direction={'row'} spacing={4} className='ai-center'>
					<Avatar size='md' src={post.author!.image ?? 'https://bit.ly/broken-link'}/>
					<span className='font-18 f ai-center'>{post.author!.name}</span>
					<span className='font-12 f ai-center'>{dateToHowover(post.createdAt)}</span>
					<ButtonGroup style={{marginLeft: 'auto'}}>
						<Button auto icon={<AiTwotoneLike/>}>
							{post.likes}
						</Button>
						<Button auto icon={<AiOutlineComment/>}>
						</Button>
					</ButtonGroup>
				</Stack>
			</Contents> */}
		</div>
	)
}

const Container = styled.div`
	display: flex;

	width: 100%;
	height: ${toRem(200)};

	padding: 5px;

	/* border-radius: 10px; */

	/* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */

	/* :hover {
		box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
	} */
`

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