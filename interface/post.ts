import { user } from '@/interface/common'
export interface post {
	id: string;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	authorId: string;
	author?: user;
	thumbnail: string;
	likes: number;
}