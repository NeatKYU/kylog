import S3 from 'aws-sdk/clients/s3'
import { NextRequest, NextResponse } from 'next/server'

const s3 = new S3({
    region: 'ap-northeast-2',
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    signatureVersion: 'v4',
})

const config = {
    api: {
        bodyParser: {
            sizeLimit: '8mb',
        },
    },
}
export async function POST(req: NextRequest) {
    const { name, type } = await req.json()
    try {
        const fileParams = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: name,
            ContentType: type,
        }

        const signedUrl = await s3.getSignedUrlPromise('putObject', fileParams)
        const cleanUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${s3.config.region}.amazonaws.com/${fileParams.Key}`

        return NextResponse.json({ signedUrl, cleanUrl }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Fail upload image in server' }, { status: 500 })
    }
}
