import { toRem } from '@/lib/helper'
import styled from 'styled-components'

interface postCardProps {
	thumbnail: string;
	title: string;
	description: string;
	createAt: string;
}

export const PostCard = (
	// {
	// thumbnail,
	// title,
	// description,
	// createAt,
	// }: postCardProps
) => {
	return (
		<Container>
			<ImageContainer className='fcenter'>
				<img src='/example.jpeg' alt=''/>
			</ImageContainer>
			<Contents className='fcol'>
				<AvatarContainer>

				</AvatarContainer>
				<DescContainer>

				</DescContainer>
				<EtcContainer>

				</EtcContainer>
			</Contents>
		</Container>
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

const AvatarContainer = styled.div`
	width: 100%;
	height: ${toRem(50)};
`

const DescContainer = styled.div`
	width: 100%;
	height: ${toRem(110)};
`

const EtcContainer = styled.div`
	width: 100%;
	height: ${toRem(30)};
`