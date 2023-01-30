import customAxios from '@/lib/customAxios'
import styled from 'styled-components'
import { common } from '@/interface/common';

interface homeProps extends common{

}

export default function Home({accessToken, refreshToken}: homeProps) {

	const apiReqest = async () => {
		const token = accessToken;
		customAxios.defaults.headers['Authorization'] = 'Bearer ' + token;

		await customAxios.get('/api/user/get')
	}

	return (
		<div>
			this is home page
			<button onClick={apiReqest}>api test</button>
		</div>
	)
}

const Container = styled.div`
	
`