'use client'

import { sizeType } from '@/interface/common'

interface cAvatarProps {
    src: string
    size?: sizeType | 'profile'
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode
}

export const CAvatar = (props: cAvatarProps) => {
    const { size = 'md', src, onClick, children } = props

    const sizeClasses = (size: sizeType | 'profile') => {
        if (size === 'sm') return 'min-w-[1.5rem] w-6 h-6'
        if (size === 'md') return 'min-w-[2rem] w-8 h-8'
        if (size === 'lg') return 'min-w-[2.5rem] w-10 h-10'
        if (size === 'xl') return 'min-w-[3rem] w-12 h-12'
        if (size === 'profile') return 'min-w-[5rem] w-40 h-40'
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
                alt="Avatar"
                src={src}
                className={`
					rounded-full
					cursor-pointer
				`}
            />
            {children}
        </div>
    )
}
