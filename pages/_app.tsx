import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';

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
      <NextUIProvider>
        <SessionProvider session={session}>
          {withLayout(router.pathname)}
        </SessionProvider>
      </NextUIProvider>
    </RecoilRoot>
  )
}

export default App;
