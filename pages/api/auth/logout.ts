import type {NextApiRequest, NextApiResponse} from "next";
import { ACCESSTOKEN, REFRESHTOKEN } from '@/lib/const';
import { serialize } from 'cookie';


/**
 * api/auht/login api 핸들링 함수
 * 토큰을 생성해서 쿠키에 넣어주는 역할
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	
	const accessCokie = serialize(ACCESSTOKEN, 'deleted', {
		httpOnly: true,
		path: "/",
		maxAge: 0,
	});
	
	const refreshCokie = serialize(REFRESHTOKEN, 'deleted', {
		httpOnly: true,
		path: "/",
		maxAge: 0
	});
	
	res.setHeader("Set-Cookie", [accessCokie, refreshCokie]);
	
	if(req.cookies.accessToken) req.cookies.accessToken = '';
	if(req.cookies.refreshToken) req.cookies.refreshToken = '';
	
	return res.status(200).json({
		message: 'logout!'
	});
  // return res.status(200).json(await user.users())
}