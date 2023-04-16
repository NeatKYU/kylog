import type {NextApiRequest, NextApiResponse} from "next";
import * as user from '@/lib/db/users';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method === 'GET') {
    return res.status(200).json(await user.users())
  } else if(method === 'POST') {
    const { id, password } = req.body;
    console.log('name, password', id, password)
    if(id && password) {
      console.log('insert user')
      await user.insertUser(id, password).then((result) => {
        console.log('result = ', result)
        if(result) {
          return res.status(200)
        } else {
          return res.status(200).json({
            message: 'insert fail'
          })
        }
      })
      // return res.status(200).json(await user.insertUser(name, password));
    } else if(id) {
      await user.validateUser(id).then((result) => {
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