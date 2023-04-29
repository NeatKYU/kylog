interface BodyLayoutProps{
	children: React.ReactNode;
}

export const BodyLayout = ({ children }: BodyLayoutProps) => {
	// Breakpoint 
	// sm	640px
	// md	768px
	// lg	1024px
	// xl	1280px
	// 2xl	1536px

	return (
		<div 
			className='
				flex 
				justify-center 
				lg:mx-auto
				my-5
				w-full
				lg:w-[840px]
				xl:w-[1120px] 
				2xl:w-[1400px]'
		>
			{children}
		</div>
	)
}