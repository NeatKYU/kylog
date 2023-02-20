import styled from 'styled-components'
import { Input, FormControl, FormLabel, Button, FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import { validateUser } from '@/lib/db/users';
import customAxios from '@/lib/customAxios';

export const RegisterForm = () => {

	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isErrorId, setIsErrorId] = useState<boolean>(false);
	const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);

	const validateUser = async (name: string) => {
		const {data} = await customAxios.post('/api/user', { name: name });
		return data;
	}

	const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
		// TODO lodash 정돈 걸어주자
		validateUser(e.target.value);
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
		<div className='fcol'>
			<FormControl isInvalid={isErrorId} isRequired marginBottom={1}>
				<FormLabel>ID</FormLabel>
				<Input onChange={onChangeId} variant='filled'/>
				<FormErrorMessage>5자리 이상 입력해주세요.</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={isErrorPassword} isRequired marginBottom={1}>
				<FormLabel>PASSWORD</FormLabel>
				<Input type={'password'} onChange={onChangePassword} variant='filled'/>
				<FormErrorMessage>비밀번호는 영문, 숫자, 특수문자를 포함한 6~16자리입니다.</FormErrorMessage>
			</FormControl>
			<Button
				variant='outline' 
				backgroundColor='#242424' 
				color='white' 
				_hover={{
					color: 'white',
					backgroundColor: '#3c3c3c'
				}}
			>
				회원가입
			</Button>
		</div>
	)
}