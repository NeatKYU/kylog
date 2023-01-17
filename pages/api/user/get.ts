import type {NextApiRequest, NextApiResponse} from "next";
import * as user from 'lib/users';
// import {PrismaClient} from "@prisma/client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(await user.users())
}