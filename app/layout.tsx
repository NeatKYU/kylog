import React from 'react'
import { Metadata } from 'next'
import AuthSession from '@/app/api/auth/AuthSession'
import RecoilProvider from '@/components/providers/RecoilProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'
import TanstackProvider from '@/components/providers/TanstackProvider'
import { Layout } from '@/components/layout/index'

import '@/styles/globals.scss'
import { PostCardList } from '@/components/post/PostCardList'

export const metadata: Metadata = {
    title: 'kylog',
    description: 'blog powered by kyu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white dark:bg-zinc-800 dark:text-zinc-300">
                <TanstackProvider>
                    <RecoilProvider>
                        <ThemeProvider attribute="class">
                            <AuthSession>
                                <Layout>
                                    {children}
                                    <PostCardList />
                                </Layout>
                            </AuthSession>
                        </ThemeProvider>
                    </RecoilProvider>
                </TanstackProvider>
            </body>
        </html>
    )
}
