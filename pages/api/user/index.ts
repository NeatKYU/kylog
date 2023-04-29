// import type {NextApiRequest, NextApiResponse} from 'next'
// import { findUserById } from '@/lib/db/users'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

// 	const { method } = req;
// 	let result;

// 	if(method === 'POST') {
// 		const { id } = req.body;

// 		try {
// 			const author = await findUserById(email);
	  
// 			if (!author) {
// 			  res.status(400).json({ error: 'Author not found' });
// 			  return;
// 			}
	  
// 			const newPost = await createPost(title, content, author.id, thumbnail);
// 			res.status(201).json(newPost);
// 		  } catch (error) {
// 			console.error('Error creating post:', error);
// 			res.status(500).json({ error: 'Error creating post' });
// 		  }
// 		// result = await createPost();
// 		// return res.status(200).json(result);
// 	} 
	
// 	return res.status(200).json(result);
// }