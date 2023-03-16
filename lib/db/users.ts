import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL as string);

export interface USER {
	id: string;
	user_id: string;
	password: string;
	email: string;
	phone: string;
}

export async function users() {
  return await sql<USER[]>`
    SELECT * FROM blog_user
  `
}

export async function findUser(id: string, password: string) {
	return await sql<USER[]>`
		SELECT * FROM blog_user WHERE user_id=${id} AND password=${password}
	`
}

export async function validateUser(id: string) {
	return await sql<USER[]>`
		SELECT * FROM blog_user WHERE user_id=${id}
	`
}

export async function insertUser(id: string, password: string) {
	return await sql<USER[]>`
		INSERT INTO blog_user (user_id, password, phone, email)
		VALUES(${id}, ${password}, '', '')
	`
}