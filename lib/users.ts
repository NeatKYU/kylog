import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL as string);

export interface USER {
	id: string;
	name: string;
	password: string;
}

export async function users() {
  return await sql<USER[]>`
    SELECT * FROM blog_user
  `
}