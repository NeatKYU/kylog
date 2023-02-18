import type {NextApiRequest, NextApiResponse} from "next";
import { posts, postDetail } from '@/lib/db/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const { method } = req;
	let result;

	if(method === 'GET') {
		result = await posts();
		return res.status(200).json(result);
	} 
	
	return res.status(200).json(result);
}