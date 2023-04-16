// lib
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

// components
import { Header } from '@/components/layout/header/Header'
import { IoLogOutOutline } from 'react-icons/io5'
import { BiEdit, BiLogIn } from 'react-icons/bi'
import { BsPersonCircle, BsFillPersonBadgeFill } from 'react-icons/bs'
import { BodyLayout } from '@/components/layout/body/Body'
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem, Box, Stack } from '@chakra-ui/react'

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {

	// TODO 유저 정보의 아바타 이미지 여기서 쓰자!!
	const { data: session, status } = useSession();

	const authMenuList = (status: 'authenticated' | 'loading' | 'unauthenticated') => {
		return status === 'authenticated' ? 
		<MenuList>
			<MenuItem icon={<BsPersonCircle size={20}/>}>
				프로필
			</MenuItem>
			<MenuItem 
				onClick={() => signOut()} 
				icon={<IoLogOutOutline size={20}/>}
			>
				로그아웃
			</MenuItem>
		</MenuList>
		:
		<MenuList>
			<Link href={'/register'}>
				<MenuItem icon={<BsFillPersonBadgeFill size={20}/>}>회원가입</MenuItem>
			</Link>
			<MenuItem 
				onClick={() => signIn()} 
				icon={<BiLogIn size={20}/>}
			>
				로그인
			</MenuItem>
		</MenuList>
	}

	return (
		<>
			<div>
				<Header logo='@/assets/img/logo.png' title=''>
					<Stack spacing={4} direction={'row'}>
						<Link href={'/post/write'} >
							<Button size='sm' leftIcon={<BiEdit/>} >글쓰기</Button>
						</Link>
						<Menu>
							<MenuButton style={{cursor: 'point'}}>
								<Avatar 
									size={'sm'} 
									src={status === 'authenticated' ? session.user.image : 'https://bit.ly/broken-link'} 
								/>
							</MenuButton>
							{authMenuList(status)}
						</Menu>
					</Stack>
				</Header>
				<BodyLayout {...props}>
					{ props.children }
				</BodyLayout>
			</div>
		</>
	)
}
