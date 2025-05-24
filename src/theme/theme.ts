import { createTheme } from '@mui/material/styles';
import { colors } from '@/theme/colors';
import type { ColorMode } from '@/types/global.types';
import '@fontsource/montserrat';


export const theme = (mode: ColorMode) => {
    return createTheme({
        palette: {
            mode,
            background: {
                default: colors.bg_default,
                paper: colors.bg_box
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
}