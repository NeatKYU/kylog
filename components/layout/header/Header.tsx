import Image from 'next/image'
import { Navbar, Button } from '@nextui-org/react'

interface HeaderProps {
	logo: string;
	title: string;
	children: React.ReactNode;
}

export const Header = ({ logo, title, children }: HeaderProps) => {
	return (
		<Navbar variant={'sticky'}>
			<Navbar.Brand>
				<Image src={'/img/logo_white.png'} alt='logo' width={100} height={60}/>
			</Navbar.Brand>
			<Navbar.Content>
				{children}
			</Navbar.Content>
		</Navbar>
	)
}