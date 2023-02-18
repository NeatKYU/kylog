import styled from 'styled-components'
import { post } from '@/interface/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { postDetail } from '@/lib/db/post';
import { toRem } from '@/lib/helper';
import { Avatar, Stack } from '@chakra-ui/react';
import { dateToHowover } from '@/lib/helper';
import { RemoteControler } from '@/components/common/RemoteControler';

interface detailProps {
	post: post
}

export default function Detail({ post }: detailProps) {

	const createAt = dateToHowover(post.createdate);

	return (
		<Container>
			<TitleContainer className='title-font-size'>
				{post.title}
			</TitleContainer>
			<UserInfoContainer className='f fc-start'>
				<Stack direction='row' spacing={4}>
					<Avatar/>
					<div className='fcol'>
						<div className='font-18 bold'>nick name</div>
						<div className='font-12'>{createAt}</div>
					</div>
				</Stack>
			</UserInfoContainer>
			<ContentsContainer>
				{post.contents}
			</ContentsContainer>
			<RemoteControler likes={post.likes}/>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

	return {
			paths: [], //indicates that no page needs be created at build time
			fallback: 'blocking' //indicates the type of fallback
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	// console.log('params', params);
	if(context.params?.postId) {
		const postId = context.params.postId.toString();
		const res = JSON.parse(JSON.stringify(await postDetail(postId)));
		return {
			props: {
				post: res[0],
			}
		}
	}
	return {
		props: {
			post: undefined,
		}
	}
}

const Container = styled.div`
	width: 100%;
	max-width: ${toRem(1024)};
	height: auto;

	@media ${({ theme }) => theme.device.laptop} {
		padding: 0 ${toRem(20)};
	}
`

const TitleContainer = styled.div`
	width: 80%;
	font-size: ${toRem(35)};
	font-weight: bold;
	margin-bottom: ${toRem(30)};

	/* @media ${({ theme }) => theme.device.laptop} {
		font-size: ${toRem(30)};
	}
	@media ${({ theme }) => theme.device.tablet} {
		font-size: ${toRem(20)};
	}
	@media ${({ theme }) => theme.device.semiTablet} {
		font-size: ${toRem(18)};
	} */
`

const UserInfoContainer = styled.div`
	width: 100%;
	margin-bottom: ${toRem(20)};
`

const ContentsContainer = styled.div`
	width: 100%;

`