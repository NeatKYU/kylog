import { CButton, CTextarea } from '@/components/common';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';

// editor
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false,
});

export default function Write() {
    const router = useRouter();

    const { theme } = useNextTheme();
    const [title, setTitle] = useState('');
    const [editorValue, setEditorValue] = useState<string | undefined>('');
    const { data: session } = useSession();

    const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    };

    const handleGoBack = () => {
        router.push('/');
    };

    const createPost = () => {
        axios
            .post('/api/post', {
                title: title,
                content: editorValue,
                email: session!.user.email,
                thumbnail: '',
            })
            .then((res) => {
                if (res.status === 200) {
                    router.push('/');
                } else {
                    // TODO go to error page
                }
            })
            .catch((err) => {
                console.log(err);
                // TODO go to error page OR alert error message
            });
    };

    const uploadFile = async (file: File) => {
        const { data } = await axios.post('/api/s3/upload', {
            name: file.name,
            type: file.type,
        });

        await axios.put(data.signedUrl, file, {
            headers: {
                'Content-Type': file.type,
                'Access-Control-Allow-Origin': '*',
            },
        });

        return data.cleanUrl;
    };

    return (
        <div className="w-full">
            <CTextarea
                className="my-5 text-3xl w-full"
                onChange={handleTitle}
                rows={2}
                placeHolder="제목을 입력해주세요."
            />
            <div className={`w-full h-auto ${theme === 'dark' ? 'editor-custom' : ''}`}>
                <MdEditor
                    style={{ height: '500px' }}
                    placeholder="내용을 입력해주세요."
                    value={editorValue}
                    onChange={(v) => setEditorValue(v.text)}
                    renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                    onImageUpload={uploadFile}
                />
            </div>
            <div className="w-full flex justify-end my-5 gap-3">
                <CButton size="xl" onClick={createPost}>
                    저장하기
                </CButton>
                <CButton size="xl" onClick={handleGoBack}>
                    취소
                </CButton>
            </div>
        </div>
    );
}
