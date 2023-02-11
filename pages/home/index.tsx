import customAxios from '@/lib/customAxios'
import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCardList } from '@/components/post/PostCardList'

interface homeProps extends common{

}

const fakeData = [
	{
		postId: '1',
		title: 'post1',
		thumbnail: '/example.jpeg',
		likes: 100,
		comments: 10,
		contents: '가짜 데이터의 글 본문입니다. 참고해주세요.',
		createDate: '2023-02-11',
		
		userName: 'NeatKYU',
		uesrThumbnail: '/img/logo.png',
	}
]

export default function Home({accessToken, refreshToken}: homeProps) {

	const apiReqest = async () => {
		const token = accessToken;
		customAxios.defaults.headers['Authorization'] = 'Bearer ' + token;

		await customAxios.get('/api/user/get')
	}

	return (
		<Container className='fcenter'>
			<PostCardList postList={fakeData}/>
		</Container>
	)
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`