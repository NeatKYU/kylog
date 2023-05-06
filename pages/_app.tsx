import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import '@/styles/globals.css'

// next auth config setting
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>){
    const router = useRouter();
  
    const withLayout = (path: string) => {
        if(path === '/login' || path === '/register') {
            return <Component {...pageProps}/>
        } else {
            return (
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            )
        }
    }

    return (
        <RecoilRoot>
            <NextThemesProvider
                attribute="class"
            >
                <SessionProvider session={session}>
                    {withLayout(router.pathname)}
                </SessionProvider>
            </NextThemesProvider>
        </RecoilRoot>
    )
}

export default App;
