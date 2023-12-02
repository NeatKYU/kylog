'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
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
        <CIconButton onClick={handleTheme} size="sm" icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />} />
    ) : (
        <CIconButton onClick={handleTheme} size="sm" icon={<SunIcon />} />
    );
};
