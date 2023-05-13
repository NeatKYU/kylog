// postFunctions.js
import prisma from '@/pages/api/prismaClient';

async function createComment(authorId: string, postId: string, content: string) {
    try {
        const newComment = await prisma.comment.create({
            data: {
                authorId,
                postId,
                content,
            },
        });

        return newComment;
    } catch (error) {
        console.error('Error creating commnet', error);
        throw error;
    }
}

export { createComment };
