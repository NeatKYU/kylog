import type {NextApiRequest, NextApiResponse} from "next";
import * as user from '@/lib/db/users';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method === 'GET') {
    return res.status(200).json(await user.users())
  } else if(method === 'POST') {
    const { name, password } = req.body;
    if(name && password) {
      return res.status(200).json(await user.findUser(name, password));
    } else if(name) {
      await user.validateUser(name).then((result) => {
        if(result.length > 0) {
          // 등록된 유저 있음
          return res.status(200).json(false);
        } else {
          // 등록된 유저 없음
          return res.status(200).json(true);
        }
      })
    } else {
      return res.status(200).json(false)
    }
  }
}