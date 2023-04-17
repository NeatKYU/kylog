// postFunctions.js
import prisma from '@/pages/api/prismaClient';

async function createPost(title: string, content: string, authorId: string, thumbnail: string) {
	try {
		const newPost = await prisma.post.create({
			data: {
				title: title,
				content: content,
				authorId: authorId,
				thumbnail: thumbnail,
				likes: 0,
			},
		});

		return newPost;
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}

export { createPost };
