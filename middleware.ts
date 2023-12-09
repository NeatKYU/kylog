/**
 * middleware.ts
 * next js의 미들웨어로 동작하는 소스
 * 지금은 토큰이 없으면서 로그인 페이지가 아니면 로그인 페이지로 리다이렉트 하는 용도로 사용
 * 현재 next-auth를 사용하면서 프로텍트 페이지 용으로 제대로 사용중
 */

import { withAuth } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            // `/admin` requires admin role
            // if (req.nextUrl.pathname === "/post/write") {
            // 	return token?.userRole === "admin"
            // }
            // 로그인하지 않았으면 돌려보내기
            return !!token
        },
    },
})

export const config = { matcher: ['/post/write', '/profile'] }
