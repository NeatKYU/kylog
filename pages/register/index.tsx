import styled from 'styled-components'
import { RegisterForm } from '@/components/register/RegisterForm'
import { toRem } from '@/lib/helper'
export default function Register() {
	return (
		<Container className='fcenter'>
			<Form>
				<RegisterForm/>
			</Form>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;

`

const Form = styled.div`
	width: ${toRem(300)};
	height: ${toRem(250)};

	padding: 5px;
	margin-bottom: ${toRem(250)};
`
