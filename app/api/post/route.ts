import prisma from '../prismaClient';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                comments: true,
                likes: true,
            },
        });
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}

interface postBody {
    title: string;
    content: string;
    email: string;
    thumbnail: string;
}
export async function POST(body: postBody) {
    const { title, content, email, thumbnail } = body;

    try {
        const author = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!author) {
            return NextResponse.json({ message: 'Author not found' }, { status: 400 });
        }

        await prisma.post.create({
            data: {
                title,
                content,
                authorId: author.id,
                thumbnail,
            },
        });

        return NextResponse.json(200);
    } catch (error) {
        return NextResponse.json({ message: 'fail create post' }, { status: 500 });
    }
}
