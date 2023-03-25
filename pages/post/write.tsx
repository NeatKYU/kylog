import { toRem } from '@/lib/helper'
import styled from 'styled-components'
import { Textarea, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

// editor 
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import dynamic from "next/dynamic";

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export default function Write() {

	const [title, setTitle] = useState('');
	const [editorValue, setEditorValue] = useState<string | undefined>('Hello world');

	const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(e.target.value);
	}

	return (
		<div>
			<TitleContainer>
				<Textarea 
					variant='unstyled' 
					resize={'none'} 
					fontSize={40} 
					fontWeight={'bold'} 
					overflow={'hidden'}
					onChange={handleTitle}
				/>
			</TitleContainer>
			<Divider />
			<EditContainer>
				<MdEditor style={{ height: '500px' }} renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>} />
			</EditContainer>
			<ControlContainer>
				<Stack>
					<Button>저장하기</Button>
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