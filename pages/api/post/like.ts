import type { NextApiRequest, NextApiResponse } from 'next';
import { incrementLike, deleteLike } from '@/lib/db/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method === 'POST') {
        const { userId, postId } = req.body;

        try {
            const likes = await incrementLike(userId, postId);
            return res.status(200).json({ like: likes });
        } catch (error) {
            console.error('Error increment like:', error);
            return res.status(500).json({ error: 'Error increment like' });
        }
    }

    if (method === 'DELETE') {
        const { userId, postId } = req.body;
        try {
            const likes = await deleteLike(userId, postId);
            return res.status(200).json({ like: likes });
        } catch (error) {
            console.error('Error delete like:', error);
            return res.status(500).json({ error: 'Error delete like' });
        }
    }

    return res.status(200).json({ message: '현재는 post, delete 만 구현되어있음' });
}
