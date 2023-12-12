import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CHeader } from '@/components/common/CustomHeader'

interface HeaderProps {
    logo: string
    title: string
    children: React.ReactNode
}

export const Header = ({ logo, title, children }: HeaderProps) => {
    const router = useRouter()

    const goHome = () => {
        router.push('/')
    }

    return (
        <CHeader>
            <CHeader.Brand onClick={goHome} className="cursor-pointer">
                <img className="w-14 h-14" src="/kylogo.png" />
            </CHeader.Brand>
            <CHeader.Content>{children}</CHeader.Content>
        </CHeader>
    )
}
