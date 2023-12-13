'use client'

import { createContext, useContext, useState, useRef, useEffect } from 'react'

interface cDropdownProps {
    className?: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode
}

interface cDropdownChildrenProps {
    className?: string
    icon?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode
}

const DropdownContext = createContext<{
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}>({
    isShow: false,
    setIsShow: () => {},
})

export const CDropdown = (props: cDropdownProps) => {
    const { className, children, onClick } = props
    const [isShow, setIsShow] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsShow(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <DropdownContext.Provider value={{ isShow, setIsShow }}>
            <div
                ref={dropdownRef}
                className={`
					${className ?? ''}
					relative
				`}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

const Trigger = (props: cDropdownChildrenProps) => {
    const { className, children, onClick } = props
    const { isShow, setIsShow } = useContext(DropdownContext)

    return <div onClick={() => setIsShow(!isShow)}>{children}</div>
}

const Menu = (props: cDropdownChildrenProps) => {
    const { className, children } = props
    const { isShow, setIsShow } = useContext(DropdownContext)

    return (
        <div
            className={`
				${className ?? ''}
				flex flex-col py-2 px-3 border dark:border-none rounded-lg bg-white dark:bg-indigo-500
				min-w-[15rem] w-auto h-auto absolute top-full mt-2 right-0
				text-lg dark:text-white
				${isShow ? '' : 'hidden'}
			`}
            onClick={() => setIsShow(false)}
        >
            {children}
        </div>
    )
}

const Item = (props: cDropdownChildrenProps) => {
    const { className, children, onClick, icon } = props
    return (
        <div
            className={`
				${className ?? ''}
				flex items-center
				hover:bg-gray-100
				dark:hover:bg-indigo-700
				cursor-pointer
				rounded-lg px-2 py-1
			`}
            onClick={onClick}
        >
            <div className="mr-2">{icon}</div>
            {children}
        </div>
    )
}

CDropdown.Menu = Menu
CDropdown.Item = Item
CDropdown.Trigger = Trigger

CDropdown.defalutProps = {}
