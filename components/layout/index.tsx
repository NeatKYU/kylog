// lib
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

// components
import { Header } from '@/components/layout/header/Header'
import { IoLogOutOutline } from 'react-icons/io5'
import { BiEdit, BiLogIn, BiSearch } from 'react-icons/bi'
import { BsPersonCircle, BsFillPersonBadgeFill } from 'react-icons/bs'
import { BodyLayout } from '@/components/layout/body/Body'
import { Dropdown } from '@nextui-org/react'
import { ThemeToggleButton } from '../common/ThemeToggleButton'
import { CButton } from '@/components/common/CustomButton'
import { CAvatar } from '@/components/common/CustomAvatar'
import { CInput } from '../common/CustomInput'

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {

	const { data: session, status } = useSession();
	const router = useRouter();

	const authMenuList = (status: 'authenticated' | 'loading' | 'unauthenticated') => {
		return status === 'authenticated' ? 
		<Dropdown.Menu>
			<Dropdown.Item icon={<BsPersonCircle size={20} />}>
				<span>프로필</span>
			</Dropdown.Item>
			<Dropdown.Item icon={<IoLogOutOutline size={20} />}>
				<div onClick={() => signOut()}>로그아웃</div>
			</Dropdown.Item>
		</Dropdown.Menu>
		:
		<Dropdown.Menu>
			<Dropdown.Item icon={<BsFillPersonBadgeFill size={20}/>}>
				<div onClick={() => router.push('/register')}>회원가입</div>
			</Dropdown.Item>
			<Dropdown.Item icon={<BiLogIn size={20}/>} >
				<div onClick={() => router.push('/login')}>로그인</div>
			</Dropdown.Item>
		</Dropdown.Menu>
	}

	return (
		<>
			<div>
				<Header logo='@/assets/img/logo.png' title=''>
					<CInput size='md' icon={<BiSearch/>}/>
					<ThemeToggleButton/>
					<CButton size='lg' onClick={() => router.push('/post/write')} leftIcon={<BiEdit/>}>
						글쓰기
					</CButton>
					<Dropdown placement='bottom-right'>
						<Dropdown.Trigger>
							<CAvatar src={status === 'authenticated' ? session.user.image : '/deafultUser.jpeg'} size='lg'/>
						</Dropdown.Trigger>
						{authMenuList(status)}
					</Dropdown>
				</Header>
				<BodyLayout {...props}>
					{ props.children }
				</BodyLayout>
			</div>
		</>
	)
}
