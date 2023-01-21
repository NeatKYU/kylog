import styled from 'styled-components';
import { toRem } from '@/lib/helper';
import { CustomButton } from '../common/CustomButton';
import { CustomInput } from '../common/CustomInput';
import { SizedBox } from '../common/SizedBox';

export const LoginForm = () => {
	return (
		<Container>
			{/* input 자리 */}
			<CustomInput placeholder='아이디를 입력해주세요.' onChange={() => {}}/>
			<CustomInput type='password' placeholder='비밀번호를 입력해주세요.' onChange={() => {}}/>
			{/* 빈 공간 */}
			<SizedBox h='20px'/>
			<div style={{width: '100%', height: '1px', backgroundColor: 'white', }}></div>
			<SizedBox h='20px'/>
			{/* 버튼 자리 */}
			<CustomButton widthFull title={'로그인'}/>
			<CustomButton buttonTheme='white' widthFull title={'회원가입'}/>
		</Container>
	)
}

const Container = styled.div`
	width: ${toRem(300)};
	height: ${toRem(300)};
`