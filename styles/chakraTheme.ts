import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: {
      "h1, h2, h3, h4, h5, h6": {
        fontWeight: "bold",
        lineHeight: "shorter",
        marginBottom: "1rem",
      },
      h1: {
        fontSize: "2.25rem",
      },
      h2: {
        fontSize: "1.875rem",
      },
      h3: {
        fontSize: "1.5rem",
      },
      h4: {
        fontSize: "1.25rem",
      },
      h5: {
        fontSize: "1rem",
      },
      h6: {
        fontSize: "0.875rem",
      },
    },
  },
})

export default theme