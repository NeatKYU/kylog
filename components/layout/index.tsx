import { Header } from '@/components/layout/header/Header';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header logo='logo image' title='kylog' menuList={['검색', '로그인']}/>
			{ children }
		</>
	)
}