// lib
import React from 'react';

// components
import { Header } from '@/components/layout/header/Header';
import { CustomButton } from '../common/CustomButton';
import { common } from '@/interface/common';

// helper
import { logout } from '@/lib/auth';
import { useRouter } from 'next/router';

interface LayoutProps extends common{
	children: React.ReactNode;
}

interface menu {
	label: string;
	click: () => void;
}

export const Layout = ({ children, isAuth }: LayoutProps) => {

	const router = useRouter();

	const loginMenuList: menu[] = [
		{ label: '프로필', click: () => {}},
		{ label: '로그아웃', click: () => logout(router)},
	];
	const logoutMenuList: menu[] = [
		{ label: '로그인', click: () => {}}
	]

	const menuList = (menuList: menu[]) => {
		return menuList.map((menu: menu, index: number) => (
			<CustomButton key={index} onClick={menu.click} title={menu.label}/>
		))
	}

	return (
		<>
			<Header logo='logo image' title='kylog'>
				{menuList(isAuth ? loginMenuList : logoutMenuList)}
			</Header>
			{ children }
		</>
	)
}