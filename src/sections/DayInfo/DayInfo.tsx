import { Container, useTheme } from "@mui/material";

export const DayInfo = () => {
    const theme = useTheme(); 

    return (
        <Container component="section" sx={{ backgroundColor: theme.palette.background.paper}}>
            is
        </Container>
    )
};