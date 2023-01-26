import { NextResponse } from 'next/server'; 
import type { NextRequest } from 'next/server';
import { ACCESSTOKEN } from './lib/const';

// https://stackoverflow.com/questions/73229148/uncaught-syntaxerror-expected-expression-got-while-using-next-js-middlewar
// 그냥 Redirect시 다른 url들도 있는데 그런거 다 무시하는 용도
export const config = {
  matcher: [
    '/((?!_next|api/auth).*)(.+)'
  ],
}

export default function middleware(req: NextRequest) {
	const token = req.cookies.get(ACCESSTOKEN);
	const currentUrl = req.nextUrl.pathname;

	if(!token && !currentUrl.includes('/login')) {
		return NextResponse.redirect('http://localhost:3000/login');
	}
}