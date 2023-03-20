import { toRem } from '@/lib/helper'
import styled from 'styled-components'
import { Divider, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Write() {

	const [title, setTitle] = useState('');

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
			<Divider marginTop={4} marginBottom={4} borderWidth={2}/>
		</div>
	)
}

const TitleContainer = styled.div`
	width: 100%;
	height: auto;
	padding-right: ${toRem(50)};
`