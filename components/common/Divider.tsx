interface DividerProps {
    vertical?: boolean
    className?: string
}

export const Divider = (props: DividerProps) => {
    const { vertical, className } = props
    return (
        <div
            className={`
			${className}
			${vertical ? 'h-auto w-[1px]' : 'w-full h-[1px]'}
			bg-black dark:bg-white
		`}
        ></div>
    )
}

Divider.defalutProps = {
    vertical: false,
}
