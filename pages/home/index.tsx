import customAxios from '@/lib/customAxios'
import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCardList } from '@/components/post/PostCardList'
import { fakePostData } from '@/public/data/post'

interface homeProps extends common{

}

export default function Home({accessToken, refreshToken}: homeProps) {

	const apiReqest = async () => {
		const token = accessToken;
		customAxios.defaults.headers['Authorization'] = 'Bearer ' + token;

		await customAxios.get('/api/user/get')
	}

	return (
		<Container className='fcenter'>
			<PostCardList postList={fakePostData}/>
		</Container>
	)
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`