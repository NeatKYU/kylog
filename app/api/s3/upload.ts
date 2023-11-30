import { NextApiRequest, NextApiResponse } from 'next'
import S3 from 'aws-sdk/clients/s3'

const s3 = new S3({
    region: 'ap-northeast-2',
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    signatureVersion: 'v4',
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '8mb',
        }
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'method not allowed' });
    }
    const { name, type } = req.body;
    
    try {
        
        const fileParams = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: name,
            ContentType: type,
        };
        
        const signedUrl = await s3.getSignedUrlPromise('putObject', fileParams);
        const cleanUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${s3.config.region}.amazonaws.com/${fileParams.Key}`;
      

        res.status(200).json({ signedUrl, cleanUrl });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
}