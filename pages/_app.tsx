import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import '@/styles/globals.css'

// next auth config setting
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

const lightTheme = createTheme({
    type: 'light',
    theme: {
    },
});
  
const darkTheme = createTheme({
    type: 'dark',
    theme: {
    },
});

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
                defaultTheme='dark'
                attribute="class"
                value={{
                    light: lightTheme.className,
                    dark: darkTheme.className
                }}
            >
                <NextUIProvider theme={darkTheme}>
                    <SessionProvider session={session}>
                        {withLayout(router.pathname)}
                    </SessionProvider>
                </NextUIProvider>
            </NextThemesProvider>
        </RecoilRoot>
    )
}

export default App;
