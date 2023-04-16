import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
      </Button>
    </header>
  )
}