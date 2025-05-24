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
                        backgroundColor: mode === "dark" ? colors.bg_default : colors.white,
                        color:  mode === "dark" ? colors.white : colors.obsidian, 
                        margin: 0,
                        padding: 0,
                        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
                    },
                },
            },
        },
    });
}