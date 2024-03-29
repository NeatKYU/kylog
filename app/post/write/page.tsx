'use client'

import { CButton, CTextarea } from '@/components/common'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'

// editor
import 'react-markdown-editor-lite/lib/index.css'
import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false,
})

export default function Write() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [editorValue, setEditorValue] = useState<string | undefined>('')
    const { data: session } = useSession()
    const createPostMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/post', {
                title,
                content: editorValue,
                email: session!.user.email,
                // TODO 썸네일 기능 추가
                thumbnail: '',
            })
            return response.data
        },
        onSuccess() {
            router.push('/')
        },
    })

    const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
    }

    const handleGoBack = () => {
        router.push('/')
    }

    const handleCreatePost = () => {
        createPostMutation.mutate()
    }

    // TODO change tanstack query
    const uploadFile = async (file: File) => {
        const { data } = await axios.post('/api/image', {
            name: file.name,
            type: file.type,
        })

        await axios.put(data.signedUrl, file, {
            headers: {
                'Content-Type': file.type,
                'Access-Control-Allow-Origin': '*',
            },
        })

        return data.cleanUrl
    }

    return (
        <div className="w-full">
            <CTextarea
                className="my-5 text-3xl w-full"
                onChange={handleTitle}
                rows={2}
                placeHolder="제목을 입력해주세요."
            />
            <div className="w-full h-auto">
                <MdEditor
                    style={{ height: '500px' }}
                    placeholder="내용을 입력해주세요."
                    value={editorValue}
                    onChange={(v) => setEditorValue(v.text)}
                    renderHTML={(text) => (
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                            {text}
                        </ReactMarkdown>
                    )}
                    onImageUpload={uploadFile}
                />
            </div>
            <div className="w-full flex justify-end my-5 gap-3">
                <CButton size="xl" onClick={handleCreatePost}>
                    저장하기
                </CButton>
                <CButton size="xl" onClick={handleGoBack}>
                    취소
                </CButton>
            </div>
        </div>
    )
}
