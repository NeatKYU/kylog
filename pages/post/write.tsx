import { toRem } from '@/lib/helper'
import styled from 'styled-components'
import { Textarea, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

// editor 
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

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
				<MDEditor height={500} value={editorValue} onChange={setEditorValue} />
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

	.w-md-editor-text-pre > code,
	.w-md-editor-text-input {
		font-size: 20px !important;
		line-height: 21px !important;
	}
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