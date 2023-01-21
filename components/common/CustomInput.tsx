import { toRem } from '@/lib/helper';
import styled, { css } from 'styled-components'

interface CustomInputProps {
	size: 'small' | 'middle' | 'large';
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	type: 'password' | 'email' | 'text'
}

export const CustomInput = (props: CustomInputProps) => {
	const { size, placeholder, onChange, type } = props;
	return (
		<Container size={size}>
			<Input 
				placeholder={placeholder}
				onChange={onChange}
				type={type}
			/>
		</Container>
	)
}

const sizeStyles = css<{size: string}>`
	${props => props.size === 'small' && css`
		height: ${toRem(30)};
		input {
			font-size: ${toRem(14)}
		}
	`}
	${props => props.size === 'middle' && css`
		height: ${toRem(40)};
	`}
	${props => props.size === 'large' && css`
		height: ${toRem(50)};
		input {
			font-size: ${toRem(17)}
		}
	`}
`

const Container = styled.div`
	${sizeStyles}
	width: 100%;

	padding: 0px 10px 0px 10px; 
	margin: 5px 0 5px 0;
	border-radius: 5px;
	border: 1px solid ${({theme}) => theme.colors.grey};
	:hover {
		border-color: ${({theme}) => theme.colors.hoverBlack};
	}

	background-color: ${({theme}) =>theme.colors.white};
`

const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;

	background-color: ${({theme}) =>theme.colors.white};
`

CustomInput.defaultProps = {
	size: 'middle',
	placeholder: '입력해주세요.',
	type: 'text',
}