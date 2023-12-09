'use client'

import { CButton, CAvatar, Divider } from '@/components/common'

import { useSession } from 'next-auth/react'
interface ProfileProps {}

export default function Profile(props: ProfileProps) {
    const {} = props
    const { data: session } = useSession()

    return (
        <div className="w-[50rem]">
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <CAvatar src={session?.user.image} size="profile"></CAvatar>
                    <CButton size="lg">이미지 업로드</CButton>
                    <CButton>이미지 제거</CButton>
                </div>
                <Divider className="mx-5" vertical />
                <div className="w-full flex flex-col">
                    <div className="w-full text-3xl mb-4">{session?.user.name}</div>
                    <div className="w-full text-xl">소개글 공간 입니다.</div>
                </div>
            </div>
        </div>
    )
}
