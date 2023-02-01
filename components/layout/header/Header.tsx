import styled from 'styled-components'
import { toRem } from '@/lib/helper'
import { CustomButton } from '@/components/common/CustomButton';

interface HeaderProps {
	logo: string;
	title: string;
	menuList: string[];
}

export const Header = ({ logo, title, menuList }: HeaderProps) => {
	return (
		<Container>
			<Content>
				<LogoBox>{ logo }</LogoBox>
				<TitleBox>{ title }</TitleBox>
				<MenuBox>
					{ menuList.map((menu, index) => (
						<CustomButton key={index} onClick={() => {}} title={menu}/>
					))}
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
	display: flex;
	justify-content: center;
	align-items: center;

	gap: ${toRem(10)};

	width: 100%;
	height: 100%;
`

const LogoBox = styled.div`
	width: ${toRem(90)};
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`
const TitleBox = styled.div`
	height: 100%;


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