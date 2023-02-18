import axios from 'axios';

const customAxios = axios.create();

customAxios.defaults.baseURL = 'http://localhost:3000/'; 
customAxios.defaults.withCredentials = true;

console.log('custom axios setting')

customAxios.interceptors.request.use(
	(config) => {
		// config.headers['Content-type'] = 'application/json; charset=utf-8';
		// config.headers['Authorization'] = 'Bearer ' + '';
		// console.log('req config = ', config.headers);

		return config;
	},
	(error) => {
		Promise.reject(error)
	}
)

customAxios.interceptors.response.use(
	(config) => {
		// console.log('response config = ', config.headers)
		return config;
	},
	(error) => {
		Promise.reject(error)
	}
)


export default customAxios;