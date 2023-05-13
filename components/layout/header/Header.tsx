import { useRouter } from 'next/router';
import { CHeader } from '@/components/common/CustomHeader';

interface HeaderProps {
    logo: string;
    title: string;
    children: React.ReactNode;
}

export const Header = ({ logo, title, children }: HeaderProps) => {
    const router = useRouter();

    const goHome = () => {
        router.push('/');
    };

    return (
        <CHeader>
            <CHeader.Brand onClick={goHome} className="cursor-pointer">
                <span>KYLOG</span>
            </CHeader.Brand>
            <CHeader.Content>{children}</CHeader.Content>
        </CHeader>
    );
};
