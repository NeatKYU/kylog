import { NextRouter } from "next/router";
import customAxios from "./customAxios";

export const logout = async (router: NextRouter) => {
	const result = await customAxios.get('api/auth/logout');
	if(result.status === 200) {
		return router.push('/login')
	} else {
		return;
	}
}