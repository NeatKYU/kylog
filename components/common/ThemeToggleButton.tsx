import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { CIconButton } from './CustomIconButton';

export const ThemeToggleButton = () => {
    const { theme, setTheme } = useNextTheme();
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoaded(true);
    }, [loaded]);

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return loaded ? (
        <CIconButton onClick={handleTheme} size="sm" icon={theme === 'dark' ? <RiMoonFill /> : <RiSunFill />} />
    ) : (
        <CIconButton onClick={handleTheme} size="sm" icon={<RiSunFill />} />
    );
};
