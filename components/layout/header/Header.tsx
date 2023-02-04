import styled from 'styled-components'
import { toRem } from '@/lib/helper'
import { CustomButton } from '@/components/common/CustomButton';

interface HeaderProps {
	logo: string;
	title: string;
	children: React.ReactNode;
}

export const Header = ({ logo, title, children }: HeaderProps) => {
	return (
		<Container>
			<Content className='fcenter'>
				<LogoBox className='fcenter'>{ logo }</LogoBox>
				<TitleBox className='fcenter'>{ title }</TitleBox>
				<MenuBox>
					{children}
				</MenuBox>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	display: fixed;
	top: 0;
	left: 0;

	padding: 1px 10px 1px 10px;

	width: 100%;
	height: ${toRem(60)};
`

const Content = styled.div`

	gap: ${toRem(10)};

	width: 100%;
	height: 100%;
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