import "next-auth"
import 'next-auth/jwt'

declare module "next-auth/jwt" {
	interface JWT {
		/** The user's role. */
		// userRole?: "admin"
		accessToken?: string;
	}
}

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		accessToken?: string;
		user: {
			/** The user's postal address. */
			address: string
		} & DefaultSession["user"],
	}
}