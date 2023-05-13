import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
            }
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken;
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
});
