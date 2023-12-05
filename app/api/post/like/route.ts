import type { NextApiRequest, NextApiResponse } from 'next'
import { incrementLike, deleteLike } from '@/lib/db/post'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/api/prismaClient'
// import { findUserByEmail } from '@/lib/db/users'

export async function GET() {}
type POSTRequestBody = {
    userId: string
    postId: string
}
export async function POST(req: NextRequest) {
    const { userId, postId }: POSTRequestBody = await req.json()

    try {
        const like = await prisma.like.findFirst({
            where: {
                userId,
                postId,
            },
        })

        // already like
        if (like) {
            await prisma.like.delete({
                where: {
                    id: like.id,
                },
            })
            return NextResponse.json({ message: 'Success like count Deleted', like: -1 }, { status: 200 })
        } else {
            await prisma.like.create({
                data: {
                    userId,
                    postId,
                },
            })
            return NextResponse.json({ message: 'Success like count Increment', like: 1 }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ msseage: 'Fail like count Increment' }, { status: 500 })
    }
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

// 	const { method } = req;
// 	// let result;

// 	if(method === 'POST') {
// 		const { userId, postId } = req.body;

// 		try {
// 			const likes = await incrementLike(userId, postId);
// 			return res.status(200).json({like: likes});
// 		} catch (error) {
// 			console.error('Error increment like:', error);
// 			return res.status(500).json({ error: 'Error increment like' });
// 		}
// 	}

// 	if(method === 'DELETE') {
// 		const { userId, postId } = req.body;
// 		try {
// 			const likes = await deleteLike(userId, postId);
// 			return res.status(200).json({like: likes});
// 		} catch (error) {
// 			console.error('Error delete like:', error);
// 			return res.status(500).json({ error: 'Error delete like' });
// 		}
// 	}

// 	return res.status(200).json({message: '현재는 post, delete 만 구현되어있음'});
// }
