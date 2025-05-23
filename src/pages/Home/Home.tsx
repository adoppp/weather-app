import { DayInfo } from "@/sections/DayInfo/DayInfo"
import { Container } from "@mui/material"
import type { FC } from "react"

export const Home: FC = () => {
    return (
        <Container component="article">
                home
                <DayInfo />
        </Container>
    )
}