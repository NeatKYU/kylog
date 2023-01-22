import axios from 'axios';

export const loginFetcher = (url: string, name: string, password: string) => {
	axios.post(url, {
		name: name,
		password: password
	}).then((result) => {
		return result.data
	})
}