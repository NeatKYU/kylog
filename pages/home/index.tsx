import customAxios from '@/lib/customAxios'
import styled from 'styled-components'
import { common } from '@/interface/common';
import { PostCard } from '@/components/post/PostCard';

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
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</Container>
	)
}

const Container = styled.div`
	flex-direction: column;
	gap: 20px;
`