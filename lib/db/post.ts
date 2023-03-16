import postgres from 'postgres';
import { post } from '@/interface/post';

const sql = postgres(process.env.DATABASE_URL as string);

export async function posts() {
  return await sql<post[]>`
		SELECT a.*, b.user_id as username
		FROM post as a
		LEFT OUTER JOIN blog_user as b ON a.user_uid = b.uid
  `
}

export async function postDetail(postId: string) {
	return await sql<post[]>`
		SELECT a.*, b.user_id as username
		FROM post as a, blog_user as b
		WHERE a.post_uid = ${postId}
		AND a.user_uid = b.uid
	`
}