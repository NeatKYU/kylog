import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'; 
import theme from '@/styles/theme'; 
import GlobalStyle from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
