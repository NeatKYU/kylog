'use client'

import { ChangeEvent, useState } from 'react'
import cutsomAxios from '@/lib/customAxios'
import { useRouter } from 'next/navigation'
// import { BsGithub, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import Github from '@/assets/providers/github.svg'
import { signIn } from 'next-auth/react'
import { CInput, CButton } from '@/components/common'

export const LoginForm = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleId = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        await cutsomAxios
            .post('/api/auth/login', {
                name: id,
                password: password,
            })
            .then((result) => {
                console.log('result', result)
                router.push('/home')
            })
            .catch((error) => {
                // 아이디 비번 틀렸을 때
                console.log('error', error)
            })
    }

    const handleRegister = () => {
        router.push('/register')
    }

    return (
        <div className="w-80 m-auto mt-24">
            {/* <Input 
				fullWidth 
				size='lg' 
				placeholder='아이디를 입력해주세요.' 
				onInput={handleId}
			/> */}
            <CInput size="lg" fullWidth onChange={handleId} placeHolder="아이디를 입력해주세요." />
            <div className="my-3" />
            <CInput
                size="lg"
                fullWidth
                type={'password'}
                onChange={handlePassword}
                placeHolder="비밀번호를 입력해주세요."
            />
            <div className="my-8" />
            <CButton className="w-full shadow-lg" size="xl" onClick={handleLogin}>
                로그인
            </CButton>
            <div className="my-3" />
            <CButton
                size="xl"
                className="w-full shadow border bg-transparent dark:bg-transparent"
                onClick={handleRegister}
            >
                회원가입
            </CButton>
            <div className="my-10" />
            <CButton
                className="w-full bg-[#333] dark:bg-[#333] text-white hover:bg-[#434343] dark:hover:bg-[#434343]"
                size="xl"
                onClick={() => signIn('github', { callbackUrl: '/' })}
                leftIcon={<Github className="mr-2" />}
            >
                Sign in with Github
            </CButton>
        </div>
    )
}
