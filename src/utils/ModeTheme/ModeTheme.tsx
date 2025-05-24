import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/theme/theme';
import { App } from '@/App';
import { themeSelector } from '@/storage/selectors/themeSelector';

export const ModeTheme = () => {
    const mode = useSelector(themeSelector);
    const muiTheme = useMemo(() => theme(mode), [mode]);

return (
    <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
};