import { LoginForm } from '@/components/login/loginForm';
import styled from 'styled-components';

export default function Login() {

	return (
		<Container>
			<LoginForm/>
			{/* <div style={{height: '200px', width: '100%'}}/> */}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	/* height: 100vh; */

	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
`