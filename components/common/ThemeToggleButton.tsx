import { useTheme as useNextTheme } from 'next-themes'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

export const ThemeToggleButton = () => {
	const { setTheme } = useNextTheme();
    const [isDark, setIsDark] = useState<boolean>(false);

    const handleTheme = () => {
        setIsDark(!isDark);
        setTheme(!isDark ? 'light' : 'dark');
    }


	return (
        <Button
            auto
            bordered
            icon={isDark ? <RiSunFill/> : <RiMoonFill/>}
            onPress={handleTheme}
        />
	)
}