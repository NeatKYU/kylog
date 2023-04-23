import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import cutsomAxios from '@/lib/customAxios';
import { useRouter } from 'next/router';
import { toRem } from '@/lib/helper';
import { SizedBox } from '../common/SizedBox';
import { BsGithub, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { signIn } from 'next-auth/react'
import { Input, Spacer, Button } from '@nextui-org/react'

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

	const handleRegister = () => {
		router.push('/register')
	}

	return (
		<div className='w-80'>
			<Input 
				fullWidth 
				size='lg' 
				placeholder='아이디를 입력해주세요.' 
				onInput={handleId}
			/>
			<Spacer y={1}/>
			<Input.Password 
				fullWidth
				size='lg'
				placeholder='비밀번호를 입력해주세요.' 
				onInput={handlePassword}
				visibleIcon={<BsEyeFill/>}
				hiddenIcon={<BsEyeSlashFill/>}
			/>
			<Spacer y={2} />
			<Button 
				className='w-full' 
				onClick={handleLogin} 
				color="gradient" 
				shadow
			>
				로그인
			</Button>
			<Spacer y={0.5} />
			<Button 
				bordered
				className='w-full'
				onClick={handleRegister}
			>
				회원가입
			</Button>
			<Spacer y={3} />
			<Button 
				className='w-full'
				onClick={() => signIn('github', { callbackUrl: '/'})}
			>
				<BsGithub className='mr-2'/>
				Sign in with Github
			</Button>
		</div>
	)
}