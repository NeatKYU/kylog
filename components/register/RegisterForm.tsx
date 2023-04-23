import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { Input, Button, Spacer } from '@nextui-org/react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

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
			<Input 
				label='아이디'
				size='lg'
				onInput={onChangeId}
				color={isErrorId ? 'error' : 'success'}
				status={isErrorId ? 'error' : 'success'}
			></Input>
			<Spacer y={0.3}/>
			<Input.Password 
				label='비밀번호' 
				size='lg'
				color={isErrorPassword ? 'error' : 'success'}
				status={isErrorPassword ? 'error' : 'success'}
				visibleIcon={<BsEyeFill/>}
				hiddenIcon={<BsEyeSlashFill/>}
				onInput={onChangePassword}
			>
			</Input.Password>
			<Spacer y={1}/>
			<Button
				// onClick={() => handleRegister(id, password)}
				color='gradient'
				shadow
			>
				회원가입
			</Button>
			<Spacer y={0.5}/>
			<Button 
				className='w-full' 
				bordered 
				onClick={() => router.push('/login')}
			>
				로그인 하러가기
			</Button>
		</div>
	)
}