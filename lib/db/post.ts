import postgres from 'postgres';
import { post } from '@/interface/post';

const sql = postgres(process.env.DATABASE_URL as string);

export async function posts() {
  return await sql<post[]>`
    SELECT * FROM post
  `
}

export async function postDetail(postId: string) {
	return await sql<post[]>`
		SELECT * FROM post WHERE post_id=${postId}
	`
}