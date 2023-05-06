import type {NextApiRequest, NextApiResponse} from 'next'
import { createComment } from '@/lib/db/comment'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const { method } = req;
	let result;

	if(method === 'POST') {
		const { content, postId, authorId } = req.body;

		try {
			const newComment = await createComment(authorId, postId, content);
	  
			return res.status(200).json(newComment);
		  } catch (error) {
			console.error('Error creating comment:', error);
			return res.status(500).json({ error: 'Error creating comment' });
		  }
	} 
	
	return res.status(200).json(result);
}