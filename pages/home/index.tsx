import customAxios from '@/lib/customAxios'
import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCardList } from '@/components/post/PostCardList'

interface homeProps extends common{

}

const fakeData = [
	{
		postId: '',
		thumbnail: '',
		uesrName: '',
		uesrThumnail: '',
		createDate: '',
		desc: '',
		likes: 0,
		comments: 0,
		contents: '',
	},{
		postId: '',
		thumbnail: '',
		uesrName: '',
		uesrThumnail: '',
		createDate: '',
		desc: '',
		likes: 0,
		comments: 0,
		contents: '',
	},{
		postId: '',
		thumbnail: '',
		uesrName: '',
		uesrThumnail: '',
		createDate: '',
		desc: '',
		likes: 0,
		comments: 0,
		contents: '',
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