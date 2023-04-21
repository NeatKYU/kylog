import styled from 'styled-components'
import { common } from '@/interface/common';
import { toRem } from '@/lib/helper';

interface BodyLayoutProps{
	children: React.ReactNode;
}

export const BodyLayout = ({ children }: BodyLayoutProps) => {
	return (
		<Container>
			<Content>
				{children}
			</Content>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;

	width: 100%;
	top: ${toRem(60)};
	min-height: calc(100vh - ${toRem(60)});
`

const Content = styled.div`

	padding-top: ${toRem(20)};
	padding-bottom: ${toRem(30)};
`