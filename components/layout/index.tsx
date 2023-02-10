// lib
import React from 'react';

// components
import { Header } from '@/components/layout/header/Header';
import { CustomButton } from '../common/CustomButton';
import { common } from '@/interface/common';
import { AiOutlineSearch } from 'react-icons/ai'
import { BodyLayout } from '@/components/layout/body/Body';

// helper
import { logout } from '@/lib/auth';
import { useRouter } from 'next/router';

interface LayoutProps extends common{
	children: React.ReactNode;
}

interface menu {
	label: string;
	icon?: React.ReactNode;
	click: () => void;
}

export const Layout = (props: LayoutProps) => {

	const router = useRouter();

	const loginMenuList: menu[] = [
		{ label: '검색', click: () => {}, icon: <AiOutlineSearch/>},
		{ label: '프로필', click: () => {}},
		{ label: '로그아웃', click: () => logout(router)},
	];
	const logoutMenuList: menu[] = [
		{ label: '로그인', click: () => {}}
	]

	const menuList = (menuList: menu[]) => {
		return menuList.map((menu: menu, index: number) => (
			<CustomButton key={index} onClick={menu.click} title={menu.label} icon={menu.icon}/>
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