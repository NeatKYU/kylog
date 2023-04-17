// userFunctions.js
import prisma from '@/pages/api/prismaClient';

async function findUserByEmail(email: string) {
	console.log('findUserbyEmail ', email)
  	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		return user;
	} catch (error) {
		console.error("Error finding user:", error);
		throw error;
	}
}

export { findUserByEmail };
