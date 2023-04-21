import { useState } from 'react';
import { Button } from '@nextui-org/react'
import { HiMoon, HiSun } from 'react-icons/hi';

export const ThemeToggleButton = () => {
  const [colorMode, setColorMode] = useState(false);
  return (
    <header>
      <Button auto onClick={() => setColorMode((prev) => !prev)}>
        {colorMode ? <HiSun size={25} /> : <HiMoon size={25}/>}
      </Button>
    </header>
  )
}