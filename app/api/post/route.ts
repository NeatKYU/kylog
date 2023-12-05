import prisma from '../prismaClient'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const postId: string | null = searchParams.get('id')

    if (!postId) return NextResponse.json({ message: 'please input post id' }, { status: 500 })
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
            include: {
                author: true,
                likes: true,
                comments: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        author: true,
                    },
                },
            },
        })
        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}

type POSTtRequestBody = {
    email: string
    title: string
    content: string
    thumbnail: string
}

// write post api
export async function POST(req: NextRequest) {
    const { email, title, content, thumbnail }: POSTtRequestBody = await req.json()

    try {
        const author = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        if (!author) {
            return NextResponse.json({ message: 'Author not found' }, { status: 400 })
        }

        await prisma.post.create({
            data: {
                title,
                content,
                authorId: author.id,
                thumbnail,
            },
        })

        return NextResponse.json(200)
    } catch (error) {
        return NextResponse.json({ message: 'fail create post' }, { status: 500 })
    }
}
