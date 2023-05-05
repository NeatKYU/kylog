import { sizeType } from "@/interface/common"

interface cInputProps {
	size: sizeType;
	icon?: React.ReactNode;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CInput = (props: cInputProps) => {
	const { size, icon, onChange } = props;

	const sizeClasses = (size: sizeType) => {
		if(size === 'sm') return 'w-64 h-8';
		if(size === 'md') return 'w-64 h-10';
		if(size === 'lg') return 'w-64 h-12';
		if(size === 'xl') return 'w-64 h-14';
	}

	return (
		<div 
			className={`
				flex justify-center items-center
				rounded-lg 
				py-2 px-3 border
				dark:border-zinc-600
				${sizeClasses(size)}
			`}
		>
			<div className='mr-2'>
				{icon}
			</div>
			<input 
				className='w-full outline-none bg-transparent'
				onChange={onChange}
			/>
		</div>
	)
}

CInput.defalutProps = {
	size: 'md',
}