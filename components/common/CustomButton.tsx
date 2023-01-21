import styled from 'styled-components';

interface CustomButtonProps {
	size: 'small' | 'large' | 'middle';
	color?: string;
	title: string | 'button';

}

export const CustomButton = (props: CustomButtonProps) => {

	const { size, color, title } = props;

	return (
		<Container color={color}>
			{title}
		</Container>
	)
}

const Container = styled.div<{color?: string}>`
	background-color: ${(props) => props.color ? props.color : props.theme.colors.primaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
`