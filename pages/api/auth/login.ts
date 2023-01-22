import type {NextApiRequest, NextApiResponse} from "next";
import { findUser } from '@/lib/users';
import { header as jwtHeader, genToken } from '@/lib/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const {name, password} = req.body;

	await findUser(name, password).then((result) => {
		// jwt 만드는 로직 실행해서 로컬에 실어주면 될듯
		if(result.length === 1) {

			const data = result[0];

			const payload = {
				name: data.name,
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

			return res.status(200).json(
				{
					access_token: accessToken,
					refreshToken: refreshToken
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