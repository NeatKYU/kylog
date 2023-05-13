// lib
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

// components
import { Header } from '@/components/layout/header/Header';
import { IoLogOutOutline } from 'react-icons/io5';
import { BiEdit, BiLogIn, BiSearch } from 'react-icons/bi';
import { BsPersonCircle, BsFillPersonBadgeFill } from 'react-icons/bs';
import { BodyLayout } from '@/components/layout/body/Body';
import { ThemeToggleButton } from '../common/ThemeToggleButton';
import { CButton, CAvatar, CInput, CDropdown } from '@/components/common';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const onClickcheck = () => {
        console.log('check');
    };

    const authMenuList = (status: 'authenticated' | 'loading' | 'unauthenticated') => {
        return status === 'authenticated' ? (
            <CDropdown.Menu>
                <CDropdown.Item icon={<BsPersonCircle size={20} />}>
                    <span>프로필</span>
                </CDropdown.Item>
                <CDropdown.Item icon={<IoLogOutOutline size={20} />} onClick={() => signOut()}>
                    <div>로그아웃</div>
                </CDropdown.Item>
            </CDropdown.Menu>
        ) : (
            <CDropdown.Menu>
                <CDropdown.Item icon={<BsFillPersonBadgeFill size={20} />} onClick={() => router.push('/register')}>
                    <div>회원가입</div>
                </CDropdown.Item>
                <CDropdown.Item icon={<BiLogIn size={20} />} onClick={() => router.push('/login')}>
                    <div>로그인</div>
                </CDropdown.Item>
            </CDropdown.Menu>
        );
    };

    return (
        <div>
            <Header logo="@/assets/img/logo.png" title="">
                <CInput size="md" icon={<BiSearch />} />
                <ThemeToggleButton />
                <CButton size="lg" onClick={() => router.push('/post/write')} leftIcon={<BiEdit />}>
                    글쓰기
                </CButton>
                <CDropdown>
                    <CDropdown.Trigger>
                        <CAvatar
                            src={status === 'authenticated' ? session.user.image : '/defaultUser.jpeg'}
                            size="lg"
                        />
                    </CDropdown.Trigger>
                    {authMenuList(status)}
                </CDropdown>
            </Header>
            <BodyLayout {...props}>{props.children}</BodyLayout>
        </div>
    );
};
