import { toRem } from '@/lib/helper'
import { Stack, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import styled from 'styled-components'

interface RemoteControlerProps {
	likes: number;
}

export const RemoteControler = ({likes}: RemoteControlerProps) => {

	const [like, setLike] = useState<number>(likes);
	const [isUpdate, setIsUpdate] = useState<boolean>(false);

	const updateLike = () => {
		// TODO api로 연동
		// useEffect로 끝날때 업데이트 해도 될듯
		if(!isUpdate) {
			setLike((prev) => prev+1);
			setIsUpdate(true);
		} else {
			setLike((prev) => prev-1);
			setIsUpdate(false);
		}
	}

	const handleShared = () => {
		// TODO
	}

	return (
		<Container className='fcenter'>
			<Stack direction={'row'}>
				<Button
					onClick={updateLike}
					aria-label='like'
					variant={'outline'}
					leftIcon={<AiTwotoneLike/>}
				>
					{like}
				</Button>
				<IconButton 
					aria-label='share'
					variant={'outline'}
					icon={<BiShareAlt/>}
				/>
			</Stack>
		</Container>
	)
}

RemoteControler.defaultProps = {
	likes: '0',
}

const Container = styled.div`
	position: fixed;
	bottom: ${toRem(16)};
	left: 50%;
	transform: translate(-50%, -50%);
`