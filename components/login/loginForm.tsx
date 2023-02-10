import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import cutsomAxios from '@/lib/customAxios';
import { useRouter } from 'next/router';
import { toRem } from '@/lib/helper';
import { SizedBox } from '../common/SizedBox';
import { Input, Stack, FormControl, Button } from '@chakra-ui/react'

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
		await cutsomAxios.post('/api/auth/login', {
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
			<FormControl>
				{/* input 자리 */}
				<Stack>
					<Input variant='filled' placeholder='아이디를 입력해주세요.' onChange={handleId}/>
					<Input variant='filled' placeholder='비밀번호를 입력해주세요.' onChange={handlePassword}/>
				{/* 빈 공간 */}
				<SizedBox h='10px'/>
				{/* <div style={{width: '100%', height: '1px', backgroundColor: 'black'}}></div> */}
				{/* <SizedBox h='20px'/> */}
				{/* 버튼 자리 */}
					<Button variant='outline'>로그인</Button>
					<Button 
						variant='outline' 
						backgroundColor='#242424' 
						color='white' 
						_hover={{
							color: 'white',
							backgroundColor: '#3c3c3c'
					}}>
						회원가입
					</Button>
				</Stack>
				{/* <CustomButton widthFull title={'로그인'} onClick={handleLogin}/>
				<CustomButton buttonTheme='white' widthFull title={'회원가입'} onClick={() => console.log('go to sign up')}/> */}
			</FormControl>
		</Container>
	)
}

const Container = styled.div`
	width: ${toRem(300)};
	height: ${toRem(300)};
`