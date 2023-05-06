// postFunctions.js
import prisma from '@/app/api/prismaClient'

async function createComment(authorId: string, postId: string, content: string) {
    try {
        const newComment = await prisma.comment.create({
            data: {
                authorId,
                postId,
                content,
            },
        })

        return newComment
    } catch (error) {
        console.error('Error creating commnet', error)
        throw error
    }
}

// async function incrementLike(userId: string, postId: string) {
// 	try {
// 		const like = await prisma.like.findFirst({
// 			where: {
// 				userId,
// 				postId,
// 			},
// 		});

// 		// already like
// 		if (like) {
// 			return await deleteLike(userId, postId)
// 		}

// 		await prisma.like.create({
// 			data: {
// 				userId,
// 				postId,
// 			},
// 		});

// 		return 1;
// 	} catch (error) {
// 		console.error("Error increment like", error);
// 		throw error;
// 	}
// }

// async function deleteLike(userId: string, postId: string) {
// 	try {
// 		const likeToDelete = await prisma.like.findFirst({
// 			where: {
// 				userId,
// 				postId,
// 			},
// 		});

// 		if (!likeToDelete) {
// 			console.log('Like not found or already deleted');
// 			return 0;
// 		}
// 		await prisma.like.delete({
// 			where: {
// 				id: likeToDelete.id,
// 			},
// 		});

// 		return -1;
// 	} catch (error) {
// 		console.error("Error delete like:", error);
// 		throw error;
// 	}
// }

export { createComment }
