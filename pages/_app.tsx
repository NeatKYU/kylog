import type { AppContext, AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalStyle'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/chakraTheme'
import { ACCESSTOKEN, REFRESHTOKEN } from '@/lib/const'
import { ThemeToggleButton } from '@/components/common/ThemeToggleButton'
import styled, { ThemeProvider } from 'styled-components'
import { theme as styledTheme } from '@/styles/theme'

function App({ Component, pageProps }: AppProps){
  const router = useRouter();
  
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
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <ChakraProvider theme={theme}>
          <Position>
            <ThemeToggleButton/>
          </Position>
          {withLayout(router.pathname)}
        </ChakraProvider>
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
    isAuth: true,
  };
  // console.log('appInitialProps', appInitialProps)
  return { pageProps: appInitialProps }
}

export default App;

const Position = styled.div`
	position: fixed;
	bottom: 1rem;
	right: 1rem;
`