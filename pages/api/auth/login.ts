import type {NextApiRequest, NextApiResponse} from "next";
import { findUser } from '@/lib/db/users';
import { header as jwtHeader, genToken } from '@/lib/jwt';
import { ACCESSTOKEN, REFRESHTOKEN } from '@/lib/const';
import { serialize } from 'cookie';

/**
 * api/auht/login api 핸들링 함수
 * 토큰을 생성해서 쿠키에 넣어주는 역할
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const {name, password} = req.body;

	await findUser(name, password).then((result) => {
		// jwt 만드는 로직 실행해서 로컬에 실어주면 될듯
		if(result.length === 1) {

			const data = result[0];

			const payload = {
				user_id: data.user_id,
				email: data.email,
				phone: data.phone,
				isAdmin: true,
				exp: new Date().getTime() + 1 * 60 * 1000,
			}

			const refreshPayload = {
				...payload,
				exp: new Date().getTime() + 1000 * 60 * 60 * 24,
			}

			const accessToken = genToken(jwtHeader, payload)
			const refreshToken = genToken(jwtHeader, refreshPayload)

			const accessCokie = serialize(ACCESSTOKEN, accessToken, {
				httpOnly: true,
				path: "/",
				maxAge: new Date().getTime() + 1 * 60 * 1000,
			});

			const refreshCokie = serialize(REFRESHTOKEN, refreshToken, {
				httpOnly: true,
				path: "/",
				maxAge: new Date().getTime() + 1000 * 60 * 60 * 24
			});

			res.setHeader("Set-Cookie", [accessCokie, refreshCokie]);

			return res.status(200).json(
				{
					access_token: accessToken,
					refresh_token: refreshToken
				}
			);
		} else {
			return res.status(401).json({
				status: 401,
				message: 'login fail'
			});
		}
	});
  // return res.status(200).json(await user.users())
}