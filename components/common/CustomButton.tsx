import styled, { css } from 'styled-components';
import { toRem } from '@/lib/helper';
import React from 'react';

interface CustomButtonProps {
	size: 'small' | 'middle' | 'large';
	widthFull: boolean;
	buttonTheme: 'dark' | 'white';
	title: string;
	outlined: boolean;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const CustomButton = (props: CustomButtonProps) => {

	const { size, buttonTheme, title, widthFull, onClick } = props;

	return (
		<Container buttonTheme={buttonTheme} size={size} widthFull={widthFull} onClick={onClick}>
			{title}
		</Container>
	)
}

const sizeStyles = css<{size: string}>`
	${props => props.size === 'large' && 
		css`
			width: ${toRem(100)};
			height: ${toRem(50)};
	`}
	${props => props.size === 'middle' && 
		css`
			width: ${toRem(80)};
			height: ${toRem(40)};
	`}
	${props => props.size === 'small' && 
		css`
			width: ${toRem(60)};
			height: ${toRem(30)};
	`}
`

const Container = styled.div<{buttonTheme: string, size: string, widthFull: boolean}>`
	${sizeStyles}

	width: ${(props) => props.widthFull ? '100% !important' : null};

	background-color: ${(props) => props.buttonTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white };
	color: ${(props) => props.buttonTheme === 'dark' ? props.theme.colors.white : props.theme.colors.black};

	margin: 5px 0px 5px 0px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
	border-radius: 5px;

	cursor: pointer;

	:hover {
		background-color: ${({theme, buttonTheme}) => buttonTheme === 'dark' ? theme.colors.hoverBlack : theme.colors.hoverWhite};
	}
`

CustomButton.defaultProps = {
	size: 'middle',
	title: 'button',
	buttonTheme: 'dark',
	widthFull: false,
	outlined: false,
}