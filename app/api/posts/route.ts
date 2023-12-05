import prisma from '../prismaClient'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                comments: true,
                likes: true,
            },
        })
        return NextResponse.json(posts, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
