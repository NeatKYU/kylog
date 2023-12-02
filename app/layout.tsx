import React from 'react';
import { Metadata } from 'next';
import AuthSession from '@/app/api/auth/AuthSession';
import RecoilProvider from '@/components/providers/RecoilProvider';
import NextThemesProvider from '@/components/providers/NextThemesProvider';
import { Layout } from '@/components/layout/index';

import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'kylog',
    description: 'blog powered by kyu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white dark:bg-zinc-800 dark:text-zinc-300">
                <RecoilProvider>
                    <NextThemesProvider>
                        <AuthSession>
                            <Layout>{children}</Layout>
                        </AuthSession>
                    </NextThemesProvider>
                </RecoilProvider>
            </body>
        </html>
    );
}
