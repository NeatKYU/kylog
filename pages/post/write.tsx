import { toRem } from '@/lib/helper'
import styled from 'styled-components'
import { Textarea, Button } from '@nextui-org/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

// editor 
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import dynamic from "next/dynamic";
import { useSession } from 'next-auth/react'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export default function Write() {

	const router = useRouter();
	const [title, setTitle] = useState('');
	const [editorValue, setEditorValue] = useState<string | undefined>('');
	const {data: session} = useSession();

	const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(e.target.value);
	}

	const createPost = () => {
		axios.post('/api/post', {
			title: title,
			content: editorValue,
			email: session!.user.email,
			thumbnail: '',
		}).then((res) => {
			if(res.status === 200) {
				router.push('/')
			} else {
				// TODO go to error page
			}
		}).catch((err) => {
			console.log(err)
			// TODO go to error page OR alert error message
		})
	}

	const uploadFile = async (file: File) => {
		const { data } = await axios.post('/api/s3/upload', {
		  name: file.name,
		  type: file.type,
		})
	
		await axios.put(data.signedUrl, file, {
		  headers: {
			'Content-Type': file.type,
			'Access-Control-Allow-Origin': '*',
		  },
		});
	
		return data.cleanUrl;
	  }

	return (
		<div>
			<Textarea
				className='my-5'
				style={{fontSize: '30px'}}
				onInput={handleTitle}
				rows={2}
				maxRows={2}
				placeholder='제목을 입력해주세요.'
				fullWidth
				autoFocus
				aria-label='title textarea'
			/>
			<EditContainer>
				<MdEditor 
					style={{ height: '500px' }}
					placeholder='내용을 입력해주세요.'
					value={editorValue}
					onChange={(v) => setEditorValue(v.text)}
					renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>} 
					onImageUpload={uploadFile}
				/>
			</EditContainer>
			<div className='w-full flex justify-end my-5 gap-3'>
				<Button auto onClick={createPost}>저장하기</Button>
				<Button auto>취소</Button>
			</div>
		</div>
	)
}

const TitleContainer = styled.div`
	width: 100%;
	height: auto;
	padding-right: ${toRem(50)};
`

const EditContainer = styled.div`
	width: 100%;
	height: auto;
	
	font-size: ${toRem(25)} !important;
`

const ControlContainer = styled.div`
	width: 100%;
	height: ${toRem(50)};

	margin-top: ${toRem(30)};
`

const Divider = styled.div`
	width: 100%;
	height: 3px;

	background-color: #a1a1a1;

	margin: ${toRem(20)} 0;
`