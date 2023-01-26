import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toRem } from '@/lib/helper';
import { CustomButton } from '../common/CustomButton';
import { CustomInput } from '../common/CustomInput';
import { SizedBox } from '../common/SizedBox';

export const LoginForm = () => {

	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleId = (e: ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	}

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}

	const handleLogin = async () => {
		await axios.post('/api/auth/login', {
			name: id,
			password: password
		}).then((result) => {
			console.log('result', result)
			router.push('/home')
		}).catch((error) => {
			// 아이디 비번 틀렸을 때
			console.log('error', error);
		})
	}

	return (
		<Container>
			{/* input 자리 */}
			<CustomInput placeholder='아이디를 입력해주세요.' onChange={handleId}/>
			<CustomInput type='password' placeholder='비밀번호를 입력해주세요.' onChange={handlePassword}/>
			{/* 빈 공간 */}
			<SizedBox h='20px'/>
			<div style={{width: '100%', height: '1px', backgroundColor: 'white'}}></div>
			<SizedBox h='20px'/>
			{/* 버튼 자리 */}
			<CustomButton widthFull title={'로그인'} onClick={handleLogin}/>
			<CustomButton buttonTheme='white' widthFull title={'회원가입'} onClick={() => console.log('go to sign up')}/>
		</Container>
	)
}

const Container = styled.div`
	width: ${toRem(300)};
	height: ${toRem(300)};
`