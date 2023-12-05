'use client'
// lib
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// components
import { Header } from '@/components/layout/header/Header'
import {
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    PencilSquareIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
    UserGroupIcon,
} from '@heroicons/react/24/solid'
import { BodyLayout } from '@/components/layout/body/Body'
import { ThemeToggleButton } from '../common/ThemeToggleButton'
import { CButton, CAvatar, CInput, CDropdown } from '@/components/common'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    const authMenuList = (status: 'authenticated' | 'loading' | 'unauthenticated') => {
        return status === 'authenticated' ? (
            <CDropdown.Menu>
                <CDropdown.Item icon={<UserCircleIcon className="w-5" />}>
                    <span>프로필</span>
                </CDropdown.Item>
                <CDropdown.Item icon={<ArrowRightOnRectangleIcon className="w-5" />} onClick={() => signOut()}>
                    <div>로그아웃</div>
                </CDropdown.Item>
            </CDropdown.Menu>
        ) : (
            <CDropdown.Menu>
                <CDropdown.Item icon={<UserGroupIcon className="w-5" />} onClick={() => router.push('/register')}>
                    <div>회원가입</div>
                </CDropdown.Item>
                <CDropdown.Item
                    icon={<ArrowLeftOnRectangleIcon className="w-5" />}
                    onClick={() => router.push('/login')}
                >
                    <div>로그인</div>
                </CDropdown.Item>
            </CDropdown.Menu>
        )
    }

    return (
        <div>
            <Header logo="@/assets/img/logo.png" title="">
                <CInput size="md" icon={<MagnifyingGlassIcon className="w-5" />} />
                <ThemeToggleButton />
                <CButton
                    size="lg"
                    onClick={() => router.push('/post/write')}
                    leftIcon={<PencilSquareIcon className="w-5" />}
                >
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
            <BodyLayout>{props.children}</BodyLayout>
        </div>
    )
}
