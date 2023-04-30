import { AiOutlineClose } from 'react-icons/ai'

interface SidebarProps {
	isOpen: boolean,
	setIsOpen: (state: boolean) => void,
	children?: React.ReactNode,
}

export const Sidebar = (props: SidebarProps) => {

	const { isOpen, setIsOpen, children } = props;

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<div 
			onClick={handleClose} 
			className={`
				w-full 
				h-screen 
				fixed 
				top-0 
				left-0 
				z-[999] 
				bg-black/50 
				${isOpen ? 'visible' : 'invisible'}`
			}
		>
			<div 
				onClick={(e) => e.stopPropagation()} 
				className={`
					fixed 
					left-full 
					top-0
					w-[500px] 
					h-full 
					bg-white 
					transition 
					duration-500
					px-2
					py-3
					flex
					flex-col
					${isOpen ? 'translate-left-full' : ''}`
				}
			>
				{/* header */}
				<div className='header w-full h-[30px] flex justify-end items-center mb-2'>
					<div onClick={handleClose} className='w-[20px] h-[20px] flex items-center justify-center cursor-pointer m-1'>
						<AiOutlineClose size={20}/>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}

Sidebar.defaultProps = {
	isOpen: false,
}