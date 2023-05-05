// import Image from 'next/image'
import { BsPersonCircle } from 'react-icons/bs'
import { sizeType } from '@/interface/common'

interface cAvatarProps {
	src: string;
	size: sizeType;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const CAvatar = (props: cAvatarProps) => {

	const { size, src, onClick } = props;

	const sizeClasses = (size: sizeType) => {
		if(size === 'sm') return 'w-6 h-6';
		if(size === 'md') return 'w-8 h-8';
		if(size === 'lg') return 'w-10 h-10';
		if(size === 'xl') return 'w-12 h-12';
	}

	return (
		<div 
			className={`
				rounded-full
				flex
				justify-center
				items-center
				bg-slate-200
				hover:bg-slate-300
				${sizeClasses(size)}
			`}
			onClick={onClick}
		>
			<img 
				alt='Avatar' 
				src={src} 
				className={`
					rounded-full
					cursor-pointer
				`}
			/>
		</div>
	)
}

CAvatar.defaultProps = {
	size: 'md',
	//TODO 기본이미지 설정
}