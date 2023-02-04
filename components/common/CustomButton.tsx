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
	icon?: React.ReactNode
}

export const CustomButton = (props: CustomButtonProps) => {

	const { size, buttonTheme, title, widthFull, onClick, icon } = props;

	return (
		<Container 
			icon={icon} 
			buttonTheme={buttonTheme} 
			size={size} 
			widthFull={widthFull} 
			onClick={onClick}
		>
			{icon ? icon : title}
		</Container>
	)
}

const sizeStyles = css<{size: string, icon: React.ReactNode}>`
	${props => props.size === 'large' && 
		css`
			width: ${toRem(100)};
			height: ${toRem(50)};
	`}
	${props => props.size === 'large' && props.icon && 
		css`
			width: ${toRem(50)};
			height: ${toRem(50)};

			svg {
				font-size: ${toRem(30)};
			}
	`}
	${props => props.size === 'middle' && 
		css`
			width: ${toRem(80)};
			height: ${toRem(40)};
	`}
	${props => props.size === 'middle' && props.icon &&
		css`
			width: ${toRem(40)};
			height: ${toRem(40)};

			svg {
				font-size: ${toRem(25)};
			}
	`}
	${props => props.size === 'small' && 
		css`
			width: ${toRem(60)};
			height: ${toRem(30)};
	`}
	${props => props.size === 'small' && props.icon &&
		css`
			width: ${toRem(30)};
			height: ${toRem(30)};

			svg {
				font-size: ${toRem(16)};
			}
	`}
`

interface containerProps {
	buttonTheme: string, 
	size: string, 
	widthFull: boolean, 
	icon: React.ReactNode
}

const Container = styled.div<containerProps>`
	${sizeStyles}

	width: ${(props) => props.widthFull ? '100% !important' : null};

	background-color: ${(props) => props.buttonTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white };
	color: ${(props) => props.buttonTheme === 'dark' ? props.theme.colors.white : props.theme.colors.black};

	svg {
		background-color: ${(props) => props.buttonTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white };
	}

	margin: 5px 0px 5px 0px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
	border-radius: 5px;

	cursor: pointer;

	:hover {
		background-color: ${({theme, buttonTheme}) => buttonTheme === 'dark' ? theme.colors.hoverBlack : theme.colors.hoverWhite};
		svg {
			background-color: ${({theme, buttonTheme}) => buttonTheme === 'dark' ? theme.colors.hoverBlack : theme.colors.hoverWhite};
		}
	}
`

CustomButton.defaultProps = {
	size: 'middle',
	title: 'button',
	buttonTheme: 'dark',
	widthFull: false,
	outlined: false,
}