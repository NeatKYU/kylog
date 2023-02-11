import styled from 'styled-components'
import { toRem } from '@/lib/helper'
import Image from 'next/image'

interface HeaderProps {
	logo: string;
	title: string;
	children: React.ReactNode;
}

export const Header = ({ logo, title, children }: HeaderProps) => {
	return (
		<Container>
			<Content className='fcenter'>
				<LogoBox className='fcenter'>
					<Image src={'/img/logo_white.png'} alt='logo' width={100} height={60}/>
				</LogoBox>
				<TitleBox className='fcenter'>
					{ title }
				</TitleBox>
				<MenuBox>
					{children}
				</MenuBox>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	position: sticky;
	top: 0;
	left: 0;

	padding: 1px 10px 1px 10px;

	width: 100%;
	height: ${toRem(60)};

	background-color: #242424;
	z-index: 99999;
`

const Content = styled.div`
	gap: ${toRem(10)};

	width: 100%;
	height: 100%;

	margin: 0 auto;

	@media (min-width: 1024px) {
		width: ${({ theme }) => toRem(theme.deviceFixSize.laptop)};
	}
`

const LogoBox = styled.div`
	width: ${toRem(90)};
	height: 100%;
`
const TitleBox = styled.div`
	height: 100%;

	font-size: 20px;
	color: white;
`
const MenuBox = styled.div`
	width: 100%;
	height: 100%;

	margin-left: auto;

	display: flex;
	justify-content: end;
	align-items: center;

	gap: ${toRem(5)};
`