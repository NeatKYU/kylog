import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { CInput, CButton } from '@/components/common'

export const RegisterForm = () => {

	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isErrorId, setIsErrorId] = useState<boolean>(false);
	const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
	// const toast = useToast();
	const router = useRouter();

	// TODO next auth에서 그냥 회원가입하는 방법을 알아야 할 수 있을듯
	const validateUser = async (id: string) => {
		const {data} = await axios.post('/api/user', { id: id });
		return data;
	}

	const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
		// TODO lodash 정돈 걸어주자
		// validateUser(e.target.value);
		if(e.target.value.length < 5) {
			setIsErrorId(true);
		} else {
			setIsErrorId(false);
		}
	}

	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		const value = e.target.value;
		const regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
		if(!regExpPassword.test(value)) {
			setIsErrorPassword(true);
		} else {
			setIsErrorPassword(false);
		}
	}

	return (
		<div className='flex flex-col w-80 m-auto mt-24'>
			<CInput
				size='lg'
				fullWidth
				onChange={onChangeId}
				className={`
					${isErrorId ? 'border-rose-500' : ''}
				`}
				placeHolder='아이디'
			/>
			<div className='my-1'/>
			<CInput
				size='lg'
				fullWidth
				onChange={onChangePassword}
				className={`
					${isErrorPassword ? 'border-rose-500' : ''}
				`}
				placeHolder='비밀번호'
			/>
			<div className='my-4'/>
			<CButton
				size='xl'
				className='shadow-lg'
				// onClick={() => handleRegister(id, password)}
			>
				회원가입
			</CButton>
			<div className='my-1'/>
			<CButton 
				size='xl'
				className='w-full border bg-transparent dark:bg-transparent' 
				onClick={() => router.push('/login')}
			>
				로그인 하러가기
			</CButton>
		</div>
	)
}