import { useState } from 'react'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { Button, Row, Spacer } from '@nextui-org/react'
import usePostLike from '@/hooks/usePostLike';
import { useSession } from 'next-auth/react';

interface RemoteControlerProps {
	likes: number;
	comments: number;
	postId: string;
}

export const RemoteControler = ({ likes, comments, postId }: RemoteControlerProps) => {

	const { data: session } = useSession();
	const { like, handleLike } = usePostLike(likes);

	const handleShared = () => {
		// TODO
	}

	const handleComment = () => {
		// TODO
	}

	return (
		<div className='flex fixed bottom-0 left-1/2 translate-center p-2 rounded-lg bg-slate-50 shadow-2xl'>
			<Row>
				<Button
					auto
					onPress={() => handleLike(session?.user.id, postId)}
					aria-label='like'
					icon={<AiOutlineLike size={20}/>}
					className='bg-slate-50 px-4 text-black'
				>
					{like}
				</Button>
				<div className='w-[1px] h-full flex items-center mx-1'>
					<div className='w-full h-1/2 bg-black'></div>
				</div>
				<Button 
					auto
					aria-label='comment'
					icon={<AiOutlineComment size={20}/>}
					className='bg-slate-50 px-4 text-black'
				>
					{comments}
				</Button>
				<div className='w-[1px] h-full flex items-center mx-1'>
					<div className='w-full h-1/2 bg-black'></div>
				</div>
				<Button 
					auto
					aria-label='share'
					icon={<BiShareAlt size={20}/>}
					className='bg-slate-50 text-black'
				/>
			</Row>
		</div>
	)
}

RemoteControler.defaultProps = {
	likes: 0,
	comments: 0,
}
