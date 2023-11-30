'use client';

import { ThemeProvider as Provider } from 'next-themes';

export default function NextThemesProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Provider>{children}</Provider>;
}
