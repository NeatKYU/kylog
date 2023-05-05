import { useTheme as useNextTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { CIconButton } from './CustomIconButton';

export const ThemeToggleButton = () => {
	const { theme, setTheme } = useNextTheme();

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

	return (
        <CIconButton onClick={handleTheme} size='sm' icon={theme === 'dark' ? <RiMoonFill/> : <RiSunFill/>}/>
	)
}