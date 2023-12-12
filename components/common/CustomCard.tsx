'use client'

interface cCardProps {
    className?: string
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

interface cCardChildrenProps {
    className?: string
    children?: React.ReactNode
}

export const CCard = (props: cCardProps) => {
    const { className, children, onClick } = props

    return (
        <div
            className={`
				bg-zinc-50
				dark:bg-zinc-600
				flex flex-col
				rounded-lg
				border
				dark:border-zinc-500
                px-5 py-5
                gap-2
				${className ?? ''}
			`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

const Header = (props: cCardChildrenProps) => {
    const { children, className } = props
    return (
        <div
            className={`
				flex items-center basis-3/12
				${className ?? ''}
			`}
            style={{ flex: 3 }}
        >
            {children}
        </div>
    )
}

const Image = (props: cCardChildrenProps) => {
    const { children, className } = props
    return (
        <div
            className={`
				w-full relative
				${className ?? ''}	
			`}
            style={{ flex: 9 }}
        >
            {children}
        </div>
    )
}

const Body = (props: cCardChildrenProps) => {
    const { children, className } = props
    return (
        <div
            className={`
				flex
				${className ?? ''}
			`}
            style={{ flex: 7 }}
        >
            {children}
        </div>
    )
}

const Footer = (props: cCardChildrenProps) => {
    const { children, className } = props
    return (
        <div
            className={`
				flex
				${className ?? ''}
			`}
            style={{ flex: 1 }}
        >
            {children}
        </div>
    )
}

CCard.Header = Header
CCard.Image = Image
CCard.Body = Body
CCard.Footer = Footer

CCard.defalutProps = {}
