import { useState } from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { Button, Row, Spacer } from '@nextui-org/react'
import usePostLike from '@/hooks/usePostLike';
import { useSession } from 'next-auth/react';

interface RemoteControlerProps {
	likes: number;
	postId: string;
}

export const RemoteControler = ({ likes, postId }: RemoteControlerProps) => {

	const { data: session } = useSession();
	const { like, handleLike } = usePostLike(likes);

	const handleShared = () => {
		// TODO
	}

	return (
		<div className='flex fixed bottom-4 left-1/2 translate-center'>
			<Row>
				<Button
					auto
					onPress={() => handleLike(session?.user.id, postId)}
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
