'use client'

type sizeType = 'sm' | 'md' | 'lg' | 'xl'

interface cButtonProps {
    size?: sizeType
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
    bordered?: boolean
}

export const CButton = (props: cButtonProps) => {
    const { size = 'md', children, onClick, leftIcon, rightIcon, className, bordered } = props

    const sizeClasses = (size: sizeType) => {
        if (size === 'sm') return 'min-w-[3.5rem] h-8'
        if (size === 'md') return 'min-w-[4rem] h-10'
        if (size === 'lg') return 'min-w-[4.5rem] h-12'
        if (size === 'xl') return 'min-w-[5rem] h-14'
    }

    return (
        <div
            className={`
				flex px-2 py-1 justify-center items-center
				text-sm
				rounded cursor-pointer 
				bg-indigo-50
				dark:bg-indigo-500
				text-black
				dark:text-white
				hover:bg-slate-200
				dark:hover:bg-indigo-700
				${sizeClasses(size)}
				${className ?? ''}
                ${bordered ? 'border' : ''}
			`}
            onClick={onClick}
        >
            {leftIcon ? <div className="mr-1">{leftIcon}</div> : ''}
            {children}
            {rightIcon ? <div className="ml-1">{rightIcon}</div> : ''}
        </div>
    )
}
