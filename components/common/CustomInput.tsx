'use client';

import { sizeType } from '@/interface/common';

interface cInputProps {
    size: sizeType;
    icon?: React.ReactNode;
    placeHolder?: string;
    fullWidth?: boolean;
    type?: React.HTMLInputTypeAttribute;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

export const CInput = (props: cInputProps) => {
    const { size, icon, onChange, placeHolder, fullWidth, type, className } =
        props;

    const sizeClasses = (size: sizeType) => {
        if (size === 'sm') return fullWidth ? 'w-full h-8' : 'w-64 h-8';
        if (size === 'md') return fullWidth ? 'w-full h-10' : 'w-64 h-10';
        if (size === 'lg') return fullWidth ? 'w-full h-12' : 'w-64 h-12';
        if (size === 'xl') return fullWidth ? 'w-full h-14' : 'w-64 h-14';
    };

    return (
        <div
            className={`
				flex justify-center items-center
				rounded-lg 
				py-2 px-3 border
				dark:border-zinc-600
				${sizeClasses(size)}
				${className ?? ''}
			`}
        >
            <div className="mr-2">{icon}</div>
            <input
                className="w-full outline-none bg-transparent"
                type={type}
                placeholder={placeHolder}
                onChange={onChange}
            />
        </div>
    );
};

CInput.defalutProps = {
    size: 'md',
};
