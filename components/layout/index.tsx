// lib
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons'

// components
import { Header } from '@/components/layout/header/Header';
import { common } from '@/interface/common';
import { AiOutlineSearch } from 'react-icons/ai'
import { BodyLayout } from '@/components/layout/body/Body';
import { Button } from '@chakra-ui/react'

// helper
import { logout } from '@/lib/auth';
import { useRouter } from 'next/router';

interface LayoutProps extends common{
	children: React.ReactNode;
}

interface menu {
	key: string;
	label: string;
	icon?: React.ReactNode;
	click: () => void;
}

export const Layout = (props: LayoutProps) => {

	const router = useRouter();

	const loginMenuList: menu[] = [
		{ key: 'search', label: '검색', click: () => {}},
		{ key: 'profile', label: '프로필', click: () => {}},
		{ key: 'logout', label: '로그아웃', click: () => logout(router)},
	];
	const logoutMenuList: menu[] = [
		{ key: 'login', label: '로그인', click: () => {}}
	]

	const menuList = (menuList: menu[]) => {
		return menuList.map((menu: menu, index: number) => (
			<Button key={index} onClick={menu.click}>
				{menu.key === 'search' ? <SearchIcon/>: menu.label}
			</Button>
		))
	}

	return (
		<>
			<Header logo='logo image' title='kylog'>
				{menuList(props.isAuth ? loginMenuList : logoutMenuList)}
			</Header>
			<BodyLayout {...props}>
				{ props.children }
			</BodyLayout>
		</>
	)
}