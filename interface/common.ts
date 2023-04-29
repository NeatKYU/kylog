export interface common {
	accessToken: string;
	refreshToken: string;
	isAuth: boolean;
}

export interface user {
	id: string;
	name: string;
	email: string;
	image: string;
	emailVerified?: string;
}