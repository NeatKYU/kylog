'use client'

interface cHeaderProps {
    children: React.ReactNode
}
interface cHeaderChildrenProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
    className?: string
}

export const CHeader = (props: cHeaderProps) => {
    const { children } = props
    return (
        <div
            className={`
				bg-white/20
				dark:bg-transparent
				w-full 
				h-[75px] 
				flex 
				justify-center 
				items-center
				sticky
				top-0
				border-b
				dark:border-indigo-500/10
				z-[99]
                backdrop-blur-sm
			`}
        >
            <div
                className={`
					w-full
					h-full
					lg:w-[840px]
					xl:w-[1120px] 
					2xl:w-[1400px]
					flex
					justify-between
					px-5
				`}
            >
                {children}
            </div>
        </div>
    )
}

const Brand = (props: cHeaderChildrenProps) => {
    const { children, onClick, className } = props
    return (
        <div className={'flex justify-center items-center ' + className} onClick={onClick}>
            {children}
        </div>
    )
}

const Content = (props: cHeaderChildrenProps) => {
    const { children, className, onClick } = props
    return (
        <div className={'flex justify-cetner items-center gap-3 ' + className} onClick={onClick}>
            {children}
        </div>
    )
}

CHeader.Brand = Brand
CHeader.Content = Content

CHeader.defalutProps = {}
