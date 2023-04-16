export interface common {
	accessToken: string;
	refreshToken: string;
	isAuth: boolean;
}

export interface user {
	id: string;
	name: string;
	phone: string;
	email: string;
	thumbnail: string;
}