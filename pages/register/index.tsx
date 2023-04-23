import styled from 'styled-components'
import { RegisterForm } from '@/components/register/RegisterForm'
import { toRem } from '@/lib/helper'
export default function Register() {
	return (
		<Container className='fcenter'>
			<RegisterForm/>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`
