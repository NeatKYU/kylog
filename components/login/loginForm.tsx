import styled from 'styled-components';
import { toRem } from '@/lib/helper';
import { CustomButton } from '../common/CustomButton';
import theme from '@/styles/theme';

export const LoginForm = () => {
	return (
		<Container>
			{/* input 자리 */}
			{/* 버튼 자리 */}
			<CustomButton size={'middle'} title={'title'}/>
		</Container>
	)
}

const Container = styled.div`
	width: ${toRem(300)};
	height: ${toRem(300)};
	border-radius: 5px;
	border: 1px solid black;
`