'use client'

type sizeType = 'sm' | 'md' | 'lg' | 'xl'

interface cIconButtonProps {
    size?: sizeType
    icon: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const CIconButton = (props: cIconButtonProps) => {
    const { size = 'md', icon, onClick } = props

    const sizeClasses = (size: sizeType) => {
        if (size === 'sm') return 'w-8 h-8'
        if (size === 'md') return 'w-10 h-10'
        if (size === 'lg') return 'w-12 h-12'
        if (size === 'xl') return 'w-14 h-14'
    }

    return (
        <div
            className={`
				flex p-1 justify-center items-center 
				rounded cursor-pointer 
				text-black
				dark:text-white
				hover:bg-slate-300
				dark:hover:bg-zinc-900
				${sizeClasses(size)}
			`}
            onClick={onClick}
        >
            {icon}
        </div>
    )
}
