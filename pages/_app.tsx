import { useState } from 'react'
import type { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme'; 
import GlobalStyle from '@/styles/GlobalStyle';
import { ACCESSTOKEN, REFRESHTOKEN } from '@/lib/const';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps){
  const router = useRouter();
  
  if(pageProps.accessToken) pageProps = { ...pageProps, isAuth: true }

  const withLayout = (path: string) => {
    if(path === '/login') {
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {withLayout(router.pathname)}
      </ThemeProvider>
    </RecoilRoot>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let appInitialProps = {};
  let accessToken;
  let refreshToken;
  const cookieString = ctx.req?.headers.cookie;

  if(Component.getInitialProps) {
    appInitialProps = await Component.getInitialProps(ctx);
  }

  if(cookieString) {
    const cookieArr = cookieString.split(';');
    cookieArr.map((item: string) => {
      const tempArr = item.trim().split('=');
      // newArr.push({ key: tempArr[0], value: tempArr[1] });
      if(tempArr[0] === ACCESSTOKEN) {
        accessToken = tempArr[1];
      }
      if(tempArr[0] === REFRESHTOKEN) {
        refreshToken = tempArr[1];
      }
    })
  }
  
  appInitialProps = { 
    ...appInitialProps, 
    accessToken: accessToken, 
    refreshToken: refreshToken,
  };
  // console.log('appInitialProps', appInitialProps)
  return { pageProps: appInitialProps }
}

export default App;