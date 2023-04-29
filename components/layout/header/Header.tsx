import Image from 'next/image'
import { Navbar } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface HeaderProps {
	logo: string;
	title: string;
	children: React.ReactNode;
}

export const Header = ({ logo, title, children }: HeaderProps) => {
	const router = useRouter();

	const goHome = () => {
		router.push('/')
	}

	return (
		<Navbar variant={'sticky'} disableBlur>
			<Navbar.Brand onClick={goHome} className='cursor-pointer'>
				{/* <Image src={'/img/logo_white.png'} alt='logo' width={100} height={60}/> */}
				<span>KYLOG</span>
			</Navbar.Brand>
			<Navbar.Content>
				{children}
			</Navbar.Content>
		</Navbar>
	)
}