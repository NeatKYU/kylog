import { useState } from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { Button, Row, Spacer } from '@nextui-org/react'

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
		<div className='flex fixed bottom-8 left-1/2 translate-center'>
			<Row>
				<Button
					auto
					onClick={updateLike}
					aria-label='like'
					icon={<AiTwotoneLike size={20}/>}
				>
					{like}
				</Button>
				<Spacer x={0.5}/>
				<Button 
					auto
					aria-label='share'
					icon={<BiShareAlt size={20}/>}
				/>
			</Row>
		</div>
	)
}

RemoteControler.defaultProps = {
	likes: '0',
}
