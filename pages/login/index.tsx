import { useEffect } from 'react';
import useSWR from 'swr';
import { LoginForm } from '@/components/login/loginForm';
import styled from 'styled-components';
import { loginFetcher } from '@/lib/axios';

export default function Login() {

	// const { data, error } = useSWR('/api/auth/login', () => loginFetcher('/api/auth/login', 'test', 'teest1234'));

	return (
		<Container>
			<LoginForm/>
			<div style={{height: '200px', width: '100%'}}/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`