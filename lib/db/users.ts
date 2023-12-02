// userFunctions.js
import prisma from '@/app/api/prismaClient';

async function findUserByEmail(email: string) {
    console.log('findUserbyEmail ', email);
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
}

async function findUserById(id: string) {
    console.log('findUserById ', id);
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
}

export { findUserByEmail, findUserById };
