'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0];

/**
 * Your app's theme provider component.
 * 'use client' is essential for next-themes to work with app-dir.
 * https://github.com/pacocoursey/next-themes/tree/main/examples/with-app-dir
 */
export default function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
