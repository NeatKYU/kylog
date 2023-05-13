type sizeType = 'sm' | 'md' | 'lg' | 'xl';

interface cButtonProps {
    size: sizeType;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

export const CButton = (props: cButtonProps) => {
    const { size, children, onClick, leftIcon, rightIcon, className } = props;

    const sizeClasses = (size: sizeType) => {
        if (size === 'sm') return 'min-w-[3.5rem] h-6';
        if (size === 'md') return 'min-w-[4rem] h-7';
        if (size === 'lg') return 'min-w-[4.5rem] h-8';
        if (size === 'xl') return 'min-w-[5rem] h-9';
    };

    return (
        <div
            className={`
				flex px-2 py-1 justify-center items-center
				text-sm
				rounded cursor-pointer 
				bg-slate-200
				dark:bg-zinc-600
				text-black
				dark:text-white
				hover:bg-slate-300
				dark:hover:bg-zinc-900
				${sizeClasses(size)}
				${className ?? ''}
			`}
            onClick={onClick}
        >
            {leftIcon ? <div className="mr-1">{leftIcon}</div> : ''}
            {children}
            {rightIcon ? <div className="ml-1">{rightIcon}</div> : ''}
        </div>
    );
};

CButton.defaultProps = {
    size: 'md',
};
