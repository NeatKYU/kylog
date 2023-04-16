// lib
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

// components
import { Header } from '@/components/layout/header/Header'
import { common } from '@/interface/common'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { BiEdit } from 'react-icons/bi'
import { BodyLayout } from '@/components/layout/body/Body'
import { Button } from '@chakra-ui/react'

// helper
import { logout } from '@/lib/auth'
import { useRouter } from 'next/router'

interface LayoutProps {
	children: React.ReactNode;
}

interface menu {
	key: string;
	label: string;
	icon?: React.ReactNode;
	leftIcon?: React.ReactElement;
	click: () => void;
}

export const Layout = (props: LayoutProps) => {

	const router = useRouter();
	// TODO 유저 정보의 아바타 이미지 여기서 쓰자!!
	const { data: session, status } = useSession();

	const loginMenuList: menu[] = [
		{ key: 'edit', label: '글쓰기', click: () => {router.push('/post/write')}, leftIcon: <BiEdit/>},
		{ key: 'profile', label: '프로필', click: () => {}},
		{ key: 'search', label: '검색', click: () => {}, icon: <AiOutlineSearch size={20}/>},
		{ key: 'logout', label: '로그아웃', click: () => signOut(), icon: <IoLogOutOutline size={20}/>},
	];
	const logoutMenuList: menu[] = [
		{ key: 'login', label: '로그인', click: () => signIn()}
	]

	const menuList = (menuList: menu[]) => {
		return menuList.map((menu: menu, index: number) => (
			<Button size='sm' key={index} onClick={menu.click} leftIcon={menu.leftIcon}>
				{menu.icon ? menu.icon : menu.label}
			</Button>
		))
	}

	return (
		<>
			<div>
				<Header logo='@/assets/img/logo.png' title=''>
					{menuList(status === 'authenticated' ? loginMenuList : logoutMenuList)}
				</Header>
				<BodyLayout {...props}>
					{ props.children }
				</BodyLayout>
			</div>
		</>
	)
}
