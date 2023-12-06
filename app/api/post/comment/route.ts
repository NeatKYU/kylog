import prisma from '@/app/api/prismaClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {}
type POSTRequestBody = {
    authorId: string
    postId: string
    content: string
}
export async function POST(req: NextRequest) {
    const { authorId, postId, content }: POSTRequestBody = await req.json()

    try {
        const comment = await prisma.comment.create({
            data: {
                authorId,
                postId,
                content,
            },
        })

        return NextResponse.json({ message: 'Success create comment', ...comment }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Fail create comment' }, { status: 500 })
    }
}
