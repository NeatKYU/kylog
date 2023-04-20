import { toRem } from '@/lib/helper'
import styled from 'styled-components'
import { Textarea, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

// editor 
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import dynamic from "next/dynamic";
import { useSession } from 'next-auth/react'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export default function Write() {

	const [title, setTitle] = useState('');
	const [editorValue, setEditorValue] = useState<string | undefined>('내용을 입력해주세요.');
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
			<TitleContainer>
				<Textarea 
					placeholder='제목을 입력해주세요.'
					variant='unstyled' 
					resize={'none'} 
					fontSize={40} 
					fontWeight={'bold'} 
					overflow={'hidden'}
					onChange={handleTitle}
					autoFocus
				/>
			</TitleContainer>
			<Divider />
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
			<ControlContainer>
				<Stack>
					<Button onClick={createPost}>저장하기</Button>
					<Button>취소</Button>
				</Stack>
			</ControlContainer>
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