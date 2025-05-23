import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import '@fontsource/montserrat';

export const theme = createTheme({
    palette: {
        background: {
            default: colors.bg_default,
        },
    },
    typography: {
        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.bg_default,
                    color: colors.text_default, 
                    margin: 0,
                    padding: 0,
                    fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
                },
            },
        },
    },
});