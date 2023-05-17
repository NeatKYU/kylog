import type { NextApiRequest, NextApiResponse } from 'next';
import { createPost } from '@/lib/db/post';
import { findUserByEmail } from '@/lib/db/users';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    let result;

    if (method === 'POST') {
        const { title, content, email, thumbnail } = req.body;

        try {
            const author = await findUserByEmail(email);

            if (!author) {
                res.status(400).json({ error: 'Author not found' });
                return;
            }

            const newPost = await createPost(title, content, author.id, thumbnail);
            return res.status(200).json(newPost);
        } catch (error) {
            console.error('Error creating post:', error);
            return res.status(500).json({ error: 'Error creating post' });
        }
        // result = await createPost();
        // return res.status(200).json(result);
    }
}
