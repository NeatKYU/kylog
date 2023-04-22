import styled from 'styled-components'
import { common } from '@/interface/common';
import { toRem } from '@/lib/helper';

interface BodyLayoutProps{
	children: React.ReactNode;
}

export const BodyLayout = ({ children }: BodyLayoutProps) => {
	return (
		<div className='flex justify-center w-full px-20 py-5'>
			<div className='w-full'>
				{children}
			</div>
		</div>
	)
}