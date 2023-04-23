// lib
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import { Header } from '@/components/layout/header/Header'
import { IoLogOutOutline } from 'react-icons/io5'
import { BiEdit, BiLogIn } from 'react-icons/bi'
import { BsPersonCircle, BsFillPersonBadgeFill } from 'react-icons/bs'
import { BodyLayout } from '@/components/layout/body/Body'
import { Avatar, Button, Dropdown } from '@nextui-org/react';

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
					<Link href={'/post/write'} >
						<Button auto icon={<BiEdit/>} >글쓰기</Button>
					</Link>
					<Dropdown placement='bottom-right'>
						<Dropdown.Trigger>
							<Avatar 
								squared
								pointer
								src={status === 'authenticated' ? session.user.image : ''} 
							/>
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
