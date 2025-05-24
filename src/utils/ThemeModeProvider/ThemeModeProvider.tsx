import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/theme/theme';
import type { ColorMode } from '@/types/global.types';

interface ThemeContextType {
    mode: ColorMode;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeMode must be used inside ThemeModeProvider');
    return context;
};

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ColorMode>('light');

    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const muiTheme = useMemo(() => theme(mode), [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </ThemeContext.Provider>
    );
};
