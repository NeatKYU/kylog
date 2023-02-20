import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL as string);

export interface USER {
	id: string;
	name: string;
	password: string;
	email: string;
	phone: string;
}

export async function users() {
  return await sql<USER[]>`
    SELECT * FROM blog_user
  `
}

export async function findUser(name: string, password: string) {
	return await sql<USER[]>`
		SELECT * FROM blog_user WHERE name=${name} AND password=${password}
	`
}

export async function validateUser(name: string) {
	return await sql<USER[]>`
		SELECT * FROM blog_user WHERE name=${name}
	`
}