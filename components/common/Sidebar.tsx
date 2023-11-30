// import { AiOutlineClose } from 'react-icons/ai'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ThemeToggleButton } from './ThemeToggleButton';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    children?: React.ReactNode;
}
// TODO 무한 스크롤 구현
export const Sidebar = (props: SidebarProps) => {
    const { isOpen, setIsOpen, children } = props;

    const handleClose = () => {
        setIsOpen(false);
    };

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
				${isOpen ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
					fixed 
					left-full 
					top-0
					w-[500px] 
					h-full 
					dark:bg-zinc-700
					bg-slate-200
					transition 
					duration-500
					px-2
					py-3
					flex
					flex-col
					overflow-y-auto
					${isOpen ? 'translate-left-full' : ''}`}
            >
                {/* header */}
                <div className="header w-full h-[30px] flex justify-end items-center mb-2">
                    <div
                        onClick={handleClose}
                        className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer m-1"
                    >
                        <XMarkIcon />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

Sidebar.defaultProps = {
    isOpen: false,
};
